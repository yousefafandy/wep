/******/ (() => { // webpackBootstrap
/*!********************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/js/front-ecommerce.js ***!
  \********************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _transformFormData = /*#__PURE__*/new WeakMap();
var _ajaxSearchProducts = /*#__PURE__*/new WeakMap();
var _ajaxFilterForm = /*#__PURE__*/new WeakMap();
var _initCategoriesDropdown = /*#__PURE__*/new WeakMap();
var Ecommerce = /*#__PURE__*/function () {
  function Ecommerce() {
    var _this = this;
    _classCallCheck(this, Ecommerce);
    _defineProperty(this, "quickSearchAjax", null);
    _defineProperty(this, "filterAjax", null);
    _defineProperty(this, "lastFilterFormData", null);
    _defineProperty(this, "lastFilterFormAction", null);
    _defineProperty(this, "filterTimeout", null);
    _classPrivateFieldInitSpec(this, _transformFormData, function (formData) {
      var data = [];
      var groupedData = {};
      var seenParams = {};
      formData.forEach(function (item) {
        if (!item.value) {
          return;
        }
        if (item.name.includes('attributes[')) {
          if (item.value) {
            data.push(item);
          }
        } else if (item.name.endsWith('[]')) {
          var baseName = item.name.slice(0, -2);
          if (!groupedData[baseName]) {
            groupedData[baseName] = new Set();
          }
          groupedData[baseName].add(item.value);
        } else {
          if (!seenParams[item.name]) {
            seenParams[item.name] = true;
            data.push(item);
          }
        }
      });
      Object.keys(groupedData).forEach(function (key) {
        var values = Array.from(groupedData[key]);
        if (values.length > 0) {
          data.push({
            name: key,
            value: values.join(',')
          });
        }
      });
      return data;
    });
    _defineProperty(this, "highlightSearchKeywords", function ($element, phrase) {
      if (!phrase.trim()) {
        return;
      }
      var keywords = phrase.trim().split(/\s+/);
      var regex = new RegExp("(".concat(keywords.join('|'), ")"), 'gi');
      $element.html($element.text().replace(regex, '<span class="bb-quick-search-highlight">$1</span>'));
    });
    _classPrivateFieldInitSpec(this, _ajaxSearchProducts, function (form, url) {
      var button = form.find('button[type="submit"]');
      var input = form.find('input[name="q"]');
      var results = form.find('.bb-quick-search-results');
      if (!input.val()) {
        results.removeClass('show').html('');
        return;
      }
      _this.quickSearchAjax = $.ajax({
        type: 'GET',
        url: url || form.data('ajax-url'),
        data: form.serialize(),
        beforeSend: function beforeSend() {
          button.addClass('btn-loading');
          if (!url) {
            results.removeClass('show').html('');
          }
          if (_this.quickSearchAjax !== null) {
            _this.quickSearchAjax.abort();
          }
        },
        success: function success(_ref) {
          var error = _ref.error,
            message = _ref.message,
            data = _ref.data;
          if (error) {
            Theme.showError(message);
            return;
          }
          results.addClass('show');
          if (url) {
            results.find('.bb-quick-search-list').append($(data).find('.bb-quick-search-list').html());
          } else {
            results.html(data);
          }
          var that = _this;
          var searchPhrase = input.val();
          results.find('.bb-quick-search-item-name').each(function () {
            $(this).html($(this).text());
            if (searchPhrase) {
              that.highlightSearchKeywords($(this), searchPhrase);
            }
          });
          if (typeof Theme.lazyLoadInstance !== 'undefined') {
            Theme.lazyLoadInstance.update();
          }
        },
        complete: function complete() {
          return button.removeClass('btn-loading');
        }
      });
    });
    _classPrivateFieldInitSpec(this, _ajaxFilterForm, function (url, data, nextUrl) {
      var form = $('.bb-product-form-filter');
      if (url && !data) {
        _this.lastFilterFormData = null;
        _this.lastFilterFormAction = null;
      }
      var ajaxData = data;
      if (Array.isArray(data)) {
        var params = new URLSearchParams();
        var paramsByName = {};
        var attributeArrays = {};
        data.forEach(function (item) {
          if (item.name && item.value) {
            if (item.name.includes('attributes[') && item.name.endsWith('[]')) {
              if (!attributeArrays[item.name]) {
                attributeArrays[item.name] = [];
              }
              attributeArrays[item.name].push(item.value);
            } else {
              paramsByName[item.name] = item.value;
            }
          }
        });
        Object.keys(paramsByName).forEach(function (name) {
          params.set(name, paramsByName[name]);
        });
        Object.keys(attributeArrays).forEach(function (name) {
          attributeArrays[name].forEach(function (value) {
            params.append(name, value);
          });
        });
        ajaxData = {};
        Object.keys(paramsByName).forEach(function (name) {
          ajaxData[name] = paramsByName[name];
        });
        Object.keys(attributeArrays).forEach(function (name) {
          ajaxData[name] = attributeArrays[name];
        });
      }
      _this.filterAjax = $.ajax({
        url: url,
        type: 'GET',
        data: ajaxData,
        beforeSend: function beforeSend() {
          document.dispatchEvent(new CustomEvent('ecommerce.product-filter.before', {
            detail: {
              data: ajaxData,
              element: form
            }
          }));
        },
        success: function success(data) {
          var message = data.message,
            error = data.error;
          if (error) {
            Theme.showError(message);
            _this.filterAjax = null;
            return;
          }
          var finalUrl = nextUrl || url;
          if (finalUrl.includes('?')) {
            var urlParts = finalUrl.split('?');
            var baseUrl = urlParts[0];
            var _params = new URLSearchParams(urlParts[1]);
            var uniqueParams = new URLSearchParams();
            var _attributeArrays = {};
            var _iterator = _createForOfIteratorHelper(_params.entries()),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  value = _step$value[1];
                if (key.includes('attributes[') && key.endsWith('[]')) {
                  if (!_attributeArrays[key]) {
                    _attributeArrays[key] = [];
                  }
                  _attributeArrays[key].push(value);
                } else if (!uniqueParams.has(key)) {
                  uniqueParams.set(key, value);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            Object.keys(_attributeArrays).forEach(function (key) {
              _attributeArrays[key].forEach(function (value) {
                uniqueParams.append(key, value);
              });
            });
            finalUrl = baseUrl + '?' + uniqueParams.toString();
          }
          window.history.pushState(data, null, finalUrl);
          document.dispatchEvent(new CustomEvent('ecommerce.product-filter.success', {
            detail: {
              data: data,
              element: form
            }
          }));
          _this.filterAjax = null;
          if ($('.bb-product-price-filter').length) {
            EcommerceApp.initPriceFilter();
          }
        },
        error: function error(xhr) {
          if (xhr.statusText !== 'abort') {
            console.error('Filter request failed:', xhr);
            Theme.handleError(xhr);
          }
        },
        complete: function complete() {
          _this.filterTimeout = null;
          _this.filterAjax = null;
          if (typeof Theme.lazyLoadInstance !== 'undefined') {
            Theme.lazyLoadInstance.update();
          }
          document.dispatchEvent(new CustomEvent('ecommerce.product-filter.completed', {
            detail: {
              element: form
            }
          }));
        }
      });
    });
    _classPrivateFieldInitSpec(this, _initCategoriesDropdown, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var makeRequest, initCategoriesDropdown, url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            makeRequest = function makeRequest(url, beforeCallback, successCallback) {
              beforeCallback();
              fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              }).then(function (response) {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              }).then(function (_ref3) {
                var error = _ref3.error,
                  data = _ref3.data;
                if (error) {
                  return;
                }
                successCallback(data);
                document.dispatchEvent(new CustomEvent('ecommerce.categories-dropdown.success', {
                  detail: {
                    data: data
                  }
                }));
              })["catch"](function (error) {
                Theme.handleError(error);
              });
            };
            initCategoriesDropdown = $(document).find('[data-bb-toggle="init-categories-dropdown"]');
            if (initCategoriesDropdown.length) {
              url = initCategoriesDropdown.first().data('url');
              makeRequest(url, function () {}, function (data) {
                initCategoriesDropdown.each(function (index, element) {
                  var currentTarget = $(element);
                  var target = $(currentTarget.data('bb-target'));
                  if (target.length) {
                    target.html(data.dropdown);
                  } else {
                    currentTarget.append(data.select);
                  }
                  if (typeof Theme.lazyLoadInstance !== 'undefined') {
                    Theme.lazyLoadInstance.update();
                  }
                });
              });
            }
          case 1:
            return _context.a(2);
        }
      }, _callee);
    })));
    _defineProperty(this, "productQuantityToggle", function () {
      var $container = $('[data-bb-toggle="product-quantity"]');
      $container.on('click', '[data-bb-toggle="product-quantity-toggle"]', function (e) {
        var $currentTarget = $(e.currentTarget);
        var $calculation = $currentTarget.data('value');
        if (!$calculation) {
          return;
        }
        var $input = null;
        if ($calculation === 'plus') {
          $input = $currentTarget.prev();
        } else if ($calculation === 'minus') {
          $input = $currentTarget.next();
        }
        if (!$input) {
          return;
        }
        var $quantity = parseInt($input.val()) || 1;
        $input.val($calculation === 'plus' ? $quantity + 1 : $quantity === 1 ? 1 : $quantity - 1);
        document.dispatchEvent(new CustomEvent('ecommerce.cart.quantity.change', {
          detail: {
            element: $currentTarget,
            action: $calculation === '+' ? 'increase' : 'decrease'
          }
        }));
      });
    });
    _defineProperty(this, "onChangeProductAttribute", function () {
      if (!window.onBeforeChangeSwatches || typeof window.onBeforeChangeSwatches !== 'function') {
        /**
         * @param {Array<Number>} data
         * @param {jQuery} element
         */
        window.onBeforeChangeSwatches = function (data, element) {
          var form = element.closest('form');
          if (data) {
            form.find('button[type="submit"]').prop('disabled', true);
            form.find('button[data-bb-toggle="add-to-cart"]').prop('disabled', true);
          }
        };
      }
      if (!window.onChangeSwatchesSuccess || typeof window.onChangeSwatchesSuccess !== 'function') {
        /**
         * @param {{data: Object, error: Boolean, message: String}} response
         * @param {jQuery} element
         */
        window.onChangeSwatchesSuccess = function (response, element) {
          if (!response) {
            return;
          }
          var $product = $('.bb-product-detail');
          var $form = element.closest('form');
          var $button = $form.find('button[type="submit"]');
          var $quantity = $form.find('input[name="qty"]');
          var $available = $product.find('.number-items-available');
          var $sku = $product.find('[data-bb-value="product-sku"]');
          var error = response.error,
            data = response.data;
          if (error) {
            $button.prop('disabled', true);
            $quantity.prop('disabled', true);
            $form.find('input[name="id"]').val('');
            return;
          }
          $button.prop('disabled', false);
          $quantity.prop('disabled', false);
          $form.find('input[name="id"]').val(data.id);
          $product.find('[data-bb-value="product-price"]').text(data.display_sale_price);
          if (data.sale_price !== data.price) {
            $product.find('[data-bb-value="product-original-price"]').text(data.display_price).show();
          } else {
            $product.find('[data-bb-value="product-original-price"]').hide();
          }
          if (data.sku) {
            $sku.text(data.sku);
            $sku.closest('div').show();
          } else {
            $sku.closest('div').hide();
          }
          if (data.error_message) {
            $button.prop('disabled', true);
            $quantity.prop('disabled', true);
            $available.html("<span class='text-danger'>".concat(data.error_message, "</span>")).show();
          } else if (data.warning_message) {
            $available.html("<span class='text-warning fw-medium fs-6'>".concat(data.warning_message, "</span>")).show();
          } else if (data.success_message) {
            $available.html("<span class='text-success'>".concat(data.success_message, "</span>")).show();
          } else {
            $available.html('').hide();
          }
          $product.find('.bb-product-attribute-swatch-item').removeClass('disabled');
          $product.find('.bb-product-attribute-swatch-list select option').prop('disabled', false);
          var unavailableAttributeIds = data.unavailable_attribute_ids || [];
          if (unavailableAttributeIds.length) {
            unavailableAttributeIds.map(function (id) {
              var $swatchItem = $product.find(".bb-product-attribute-swatch-item[data-id=\"".concat(id, "\"]"));
              if ($swatchItem.length) {
                $swatchItem.addClass('disabled');
                $swatchItem.find('input').prop('checked', false);
              } else {
                $swatchItem = $product.find(".bb-product-attribute-swatch-list select option[data-id=\"".concat(id, "\"]"));
                if ($swatchItem.length) {
                  $swatchItem.prop('disabled', true);
                }
              }
            });
          }
          var imageHtml = '';
          var thumbHtml = '';
          var siteConfig = window.siteConfig || {};
          if (!data.image_with_sizes.origin.length) {
            data.image_with_sizes.origin.push(siteConfig.img_placeholder);
          } else {
            data.image_with_sizes.origin.forEach(function (item) {
              imageHtml += "\n                    <a href='".concat(item, "'>\n                        <img src='").concat(item, "' alt='").concat(data.name, "'>\n                    </a>\n                ");
            });
          }
          if (!data.image_with_sizes.thumb.length) {
            data.image_with_sizes.thumb.push(siteConfig.img_placeholder);
          } else {
            data.image_with_sizes.thumb.forEach(function (item) {
              thumbHtml += "\n                    <div>\n                        <img src='".concat(item, "' alt='").concat(data.name, "'>\n                    </div>\n                ");
            });
          }
          var $galleryImages = $product.find('.bb-product-gallery');
          var $existingGalleryImages = $galleryImages.find('.bb-product-gallery-images');
          var $existingThumbnails = $galleryImages.find('.bb-product-gallery-thumbnails');
          var existingVideoElements = $existingGalleryImages.find('.bb-product-video').clone();
          var existingVideoThumbnails = $existingThumbnails.find('.video-thumbnail').clone();
          var finalImageHtml = imageHtml;
          var finalThumbHtml = thumbHtml;
          if (existingVideoElements.length > 0) {
            existingVideoElements.each(function () {
              finalImageHtml += $(this)[0].outerHTML;
            });
          }
          if (existingVideoThumbnails.length > 0) {
            existingVideoThumbnails.each(function () {
              finalThumbHtml += "<div>".concat($(this)[0].outerHTML, "</div>");
            });
          }
          $galleryImages.find('.bb-product-gallery-thumbnails').slick('unslick').html(finalThumbHtml);
          var $quickViewGalleryImages = $(document).find('.bb-quick-view-gallery-images');
          if ($quickViewGalleryImages.length) {
            $quickViewGalleryImages.slick('unslick').html(finalImageHtml);
          }
          $galleryImages.find('.bb-product-gallery-images').slick('unslick').html(finalImageHtml);
          if (typeof EcommerceApp !== 'undefined') {
            EcommerceApp.initProductGallery();
          }
        };
      }
    });
    _defineProperty(this, "handleUpdateCart", function (element) {
      var form;
      if (element) {
        form = $(element).closest('form');
      } else {
        form = $('form.cart-form');
      }
      $.ajax({
        type: 'POST',
        url: form.prop('action'),
        data: form.serialize(),
        success: function success(_ref4) {
          var error = _ref4.error,
            message = _ref4.message,
            data = _ref4.data;
          if (error) {
            Theme.showError(message);
          }
          _this.ajaxLoadCart(data);
        },
        error: function error(_error) {
          return Theme.handleError(_error);
        }
      });
    });
    _defineProperty(this, "ajaxLoadCart", function (data) {
      if (!data) {
        return;
      }
      var $cart = $('[data-bb-toggle="cart-content"]');
      if (data.count !== undefined) {
        $('[data-bb-value="cart-count"]').text(data.count);
      }
      if (data.total_price !== undefined) {
        $('[data-bb-value="cart-total-price"]').text(data.total_price);
      }
      if ($cart.length) {
        $cart.replaceWith(data.cart_content);
        _this.productQuantityToggle();
        if (typeof Theme.lazyLoadInstance !== 'undefined') {
          Theme.lazyLoadInstance.update();
        }
      }
    });
    this.initClipboard();
    this.initFileUpload();
    $(document).on('click', '[data-bb-toggle="toggle-product-categories-tree"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      currentTarget.toggleClass('active');
      currentTarget.closest('.bb-product-filter-item').find('> .bb-product-filter-items').slideToggle().toggleClass('active');
    }).on('click', '[data-bb-toggle="toggle-filter-sidebar"]', function () {
      $('.bb-filter-offcanvas-area').toggleClass('offcanvas-opened');
      $('.body-overlay').toggleClass('opened');
    }).on('click', '.body-overlay', function () {
      $('.bb-filter-offcanvas-area').removeClass('offcanvas-opened');
      $('.body-overlay').removeClass('opened');
    }).on('submit', 'form.bb-product-form-filter', function (e) {
      e.preventDefault();
      var form = $(e.currentTarget);
      var formData = _classPrivateFieldGet(_transformFormData, _this).call(_this, form.serializeArray());
      var url = form.prop('action');
      var nextUrl = url;
      var searchParams = new URLSearchParams();
      var paramsByName = {};
      var attributeArrays = {};
      var currentUrlParams = new URLSearchParams(window.location.search);
      var currentFilterState = {};
      var _iterator2 = _createForOfIteratorHelper(currentUrlParams.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];
          if (key !== 'page' && key !== '_') {
            if (!currentFilterState[key]) {
              currentFilterState[key] = [];
            }
            currentFilterState[key].push(value);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      formData.forEach(function (item) {
        if (item.name.includes('attributes[') && item.name.endsWith('[]')) {
          if (!attributeArrays[item.name]) {
            attributeArrays[item.name] = [];
          }
          attributeArrays[item.name].push(item.value);
        } else if (!paramsByName[item.name]) {
          paramsByName[item.name] = item.value;
        }
      });
      var newFilterState = {};
      Object.keys(paramsByName).forEach(function (name) {
        if (name !== 'page' && name !== '_' && paramsByName[name]) {
          if (!newFilterState[name]) {
            newFilterState[name] = [];
          }
          newFilterState[name].push(paramsByName[name]);
        }
      });
      Object.keys(attributeArrays).forEach(function (name) {
        if (!newFilterState[name]) {
          newFilterState[name] = [];
        }
        newFilterState[name] = newFilterState[name].concat(attributeArrays[name]);
      });
      Object.keys(currentFilterState).forEach(function (key) {
        if (Array.isArray(currentFilterState[key])) {
          currentFilterState[key].sort();
        }
      });
      Object.keys(newFilterState).forEach(function (key) {
        if (Array.isArray(newFilterState[key])) {
          newFilterState[key].sort();
        }
      });
      var filterStateChanged = JSON.stringify(currentFilterState) !== JSON.stringify(newFilterState);
      if (filterStateChanged && paramsByName['page']) {
        delete paramsByName['page'];
      }
      Object.keys(paramsByName).forEach(function (name) {
        if (paramsByName[name]) {
          searchParams.set(name, paramsByName[name]);
        }
      });
      Object.keys(attributeArrays).forEach(function (name) {
        attributeArrays[name].forEach(function (value) {
          searchParams.append(name, value);
        });
      });
      var queryString = searchParams.toString();
      if (queryString) {
        nextUrl += "?".concat(queryString);
      }
      var filteredFormData = formData;
      if (filterStateChanged && formData.some(function (item) {
        return item.name === 'page';
      })) {
        filteredFormData = formData.filter(function (item) {
          return item.name !== 'page';
        });
      }
      var formDataWithTimestamp = [].concat(_toConsumableArray(filteredFormData), [{
        name: '_',
        value: Date.now()
      }]);
      if (window.location.href === nextUrl) {
        return;
      }
      var formDataString = JSON.stringify(formData);
      var currentFormAction = form.prop('action');
      if (_this.lastFilterFormData === formDataString && _this.lastFilterFormAction === currentFormAction) {
        return;
      }
      _this.lastFilterFormData = formDataString;
      _this.lastFilterFormAction = currentFormAction;
      if (_this.filterAjax) {
        _this.filterAjax.abort();
      }
      if (_this.filterTimeout) {
        clearTimeout(_this.filterTimeout);
      }
      _this.filterTimeout = setTimeout(function () {
        _classPrivateFieldGet(_ajaxFilterForm, _this).call(_this, url, formDataWithTimestamp, nextUrl);
      }, 100);
    }).on('change', 'form.bb-product-form-filter input, form.bb-product-form-filter select', function (e) {
      var currentTarget = $(e.currentTarget);
      var form = currentTarget.closest('form');
      var inputName = currentTarget.attr('name');
      if (inputName.includes('attributes[')) {
        form.trigger('submit');
      } else if (currentTarget.attr('type') === 'checkbox' && inputName && inputName.endsWith('[]')) {
        var baseName = inputName.slice(0, -2);
        var checkboxes = form.find("input[name=\"".concat(inputName, "\"]")).filter(':checked');
        var singleInput = form.find("input[name=\"".concat(baseName, "\"]"));
        if (!singleInput.length) {
          form.append("<input type=\"hidden\" name=\"".concat(baseName, "\" value=\"\">"));
          singleInput = form.find("input[name=\"".concat(baseName, "\"]"));
        }
        var values = checkboxes.map(function () {
          return $(this).val();
        }).get();
        singleInput.val(values.join(','));
      }
      form.trigger('submit');
    }).on('keyup', '.bb-form-quick-search input', function (e) {
      _classPrivateFieldGet(_ajaxSearchProducts, _this).call(_this, $(e.currentTarget).closest('form'));
    }).on('click', 'body', function (e) {
      if (!$(e.target).closest('.bb-form-quick-search').length) {
        $('.bb-quick-search-results').removeClass('show').html('');
      }
    }).on('click', '[data-bb-toggle="quick-shop"]', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var currentTarget = $(e.currentTarget);
      var modal = $('#quick-shop-modal');
      $.ajax({
        url: currentTarget.data('url'),
        type: 'GET',
        beforeSend: function beforeSend() {
          if (modal.find('.quick-shop-content').length) {
            modal.find('.quick-shop-content').html('');
            modal.find('.modal-body').addClass('modal-empty');
            modal.find('.loading-spinner').removeClass('d-none').show();
            modal.find('.quick-shop-content').hide();
          } else {
            modal.find('.modal-body').html('');
          }
          modal.modal('show');
          document.dispatchEvent(new CustomEvent('ecommerce.quick-shop.before-send', {
            detail: {
              element: currentTarget,
              modal: modal
            }
          }));
        },
        success: function success(_ref5) {
          var data = _ref5.data;
          if (modal.find('.quick-shop-content').length) {
            modal.find('.quick-shop-content').html(data);
            modal.find('.loading-spinner').addClass('d-none').hide();
            modal.find('.modal-body').removeClass('modal-empty');
            modal.find('.quick-shop-content').show();
          } else {
            modal.find('.modal-body').html(data);
          }
        },
        error: function error(_error2) {
          return Theme.handleError(_error2);
        },
        complete: function complete() {
          document.dispatchEvent(new CustomEvent('ecommerce.quick-shop.completed', {
            detail: {
              element: currentTarget,
              modal: modal
            }
          }));
        }
      });
    }).on('click', '.bb-product-filter-link', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var form = currentTarget.closest('form');
      var parent = currentTarget.closest('.bb-product-filter');
      var categoryId = currentTarget.data('id');
      var categoriesInput = form.find('input[name="categories"]');
      if (!categoriesInput.length) {
        categoriesInput = form.find('input[name="categories[]"]');
      }
      parent.find('.bb-product-filter-link').removeClass('active');
      currentTarget.addClass('active');
      form.find('input[name="page"]').remove();
      form.find('input[name="per-page"]').remove();
      if (categoriesInput.length && categoryId) {
        if (categoriesInput.attr('name') === 'categories[]') {
          categoriesInput.val(categoryId).trigger('change');
        } else {
          categoriesInput.val(categoryId).trigger('change');
        }
      } else {
        if (!categoryId) {
          if (categoriesInput.length) {
            categoriesInput.val(null);
          }
        }
        form.prop('action', currentTarget.prop('href')).trigger('submit');
      }
    }).on('click', '.bb-product-filter-clear', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      _classPrivateFieldGet(_ajaxFilterForm, _this).call(_this, currentTarget.prop('href'));
    }).on('click', '.bb-product-filter-clear-all', function (e) {
      e.preventDefault();
      var form = $('.bb-product-form-filter');
      form.find('input[type="text"], input[type="hidden"], input[type="radio"], select').val(null);
      form.find('input[type="checkbox"]').prop('checked', false);
      form.trigger('submit');
    }).on('submit', 'form#cancel-order-form', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var modal = currentTarget.closest('.modal');
      var button = modal.find('button[type="submit"]');
      $.ajax({
        url: currentTarget.prop('action'),
        type: 'POST',
        data: currentTarget.serialize(),
        beforeSend: function beforeSend() {
          button.addClass('btn-loading');
        },
        success: function success(_ref6) {
          var error = _ref6.error,
            message = _ref6.message;
          if (error) {
            Theme.showError(message);
            return;
          }
          Theme.showSuccess(message);
          modal.modal('hide');
          setTimeout(function () {
            return window.location.reload();
          }, 1000);
        },
        error: function error(_error3) {
          return Theme.handleError(_error3);
        },
        complete: function complete() {
          return button.removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="add-to-compare"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var url = currentTarget.hasClass('active') ? currentTarget.data('remove-url') : currentTarget.data('url');
      var data = {};
      if (currentTarget.hasClass('active')) {
        data = {
          _method: 'DELETE'
        };
      }
      $.ajax({
        url: url,
        method: 'POST',
        data: data,
        beforeSend: function beforeSend() {
          return currentTarget.addClass('btn-loading');
        },
        success: function success(_ref7) {
          var error = _ref7.error,
            message = _ref7.message,
            data = _ref7.data;
          if (error) {
            Theme.showError(message);
          } else {
            Theme.showSuccess(message);
            currentTarget.toggleClass('active');
            if (data.count !== undefined) {
              $('[data-bb-value="compare-count"]').text(data.count);
            }
            if (currentTarget.hasClass('active')) {
              document.dispatchEvent(new CustomEvent('ecommerce.compare.added', {
                detail: {
                  data: data,
                  element: currentTarget,
                  extraData: data.extra_data
                }
              }));
            } else {
              document.dispatchEvent(new CustomEvent('ecommerce.compare.removed', {
                detail: {
                  data: data,
                  element: currentTarget,
                  extraData: data.extra_data
                }
              }));
            }
          }
        },
        error: function error(_error4) {
          return Theme.handleError(_error4);
        },
        complete: function complete() {
          return currentTarget.removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="remove-from-compare"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var table = currentTarget.closest('table');
      $.ajax({
        url: currentTarget.data('url'),
        method: 'POST',
        data: {
          _method: 'DELETE'
        },
        success: function success(_ref8) {
          var error = _ref8.error,
            message = _ref8.message,
            data = _ref8.data;
          if (error) {
            Theme.showError(message);
          } else {
            Theme.showSuccess(message);
            document.dispatchEvent(new CustomEvent('ecommerce.compare.removed', {
              detail: {
                data: data,
                element: currentTarget,
                extraData: data.extra_data
              }
            }));
            if (data.count !== undefined) {
              $('[data-bb-value="compare-count"]').text(data.count);
              if (data.count > 0) {
                table.find("td:nth-child(".concat(currentTarget.closest('td').index() + 1, ")")).remove();
              }
            } else {
              window.location.reload();
            }
          }
        },
        error: function error(_error5) {
          return Theme.handleError(_error5);
        }
      });
    }).on('click', '[data-bb-toggle="add-to-wishlist"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var url = currentTarget.data('url');
      $.ajax({
        url: url,
        method: 'POST',
        beforeSend: function beforeSend() {
          return currentTarget.addClass('btn-loading');
        },
        success: function success(_ref9) {
          var error = _ref9.error,
            message = _ref9.message,
            data = _ref9.data;
          if (error) {
            Theme.showError(message);
          } else {
            if (data.count !== undefined) {
              $('[data-bb-value="wishlist-count"]').text(data.count);
            }
            Theme.showSuccess(message);
            document.dispatchEvent(new CustomEvent('ecommerce.wishlist.added', {
              detail: {
                data: data,
                element: currentTarget,
                extraData: data.extra_data,
                added: data.added
              }
            }));
          }
        },
        error: function error(_error6) {
          return Theme.handleError(_error6);
        },
        complete: function complete() {
          return currentTarget.removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="remove-from-wishlist"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      $.ajax({
        url: currentTarget.data('url'),
        method: 'POST',
        data: {
          _method: 'DELETE'
        },
        beforeSend: function beforeSend() {
          return currentTarget.addClass('btn-loading');
        },
        success: function success(_ref0) {
          var error = _ref0.error,
            message = _ref0.message,
            data = _ref0.data;
          if (error) {
            Theme.showError(message);
          } else {
            Theme.showSuccess(message);
            currentTarget.closest('tr').remove();
            if (data.count !== undefined) {
              $('[data-bb-value="wishlist-count"]').text(data.count);
              if (data.count === 0) {
                window.location.reload();
              }
            }
            document.dispatchEvent(new CustomEvent('ecommerce.wishlist.removed', {
              detail: {
                data: data,
                element: currentTarget,
                extraData: data.extra_data
              }
            }));
          }
        },
        error: function error(_error7) {
          return Theme.handleError(_error7);
        },
        complete: function complete() {
          return currentTarget.removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="add-to-cart"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var data = {
        id: currentTarget.data('id')
      };
      var quantity = currentTarget.closest('tr').find('input[name="qty"]');
      if (quantity) {
        data.qty = quantity.val();
      }
      $.ajax({
        url: currentTarget.data('url'),
        method: 'POST',
        data: data,
        dataType: 'json',
        beforeSend: function beforeSend() {
          return currentTarget.addClass('btn-loading');
        },
        success: function success(_ref1) {
          var error = _ref1.error,
            message = _ref1.message,
            data = _ref1.data;
          if (error) {
            Theme.showError(message);
            if (data.next_url !== undefined) {
              setTimeout(function () {
                window.location.href = data.next_url;
              }, 500);
            }
            return false;
          }
          if (data && data.next_url !== undefined) {
            window.location.href = data.next_url;
            return false;
          }
          var showSuccess = true;
          if (currentTarget.data('show-toast-on-success') !== undefined) {
            showSuccess = currentTarget.data('show-toast-on-success');
          }
          if (showSuccess) {
            Theme.showSuccess(message);
          }
          if (data.count !== undefined) {
            $('[data-bb-value="cart-count"]').text(data.count);
          }
          document.dispatchEvent(new CustomEvent('ecommerce.cart.added', {
            detail: {
              data: data,
              element: currentTarget,
              message: message,
              extraData: data.extra_data
            }
          }));
        },
        error: function error(_error8) {
          return Theme.handleError(_error8);
        },
        complete: function complete() {
          return currentTarget.removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="remove-from-cart"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      $.ajax({
        url: currentTarget.prop('href') || currentTarget.data('url'),
        method: 'GET',
        beforeSend: function beforeSend() {
          return currentTarget.addClass('btn-loading');
        },
        success: function success(_ref10) {
          var error = _ref10.error,
            message = _ref10.message,
            data = _ref10.data;
          if (error) {
            Theme.showError(message);
          } else {
            Theme.showSuccess(message);
            currentTarget.closest('tr').remove();
            if (data.count !== undefined) {
              $('[data-bb-value="cart-count"]').text(data.count);
              if (data.count === 0) {
                window.location.reload();
              }
            }
            document.dispatchEvent(new CustomEvent('ecommerce.cart.removed', {
              detail: {
                data: data,
                element: currentTarget,
                extraData: data.extra_data
              }
            }));
          }
        },
        error: function error(_error9) {
          return Theme.handleError(_error9);
        },
        complete: function complete() {
          return currentTarget.removeClass('btn-loading');
        }
      });
    }).on('submit', '[data-bb-toggle="coupon-form"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var button = currentTarget.find('button[type="submit"]');
      $.ajax({
        url: currentTarget.prop('action'),
        type: 'POST',
        data: currentTarget.serialize(),
        beforeSend: function beforeSend() {
          return button.prop('disabled', true).addClass('btn-loading');
        },
        success: function success(_ref11) {
          var error = _ref11.error,
            message = _ref11.message,
            data = _ref11.data;
          if (error) {
            Theme.showError(message);
          } else {
            Theme.showSuccess(message);
            document.dispatchEvent(new CustomEvent('ecommerce.coupon.applied', {
              detail: {
                data: data,
                element: currentTarget
              }
            }));
          }
        },
        error: function error(_error0) {
          return Theme.handleError(_error0);
        },
        complete: function complete() {
          return button.prop('disabled', false).removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="quick-view-product"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      $.ajax({
        url: currentTarget.data('url'),
        type: 'GET',
        beforeSend: function beforeSend() {
          return currentTarget.prop('disabled', true).addClass('btn-loading');
        },
        success: function success(_ref12) {
          var error = _ref12.error,
            message = _ref12.message,
            data = _ref12.data;
          if (error) {
            Theme.showError(message);
          } else {
            var quickViewModal = $('[data-bb-toggle="quick-view-modal"]');
            quickViewModal.modal('show');
            quickViewModal.find('.modal-body').html(data);
            document.dispatchEvent(new CustomEvent('ecommerce.quick-view.initialized', {
              detail: {
                data: data,
                element: currentTarget
              }
            }));
            setTimeout(function () {
              _this.initProductGallery(true);
            }, 100);
          }
        },
        error: function error(_error1) {
          return Theme.handleError(_error1);
        },
        complete: function complete() {
          return currentTarget.prop('disabled', false).removeClass('btn-loading');
        }
      });
    }).on('click', '[data-bb-toggle="product-form"] button[type="submit"]', function (e) {
      e.preventDefault();
      var currentTarget = $(e.currentTarget);
      var form = currentTarget.closest('form');
      var data = form.serializeArray();
      if (form.find('input[name="id"]').val() === '') {
        return;
      }
      data.push({
        name: 'checkout',
        value: currentTarget.prop('name') === 'checkout' ? 1 : 0
      });
      $.ajax({
        type: 'POST',
        url: form.prop('action'),
        data: data,
        beforeSend: function beforeSend() {
          currentTarget.prop('disabled', true).addClass('btn-loading');
        },
        success: function success(_ref13) {
          var error = _ref13.error,
            message = _ref13.message,
            data = _ref13.data;
          if (error) {
            Theme.showError(message);
            return;
          }
          Theme.showSuccess(message);
          form.find('input[name="qty"]').val(1);
          if (data.count !== undefined) {
            $('[data-bb-value="cart-count"]').text(data.count);
          }
          document.dispatchEvent(new CustomEvent('ecommerce.cart.added', {
            detail: {
              data: data,
              element: currentTarget,
              extraData: data.extra_data
            }
          }));
        },
        error: function error(_error10) {
          return Theme.handleError(_error10);
        },
        complete: function complete() {
          return currentTarget.prop('disabled', false).removeClass('btn-loading');
        }
      });
    }).on('change', '[data-bb-toggle="product-form-filter-item"]', function (e) {
      var currentTarget = $(e.currentTarget);
      var $form = $('.bb-product-form-filter');
      var name = currentTarget.prop('name');
      var value = currentTarget.val();
      if (name.endsWith('[]') && !name.includes('attributes[')) {
        var baseName = name.slice(0, -2);
        var $input = $form.find("input[name=\"".concat(baseName, "\"]"));
        if (!$input.length) {
          $form.append("<input type=\"hidden\" name=\"".concat(baseName, "\" value=\"\">"));
          $input = $form.find("input[name=\"".concat(baseName, "\"]"));
        }
        var currentValues = $input.val() ? $input.val().split(',') : [];
        var uniqueValues = new Set(currentValues);
        uniqueValues.add(value);
        $input.val(Array.from(uniqueValues).join(','));
      } else {
        var isCheckbox = currentTarget.is(':checkbox');
        if (isCheckbox) {
          var isChecked = currentTarget.prop('checked');
          var _$input = $form.find("input[type=\"hidden\"][name=\"".concat(name, "\"]"));
          if (_$input.length) {
            _$input.val(isChecked ? value : '');
          } else {
            $form.append("<input type=\"hidden\" name=\"".concat(name, "\" value=\"").concat(isChecked ? value : '', "\">"));
          }
        } else {
          var _$input2 = $form.find("input[name=\"".concat(name, "\"]"));
          if (_$input2.length) {
            _$input2.val(value);
          }
        }
      }
      $form.trigger('submit');
    });
    if ($('.bb-product-price-filter').length) {
      this.initPriceFilter();
    }
    _classPrivateFieldGet(_initCategoriesDropdown, this).call(this);
  }

  /**
   * @returns {boolean}
   */
  return _createClass(Ecommerce, [{
    key: "isRtl",
    value: function isRtl() {
      return document.body.getAttribute('dir') === 'rtl';
    }

    /**
     * @param {JQuery} element
     */
  }, {
    key: "initLightGallery",
    value: function initLightGallery(element) {
      if (!element.length) {
        return;
      }
      if (element.data('lightGallery')) {
        element.data('lightGallery').destroy(true);
      }
      element.lightGallery({
        selector: 'a',
        thumbnail: true,
        share: false,
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
        actualSize: false
      });
    }
  }, {
    key: "initProductGallery",
    value: function initProductGallery() {
      var _this2 = this;
      var onlyQuickView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!onlyQuickView) {
        var postMessageToPlayer = function postMessageToPlayer(player, command) {
          if (player == null || command == null) return;
          player.contentWindow.postMessage(JSON.stringify(command), '*');
        };
        var playPauseVideo = function playPauseVideo(slick, control) {
          var currentSlide, slideType, startTime, player, video;
          currentSlide = slick.find('.slick-current');
          slideType = currentSlide.data('provider');
          player = currentSlide.get(0);
          startTime = currentSlide.data('video-start');
          if (slideType === 'vimeo') {
            switch (control) {
              case 'play':
                if (startTime != null && startTime > 0 && !currentSlide.hasClass('started')) {
                  currentSlide.addClass('started');
                  postMessageToPlayer(player, {
                    method: 'setCurrentTime',
                    value: startTime
                  });
                }
                postMessageToPlayer(player, {
                  method: 'play',
                  value: 1
                });
                break;
              case 'pause':
                postMessageToPlayer(player, {
                  method: 'pause',
                  value: 1
                });
                break;
            }
          } else if (slideType === 'youtube') {
            switch (control) {
              case 'play':
                postMessageToPlayer(player, {
                  event: 'command',
                  func: 'mute'
                });
                postMessageToPlayer(player, {
                  event: 'command',
                  func: 'playVideo'
                });
                break;
              case 'pause':
                postMessageToPlayer(player, {
                  event: 'command',
                  func: 'pauseVideo'
                });
                break;
            }
          } else if (slideType === 'video') {
            video = currentSlide.children('video').get(0);
            if (video != null) {
              if (control === 'play') {
                video.play();
              } else {
                video.pause();
              }
            }
          }
        };
        var $gallery = $(document).find('.bb-product-gallery-images');
        if (!$gallery.length) {
          return;
        }
        var $thumbnails = $(document).find('.bb-product-gallery-thumbnails');
        $gallery.on('init', function (slick) {
          slick = $(slick.currentTarget);
          setTimeout(function () {
            playPauseVideo(slick, 'play');
          }, 1000);
        });
        $gallery.on('beforeChange', function (event, slick) {
          slick = $(slick.$slider);
          playPauseVideo(slick, 'pause');
        });
        $gallery.on('afterChange', function (event, slick) {
          slick = $(slick.$slider);
          playPauseVideo(slick, 'play');
        });
        $(document).on('click', '.bb-button-trigger-play-video', function (e) {
          var $button = $(e.currentTarget);
          var videoElement = document.getElementById($button.data('target'));
          videoElement.play();
          $button.closest('.bb-product-video').addClass('bb-product-video-playing');
          videoElement.addEventListener('ended', function () {
            $button.closest('.bb-product-video').removeClass('bb-product-video-playing');
            videoElement.currentTime = 0;
            videoElement.pause();
          });
          videoElement.addEventListener('pause', function () {
            if (videoElement.ended) return;
            $button.closest('.bb-product-video').removeClass('bb-product-video-playing');
          });
        });
        if ($gallery.length) {
          $gallery.map(function (index, item) {
            var $item = $(item);
            if ($item.hasClass('slick-initialized')) {
              $item.slick('unslick');
            }
            $item.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
              infinite: false,
              fade: true,
              lazyLoad: 'ondemand',
              asNavFor: '.bb-product-gallery-thumbnails',
              rtl: _this2.isRtl()
            });
          });
        }
        if ($thumbnails.length) {
          var isVertical = $thumbnails.data('vertical') === 1;
          if (window.innerWidth < 768) {
            isVertical = false;
          }
          $thumbnails.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.bb-product-gallery-images',
            focusOnSelect: true,
            infinite: false,
            rtl: this.isRtl() && !isVertical,
            vertical: isVertical,
            verticalSwiping: isVertical,
            prevArrow: '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></button>',
            nextArrow: '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></button>',
            responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 4
              }
            }]
          });
        }
        this.initLightGallery($gallery);
        if (typeof Theme.lazyLoadInstance !== 'undefined') {
          Theme.lazyLoadInstance.update();
        }
      }
      var $quickViewGallery = $(document).find('.bb-quick-view-gallery-images');
      if ($quickViewGallery.length) {
        if ($quickViewGallery.hasClass('slick-initialized')) {
          $quickViewGallery.slick('unslick');
        }
        $quickViewGallery.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          adaptiveHeight: false,
          rtl: this.isRtl()
        });
      }
      this.initLightGallery($quickViewGallery);
    }
  }, {
    key: "initPriceFilter",
    value: function initPriceFilter() {
      if (typeof $.fn.slider === 'undefined') {
        throw new Error('jQuery UI slider is required for price filter');
      }
      var $priceFilter = $(document).find('.bb-product-price-filter');
      var $sliderRange = $priceFilter.find('.price-slider');
      var $rangeLabel = $priceFilter.find('.input-range-label');
      if ($priceFilter) {
        var $minPrice = $priceFilter.find('input[name="min_price"]');
        var $maxPrice = $priceFilter.find('input[name="max_price"]');
        var currentMinPrice = parseInt($minPrice.val()) || $sliderRange.data('min');
        var currentMaxPrice = parseInt($maxPrice.val()) || $sliderRange.data('max');
        var isRtl = this.isRtl();
        var sliderMin = isRtl ? -$sliderRange.data('max') : $sliderRange.data('min');
        var sliderMax = isRtl ? -$sliderRange.data('min') : $sliderRange.data('max');
        var sliderValues = isRtl ? [-currentMaxPrice, -currentMinPrice] : [currentMinPrice, currentMaxPrice];
        $sliderRange.slider({
          range: true,
          min: sliderMin,
          max: sliderMax,
          values: sliderValues,
          slide: function (_, ui) {
            var realMin = isRtl ? -ui.values[1] : ui.values[0];
            var realMax = isRtl ? -ui.values[0] : ui.values[1];
            $rangeLabel.find('.from').text(this.formatPrice(realMin));
            $rangeLabel.find('.to').text(this.formatPrice(realMax));
          }.bind(this),
          change: function (_, ui) {
            var realMin = isRtl ? -ui.values[1] : ui.values[0];
            var realMax = isRtl ? -ui.values[0] : ui.values[1];
            if (parseInt(currentMinPrice) !== realMin) {
              $minPrice.val(realMin).trigger('change');
            }
            if (parseInt(currentMaxPrice) !== realMax) {
              $maxPrice.val(realMax).trigger('change');
            }
          }.bind(this)
        });
        var currentValues = $sliderRange.slider('values');
        var displayMin = isRtl ? -currentValues[1] : currentValues[0];
        var displayMax = isRtl ? -currentValues[0] : currentValues[1];
        $rangeLabel.find('.from').text(this.formatPrice(displayMin));
        $rangeLabel.find('.to').text(this.formatPrice(displayMax));
      }
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(price, numberAfterDot, x) {
      var currencies = window.currencies || {};
      if (!numberAfterDot) {
        numberAfterDot = currencies.number_after_dot !== undefined ? currencies.number_after_dot : 2;
      }
      var regex = '\\d(?=(\\d{' + (x || 3) + '})+$)';
      var priceUnit = '';
      if (currencies.show_symbol_or_title) {
        priceUnit = currencies.symbol || currencies.title || '';
      }
      if (currencies.display_big_money) {
        var label = '';
        if (price >= 1000000 && price < 1000000000) {
          price = price / 1000000;
          label = currencies.million;
        } else if (price >= 1000000000) {
          price = price / 1000000000;
          label = currencies.billion;
        }
        priceUnit = label + (priceUnit ? " ".concat(priceUnit) : '');
      }
      price = price.toFixed(Math.max(0, ~~numberAfterDot)).toString().split('.');
      price = price[0].toString().replace(new RegExp(regex, 'g'), "$&".concat(currencies.thousands_separator)) + (price[1] ? currencies.decimal_separator + price[1] : '');
      if (currencies.show_symbol_or_title) {
        price = currencies.is_prefix_symbol ? priceUnit + price : price + priceUnit;
      }
      return price;
    }
  }, {
    key: "initFileUpload",
    value: function initFileUpload() {
      $(document).on('change', '.bb-file-input', function (e) {
        var input = e.target;
        var label = $(input).siblings('.bb-file-label');
        var fileName = label.find('.bb-file-name');
        var placeholder = label.find('.bb-file-placeholder');
        if (input.files && input.files.length > 0) {
          var file = input.files[0];
          fileName.text(file.name);
          label.addClass('has-file');
        } else {
          fileName.text('');
          label.removeClass('has-file');
        }
      });
    }
  }, {
    key: "initClipboard",
    value: function initClipboard() {
      $(document).on('click', '[data-ecommerce-clipboard]', /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
          var target, copiedMessage, text, copied, textArea, originalHtml, _t;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                e.preventDefault();
                target = $(e.currentTarget);
                copiedMessage = target.data('clipboard-message');
                text = target.data('clipboard-text');
                if (text) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2);
              case 1:
                copied = false;
                if (!(navigator.clipboard && window.isSecureContext)) {
                  _context2.n = 5;
                  break;
                }
                _context2.p = 2;
                _context2.n = 3;
                return navigator.clipboard.writeText(text);
              case 3:
                copied = true;
                _context2.n = 5;
                break;
              case 4:
                _context2.p = 4;
                _t = _context2.v;
                console.warn('Clipboard API failed, falling back to legacy method:', _t);
              case 5:
                if (!copied) {
                  textArea = document.createElement('textarea');
                  textArea.value = text;
                  textArea.style.position = 'fixed';
                  textArea.style.left = '-999999px';
                  textArea.style.top = '-999999px';
                  document.body.appendChild(textArea);
                  textArea.focus();
                  textArea.select();
                  try {
                    document.execCommand('copy');
                    copied = true;
                  } catch (err) {
                    console.error('Failed to copy text: ', err);
                  }
                  document.body.removeChild(textArea);
                }
                if (copied) {
                  if (copiedMessage) {
                    if (typeof Theme !== 'undefined' && Theme.showSuccess) {
                      Theme.showSuccess(copiedMessage);
                    }
                  }
                  originalHtml = target.html();
                  target.html('<i class="ti ti-check"></i> ' + (copiedMessage || 'Copied!'));
                  setTimeout(function () {
                    target.html(originalHtml);
                  }, 2000);
                } else {
                  if (typeof Theme !== 'undefined' && Theme.showError) {
                    Theme.showError('Failed to copy to clipboard');
                  }
                }
              case 6:
                return _context2.a(2);
            }
          }, _callee2, null, [[2, 4]]);
        }));
        return function (_x) {
          return _ref14.apply(this, arguments);
        };
      }());
    }
  }]);
}();
$(function () {
  window.EcommerceApp = new Ecommerce();
  EcommerceApp.productQuantityToggle();
  EcommerceApp.initProductGallery();
  EcommerceApp.onChangeProductAttribute();
  if ($('.bb-product-price-filter').length) {
    EcommerceApp.initPriceFilter();
  }
  document.addEventListener('ecommerce.quick-shop.completed', function () {
    EcommerceApp.productQuantityToggle();
  });
  document.addEventListener('ecommerce.cart.quantity.change', function (e) {
    var element = e.detail.element;
    EcommerceApp.handleUpdateCart(element);
  });
  document.addEventListener('ecommerce.product-filter.before', function () {
    var $wrapper = $('[data-bb-toggle="product-list"]').find('.bb-product-items-wrapper');
    if ($wrapper.length) {
      $wrapper.append('<div class="loading-spinner"></div>');
    }
  });
  document.addEventListener('ecommerce.product-filter.success', function (e) {
    var data = e.detail.data;
    var $productItemsWrapper = $('.bb-product-items-wrapper');
    if ($productItemsWrapper.length) {
      $productItemsWrapper.html(data.data);
    }
    if (data.additional) {
      var $descriptionContainer = $('.bb-product-listing-page-description');
      var descriptionHtml = data.additional.product_listing_page_description_html;
      if (descriptionHtml) {
        if ($descriptionContainer.length) {
          $descriptionContainer.html(descriptionHtml);
          document.dispatchEvent(new CustomEvent('shortcode.loaded', {
            detail: {
              name: null,
              attributes: [],
              html: descriptionHtml
            }
          }));
          if (typeof Theme.lazyLoadInstance !== 'undefined') {
            Theme.lazyLoadInstance.update();
          }
        }
      } else {
        $descriptionContainer.html('');
      }
      var $defaultSidebar = $('.bb-shop-sidebar');
      var $sidebar = $('[data-bb-filter-sidebar]');
      if (!$sidebar.length) {
        $sidebar = $defaultSidebar;
      }
      var activeFilterLinks = {};
      $('.bb-product-filter-link.active').each(function () {
        var filterGroup = $(this).closest('.bb-product-filter').data('filter-group');
        if (filterGroup) {
          activeFilterLinks[filterGroup] = $(this).data('id');
        }
      });
      var checkedCheckboxes = [];
      $sidebar.find('input[type="checkbox"]:checked').each(function () {
        var $checkbox = $(this);
        var name = $checkbox.attr('name');
        var value = $checkbox.val();
        var id = $checkbox.attr('id');
        checkedCheckboxes.push({
          name: name,
          value: value,
          id: id
        });
      });
      $sidebar.replaceWith(data.additional.filters_html);
      setTimeout(function () {
        var $newSidebar = $('[data-bb-filter-sidebar]').length ? $('[data-bb-filter-sidebar]') : $('.bb-shop-sidebar');
        Object.keys(activeFilterLinks).forEach(function (group) {
          var id = activeFilterLinks[group];
          $newSidebar.find(".bb-product-filter[data-filter-group=\"".concat(group, "\"] .bb-product-filter-link[data-id=\"").concat(id, "\"]")).addClass('active');
        });
        checkedCheckboxes.forEach(function (checkbox) {
          var $targetCheckbox = null;
          if (checkbox.id) {
            $targetCheckbox = $newSidebar.find("#".concat(checkbox.id));
          }
          if (!$targetCheckbox || !$targetCheckbox.length) {
            $targetCheckbox = $newSidebar.find("input[type=\"checkbox\"][name=\"".concat(checkbox.name, "\"][value=\"").concat(checkbox.value, "\"]"));
          }
          if (!$targetCheckbox || !$targetCheckbox.length) {
            $targetCheckbox = $newSidebar.find("input[type=\"checkbox\"][value=\"".concat(checkbox.value, "\"]")).filter(function () {
              return $(this).attr('name') === checkbox.name;
            });
          }
          if ($targetCheckbox && $targetCheckbox.length) {
            $targetCheckbox.prop('checked', true);
          }
        });
      }, 10);
    }
    if ($(document).find('.bb-product-price-filter').length) {
      EcommerceApp.initPriceFilter();
    }
    if ($productItemsWrapper.length) {
      $('html, body').animate({
        scrollTop: $productItemsWrapper.offset().top - 120
      });
    }
    var $wrapper = $('[data-bb-toggle="product-list"]').find('.bb-product-items-wrapper');
    if ($wrapper.length) {
      $wrapper.find('.loading-spinner').remove();
    }
  });
  document.addEventListener('ecommerce.product-filter.completed', function () {
    if (typeof Theme.lazyLoadInstance !== 'undefined') {
      Theme.lazyLoadInstance.update();
    }
  });
});
/******/ })()
;