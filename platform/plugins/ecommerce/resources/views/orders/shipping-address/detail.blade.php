<dd>{{ $address->name }}</dd>
@if ($address->phone)
    <dd>
        <a href="tel:{{ $address->phone }}">
            <x-core::icon name="ti ti-phone" />
            <span dir="ltr">{{ $address->phone }}</span>
        </a>
    </dd>
@endif

@if ($address->email)
    <dd><a href="mailto:{{ $address->email }}">{{ $address->email }}</a></dd>
@endif
@if ($address->address)
    <dd>{!! BaseHelper::clean($address->address) !!}</dd>
@endif
@if ($address->city)
    <dd>{{ $address->city_name }}</dd>
@endif
@if ($address->state)
    <dd>{{ $address->state_name }}</dd>
@endif
@if ($address->country_name)
    <dd>{{ $address->country_name }}</dd>
@endif
@if (EcommerceHelper::isZipCodeEnabled() && $address->zip_code)
    <dd>{{ $address->zip_code }}</dd>
@endif
@if ($address->country || $address->state || $address->city || $address->address)
    <dd>
        @if ($address->latitude && $address->longitude)
            <a href="https://maps.google.com/?q={{ $address->latitude }},{{ $address->longitude }}" target="_blank">
        @else
            <a href="https://maps.google.com/?q={{ $address->full_address }}" target="_blank">
        @endif
            {{ trans('plugins/ecommerce::order.see_on_maps') }}
        </a>
    </dd>
@endif
@if ($address->latitude && $address->longitude)
    <dd class="mt-2">
        <small class="text-muted">
            {{ __('Lat') }}: {{ $address->latitude }},
            {{ __('Lng') }}: {{ $address->longitude }}
        </small>
    </dd>
    <dd>
        <div
            class="admin-order-address-map"
            data-lat="{{ $address->latitude }}"
            data-lng="{{ $address->longitude }}"
            style="height: 180px; border-radius: 6px; border: 1px solid #dee2e6;"
        ></div>
    </dd>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.admin-order-address-map').forEach(function (el) {
                var lat = parseFloat(el.getAttribute('data-lat'));
                var lng = parseFloat(el.getAttribute('data-lng'));
                if (isNaN(lat) || isNaN(lng)) return;
                var map = L.map(el).setView([lat, lng], 15);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap'
                }).addTo(map);
                L.marker([lat, lng]).addTo(map);
            });
        });
    </script>
@endif
