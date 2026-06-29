<section class="popular-categories section-padding">
    <div class="container wow animate__animated animate__fadeIn">
        <div class="section-title">
            <div class="title">
                <h2>{{ BaseHelper::clean($shortcode->title) }}</h2>
            </div>
        </div>
        <div class="row">
            @foreach($categories as $category)
                @php
                    $categoryUrl = $category->is_store_category ? route('public.stores') : $category->url;
                @endphp
                <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-40">
                    <div class="card-2 wow animate__animated animate__fadeInUp"
                         data-wow-delay="{{ ($loop->index + 1) / 10 }}s"
                         style="{{ $category->getMetaData('background_color', true) ? 'background-color:' . $category->getMetaData('background_color', true) : '' }}; {{ ($shortcode->show_products_count ?: 'yes') == 'no' ? 'min-height: 160px' : '' }}">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="{{ $categoryUrl }}"><img src="{{ RvMedia::getImageUrl($category->image, null, false, RvMedia::getDefaultImage()) }}" alt="{{ $category->name }}" /></a>
                        </figure>
                        <p class="heading-card"><a href="{{ $categoryUrl }}" title="{{ $category->name }}">{{ $category->name }}</a></p>
                        @if (($shortcode->show_products_count ?: 'yes') == 'yes')
                            <span>{{ __(':count items', ['count' => $category->count_all_products]) }}</span>
                        @endif
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
