<x-core::tab.pane id="kitchen-settings-tab">
    <x-core::card>
        <x-core::card.header>
            <x-core::card.title>{{ __('Kitchen Settings') }}</x-core::card.title>
        </x-core::card.header>
        <x-core::card.body>
            <x-core::form-group>
                <x-core::form.label for="kitchen_is_open">{{ __('Kitchen Status') }}</x-core::form.label>
                <x-core::form.select
                    name="kitchen_settings[is_open]"
                    id="kitchen_is_open"
                    form="main-store-form"
                >
                    <option value="1" @selected($settings['is_open'] ?? true)>{{ __('Open') }}</option>
                    <option value="0" @selected(!($settings['is_open'] ?? true))>{{ __('Closed') }}</option>
                </x-core::form.select>
            </x-core::form-group>

            <x-core::form-group>
                <x-core::form.label for="kitchen_closed_message">{{ __('Closed Message') }}</x-core::form.label>
                <x-core::form.text-input
                    name="kitchen_settings[closed_message]"
                    id="kitchen_closed_message"
                    :value="$settings['closed_message'] ?? ''"
                    placeholder="{{ __('The kitchen is currently closed. Please come back during working hours.') }}"
                    form="main-store-form"
                />
            </x-core::form-group>

            <x-core::form-group>
                <x-core::form.label>{{ __('Working Hours') }}</x-core::form.label>
                <small class="d-block text-muted mb-2">{{ __('Set working hours for each day. Format: HH:MM-HH:MM (e.g. 09:00-23:00). Leave empty for day off.') }}</small>

                @php
                    $dayNames = [
                        'sat' => __('Saturday'),
                        'sun' => __('Sunday'),
                        'mon' => __('Monday'),
                        'tue' => __('Tuesday'),
                        'wed' => __('Wednesday'),
                        'thu' => __('Thursday'),
                        'fri' => __('Friday'),
                    ];
                    $hours = $settings['working_hours'] ?? [];
                @endphp

                <div class="row">
                    @foreach ($dayNames as $key => $dayName)
                        <div class="col-md-6 mb-2">
                            <label class="form-label d-inline-block me-2" style="min-width: 100px;">{{ $dayName }}</label>
                            <input
                                type="text"
                                name="kitchen_settings[working_hours][{{ $key }}]"
                                class="form-control d-inline-block"
                                style="width: 160px;"
                                value="{{ $hours[$key] ?? '' }}"
                                placeholder="09:00-23:00"
                                form="main-store-form"
                            />
                        </div>
                    @endforeach
                </div>
            </x-core::form-group>
        </x-core::card.body>
    </x-core::card>

    <div class="card-footer border-top mt-3 py-3">
        <div class="btn-list">
            <x-core::button
                type="submit"
                value="apply"
                name="submitter"
                color="primary"
                icon="ti ti-device-floppy"
                form="main-store-form"
            >
                {{ trans('core/base::forms.save_and_continue') }}
            </x-core::button>
            <x-core::button
                type="submit"
                name="submitter"
                value="save"
                icon="ti ti-transfer-in"
                form="main-store-form"
            >
                {{ trans('core/base::forms.save') }}
            </x-core::button>
        </div>
    </div>
</x-core::tab.pane>
