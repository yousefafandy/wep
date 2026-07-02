/******/ (() => { // webpackBootstrap
/*!*********************************************************!*\
  !*** ./platform/core/base/resources/js/notification.js ***!
  \*********************************************************/
$(function () {
  console.log('[notif] JS loaded');
  var $notification = $(document).find('#notification-sidebar');
  console.log('[notif] #notification-sidebar found:', $notification.length > 0);
  var updateNotificationsCount = function updateNotificationsCount() {
    $httpClient.make().get($notification.data('count-url')).then(function (_ref) {
      var data = _ref.data;
      $(document).find('.badge.notification-count').text(data.data);
    });
  };
  var updateNotificationsContent = function updateNotificationsContent(url) {
    $httpClient.make().get(url || $notification.data('url')).then(function (_ref2) {
      var data = _ref2.data;
      $notification.find('.notification-content').html(data.data);
    });
  };
  var closeNotification = function closeNotification() {
    $notification.offcanvas('hide');
  };
  $notification.on('hide.bs.offcanvas', function () {
    $('.offcanvas-backdrop').remove();
  });
  $(document).on('click', '.offcanvas-backdrop', function () {
    $(this).remove();
    closeNotification();
  });
  $notification.on('show.bs.offcanvas', function () {
    updateNotificationsContent();
    $('body').after("<div class=\"offcanvas-backdrop\"></div>");
  }).on('click', '.mark-all-notifications-as-read', function (e) {
    e.preventDefault();
    $httpClient.make().put($(this).data('url')).then(function (_ref3) {
      var data = _ref3.data;
      $notification.find('.notification-content').html(data.data);
    })["finally"](function () {
      updateNotificationsCount();
      updateNotificationsContent();
    });
  }).on('click', '.clear-notifications', function () {
    $httpClient.make()["delete"]($(this).data('url')).then(function () {})["finally"](function () {
      updateNotificationsCount();
      closeNotification();
    });
  }).on('click', '.list-group-item .btn-delete-notification', function () {
    var _this = this;
    $httpClient.make()["delete"]($(this).data('url')).then(function () {
      var $this = $(_this).closest('.list-group-item');
      $this.hide('slow', function () {
        $this.remove();
        updateNotificationsContent();
      });
    })["finally"](function () {
      updateNotificationsCount();
    });
  }).on('click', 'nav .btn-previous', function () {
    updateNotificationsContent($(this).data('url'));
  }).on('click', 'nav .btn-next', function () {
    updateNotificationsContent($(this).data('url'));
  });
  var SOUND_URL = $notification.data('sound-url');
  var audioCtx = null;
  var _playBeep = function playBeep() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'running') {
        var now = audioCtx.currentTime;
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 880;
        gain.gain.value = 0.3;
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (audioCtx.state === 'suspended') {
        audioCtx.resume().then(function () {
          return _playBeep();
        })["catch"](function () {});
      }
    } catch (e) {/* beep fallback failed */}
  };
  var flashBell = function flashBell() {
    var bell = $(document).find('[data-bs-toggle="offcanvas"][href*="notification-sidebar"]');
    if (bell.length) {
      bell.css('color', '#dc3545').css('transition', 'color 0.3s');
      setTimeout(function () {
        return bell.css('color', '');
      }, 3000);
    }
  };
  var playNotificationSound = function playNotificationSound() {
    console.log('[notif] playNotificationSound');
    flashBell();
    var audio = new Audio(SOUND_URL);
    audio.volume = 0.5;
    audio.play()["catch"](function () {
      _playBeep();
    });
  };
  $(document).one('click touchstart', function () {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  });
  var pollingInterval = parseInt($notification.data('polling-interval')) || 20;
  console.log('[notif] pollingInterval:', pollingInterval);
  var countUrl = $notification.data('count-url');
  console.log('[notif] countUrl:', countUrl);
  var lastUnreadCount = 0;
  var initUnreadCount = function initUnreadCount() {
    console.log('[notif] initUnreadCount');
    $httpClient.make().get(countUrl).then(function (_ref4) {
      var data = _ref4.data;
      console.log('[notif] initUnreadCount response:', data.data);
      lastUnreadCount = parseInt(data.data);
      $(document).find('.badge.notification-count').text(data.data);
    })["catch"](function (e) {
      return console.log('[notif] initUnreadCount error:', e);
    });
  };
  if (pollingInterval > 0) {
    initUnreadCount();
    setInterval(function () {
      $httpClient.make().get(countUrl).then(function (_ref5) {
        var data = _ref5.data;
        var count = parseInt(data.data);
        console.log('[notif] Poll: count=' + count + ', lastUnreadCount=' + lastUnreadCount + ', countUrl=' + countUrl);
        if (count > lastUnreadCount) {
          console.log('[notif] New notification detected!');
          playNotificationSound();
        }
        lastUnreadCount = count;
        $(document).find('.badge.notification-count').text(data.data);
      })["catch"](function (e) {
        return console.log('[notif] Poll error:', e);
      });
    }, pollingInterval * 1000);
  }
});
/******/ })()
;