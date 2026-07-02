<div class="form-group mb-3">
    <label class="form-label">{{ __('Your Location') }}</label>
    <div id="location-map" style="height: 300px; border-radius: 8px; border: 1px solid #dee2e6; z-index: 1;"></div>
    <div class="mt-2">
        <button type="button" id="detect-location-btn" class="btn btn-sm btn-info">
            <i class="fi-rs-crosshair"></i> {{ __('Detect My Location') }}
        </button>
        <small class="text-muted ms-2">{{ __('Click on the map or use the button to set your location') }}</small>
    </div>
    <input type="hidden" name="address[latitude]" id="address_latitude" value="{{ old('address.latitude', Arr::get($sessionCheckoutData, 'latitude')) }}">
    <input type="hidden" name="address[longitude]" id="address_longitude" value="{{ old('address.longitude', Arr::get($sessionCheckoutData, 'longitude')) }}">
    <div id="location-status" class="mt-1 text-success" style="display: none;">
        <i class="fi-rs-marker"></i> <span id="location-text"></span>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        var latInput = document.getElementById('address_latitude');
        var lngInput = document.getElementById('address_longitude');
        var statusDiv = document.getElementById('location-status');
        var statusText = document.getElementById('location-text');

        var defaultLat = {{ config('app.default_latitude', 30.0444) }};
        var defaultLng = {{ config('app.default_longitude', 31.2357) }};
        var savedLat = parseFloat(latInput.value) || null;
        var savedLng = parseFloat(lngInput.value) || null;

        var map = L.map('location-map').setView(
            savedLat ? [savedLat, savedLng] : [defaultLat, defaultLng],
            savedLat ? 15 : 12
        );

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var marker = null;

        if (savedLat && savedLng) {
            marker = L.marker([savedLat, savedLng], { draggable: true }).addTo(map);
            showLocationStatus(savedLat, savedLng);
        }

        function onMapClick(e) {
            if (marker) {
                marker.setLatLng(e.latlng);
            } else {
                marker = L.marker(e.latlng, { draggable: true }).addTo(map);
            }

            latInput.value = e.latlng.lat.toFixed(6);
            lngInput.value = e.latlng.lng.toFixed(6);
            showLocationStatus(e.latlng.lat, e.latlng.lng);
        }

        map.on('click', onMapClick);

        if (marker) {
            marker.on('dragend', function (e) {
                var pos = e.target.getLatLng();
                latInput.value = pos.lat.toFixed(6);
                lngInput.value = pos.lng.toFixed(6);
                showLocationStatus(pos.lat, pos.lng);
            });
        }

        document.getElementById('detect-location-btn').addEventListener('click', function () {
            if (!navigator.geolocation) {
                alert("{{ __('Geolocation is not supported by your browser') }}");
                return;
            }

            this.disabled = true;
            this.innerHTML = '<span class="spinner-border spinner-border-sm"></span> {{ __('Detecting...') }}';

            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;

                    map.setView([lat, lng], 15);

                    if (marker) {
                        marker.setLatLng([lat, lng]);
                    } else {
                        marker = L.marker([lat, lng], { draggable: true }).addTo(map);
                    }

                    marker.on('dragend', function (e) {
                        var pos = e.target.getLatLng();
                        latInput.value = pos.lat.toFixed(6);
                        lngInput.value = pos.lng.toFixed(6);
                        showLocationStatus(pos.lat, pos.lng);
                    });

                    latInput.value = lat.toFixed(6);
                    lngInput.value = lng.toFixed(6);
                    showLocationStatus(lat, lng);

                    document.getElementById('detect-location-btn').disabled = false;
                    document.getElementById('detect-location-btn').innerHTML = '<i class="fi-rs-crosshair"></i> {{ __('Detect My Location') }}';
                },
                function (error) {
                    alert("{{ __('Could not detect location:') }}" + " " + error.message);
                    document.getElementById('detect-location-btn').disabled = false;
                    document.getElementById('detect-location-btn').innerHTML = '<i class="fi-rs-crosshair"></i> {{ __('Detect My Location') }}';
                }
            );
        });

        function showLocationStatus(lat, lng) {
            statusDiv.style.display = 'block';
            statusText.textContent = lat.toFixed(6) + ', ' + lng.toFixed(6);
        }
    });
</script>
