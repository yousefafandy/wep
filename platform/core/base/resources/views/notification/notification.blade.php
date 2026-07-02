@once
    <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="notification-sidebar"
        aria-labelledby="notification-sidebar-label"
        data-url="{{ route('notifications.index') }}"
        data-count-url="{{ route('notifications.count-unread') }}"
        data-polling-interval="{{ setting('polling_interval', 20) }}"
        data-sound-url="{{ asset('sounds/sot.mp3') }}"
    >
        <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        ></button>

        <div class="notification-content"></div>
    </div>

    <script src="{{ asset('vendor/core/core/base/js/notification.js') }}?v={{ filemtime(public_path('vendor/core/core/base/js/notification.js')) }}"></script>
@endonce
