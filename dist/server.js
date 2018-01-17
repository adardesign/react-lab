/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

var _reactRouter = __webpack_require__(5);

var _sourceMapSupport = __webpack_require__(6);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _render = __webpack_require__(7);

var _render2 = _interopRequireDefault(_render);

var _nodeFetch = __webpack_require__(9);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = ['/', '/g/:gistId']; /**
                                   * index.js
                                   *
                                   * (C) 2017 mobile.de GmbH
                                   *
                                   * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
                                   * @since 09 Feb 2017
                                   */
/* eslint-disable no-console */

_sourceMapSupport2.default.install();

var app = (0, _express2.default)();
app.use('/static', _express2.default.static('./dist'));

app.get('*', function (req, res) {
    var match = routes.reduce(function (acc, route) {
        return (0, _reactRouter.matchPath)(req.url, route, { exact: true }) || acc;
    }, null);
    if (!match) {
        return res.status(404).send("No match");
    }
    return res("ee");

    // fetch('https://api.github.com/gists')
    //     .then(r => r.json())
    //     .then(gists => {
    //         res.status(200).send(render(
    //             (
    //                 <Router context={{}} location={req.url}>
    //                     <App gists={gists} />
    //                 </Router>
    //             ), gists
    //         ));
    //     }).catch(err => {
    //         console.error(err);
    //         res.status(500).send(render(<Error />));
    //     });
});

app.listen(3000, function () {
    return console.log('Demo app listening on port 3000');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * App.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
exports.default = function () {
  return _react2.default.createElement('div', null);
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(8);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
exports.default = function (renderMe, gists) {
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Universal React Router 4 Demo</title>\n        <style>\n            body {\n                font-family: Helvetica Neue, Arial, sans-serif;\n                margin: 0;\n            }\n            html { box-sizing: border-box; }\n            *, *:before, *:after { box-sizing: inherit; }\n        </style>\n    </head>\n    <body>\n        <div id="app">' + (0, _server.renderToString)(renderMe) + '</div>\n        ' + (gists ? '\n            <script>window.__gists__ = ' + JSON.stringify(gists) + ';</script>\n            <script src="/static/client.js"></script>\n        ' : '') + '\n    </body>\n</html>';
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ })
/******/ ]);