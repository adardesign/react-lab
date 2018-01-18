__isBrowser__ = false;
exports.ids = [2];
exports.modules = {

/***/ 199:
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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/CategoryFaqs.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CatFaq(props) {
  var _this = this;

  console.log(props);
  return _react2.default.createElement(
    "ul",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    },
    props.questions.map(function (faq, i) {
      return _react2.default.createElement(
        "li",
        { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: _this
        },
        _react2.default.createElement(
          "a",
          { href: "href", __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: _this
          },
          faq.text
        )
      );
    })
  );
};

function CategoryFaqs(props) {
  var _this2 = this;

  console.log(props);
  var faqs = props.faqCollection;
  console.log(faqs);

  return _react2.default.createElement(
    "aside",
    { className: "explore-more color-block cf clear", __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    },
    faqs.map(function (faq, i) {
      return _react2.default.createElement(
        "div",
        { key: i, className: "filter-description", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: _this2
        },
        _react2.default.createElement(
          "h5",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: _this2
          },
          faq.title
        ),
        _react2.default.createElement(
          "ul",
          { className: "linkset", __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: _this2
          },
          _react2.default.createElement(CatFaq, { questions: faq.questions, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: _this2
          })
        )
      );
    })
  );
};

exports.default = CategoryFaqs;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/components/Breadcrumbs.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Breadcrumbs(props) {
  var _this = this;

  return _react2.default.createElement(
    "div",
    { className: "breadcrumbs", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    },
    props.breadcrumbs.map(function (crumb, i) {
      return _react2.default.createElement(
        "div",
        { key: i, className: "crumb", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: _this
        },
        crumb.name
      );
    })
  );
};

exports.default = Breadcrumbs;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// isMobile
function DeviceType(type) {
	if (window.innerWidth < 500) return "mobile";
	return "desktop";
}

exports.default = DeviceType;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/eliazerbraun/codeLab/react-lab/src/shared/pages/CategoryPage.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FeaturedBrands = __webpack_require__(199);

var _FeaturedBrands2 = _interopRequireDefault(_FeaturedBrands);

var _CategoryFaqs = __webpack_require__(221);

var _CategoryFaqs2 = _interopRequireDefault(_CategoryFaqs);

var _Breadcrumbs = __webpack_require__(222);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _DeviceType = __webpack_require__(223);

var _DeviceType2 = _interopRequireDefault(_DeviceType);

var _reactRouterDom = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Stateless componants
var CatChildren = function CatChildren(props) {
  return props.collection.map(function (childSub, j) {
    return _react2.default.createElement(
      "li",
      { key: j * 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      },
      _react2.default.createElement(
        "a",
        { href: "/", title: "", __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: undefined
        },
        childSub.title
      )
    );
  });
};

var CategoryPage = function (_Component) {
  _inherits(CategoryPage, _Component);

  function CategoryPage(props) {
    _classCallCheck(this, CategoryPage);

    var _this = _possibleConstructorReturn(this, (CategoryPage.__proto__ || Object.getPrototypeOf(CategoryPage)).call(this, props));

    _this.state = {
      deviceType: (0, _DeviceType2.default)()
    };
    return _this;
  }

  _createClass(CategoryPage, [{
    key: "getOriginalState",
    value: function getOriginalState() {
      return fetch("../api/catagorypage.json").then(function (resp) {
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
              lineNumber: 39
            },
            __self: this
          },
          _react2.default.createElement("img", { src: "http://adardesign.com/codelab/react-router/images/catSkeleton.jpg", __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          })
        );
      }
      return _react2.default.createElement(
        "div",
        { className: "Catagory", __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        },
        _react2.default.createElement(_Breadcrumbs2.default, { breadcrumbs: this.state.page.breadcrumbs, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }),
        _react2.default.createElement(
          "div",
          { className: "category-title", __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          _react2.default.createElement(
            "h1",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            this.state.currentCatagory.title
          ),
          this.state.deviceType === "desktop" && _react2.default.createElement("img", { className: "cat-hero", src: this.state.currentCatagory.image, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "category-container layout-80-20 layout-reverse clear", __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          _react2.default.createElement(
            "div",
            { className: "col1", __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "filter-description", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              },
              this.state.currentCatagory.description
            ),
            _react2.default.createElement(
              "section",
              { className: "category-index", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              },
              this.state.subCatagories.map(function (sub, i) {
                return _react2.default.createElement(
                  "div",
                  { key: i * 2, className: "cat-item", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: _this3
                  },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/l/" + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: _this3
                    },
                    _react2.default.createElement("img", { src: sub.image, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      },
                      __self: _this3
                    }),
                    _react2.default.createElement(
                      "h2",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        },
                        __self: _this3
                      },
                      sub.title
                    )
                  ),
                  _react2.default.createElement(
                    "ul",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      },
                      __self: _this3
                    },
                    _react2.default.createElement(CatChildren, { collection: sub.children, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      },
                      __self: _this3
                    })
                  )
                );
              })
            ),
            this.state.deviceType === "desktop" && _react2.default.createElement(_CategoryFaqs2.default, { faqCollection: this.state.currentCatagory.categoryFaqs, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col2", __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "category-aside-nav", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                },
                __self: this
              },
              this.state.subCatagories.map(function (sub, i) {
                return _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/l/" + i, key: i * 2, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: _this3
                  },
                  sub.title
                );
              })
            ),
            _react2.default.createElement(_FeaturedBrands2.default, { brands: this.state.currentCatagory.featuredBrands, __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return CategoryPage;
}(_react.Component);

exports.default = CategoryPage;

/***/ })

};;