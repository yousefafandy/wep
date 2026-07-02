<?php

use Botble\Ads\Models\Ads;
use Botble\Base\Facades\Assets;
use Botble\Base\Facades\MetaBox;
use Botble\Base\Forms\Fields\HtmlField;
use Botble\Blog\Models\Post;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Models\FlashSale;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Models\ProductCategory;
use Botble\LanguageAdvanced\Supports\LanguageAdvancedManager;
use Botble\Marketplace\Forms\StoreForm;
use Botble\Marketplace\Forms\VendorStoreForm;
use Botble\Media\Facades\RvMedia;
use Botble\Menu\Facades\Menu;
use Botble\Page\Models\Page;
use Botble\SimpleSlider\Models\SimpleSlider;
use Botble\SimpleSlider\Models\SimpleSliderItem;
use Botble\Theme\Facades\Theme;
use Botble\Theme\Supports\ThemeSupport;

app()->booted(function (): void {
    add_filter(THEME_FRONT_FOOTER, function (?string $html): ?string {
        if (! $html) {
            return $html;
        }

        // Remove the shop link from the mobile bottom bar
        $html = preg_replace(
            '/<li>\s*<a[^>]*data-menu="shop"[^>]*>.*?<\/a>\s*<\/li>/s',
            '',
            $html
        );

        return $html;
    }, 17);

    // Add Leaflet map to checkout address form
    add_filter('ecommerce_checkout_address_form_after', function (?string $html, $sessionCheckoutData) {
        if (! $html) {
            $html = '';
        }

        $html .= view('plugins/ecommerce::orders.partials.address-map', [
            'sessionCheckoutData' => $sessionCheckoutData,
        ])->render();

        return $html;
    }, 16, 2);

    // Check per-store kitchen status before showing checkout form
    add_filter('ecommerce_checkout_form_before', function (?string $html, $products) {
        $closedStores = [];

        foreach ($products as $product) {
            if ($product->store_id && $product->store && ! $product->store->isKitchenOpen()) {
                $closedStores[$product->store_id] = $product->store;
            }
        }

        if (! empty($closedStores)) {
            $defaultMessage = theme_option('kitchen_closed_message', __('The kitchen is currently closed. Please come back during working hours.'));

            foreach ($closedStores as $store) {
                $message = $store->getKitchenClosedMessage() ?: $defaultMessage;
                $html .= '<div class="alert alert-warning text-center py-3" style="font-size: 16px;">'
                    . '<i class="fi-rs-clock"></i> '
                    . '<strong>' . e($store->name) . '</strong>: '
                    . e($message)
                    . '</div>';
            }

            $html .= '<script>
                document.addEventListener("DOMContentLoaded", function() {
                    var btn = document.querySelector("#checkout-form button[type=submit], #checkout-form .btn-checkout");
                    if (btn) {
                        btn.disabled = true;
                        btn.style.opacity = "0.5";
                        btn.style.cursor = "not-allowed";
                        btn.title = "' . __('Some kitchens are closed') . '";
                    }
                });
            </script>';
        }

        return $html;
    }, 16, 2);

    // Add Leaflet CSS in checkout <head>
    add_filter('ecommerce_checkout_header', function (?string $html): string {
        if (! $html) {
            $html = '';
        }

        $html .= "\n" . '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />';

        return $html;
    }, 16);

    // Add Leaflet JS in checkout footer
    add_filter('ecommerce_checkout_footer', function (?string $html): string {
        if (! $html) {
            $html = '';
        }

        $html .= "\n" . '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>';

        return $html;
    }, 16);

    // Kitchen Settings tab in store edit page
    add_filter(BASE_FILTER_REGISTER_CONTENT_TABS, function (?string $tabs, $store) {
        if (! $store || ! method_exists($store, 'getKey')) {
            return $tabs;
        }

        $tabs .= view('plugins/marketplace::stores.kitchen-tab-item')->render();

        return $tabs;
    }, 999, 2);

    add_filter(BASE_FILTER_REGISTER_CONTENT_TAB_INSIDE, function (?string $content, $store) {
        if (! $store || ! method_exists($store, 'getKey')) {
            return $content;
        }

        $settings = $store->getMetaData('kitchen_settings', true);
        if (! is_array($settings)) {
            $settings = ['is_open' => true, 'working_hours' => [], 'closed_message' => ''];
        }

        $content .= view('plugins/marketplace::stores.kitchen-tab-content', compact('store', 'settings'))->render();

        return $content;
    }, 999, 2);

    // Give the store form an ID so we can reference it from outside inputs/buttons
    add_filter(BASE_FILTER_BEFORE_RENDER_FORM, function ($form, $model) {
        if ($form instanceof \Botble\Marketplace\Forms\StoreForm) {
            $form->setFormOptions(['id' => 'main-store-form']);
        }
        return $form;
    }, 999, 2);

    // Save kitchen settings when store is saved
    add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, function ($type, $request, $store) {
        if (get_class($store) !== 'Botble\Marketplace\Models\Store') {
            return;
        }

        if ($request->has('kitchen_settings')) {
            $settings = $request->input('kitchen_settings');
            unset($settings['_token']);
            if (isset($settings['working_hours'])) {
                $settings['working_hours'] = array_filter($settings['working_hours']);
            }
            MetaBox::saveMetaBoxData($store, 'kitchen_settings', $settings);
        }
    }, 999, 3);

    add_action(BASE_ACTION_AFTER_CREATE_CONTENT, function ($type, $request, $store) {
        if (get_class($store) !== 'Botble\Marketplace\Models\Store') {
            return;
        }

        if ($request->has('kitchen_settings')) {
            $settings = $request->input('kitchen_settings');
            unset($settings['_token']);
            if (isset($settings['working_hours'])) {
                $settings['working_hours'] = array_filter($settings['working_hours']);
            }
            MetaBox::saveMetaBoxData($store, 'kitchen_settings', $settings);
        }
    }, 999, 3);

    // JS: associate kitchen_settings inputs with the main form and show save buttons on Kitchen Settings tab
    add_action('admin_footer', function () {
        $isStoreEditPage = request()->route() && (request()->route()->named('marketplace.store.edit') || request()->route()->named('marketplace.vendor.settings'));
        if (! $isStoreEditPage) {
            return;
        }

        echo <<<'HTML'
<script>
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('main-store-form');
    if (! form) return;

    // Associate all kitchen_settings inputs with the main form
    document.querySelectorAll('[name^="kitchen_settings"]').forEach(function (el) {
        el.setAttribute('form', 'main-store-form');
    });

    // Find original action buttons and build sticky footer
    var btnList = form.querySelector('.btn-list');
    if (! btnList) return;

    var footer = document.createElement('div');
    footer.id = 'kitchen-settings-footer';
    footer.style.cssText = 'display:none;position:sticky;bottom:0;z-index:100;background:#fff;border-top:1px solid #dce1e8;padding:1rem';
    footer.className = 'card-footer';

    var clone = btnList.cloneNode(true);
    clone.querySelectorAll('[type="submit"]').forEach(function (btn) {
        btn.setAttribute('form', 'main-store-form');
    });
    footer.appendChild(clone);

    form.after(footer);

    function toggle() {
        var pane = document.getElementById('kitchen-settings-tab');
        footer.style.display = pane && pane.classList.contains('active') ? '' : 'none';
    }

    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(function (el) {
        el.addEventListener('shown.bs.tab', toggle);
    });
    toggle();
});
</script>
HTML;
    });
});

if (! function_exists('is_store_kitchen_open')) {
    function is_store_kitchen_open($product): bool
    {
        if (is_plugin_active('marketplace') && $product && $product->store_id && $product->store) {
            return $product->store->isKitchenOpen();
        }

        return theme_option('kitchen_is_open', '1') == '1';
    }
}

register_page_template([
    'full-width' => __('Full width'),
    'homepage' => __('Homepage'),
    'left-sidebar' => __('Page Left Sidebar'),
    'right-sidebar' => __('Page Right Sidebar'),
    'blog-grid' => __('Blog Grid'),
    'blog-list' => __('Blog List'),
    'blog-big' => __('Blog Big'),
    'blog-wide' => __('Blog Wide'),
    'without-layout' => __('Without layout'),
]);

register_sidebar([
    'id' => 'footer_sidebar',
    'name' => __('Footer sidebar'),
    'description' => __('Widgets in footer of page'),
]);

register_sidebar([
    'id' => 'product_sidebar',
    'name' => __('Product sidebar'),
    'description' => __('Widgets in the product page'),
]);

register_sidebar([
    'id' => 'pre_footer_sidebar',
    'name' => __('Pre footer sidebar'),
    'description' => __('Widgets at the bottom of the page.'),
]);

Menu::addMenuLocation('header-navigation', 'Header navigation');

if (! function_exists('get_currencies_json')) {
    function get_currencies_json(): array
    {
        $currency = get_application_currency();
        $numberAfterDot = $currency->decimals ?: 0;

        return [
            'display_big_money' => config('plugins.ecommerce.general.display_big_money_in_million_billion'),
            'billion' => __('billion'),
            'million' => __('million'),
            'is_prefix_symbol' => $currency->is_prefix_symbol,
            'symbol' => $currency->symbol,
            'title' => $currency->title,
            'decimal_separator' => get_ecommerce_setting('decimal_separator', '.'),
            'thousands_separator' => get_ecommerce_setting('thousands_separator', ','),
            'number_after_dot' => $numberAfterDot,
            'show_symbol_or_title' => true,
        ];
    }
}

if (! function_exists('get_blog_single_layouts')) {
    function get_blog_single_layouts(): array
    {
        return [
            '' => __('Inherit'),
            'blog-post-right-sidebar' => __('Post Right Sidebar'),
            'blog-post-left-sidebar' => __('Post Left Sidebar'),
            'blog-post-full-width' => __('Post Full Width'),
        ];
    }
}

if (! function_exists('get_product_single_layouts')) {
    function get_product_single_layouts(): array
    {
        return [
            '' => __('Inherit'),
            'product-right-sidebar' => __('Product Right Sidebar'),
            'product-left-sidebar' => __('Product Left Sidebar'),
            'product-full-width' => __('Product Full Width'),
        ];
    }
}

if (! function_exists('get_layout_header_styles')) {
    function get_layout_header_styles(): array
    {
        return [
            '' => __('Default'),
            'header-style-5' => __('Header style 5'),
        ];
    }
}

if (! function_exists('get_simple_slider_styles')) {
    function get_simple_slider_styles(): array
    {
        return [
            'style-1' => __('Default - Full width'),
            'style-2' => __('Full width - text center'),
            'style-3' => __('With Ads'),
            'style-4' => __('Limit width'),
            'style-5' => __('With categories & 2 Ads'),
        ];
    }
}

if (! function_exists('get_time_to_read')) {
    function get_time_to_read(Post $post): string
    {
        $timeToRead = MetaBox::getMetaData($post, 'time_to_read', true);

        if ($timeToRead) {
            return number_format($timeToRead);
        }

        return number_format(strlen(strip_tags($post->content)) / 300);
    }
}

if (! function_exists('get_store_social_links')) {
    function get_store_social_links(): array
    {
        return [
            'facebook' => [
                'title' => 'Facebook',
                'logo' => 'imgs/theme/icons/social-facebook.svg',
                'domain' => 'https://facebook.com/',
            ],
            'twitter' => [
                'title' => 'X (Twitter)',
                'logo' => 'imgs/theme/icons/social-twitter.svg',
                'domain' => 'https://x.com/',
            ],
            'instagram' => [
                'title' => 'Instagram',
                'logo' => 'imgs/theme/icons/social-instagram.svg',
                'domain' => 'https://instagram.com/',
            ],
            'pinterest' => [
                'title' => 'Pinterest',
                'logo' => 'imgs/theme/icons/social-pinterest.svg',
                'domain' => 'https://pinterest.com/',
            ],
            'youtube' => [
                'title' => 'Youtube',
                'logo' => 'imgs/theme/icons/social-youtube.svg',
                'domain' => 'https://youtube.com/',
            ],
            'linkedin' => [
                'title' => 'Linkedin',
                'logo' => 'imgs/theme/icons/social-linkedin.svg',
                'domain' => 'https://linkedin.com/',
            ],
            'messenger' => [
                'title' => 'Messenger',
                'logo' => 'imgs/theme/icons/social-messenger.svg',
                'domain' => 'https://messenger.com/',
            ],
            'flickr' => [
                'title' => 'Flickr',
                'logo' => 'imgs/theme/icons/social-flickr.svg',
                'domain' => 'https://flickr.com/',
            ],
            'tiktok' => [
                'title' => 'Tiktok',
                'logo' => 'imgs/theme/icons/social-tiktok.svg',
                'domain' => 'https://tiktok.com/',
            ],
            'skype' => [
                'title' => 'Skype',
                'logo' => 'imgs/theme/icons/social-skype.svg',
                'placeholder' => 'Ex: https://skype.com/{username}',
            ],
            'snapchat' => [
                'title' => 'Snapchat',
                'logo' => 'imgs/theme/icons/social-snapchat.svg',
                'placeholder' => 'Ex: https://snapchat.com/{username}',
            ],
            'tumblr' => [
                'title' => 'Tumblr',
                'logo' => 'imgs/theme/icons/social-tumblr.svg',
                'placeholder' => 'Ex: https://tumblr.com/{username}',
            ],
            'whatsapp' => [
                'title' => 'Whatsapp',
                'logo' => 'imgs/theme/icons/social-whatsapp.svg',
                'placeholder' => 'Ex: https://whatsapp.com/{username}',
            ],
            'wechat' => [
                'title' => 'Wechat',
                'logo' => 'imgs/theme/icons/social-wechat.svg',
                'placeholder' => 'Ex: https://wechat.com/{username}',
            ],
            'vimeo' => [
                'title' => 'Vimeo',
                'logo' => 'imgs/theme/icons/social-vimeo.svg',
                'placeholder' => 'Ex: https://vimeo.com/{username}',
            ],
        ];
    }
}

if (! function_exists('theme_get_autoplay_speed_options')) {
    function theme_get_autoplay_speed_options(): array
    {
        return array_combine(
            [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
            [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
        );
    }
}

if (! function_exists('get_store_list_layouts')) {
    function get_store_list_layouts(): array
    {
        return [
            'grid' => __('Grid'),
            'list' => __('List'),
        ];
    }
}

app()->booted(function (): void {
    RvMedia::addSize('medium', 800, 800)
        ->addSize('product-thumb', 400, 400);

    ThemeSupport::registerSiteCopyright();
    ThemeSupport::registerSiteLogoHeight(55);
    ThemeSupport::registerSocialSharing();
    ThemeSupport::registerToastNotification();
    ThemeSupport::registerDateFormatOption();

    if (is_plugin_active('ecommerce') && is_plugin_active('language-advanced')) {
        LanguageAdvancedManager::registerModule(FlashSale::class, ['name', 'subtitle', 'image']);
    }

    if (is_plugin_active('ads') && is_plugin_active('language-advanced')) {
        LanguageAdvancedManager::registerModule(Ads::class, [
            'name',
            'image',
            'url',
            'subtitle',
            'button_text',
        ]);
    }

    if (is_plugin_active('ecommerce')) {
        EcommerceHelper::registerProductVideo();
        EcommerceHelper::registerProductGalleryOptions();
        EcommerceHelper::registerThemeAssets();

        add_filter('ecommerce_product_eager_loading_relations', function (array $with) {
            return array_merge($with, ['categories', 'categories.slugable']);
        }, 120);
    }

    add_filter('menu_metadata_keys_to_preload', function (array $keys) {
        return array_merge($keys, ['icon_image', 'badge_text', 'badge_color']);
    }, 120);

    add_filter(BASE_FILTER_BEFORE_RENDER_FORM, function ($form, $data) {
        switch (get_class($data)) {
            case Ads::class:
                $buttonText = MetaBox::getMetaData($data, 'button_text', true);
                $subtitle = MetaBox::getMetaData($data, 'subtitle', true);

                $form
                    ->addAfter('key', 'button_text', 'text', [
                        'label' => __('Button text'),
                        'value' => $buttonText,
                        'attr' => [
                            'placeholder' => __('Ex: Shop now'),
                        ],
                    ])
                    ->addBefore('key', 'subtitle', 'textarea', [
                        'label' => __('Subtitle'),
                        'value' => $subtitle,
                        'attr' => [
                            'placeholder' => __('Text to highlight'),
                            'rows' => 3,
                        ],
                    ]);

                break;

            case FlashSale::class:
                $subtitle = MetaBox::getMetaData($data, 'subtitle', true);
                $image = MetaBox::getMetaData($data, 'image', true);

                $form
                    ->addAfter('name', 'subtitle', 'text', [
                        'label' => __('Subtitle'),
                        'value' => $subtitle,
                        'attr' => [
                            'placeholder' => __('Text to highlight'),
                        ],
                    ])
                    ->addAfter('end_date', 'image', 'mediaImage', [
                        'label' => __('Image'),
                        'value' => $image,
                    ]);

                break;
        }

        return $form;
    }, 124, 3);

    add_action(BASE_ACTION_META_BOXES, function ($context, $object): void {
        switch (get_class($object)) {
            case Page::class:
                if ($context == 'top') {
                    MetaBox::addMetaBox(
                        'additional_page_fields',
                        __('Appearance'),
                        function () {
                            $headerStyle = null;
                            $page = null;
                            $args = func_get_args();
                            if (! empty($args[0])) {
                                $page = $args[0];
                                $headerStyle = MetaBox::getMetaData($args[0], 'header_style', true);
                            }

                            return Theme::partial('additional-page-fields', compact('headerStyle', 'page'));
                        },
                        get_class($object),
                        $context
                    );
                }

                break;

            case ProductCategory::class:
                if ($context == 'advanced') {
                    MetaBox::addMetaBox('additional_product_category_fields', __('Addition Information'), function () {
                        $bgColor = null;
                        $args = func_get_args();
                        if (! empty($args[0])) {
                            $bgColor = MetaBox::getMetaData($args[0], 'background_color', true);
                        }

                        if (! $bgColor) {
                            $bgColor = '#f4f6fa';
                        }

                        Assets::addStyles(['colorpicker'])->addScripts(['colorpicker']);

                        return Theme::partial('product-category-fields', compact('bgColor'));
                    }, get_class($object), $context);
                }

                break;

            case Product::class:
                if ($context == 'top' && is_in_admin(true)) {
                    MetaBox::addMetaBox(
                        'additional_product_fields',
                        __('Addition Information'),
                        function () {
                            $layout = null;
                            $isPopular = null;

                            $args = func_get_args();
                            if (! empty($args[0])) {
                                $layout = MetaBox::getMetaData($args[0], 'layout', true);
                                $isPopular = MetaBox::getMetaData($args[0], 'is_popular', true);
                            }

                            return Theme::partial('additional-product-fields', compact('layout', 'isPopular'));
                        },
                        get_class($object),
                        $context
                    );
                }

                break;

            case Post::class:
                if ($context == 'top') {
                    MetaBox::addMetaBox(
                        'additional_post_fields',
                        __('Addition Information'),
                        function () {
                            $timeToRead = null;
                            $layout = null;
                            $args = func_get_args();
                            if (! empty($args[0])) {
                                $timeToRead = MetaBox::getMetaData($args[0], 'time_to_read', true);
                                $layout = MetaBox::getMetaData($args[0], 'layout', true);
                            }

                            return Theme::partial('blog-post-fields', compact('timeToRead', 'layout'));
                        },
                        get_class($object),
                        $context
                    );
                }

                break;

            case SimpleSlider::class:
                if ($context == 'top') {
                    MetaBox::addMetaBox(
                        'additional_simple_slider_fields',
                        __('Appearance'),
                        function () {
                            $style = '';
                            $args = func_get_args();
                            if (! empty($args[0])) {
                                $style = MetaBox::getMetaData($args[0], 'simple_slider_style', true);
                            }

                            return Theme::partial('additional-simple-slider-fields', compact('style'));
                        },
                        get_class($object),
                        $context
                    );
                }

                break;
        }
    }, 75, 2);

    add_action(
        [BASE_ACTION_AFTER_CREATE_CONTENT, BASE_ACTION_AFTER_UPDATE_CONTENT],
        function ($type, $request, $object): void {
            switch (get_class($object)) {
                case Page::class:
                    if ($request->has('header_style')) {
                        $style = $request->input('header_style');
                        if (in_array($style, array_keys(get_layout_header_styles()))) {
                            MetaBox::saveMetaBoxData($object, 'header_style', $style);
                        }
                    }

                    break;

                case SimpleSlider::class:
                    if ($request->has('simple_slider_style')) {
                        $style = $request->input('simple_slider_style');
                        if (in_array($style, array_keys(get_simple_slider_styles()))) {
                            MetaBox::saveMetaBoxData($object, 'simple_slider_style', $style);
                        }
                    }

                    break;

                case ProductCategory::class:

                    if ($request->has('background_color')) {
                        MetaBox::saveMetaBoxData($object, 'background_color', $request->input('background_color'));
                    }

                    break;

                case Product::class:
                    if ($request->has('layout')) {
                        MetaBox::saveMetaBoxData($object, 'layout', $request->input('layout'));
                    }

                    if ($request->has('is_popular')) {
                        MetaBox::saveMetaBoxData($object, 'is_popular', $request->input('is_popular'));
                    }

                    break;

                case Post::class:
                    if ($request->has('time_to_read')) {
                        MetaBox::saveMetaBoxData($object, 'time_to_read', $request->input('time_to_read'));
                    }

                    if ($request->has('layout')) {
                        MetaBox::saveMetaBoxData($object, 'layout', $request->input('layout'));
                    }

                    break;

                case FlashSale::class:
                    if ($request->has('subtitle')) {
                        MetaBox::saveMetaBoxData($object, 'subtitle', $request->input('subtitle'));
                    }

                    if ($request->has('image')) {
                        MetaBox::saveMetaBoxData($object, 'image', $request->input('image'));
                    }

                    break;

                case Ads::class:
                    if ($request->has('button_text')) {
                        MetaBox::saveMetaBoxData($object, 'button_text', $request->input('button_text'));
                    }

                    if ($request->has('subtitle')) {
                        MetaBox::saveMetaBoxData($object, 'subtitle', $request->input('subtitle'));
                    }

                    break;

                case SimpleSliderItem::class:
                    if ($request->has('tablet_image')) {
                        MetaBox::saveMetaBoxData($object, 'tablet_image', $request->input('tablet_image'));
                    }

                    if ($request->has('mobile_image')) {
                        MetaBox::saveMetaBoxData($object, 'mobile_image', $request->input('mobile_image'));
                    }

                    break;
            }
        },
        75,
        3
    );

    if (is_plugin_active('ecommerce') && is_plugin_active('marketplace')) {
        VendorStoreForm::extend(function (VendorStoreForm $form): void {
            $model = $form->getModel();
            $model->loadMissing('metadata');

            $form
                ->addAfter('content', 'extended_info_content', HtmlField::class, [
                    'html' => Theme::partial('marketplace.store.settings.extra-content', compact('model')),
                ]);
        });

        StoreForm::extend(function (StoreForm $form): void {
            $model = $form->getModel();
            $model->loadMissing('metadata');

            $form
                ->addBefore('status', 'extended_info_content', HtmlField::class, [
                    'html' => Theme::partial('marketplace.store.settings.extra-content', compact('model')),
                ]);
        });

    }
});
