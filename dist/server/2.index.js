__isBrowser__ = false;
exports.ids = [2];
exports.modules = {

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = '/Users/eliazerbraun/codeLab/react-lab/src/shared/pages/HomePage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(46);

var _reactIdSwiper = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-id-swiper\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

var _HomeAboutCMSWidget = __webpack_require__(196);

var _HomeAboutCMSWidget2 = _interopRequireDefault(_HomeAboutCMSWidget);

var _reactLazyload = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-lazyload\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HomePage, [{
        key: 'getOriginalState',
        value: function getOriginalState() {
            return fetch("../api/homepage.json").then(function (resp) {
                return resp.json();
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.getOriginalState().then(function (data) {
                _this2.setState(data);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (!this.state.page) return _react2.default.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    },
                    __self: this
                },
                'Loading'
            );
            return _react2.default.createElement(
                'div',
                { className: 'homePage', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    },
                    __self: this
                },
                _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://www.adorama.com/Als.Mvc/nspc/combres.axd/ADMainSiteHomePageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    },
                    __self: this
                }),
                _react2.default.createElement(
                    _reactIdSwiper2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: this
                    },
                    this.state.heros.map(function (hero, i) {
                        return _react2.default.createElement(
                            'a',
                            { key: i, className: 'trackEvent banner', 'data-trackdata': 'Home Page,hero|position {i}, {hero.text}',
                                href: hero.link, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 29
                                },
                                __self: _this3
                            },
                            _react2.default.createElement(
                                'h2',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 31
                                    },
                                    __self: _this3
                                },
                                hero.text
                            ),
                            _react2.default.createElement('img', { src: hero.image, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32
                                },
                                __self: _this3
                            })
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'homePageCatgoryWidget catagoryWidget widget section',
                        id: 'homePageCatgoryWidget', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        },
                        __self: this
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'tabsContainer', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 41
                            },
                            __self: this
                        },
                        this.state.categories.map(function (cat, i) {
                            return _react2.default.createElement(
                                'a',
                                { key: i, href: '#categoryWidget/{cat.id}', className: i === 0 ? 'active' : ' ', 'data-id': 'featuredTab', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 43
                                    },
                                    __self: _this3
                                },
                                cat.id
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'catagoryWidgetContent', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            },
                            __self: this
                        },
                        _react2.default.createElement(
                            'ul',
                            { className: 'catagoryWidgetList', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                },
                                __self: this
                            },
                            this.state.categories[0].list.map(function (cat, i) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: i, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 50
                                        },
                                        __self: _this3
                                    },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: cat.link, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 51
                                            },
                                            __self: _this3
                                        },
                                        _react2.default.createElement('img', { src: cat.image, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 52
                                            },
                                            __self: _this3
                                        }),
                                        _react2.default.createElement(
                                            'h3',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 53
                                                },
                                                __self: _this3
                                            },
                                            cat.text
                                        )
                                    )
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactLazyload2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        },
                        __self: this
                    },
                    _react2.default.createElement(_HomeAboutCMSWidget2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = '/Users/eliazerbraun/codeLab/react-lab/src/shared/components/HomeAboutCMSWidget.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIdSwiper = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-id-swiper\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

var _SimpleCMSWidget = __webpack_require__(197);

var _SimpleCMSWidget2 = _interopRequireDefault(_SimpleCMSWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeAboutCMSWidget = function (_Component) {
  _inherits(HomeAboutCMSWidget, _Component);

  function HomeAboutCMSWidget(props) {
    _classCallCheck(this, HomeAboutCMSWidget);

    var _this = _possibleConstructorReturn(this, (HomeAboutCMSWidget.__proto__ || Object.getPrototypeOf(HomeAboutCMSWidget)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(HomeAboutCMSWidget, [{
    key: 'getOriginalState',
    value: function getOriginalState() {
      // TODO: get the url programmatically  
      return fetch("../api/CMS/home-about.json").then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.getOriginalState().then(function (data) {
        _this2.setState(data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var params = {
        slidesPerGroup: 1,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      };
      if (!this.state.content) {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          _react2.default.createElement('img', { src: 'http://adardesign.com/codelab/react-router/images/catSkeleton.jpg', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'adorama-about', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        },
        _react2.default.createElement(
          _reactIdSwiper2.default,
          Object.assign({}, params, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }),
          this.state.content.map(function (widget) {
            return _react2.default.createElement(
              'div',
              { key: widget.id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: _this3
              },
              _react2.default.createElement(_SimpleCMSWidget2.default, { content: widget.content, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: _this3
              })
            );
          })
        )
      );
    }
  }]);

  return HomeAboutCMSWidget;
}(_react.Component);

exports.default = HomeAboutCMSWidget;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _jsxFileName = '/Users/eliazerbraun/codeLab/react-lab/src/shared/components/SimpleCMSWidget.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SimpleCMSWidget(props) {
  function createMarkup() {
    return { __html: props.content };
  }
  return _react2.default.createElement('div', { dangerouslySetInnerHTML: createMarkup(), __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

exports.default = SimpleCMSWidget;

/***/ })

};;