<style>
    #admin-order-map { height: 75vh; border-radius: 8px; }
    .order-popup h6 { margin-bottom: 4px; }
    .order-popup small { display: block; color: #6c757d; }
</style>

<div class="row mb-3">
    <div class="col-md-8">
        <p class="text-muted">{{ __('Showing :count orders with location data', ['count' => $orders->count()]) }}</p>
    </div>
    <div class="col-md-4 text-end">
        <a href="{{ route('orders.index') }}" class="btn btn-outline-secondary btn-sm">
            <i class="ti ti-arrow-left"></i> {{ __('Back to Orders') }}
        </a>
    </div>
</div>

<div class="card">
    <div class="card-body p-0">
        <div id="admin-order-map"></div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        var map = L.map('admin-order-map').setView([{{ config('app.default_latitude', 30.0444) }}, {{ config('app.default_longitude', 31.2357) }}], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var baseEditUrl = '{{ route('orders.edit', ['order' => '--ID--']) }}';
        var orders = @json($orders);
        var bounds = [];

        orders.forEach(function (order) {
            var addr = order.shipping_address;
            if (!addr || !addr.latitude || !addr.longitude) return;

            var lat = parseFloat(addr.latitude);
            var lng = parseFloat(addr.longitude);
            if (isNaN(lat) || isNaN(lng)) return;

            var popupContent = '<div class="order-popup">' +
                '<h6><a href="' + baseEditUrl.replace('--ID--', order.id) + '" target="_blank">#' + order.code + '</a></h6>' +
                '<small>' + (addr.name || '') + '</small>' +
                '<small>' + (addr.address || '') + '</small>' +
                '<small><strong>{{ __("Status") }}:</strong> ' + order.status + '</small>' +
                '<small><strong>{{ __("Total") }}:</strong> ' + parseFloat(order.amount).toFixed(2) + '</small>' +
                '</div>';

            L.marker([lat, lng])
                .bindPopup(popupContent, { maxWidth: 250 })
                .addTo(map);

            bounds.push([lat, lng]);
        });

        if (bounds.length > 0) {
            map.fitBounds(bounds, { padding: [30, 30] });
        }
    });
</script>
