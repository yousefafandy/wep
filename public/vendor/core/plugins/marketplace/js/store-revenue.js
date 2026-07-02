/******/ (() => { // webpackBootstrap
/*!********************************************************************!*\
  !*** ./platform/plugins/marketplace/resources/js/store-revenue.js ***!
  \********************************************************************/
$(function () {
  function submitFormAjax($form, $button) {
    $button.addClass('button-loading');
    $.ajax({
      type: 'POST',
      cache: false,
      url: $form.prop('action'),
      data: $form.serialize(),
      success: function success(res) {
        if (!res.error) {
          Botble.showNotice('success', res.message);
          $button.closest('.modal').modal('hide');
          if (window.LaravelDataTables) {
            Object.keys(window.LaravelDataTables).map(function (x) {
              window.LaravelDataTables[x].draw();
            });
          }
          if (res.data && res.data.balance) {
            $('.vendor-balance').text(res.data.balance);
          }
        } else {
          Botble.showNotice('error', res.message);
        }
      },
      error: function error(res) {
        Botble.handleError(res);
      },
      complete: function complete() {
        $button.removeClass('button-loading');
      }
    });
  }
  $(document).on('click', '#confirm-update-amount-button', function (event) {
    event.preventDefault();
    var _self = $(event.currentTarget);
    submitFormAjax($('#update-balance-modal .modal-body form'), _self);
  });
  $(document).on('submit', '#update-balance-modal .modal-body form', function (event) {
    event.preventDefault();
    var _self = $(event.currentTarget);
    submitFormAjax(_self, $('#confirm-update-amount-button'));
  });

  // Handle verify store button
  $(document).on('click', '#confirm-verify-button', function (event) {
    event.preventDefault();
    var $button = $(event.currentTarget);
    var $form = $('#verify-store-modal form');
    $button.addClass('button-loading');
    $.ajax({
      type: 'POST',
      cache: false,
      url: $form.prop('action'),
      data: $form.serialize(),
      success: function success(res) {
        if (!res.error) {
          Botble.showNotice('success', res.message);
          $('#verify-store-modal').modal('hide');
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        } else {
          Botble.showNotice('error', res.message);
        }
      },
      error: function error(res) {
        Botble.handleError(res);
      },
      complete: function complete() {
        $button.removeClass('button-loading');
      }
    });
  });

  // Handle unverify store button
  $(document).on('click', '#confirm-unverify-button', function (event) {
    event.preventDefault();
    var $button = $(event.currentTarget);
    var $form = $('#unverify-store-modal form');
    $button.addClass('button-loading');
    $.ajax({
      type: 'POST',
      cache: false,
      url: $form.prop('action'),
      data: $form.serialize(),
      success: function success(res) {
        if (!res.error) {
          Botble.showNotice('success', res.message);
          $('#unverify-store-modal').modal('hide');
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        } else {
          Botble.showNotice('error', res.message);
        }
      },
      error: function error(res) {
        Botble.handleError(res);
      },
      complete: function complete() {
        $button.removeClass('button-loading');
      }
    });
  });

  // Prevent form submission on enter key for verification modals
  $(document).on('submit', '#verify-store-modal form, #unverify-store-modal form', function (event) {
    event.preventDefault();
  });
});
/******/ })()
;