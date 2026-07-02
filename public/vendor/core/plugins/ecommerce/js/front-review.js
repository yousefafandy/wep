/******/ (() => { // webpackBootstrap
/*!*****************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/js/front-review.js ***!
  \*****************************************************************/
$(function () {
  var $reviewListContainer = $('.review-list-container');
  var imagesReviewBuffer = [];
  var initLightGallery = function initLightGallery(element) {
    element.lightGallery({
      thumbnail: true
    });
  };
  var getReviewList = function getReviewList(url, successCallback) {
    var additionalParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!url) {
      return;
    }

    // Build URL with search and sort parameters
    var urlObj = new URL(url, window.location.origin);
    Object.keys(additionalParams).forEach(function (key) {
      if (additionalParams[key]) {
        urlObj.searchParams.set(key, additionalParams[key]);
      }
    });
    $.ajax({
      url: urlObj.toString(),
      method: 'GET',
      beforeSend: function beforeSend() {
        $reviewListContainer.append('<div class="loading-spinner"></div>');
      },
      success: function success(_ref) {
        var data = _ref.data,
          message = _ref.message;
        $reviewListContainer.find('h4').text(message);
        $reviewListContainer.find('.review-list').html(data);
        if (typeof Theme.lazyLoadInstance !== 'undefined') {
          Theme.lazyLoadInstance.update();
        }
        initLightGallery($reviewListContainer.find('.review-images'));
        if (successCallback) {
          successCallback();
        }
      },
      complete: function complete() {
        $reviewListContainer.find('.loading-spinner').remove();
      }
    });
  };
  var getCurrentSearchParams = function getCurrentSearchParams() {
    return {
      search: $('.review-search-input').val() || '',
      sort_by: $('.review-sort-select').val() || 'newest',
      star: $('.review-star-filter').val() || ''
    };
  };

  // Update clear button visibility
  var updateClearButtonVisibility = function updateClearButtonVisibility() {
    var hasSearch = $('.review-search-input').val().trim() !== '';
    var hasFilter = $('.review-star-filter').val() !== '';
    var hasSort = $('.review-sort-select').val() !== 'newest';
    if (hasSearch || hasFilter || hasSort) {
      $('.review-clear-btn').removeClass('d-none');
    } else {
      $('.review-clear-btn').addClass('d-none');
    }
  };
  var loadPreviewImage = function loadPreviewImage(input) {
    var $uploadText = $('.image-upload__text');
    var maxFiles = $(input).data('max-files');
    var filesAmount = input.files.length;
    if (maxFiles) {
      if (filesAmount >= maxFiles) {
        $uploadText.closest('.image-upload__uploader-container').addClass('d-none');
      } else {
        $uploadText.closest('.image-upload__uploader-container').removeClass('d-none');
      }
      $uploadText.text(filesAmount + '/' + maxFiles);
    } else {
      $uploadText.text(filesAmount);
    }
    var viewerList = $('.image-viewer__list');
    var $template = $('#review-image-template').html();
    viewerList.find('.image-viewer__item').remove();
    if (filesAmount) {
      for (var i = filesAmount - 1; i >= 0; i--) {
        viewerList.prepend($template.replace('__id__', i));
      }
      var _loop = function _loop(j) {
        var reader = new FileReader();
        reader.onload = function (event) {
          viewerList.find('.image-viewer__item[data-id=' + j + ']').find('img').attr('src', event.target.result);
        };
        reader.readAsDataURL(input.files[j]);
      };
      for (var j = filesAmount - 1; j >= 0; j--) {
        _loop(j);
      }
    }
  };
  var setImagesFormReview = function setImagesFormReview(input) {
    var dT = new ClipboardEvent('').clipboardData || new DataTransfer();
    for (var _i = 0, _imagesReviewBuffer = imagesReviewBuffer; _i < _imagesReviewBuffer.length; _i++) {
      var file = _imagesReviewBuffer[_i];
      dT.items.add(file);
    }
    input.files = dT.files;
    loadPreviewImage(input);
  };
  if ($reviewListContainer.length) {
    initLightGallery($('.review-images'));
    getReviewList($reviewListContainer.data('ajax-url'), null, getCurrentSearchParams());
  }
  $reviewListContainer.on('click', '.pagination a', function (e) {
    e.preventDefault();
    var url = $(e.currentTarget).prop('href');
    getReviewList(url, function () {
      $('html, body').animate({
        scrollTop: $reviewListContainer.offset().top - 130
      });
    }, getCurrentSearchParams());
  });
  $(document).on('submit', '.product-review-container form', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $form = $(e.currentTarget);
    var $button = $form.find('button[type="submit"]');
    $.ajax({
      type: 'POST',
      cache: false,
      url: $form.prop('action'),
      data: new FormData($form[0]),
      contentType: false,
      processData: false,
      beforeSend: function beforeSend() {
        $button.prop('disabled', true).addClass('loading');
      },
      success: function success(_ref2) {
        var error = _ref2.error,
          message = _ref2.message;
        if (!error) {
          $form.find('select').val(0);
          $form.find('textarea').val('');
          $form.find('input[type=file]').val('');
          $form.find('input.custom-field').val('');
          imagesReviewBuffer = [];
          Theme.showSuccess(message);
          getReviewList($reviewListContainer.data('ajax-url'), function () {
            if (!$('.review-list').length) {
              setTimeout(function () {
                return window.location.reload();
              }, 1000);
            }
          }, getCurrentSearchParams());
        } else {
          Theme.showError(message);
        }
      },
      error: function error(_error) {
        Theme.handleError(_error, $form);
      },
      complete: function complete() {
        $button.prop('disabled', false).removeClass('loading');
      }
    });
  });
  $(document).on('change', '.product-review-container form input[type=file]', function (event) {
    event.preventDefault();
    var input = this;
    var $input = $(input);
    var maxSize = $input.data('max-size');
    Object.keys(input.files).map(function (i) {
      if (maxSize && input.files[i].size / 1024 > maxSize) {
        var message = $input.data('max-size-message').replace('__attribute__', input.files[i].name).replace('__max__', maxSize);
        Theme.showError(message);
      } else {
        imagesReviewBuffer.push(input.files[i]);
      }
    });
    var filesAmount = imagesReviewBuffer.length;
    var maxFiles = $input.data('max-files');
    if (maxFiles && filesAmount > maxFiles) {
      imagesReviewBuffer.splice(filesAmount - maxFiles - 1, filesAmount - maxFiles);
    }
    setImagesFormReview(input);
  });
  $(document).on('click', '.product-review-container form .image-viewer__icon-remove', function (event) {
    event.preventDefault();
    var $this = $(event.currentTarget);
    var id = $this.closest('.image-viewer__item').data('id');
    imagesReviewBuffer.splice(id, 1);
    var input = $('.product-review-container form input[type=file]')[0];
    setImagesFormReview(input);
  });
  $(document).on('click', '.delete-review-btn', function (e) {
    e.preventDefault();
    var $button = $(this);
    var reviewId = $button.data('review-id');
    var confirmMessage = $button.data('confirm-message');
    if (!confirm(confirmMessage)) {
      return;
    }
    var deleteUrl = "/review/delete/".concat(reviewId);
    $.ajax({
      url: deleteUrl,
      type: 'DELETE',
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      beforeSend: function beforeSend() {
        $button.prop('disabled', true).addClass('loading');
      },
      success: function success(_ref3) {
        var message = _ref3.message;
        Theme.showSuccess(message);

        // Reload the review list
        getReviewList($reviewListContainer.data('ajax-url'), function () {
          if (!$('.review-list .review-item').length) {
            setTimeout(function () {
              return window.location.reload();
            }, 1000);
          }
        }, getCurrentSearchParams());
      },
      error: function error(xhr) {
        var message = 'An error occurred while deleting the review.';
        if (xhr.responseJSON && xhr.responseJSON.message) {
          message = xhr.responseJSON.message;
        }
        Theme.showError(message);
      },
      complete: function complete() {
        $button.prop('disabled', false).removeClass('loading');
      }
    });
  });

  // Search functionality
  var searchTimeout;
  $(document).on('input', '[data-bb-toggle="review-search"]', function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function () {
      updateClearButtonVisibility();
      if ($reviewListContainer.length) {
        getReviewList($reviewListContainer.data('ajax-url'), null, getCurrentSearchParams());
      }
    }, 500); // Debounce search for 500ms
  });

  // Sort functionality
  $(document).on('change', '[data-bb-toggle="review-sort"]', function () {
    updateClearButtonVisibility();
    if ($reviewListContainer.length) {
      getReviewList($reviewListContainer.data('ajax-url'), null, getCurrentSearchParams());
    }
  });

  // Star filter functionality
  $(document).on('change', '[data-bb-toggle="review-star-filter"]', function () {
    updateClearButtonVisibility();
    if ($reviewListContainer.length) {
      getReviewList($reviewListContainer.data('ajax-url'), null, getCurrentSearchParams());
    }
  });

  // Star filter progress bar click functionality
  $(document).on('click', '[data-bb-toggle="review-star-filter-bar"]', function () {
    var star = $(this).data('star');
    $('.review-star-filter').val(star);
    if ($reviewListContainer.length) {
      getReviewList($reviewListContainer.data('ajax-url'), null, getCurrentSearchParams());
    }
  });

  // Handle keyboard navigation for progress bars
  $(document).on('keydown', '[data-bb-toggle="review-star-filter-bar"]', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).click();
    }
  });

  // Toggle search box
  $(document).on('click', '[data-bb-toggle="review-search-toggle"]', function () {
    var $container = $('.review-search-container');
    var $button = $(this);
    if ($container.hasClass('d-none')) {
      // Hide other containers
      $('.review-filter-container, .review-sort-container').addClass('d-none');
      $('.review-control-buttons .btn').removeClass('active');

      // Show search container
      $container.removeClass('d-none');
      $button.addClass('active');
      $('.review-search-input').focus();
    } else {
      $container.addClass('d-none');
      $button.removeClass('active');
    }
    updateClearButtonVisibility();
  });

  // Toggle filter dropdown
  $(document).on('click', '[data-bb-toggle="review-filter-toggle"]', function () {
    var $container = $('.review-filter-container');
    var $button = $(this);
    if ($container.hasClass('d-none')) {
      // Hide other containers
      $('.review-search-container, .review-sort-container').addClass('d-none');
      $('.review-control-buttons .btn').removeClass('active');

      // Show filter container
      $container.removeClass('d-none');
      $button.addClass('active');
    } else {
      $container.addClass('d-none');
      $button.removeClass('active');
    }
    updateClearButtonVisibility();
  });

  // Toggle sort dropdown
  $(document).on('click', '[data-bb-toggle="review-sort-toggle"]', function () {
    var $container = $('.review-sort-container');
    var $button = $(this);
    if ($container.hasClass('d-none')) {
      // Hide other containers
      $('.review-search-container, .review-filter-container').addClass('d-none');
      $('.review-control-buttons .btn').removeClass('active');

      // Show sort container
      $container.removeClass('d-none');
      $button.addClass('active');
    } else {
      $container.addClass('d-none');
      $button.removeClass('active');
    }
    updateClearButtonVisibility();
  });

  // Clear filters functionality
  $(document).on('click', '[data-bb-toggle="review-clear-filters"]', function () {
    $('.review-search-input').val('');
    $('.review-star-filter').val('');
    $('.review-sort-select').val('newest');

    // Hide all containers and remove active states
    $('.review-search-container, .review-filter-container, .review-sort-container').addClass('d-none');
    $('.review-control-buttons .btn').removeClass('active');
    updateClearButtonVisibility();
    if ($reviewListContainer.length) {
      getReviewList($reviewListContainer.data('ajax-url'), null, getCurrentSearchParams());
    }
  });
  if (sessionStorage.reloadReviewsTab) {
    if ($('#product-detail-tabs a[href="#product-reviews"]').length) {
      new bootstrap.Tab($('#product-detail-tabs a[href="#product-reviews"]')[0]).show();
    }
    sessionStorage.reloadReviewsTab = false;
  }
});
/******/ })()
;