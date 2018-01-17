__isBrowser__ = false;
exports.ids = [0];
exports.modules = {

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/pages/ListPage.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FeaturedBrands = __webpack_require__(195);

var _FeaturedBrands2 = _interopRequireDefault(_FeaturedBrands);

var _ListToolBar = __webpack_require__(201);

var _ListToolBar2 = _interopRequireDefault(_ListToolBar);

var _ProductListing = __webpack_require__(202);

var _ProductListing2 = _interopRequireDefault(_ProductListing);

var _RefineListing = __webpack_require__(205);

var _RefineListing2 = _interopRequireDefault(_RefineListing);

var _ProductListingSelectedRefinments = __webpack_require__(206);

var _ProductListingSelectedRefinments2 = _interopRequireDefault(_ProductListingSelectedRefinments);

var _ProductListingSegments = __webpack_require__(207);

var _ProductListingSegments2 = _interopRequireDefault(_ProductListingSegments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPage = function (_Component) {
  _inherits(ListPage, _Component);

  function ListPage(props) {
    _classCallCheck(this, ListPage);

    var _this = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ListPage, [{
    key: "getOriginalState",
    value: function getOriginalState() {
      return fetch("../api/listpage.json").then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.getOriginalState().then(function (data) {
        _this2.setState(data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.page) {
        return _react2.default.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          _react2.default.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_RevisedListingPageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166", __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }),
          _react2.default.createElement("img", { height: "100%", width: "100%", src: "http://adardesign.com/codelab/react-router/images/listSkeleton.png", __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          })
        );
      }

      return _react2.default.createElement(
        "div",
        { className: "listpage", __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        },
        _react2.default.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_RevisedListingPageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166", __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }),
        _react2.default.createElement(
          "div",
          { className: "breadcrumbs", __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          this.state.page.breadcrumbs.map(function (crumb, i) {
            return _react2.default.createElement(
              "div",
              { key: i, className: "crumb", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: _this3
              },
              crumb.name
            );
          })
        ),
        _react2.default.createElement(
          "header",
          { className: "list-title cf", __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          },
          _react2.default.createElement(
            "h1",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            },
            this.state.page.title
          ),
          _react2.default.createElement(
            "a",
            { "data-href": "/", className: "popup search-feedback", "data-popup-class": "popup600 popup-search-feedback", title: "How Can We Assist You?", __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            "Didn't find what you're looking for?"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "listPlaceholder", __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          _react2.default.createElement(_ListToolBar2.default, { meta: this.state.list.meta, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }),
          _react2.default.createElement(
            "div",
            { className: "listing-container layout-80-20 layout-reverse clear", __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "col1", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              },
              _react2.default.createElement(_ProductListingSelectedRefinments2.default, { selectedRefinements: this.state.list.meta.refinements.selectedRefinements, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              }),
              _react2.default.createElement(
                "div",
                { className: "filter-description", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                },
                _react2.default.createElement(
                  "p",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: this
                  },
                  this.state.list.meta.listDescription
                )
              ),
              _react2.default.createElement(_ProductListing2.default, { listData: this.state.list, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                },
                __self: this
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col2", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                },
                __self: this
              },
              _react2.default.createElement(_RefineListing2.default, { refineData: this.state.list.meta.refinements, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              }),
              _react2.default.createElement(_FeaturedBrands2.default, { brands: this.state.featuredBrands, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return ListPage;
}(_react.Component);

exports.default = ListPage;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/FeaturedBrands.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FeaturedBrands(props) {
  var _this = this;

  var brands = props.brands;
  return _react2.default.createElement(
    "div",
    { className: "aside-brands", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    },
    _react2.default.createElement(
      "h5",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      },
      "Featured Brands:"
    ),
    _react2.default.createElement(
      "div",
      { className: "color-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      },
      props.brands.map(function (brandItem) {
        return _react2.default.createElement(
          "a",
          { key: brandItem.brand, href: brandItem.link, className: "brand-tagged trackEvent", "data-trackdata": "listing page, featured brands, {brandItem.brand}", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: _this
          },
          _react2.default.createElement("img", { alt: "brandItem.brand", src: brandItem.image, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: _this
          }),
          _react2.default.createElement(
            "span",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: _this
            },
            _react2.default.createElement(
              "strong",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: _this
              },
              brandItem.brand
            ),
            _react2.default.createElement(
              "em",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: _this
              },
              brandItem.moto
            )
          )
        );
      })
    )
  );
};

exports.default = FeaturedBrands;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/ListToolBar.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function ListToolBar(props) {
  // TODO figure out how u pass props directly 
  var meta = props.meta;
  return _react2.default.createElement(
    "nav",
    { className: "index-toolbar", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    },
    _react2.default.createElement(
      "span",
      { className: "index-count", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      },
      _react2.default.createElement(
        "i",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        "Showing"
      ),
      _react2.default.createElement(
        "span",
        { className: "index-count-showing", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        meta.showing[0]
      ),
      _react2.default.createElement(
        "em",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        "of"
      ),
      _react2.default.createElement(
        "b",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        _react2.default.createElement(
          "span",
          { className: "index-count-total", __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          meta.showing[1]
        ),
        " results"
      )
    ),
    _react2.default.createElement(
      "a",
      { "data-action": "toggleRefine", className: "refine-menu-tab button small radius action", href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      },
      "Refine"
    ),
    _react2.default.createElement(
      "div",
      { "data-styleswitch": "listPageLayoutManager", className: "select-list-style", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      _react2.default.createElement("a", { rel: "nofollow", title: "list view", "data-style": "list", "data-action": "changeListStyle", className: "list-style mystyle-list action trackEvent", href: "", "data-trackdata": "listing page, view type, list view", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }),
      _react2.default.createElement("a", { rel: "nofollow", title: "grid view", "data-style": "grid", "data-action": "changeListStyle", className: "list-style mystyle-grid action trackEvent", href: "", "data-trackdata": "listing page, view type, grid view", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })
    ),
    _react2.default.createElement(
      "div",
      { className: "options-container opt-sort-by sort-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      },
      _react2.default.createElement(
        "span",
        { className: "sort-label", __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        "\xA0"
      ),
      _react2.default.createElement(
        "div",
        { "data-action": "selectUI", className: "options-select action select-ui", id: "select-ui-sortby", __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        _react2.default.createElement(
          "a",
          { rel: "nofollow", className: "button radius-lg select select-ui-val", href: "", __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            "span",
            { className: "select-ui-val", __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            _react2.default.createElement(
              "span",
              { className: "select-data", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              "Sort by: ",
              _react2.default.createElement(
                "b",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                meta.currentSort
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "select-ui-options", __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          _react2.default.createElement(
            "ul",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            _react2.default.createElement(
              "li",
              { className: "trackEvent cKeys ", "data-value": "Popular Results", "data-trackdata": "listing page, sort by, Popular Results", "data-keys": "{1}", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              _react2.default.createElement(
                "a",
                { className: "select-data trackEvent", rel: "nofollow", href: "/", "data-ajax-load": "", "data-ajax-type": "mainOnly", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                meta.currentSort
              )
            )
          )
        )
      )
    )
  );
};

exports.default = ListToolBar;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = '/Users/eliazerbraun/codeLab/react-lab/src/shared/components/ProductListing.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductListItem = __webpack_require__(203);

var _ProductListItem2 = _interopRequireDefault(_ProductListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function ProductListing(props) {
	var _this = this;

	// TODO figure out how u pass props directly 
	// lazy loading logic
	var list = props.listData.skus;
	return _react2.default.createElement(
		'div',
		{ className: 'item-index cf', 'data-lazy-load': '', __source: {
				fileName: _jsxFileName,
				lineNumber: 11
			},
			__self: this
		},
		_react2.default.createElement(
			'div',
			{ className: 'item-list clear style-is-list', id: 'ADOBrowse-InGrid', __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				},
				__self: this
			},
			list.map(function (sku, i) {
				console.log(sku);
				return _react2.default.createElement(_ProductListItem2.default, { key: i, item: i, __source: {
						fileName: _jsxFileName,
						lineNumber: 15
					},
					__self: _this
				});
			})
		)
	);
};

exports.default = ProductListing;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = '/Users/eliazerbraun/codeLab/react-lab/src/shared/components/ProductListItem.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(46);

var _ReviewSnapshot = __webpack_require__(204);

var _ReviewSnapshot2 = _interopRequireDefault(_ReviewSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function ProductListItem(props) {
    // TODO figure out how u pass props directly 
    return _react2.default.createElement(
        'div',
        { 'data-sku': '-SKU-', className: 'item', itemScope: '', itemType: 'http://schema.org/Product', __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            },
            __self: this
        },
        _react2.default.createElement('a', { href: '</>', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            },
            __self: this
        }),
        _react2.default.createElement(
            'div',
            { className: 'item-tag-price', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                },
                __self: this
            },
            ' '
        ),
        _react2.default.createElement(
            'div',
            { className: 'item-img', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                },
                __self: this
            },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/p/" + props.item, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    },
                    __self: this
                },
                _react2.default.createElement('img', { src: 'https://www.adorama.com/images/product/ipxkps.jpg', alt: '-ALT-', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    },
                    __self: this
                })
            ),
            _react2.default.createElement(
                'aside',
                { className: 'tagging', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    },
                    __self: this
                },
                ' ',
                _react2.default.createElement(
                    'em',
                    { className: 'highlight-tag deal', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        },
                        __self: this
                    },
                    'Top Rated Gear'
                ),
                ' '
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item-details', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                },
                __self: this
            },
            _react2.default.createElement(
                'h2',
                { itemProp: 'name', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    },
                    __self: this
                },
                ' ',
                _react2.default.createElement(
                    'a',
                    { href: props.item, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        },
                        __self: this
                    },
                    'Pentax KP 24MP Compact TTL Autofocus DSLR Camera with Built-In Retractable P-TTL Flash, Silver'
                ),
                ' '
            ),
            _react2.default.createElement(
                'div',
                { className: 'reviews-wrap', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    },
                    __self: this
                },
                _react2.default.createElement(
                    'a',
                    { itemType: 'http://schema.org/AggregateRating', itemScope: '', itemProp: 'aggregateRating', className: 'item-reviews hoverInfo', href: '</>', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'review-stars review-stars-5', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            },
                            __self: this
                        },
                        ' ',
                        _react2.default.createElement(
                            'em',
                            { itemProp: 'ratingValue', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                },
                                __self: this
                            },
                            '5.0'
                        ),
                        ' '
                    ),
                    ' ',
                    _react2.default.createElement(
                        'span',
                        { className: 'review-count', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'span',
                            { itemProp: 'ratingCount', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                },
                                __self: this
                            },
                            '8'
                        ),
                        ' ',
                        _react2.default.createElement(
                            'em',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                },
                                __self: this
                            },
                            'reviews'
                        ),
                        ' '
                    ),
                    _react2.default.createElement(_ReviewSnapshot2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: this
                    })
                )
            ),
            ' ',
            _react2.default.createElement(
                'em',
                { className: 'item-tag used ', 'data-tooltip-content': '<strong>Used rating: <i>Demo </i></strong> <p>Cameras, Photo Gear & Lenses:<br>Little or no signs of wear.</p><p><a className"popup" title="How We Rate" data-popup-class"popup500 trackEvent" href="/API/GetContent?ContentName=UsedPopup&output=desktop" data-track-data="listing page, item condition">More about used ratings</a></p>', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    },
                    __self: this
                },
                'Used - ',
                _react2.default.createElement(
                    'em',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        },
                        __self: this
                    },
                    'Rating:'
                ),
                ' ',
                _react2.default.createElement(
                    'i',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        },
                        __self: this
                    },
                    'D '
                ),
                ' '
            ),
            _react2.default.createElement(
                'p',
                { className: 'item-subtitle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    },
                    __self: this
                },
                ' '
            ),
            _react2.default.createElement(
                'p',
                { className: 'item-ids', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    },
                    __self: this
                },
                ' ',
                _react2.default.createElement(
                    'i',
                    { className: 'product-sku', content: 'US    863348', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        },
                        __self: this
                    },
                    'SKU: ',
                    _react2.default.createElement(
                        'span',
                        { itemProp: 'sku', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            },
                            __self: this
                        },
                        'US    863348'
                    )
                ),
                ' '
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item-actions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                },
                __self: this
            },
            _react2.default.createElement(
                'div',
                { className: 'prices', itemProp: 'offers', itemScope: '', itemType: 'http://schema.org/Offer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    },
                    __self: this
                },
                ' ',
                _react2.default.createElement(
                    'em',
                    { className: 'price-label ', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        },
                        __self: this
                    },
                    'Our Price'
                ),
                _react2.default.createElement('meta', { content: 'USD', itemProp: 'priceCurrency', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    },
                    __self: this
                }),
                _react2.default.createElement(
                    'strong',
                    { className: 'your-price', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        },
                        __self: this
                    },
                    '$849.00'
                ),
                _react2.default.createElement('input', { id: 'FinalPrice', type: 'hidden', value: '849.00', itemProp: 'price', content: '849.00', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    },
                    __self: this
                }),
                _react2.default.createElement(
                    'a',
                    { className: 'promo-financing action trackEvent', 'data-track-data': 'financing,as low as,listing', 'data-action': 'openFinancingPopup', href: '', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        },
                        __self: this
                    },
                    'As low as $142.00/mo for 6 months**'
                ),
                _react2.default.createElement('link', { content: 'http://schema.org/InStock', itemProp: 'availability', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    },
                    __self: this
                })
            ),
            _react2.default.createElement(
                'form',
                { lpformnum: '1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    },
                    __self: this
                },
                _react2.default.createElement('input', { className: 'itemData hoverInfo', type: 'hidden', required: '', pattern: '[1-9][0-9]{0,3}', maxLength: '4', size: '3', value: '1', name: 'US    863348_qty', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    },
                    __self: this
                }),
                _react2.default.createElement(
                    'button',
                    { type: 'button', 'data-action-timeout': '1000', 'data-action': 'addToCart', 'data-trackdata': 'listing page, add to cart, us    863348', className: 'button trackEvent add-to-cart action highlight-dark', 'data-popup-class': '', 'data-orig-val': 'Add to Cart', rel: '', href: '', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        },
                        __self: this
                    },
                    'Add to Cart'
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'save-actions', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    },
                    __self: this
                },
                ' ',
                _react2.default.createElement(
                    'a',
                    { href: '</>', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        },
                        __self: this
                    },
                    '+ wishlist'
                ),
                ' '
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item-info-secondary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                },
                __self: this
            },
            _react2.default.createElement(
                'div',
                { className: 'buy-section highlights', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    },
                    __self: this
                },
                _react2.default.createElement(
                    'ul',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'strong',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 59
                                },
                                __self: this
                            },
                            'Lens Included'
                        ),
                        ': Without Lens'
                    ),
                    _react2.default.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'strong',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                },
                                __self: this
                            },
                            'Format'
                        ),
                        ': APS-C Camera'
                    ),
                    _react2.default.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'strong',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                },
                                __self: this
                            },
                            'Resolution'
                        ),
                        ': 24MP'
                    ),
                    _react2.default.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'strong',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                },
                                __self: this
                            },
                            'Video Resolution'
                        ),
                        ': HD 1080'
                    ),
                    _react2.default.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'strong',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                },
                                __self: this
                            },
                            'Connectivity'
                        ),
                        ': Wifi'
                    ),
                    _react2.default.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'strong',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                },
                                __self: this
                            },
                            'Frames Per Second'
                        ),
                        ': 8.3 fps continuous shooting'
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'availability', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    },
                    __self: this
                },
                ' ',
                _react2.default.createElement(
                    'span',
                    { className: 'stock-in stock ', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        },
                        __self: this
                    },
                    'In Stock'
                ),
                ' ',
                _react2.default.createElement(
                    'a',
                    { className: 'popup product-shipping product-shipping-pickup', rel: 'nofollow', 'data-popup-class': 'popupShipping', href: '</>', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        'span',
                        { className: 'store-pickup', 'data-icon': 'p', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            },
                            __self: this
                        },
                        'Ship to NYC Store, Pickup Tomorrow 11:30AM'
                    )
                ),
                ' '
            )
        )
    );
};

exports.default = ProductListItem;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/ReviewSnapshot.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function ReviewSnapshot(props) {
    // TODO figure out how u pass props directly 
    return _react2.default.createElement(
        "div",
        { className: "hoverTips tipRight", id: "pr-snapshot", __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            },
            __self: this
        },
        " ",
        _react2.default.createElement(
            "strong",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                },
                __self: this
            },
            "Ratings Distribution"
        ),
        _react2.default.createElement(
            "ul",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                },
                __self: this
            },
            _react2.default.createElement(
                "li",
                { className: "pr-histogram-5 Stars", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    },
                    __self: this
                },
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-label", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        },
                        __self: this
                    },
                    "5 Stars"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pr-ratings-histogram-bar", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            },
                            __self: this
                        },
                        "\xA0"
                    )
                ),
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-count", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        },
                        __self: this
                    },
                    "(8)"
                ),
                " "
            ),
            _react2.default.createElement(
                "li",
                { className: "pr-histogram-4 Stars", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    },
                    __self: this
                },
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-label", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        },
                        __self: this
                    },
                    "4 Stars"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pr-ratings-histogram-bar", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            },
                            __self: this
                        },
                        "\xA0"
                    )
                ),
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-count", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        },
                        __self: this
                    },
                    "(0)"
                ),
                " "
            ),
            _react2.default.createElement(
                "li",
                { className: "pr-histogram-3 Stars", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    },
                    __self: this
                },
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-label", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        },
                        __self: this
                    },
                    "3 Stars"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pr-ratings-histogram-bar", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            },
                            __self: this
                        },
                        "\xA0"
                    )
                ),
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-count", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        },
                        __self: this
                    },
                    "(0)"
                ),
                " "
            ),
            _react2.default.createElement(
                "li",
                { className: "pr-histogram-2 Stars", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    },
                    __self: this
                },
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-label", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        },
                        __self: this
                    },
                    "2 Stars"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pr-ratings-histogram-bar", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            },
                            __self: this
                        },
                        "\xA0"
                    )
                ),
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-count", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        },
                        __self: this
                    },
                    "(0)"
                ),
                " "
            ),
            _react2.default.createElement(
                "li",
                { className: "pr-histogram-1 Stars", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    },
                    __self: this
                },
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-label", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        },
                        __self: this
                    },
                    "1 Stars"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "pr-ratings-histogram-bar", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            },
                            __self: this
                        },
                        "\xA0"
                    )
                ),
                " ",
                _react2.default.createElement(
                    "span",
                    { className: "pr-histogram-count", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        },
                        __self: this
                    },
                    "(0)"
                ),
                " "
            )
        )
    );
};

exports.default = ReviewSnapshot;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/RefineListing.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function RefineListing(props) {
  // TODO figure out how u pass props directly 
  return _react2.default.createElement(
    "div",
    { id: "filtersPlaceholder", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    },
    _react2.default.createElement(
      "aside",
      { className: "widget highlight filter-select", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      },
      _react2.default.createElement(
        "h3",
        { className: "widget-header", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        "Refine Your Results ",
        _react2.default.createElement("a", { "data-action": "toggleRefine", className: "action", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }),
        " "
      ),
      _react2.default.createElement(
        "div",
        { className: "widget-content", __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        },
        _react2.default.createElement(
          "section",
          { className: "filter-select-grp", __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement("div", { className: "filter-type filter-search shown", __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "section",
          { className: "filter-select-grp", "data-filter-category-name": "Brand", __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          " ",
          _react2.default.createElement(
            "a",
            { className: "filter-type action shown", "data-action": "bindToggleEle,scrollIntoView", "data-target": ":next()", __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            "Brand"
          ),
          _react2.default.createElement(
            "div",
            { className: "filter-options show", __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            },
            _react2.default.createElement(
              "ul",
              { className: "filter-available", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              _react2.default.createElement(
                "li",
                { "data-count": "51", "data-sequence": "1", "data-filterid": "4294966337", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Canon~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294966337", "data-filter-name": "Canon", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: this
                    },
                    "Canon"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      },
                      __self: this
                    },
                    "(51)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "2", "data-filterid": "4294965009", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Fujifilm~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294965009", "data-filter-name": "Fujifilm", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: this
                    },
                    "Fujifilm"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "3", "data-filterid": "4294961209", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Minolta~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294961209", "data-filter-name": "Minolta", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: this
                    },
                    "Minolta"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "4", "data-filterid": "4294961213", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Miscellaneous~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294961213", "data-filter-name": "Miscellaneous", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      },
                      __self: this
                    },
                    "Miscellaneous"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "59", "data-sequence": "5", "data-filterid": "4294963370", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Nikon~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294963370", "data-filter-name": "Nikon", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      },
                      __self: this
                    },
                    "Nikon"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      },
                      __self: this
                    },
                    "(59)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "2", "data-sequence": "6", "data-filterid": "4294962861", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Olympus~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294962861", "data-filter-name": "Olympus", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    "Olympus"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      },
                      __self: this
                    },
                    "(2)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "7", "data-sequence": "7", "data-filterid": "4294962858", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Pentax~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294962858", "data-filter-name": "Pentax", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      },
                      __self: this
                    },
                    "Pentax"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: this
                    },
                    "(7)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "6", "data-sequence": "8", "data-filterid": "4294965949", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Sony~Digital-SLR-Cameras", className: "trackEvent", "data-trackdata": "listing page, filters, Brand", "data-filterid": "4294965949", "data-filter-name": "Sony", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      },
                      __self: this
                    },
                    "Sony"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      },
                      __self: this
                    },
                    "(6)"
                  )
                ),
                " "
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "filter-select-grp", "data-filter-category-name": "Model", __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          },
          " ",
          _react2.default.createElement(
            "a",
            { className: "filter-type action shown", "data-action": "bindToggleEle,scrollIntoView", "data-target": ":next()", __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            },
            "Model"
          ),
          _react2.default.createElement(
            "div",
            { className: "filter-options show", __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            },
            _react2.default.createElement(
              "ul",
              { className: "filter-available", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              },
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "1", "data-filterid": "4294842230", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T2i-550D", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294842230", "data-filter-name": "Canon T2i / 550D", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      },
                      __self: this
                    },
                    "Canon T2i / 550D"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "2", "data-filterid": "4294931295", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T3", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294931295", "data-filter-name": "Canon T3", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      },
                      __self: this
                    },
                    "Canon T3"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "3", "data-filterid": "4294931296", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T3i", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294931296", "data-filter-name": "Canon T3i", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      },
                      __self: this
                    },
                    "Canon T3i"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "2", "data-sequence": "4", "data-filterid": "4294929950", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T5i", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294929950", "data-filter-name": "Canon T5i", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      },
                      __self: this
                    },
                    "Canon T5i"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      },
                      __self: this
                    },
                    "(2)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "2", "data-sequence": "5", "data-filterid": "4294843968", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T6i", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294843968", "data-filter-name": "Canon T6i", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      },
                      __self: this
                    },
                    "Canon T6i"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      },
                      __self: this
                    },
                    "(2)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "2", "data-sequence": "6", "data-filterid": "4294843966", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-T6s", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294843966", "data-filter-name": "Canon T6s", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      },
                      __self: this
                    },
                    "Canon T6s"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109
                      },
                      __self: this
                    },
                    "(2)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "7", "data-filterid": "4294842235", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-XSi-450D", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294842235", "data-filter-name": "Canon XSi / 450D", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      },
                      __self: this
                    },
                    "Canon XSi / 450D"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              ),
              _react2.default.createElement(
                "li",
                { "data-count": "1", "data-sequence": "8", "data-filterid": "4294843202", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                  },
                  __self: this
                },
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "/l/Used/Cameras/Digital-SLR-Cameras?sel=Model_Canon-XTi", className: "trackEvent", "data-trackdata": "listing page, filters, Model", "data-filterid": "4294843202", "data-filter-name": "Canon XTi", "data-ajax-load": "", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    "em",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119
                      },
                      __self: this
                    },
                    "Canon XTi"
                  ),
                  _react2.default.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                      },
                      __self: this
                    },
                    "(1)"
                  )
                ),
                " "
              )
            )
          )
        ),
        " ",
        _react2.default.createElement(
          "span",
          { className: "rwd-filters-close", __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          _react2.default.createElement(
            "a",
            { className: "button highlight-dark action", "data-action": "toggleRefine", __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            "I'm Done"
          )
        ),
        " "
      )
    )
  );
};

exports.default = RefineListing;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/ProductListingSelectedRefinments.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function ProductListingSelectedRefinments(props) {
	// TODO figure out how u pass props directly 
	var selectedRefinements = props.selectedRefinements;
	return _react2.default.createElement(
		"div",
		{ className: "selected-options", __source: {
				fileName: _jsxFileName,
				lineNumber: 8
			},
			__self: this
		},
		_react2.default.createElement(
			"ul",
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 9
				},
				__self: this
			},
			_react2.default.createElement(
				"h6",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 10
					},
					__self: this
				},
				"Refined By:"
			),
			_react2.default.createElement(
				"li",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					},
					__self: this
				},
				_react2.default.createElement(
					"strong",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 12
						},
						__self: this
					},
					selectedRefinements[0].name
				),
				_react2.default.createElement("a", { className: "filter-selected-icon action-remove trackEvent", "data-track-data": "listing page,filters,deselect", href: "/", "data-icon": "X", "data-filterid": "{4294961821}", "data-selected-filter": "", "data-ajax-load": "", "data-filter-name": props.name || 'no name', "data-ajax-type": "refinementsOnly", __source: {
						fileName: _jsxFileName,
						lineNumber: 13
					},
					__self: this
				})
			),
			_react2.default.createElement(
				"li",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 15
					},
					__self: this
				},
				_react2.default.createElement(
					"a",
					{ className: "trackEvent", "data-track-data": "listing page,filters,clear all", href: "/", "data-ajax-load": "", "data-ajax-type": "refinementsOnly", __source: {
							fileName: _jsxFileName,
							lineNumber: 15
						},
						__self: this
					},
					"Clear All"
				)
			),
			" "
		),
		" "
	);
};

exports.default = ProductListingSelectedRefinments;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/ProductListingSegments.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stateless Component
function ProductListingSegments(props) {
  // TODO figure out how u pass props directly 
  var segments = props.segments;
  return _react2.default.createElement(
    "nav",
    { className: "search-type-segments segments-ui clear cf", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    },
    _react2.default.createElement(
      "a",
      { href: "/", className: "list-segment", "data-ajax-load": "", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      },
      "All"
    ),
    _react2.default.createElement(
      "a",
      { href: "/", className: "list-segment active", "data-ajax-load": "", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      },
      "Used"
    )
  );
};

exports.default = ProductListingSegments;

/***/ })

};;