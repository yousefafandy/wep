$(() => {
    console.log('[notif] JS loaded')

    const $notification = $(document).find('#notification-sidebar')
    console.log('[notif] #notification-sidebar found:', $notification.length > 0)

    const updateNotificationsCount = () => {
        $httpClient
            .make()
            .get($notification.data('count-url'))
            .then(({ data }) => {
                $(document).find('.badge.notification-count').text(data.data)
            })
    }

    const updateNotificationsContent = (url) => {
        $httpClient
            .make()
            .get(url || $notification.data('url'))
            .then(({ data }) => {
                $notification.find('.notification-content').html(data.data)
            })
    }

    const closeNotification = () => {
        $notification.offcanvas('hide')
    }

    $notification.on('hide.bs.offcanvas', () => {
        $('.offcanvas-backdrop').remove()
    })

    $(document).on('click', '.offcanvas-backdrop', function () {
        $(this).remove()

        closeNotification()
    })

    $notification
        .on('show.bs.offcanvas', () => {
            updateNotificationsContent()

            $('body').after(`<div class="offcanvas-backdrop"></div>`)
        })
        .on('click', '.mark-all-notifications-as-read', function (e) {
            e.preventDefault()

            $httpClient
                .make()
                .put($(this).data('url'))
                .then(({ data }) => {
                    $notification.find('.notification-content').html(data.data)
                })
                .finally(() => {
                    updateNotificationsCount()
                    updateNotificationsContent()
                })
        })
        .on('click', '.clear-notifications', function () {
            $httpClient
                .make()
                .delete($(this).data('url'))
                .then(() => {})
                .finally(() => {
                    updateNotificationsCount()
                    closeNotification()
                })
        })
        .on('click', '.list-group-item .btn-delete-notification', function () {
            $httpClient
                .make()
                .delete($(this).data('url'))
                .then(() => {
                    const $this = $(this).closest('.list-group-item')

                    $this.hide('slow', () => {
                        $this.remove()
                        updateNotificationsContent()
                    })
                })
                .finally(() => {
                    updateNotificationsCount()
                })
        })
        .on('click', 'nav .btn-previous', function () {
            updateNotificationsContent($(this).data('url'))
        })
        .on('click', 'nav .btn-next', function () {
            updateNotificationsContent($(this).data('url'))
        })

    const SOUND_URL = $notification.data('sound-url')

    let audioCtx = null

    const playBeep = () => {
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)()
            }
            if (audioCtx.state === 'running') {
                const now = audioCtx.currentTime
                const osc = audioCtx.createOscillator()
                const gain = audioCtx.createGain()
                osc.connect(gain)
                gain.connect(audioCtx.destination)
                osc.frequency.value = 880
                gain.gain.value = 0.3
                osc.start(now)
                osc.stop(now + 0.2)
            } else if (audioCtx.state === 'suspended') {
                audioCtx.resume().then(() => playBeep()).catch(() => {})
            }
        } catch (e) { /* beep fallback failed */ }
    }

    const flashBell = () => {
        const bell = $(document).find('[data-bs-toggle="offcanvas"][href*="notification-sidebar"]')
        if (bell.length) {
            bell.css('color', '#dc3545').css('transition', 'color 0.3s')
            setTimeout(() => bell.css('color', ''), 3000)
        }
    }

    const playNotificationSound = () => {
        console.log('[notif] playNotificationSound')
        flashBell()

        const audio = new Audio(SOUND_URL)
        audio.volume = 0.5
        audio.play().catch(() => {
            playBeep()
        })
    }

    $(document).one('click touchstart', () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume()
        }
    })

    const pollingInterval = parseInt($notification.data('polling-interval')) || 20
    console.log('[notif] pollingInterval:', pollingInterval)
    const countUrl = $notification.data('count-url')
    console.log('[notif] countUrl:', countUrl)
    let lastUnreadCount = 0

    const initUnreadCount = () => {
        console.log('[notif] initUnreadCount')
        $httpClient
            .make()
            .get(countUrl)
            .then(({ data }) => {
                console.log('[notif] initUnreadCount response:', data.data)
                lastUnreadCount = parseInt(data.data)
                $(document).find('.badge.notification-count').text(data.data)
            })
            .catch((e) => console.log('[notif] initUnreadCount error:', e))
    }

    if (pollingInterval > 0) {
        initUnreadCount()

        setInterval(() => {
            $httpClient
                .make()
                .get(countUrl)
                .then(({ data }) => {
                    const count = parseInt(data.data)
                    console.log('[notif] Poll: count=' + count + ', lastUnreadCount=' + lastUnreadCount + ', countUrl=' + countUrl)
                    if (count > lastUnreadCount) {
                        console.log('[notif] New notification detected!')
                        playNotificationSound()
                    }
                    lastUnreadCount = count
                    $(document).find('.badge.notification-count').text(data.data)
                })
                .catch((e) => console.log('[notif] Poll error:', e))
        }, pollingInterval * 1000)
    }
})
