@php
    Theme::layout('full-width');
@endphp

@if ($category->activeChildren->isNotEmpty())
    {{-- Display subcategories grid --}}
    <div class="container">
        <div class="archive-header-2 text-center pt-50 mb-50">
            <h1 class="display-2">{{ $category->name }}</h1>
            @if ($category->description)
                <p>{{ $category->description }}</p>
            @endif
        </div>
        <div class="row">
            @foreach($category->activeChildren as $child)
                <div class="col-lg-3 col-md-4 col-6 col-sm-6">
                    <div class="card-2 wow animate__animated animate__fadeInUp mb-40"
                         data-wow-delay="{{ ($loop->index + 1) / 10 }}s"
                         style="{{ $child->getMetaData('background_color', true) ? 'background-color:' . $child->getMetaData('background_color', true) : '' }}">
                        <figure class="img-hover-scale overflow-hidden">
                            <a href="{{ $child->url }}">
                                <img src="{{ RvMedia::getImageUrl($child->image, null, false, RvMedia::getDefaultImage()) }}" alt="{{ $child->name }}" />
                            </a>
                        </figure>
                        <p class="heading-card">
                            <a href="{{ $child->url }}" title="{{ $child->name }}">{{ $child->name }}</a>
                        </p>
                        <span>{{ __(':count items', ['count' => $child->count_all_products]) }}</span>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@else
    {{-- Display products --}}
    @include(Theme::getThemeNamespace() . '::views.ecommerce.products', [
        'filterURL' => $category->url,
        'pageName' => $category->name,
        'pageDescription' => $category->description,
    ])
@endif
