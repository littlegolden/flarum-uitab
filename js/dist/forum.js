module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/ItntUitab.js":
/*!*******************************************!*\
  !*** ./src/forum/components/ItntUitab.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItntUitab; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/Link */ "flarum/forum/components/Link");
/* harmony import */ var flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5__);







var ItntUitab = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ItntUitab, _Component);

  function ItntUitab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ItntUitab.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    var _this = this;

    var uitabHome = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('home_page');

    if (typeof flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user === 'undefined') {
      return m("div", {
        id: "ItntUitab"
      }, m("div", {
        "class": "foureightheight"
      }), m("div", {
        "class": "mobile-app-icon-bar",
        id: "myDIV"
      }, m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: uitabHome
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fa fa-home"
      }), m("span", {
        "class": "spanstyle"
      }))), m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onclick: function onclick() {
          return _this.newDiscussionAction()["catch"](function () {});
        }
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fas fa-edit"
      }), m("span", {
        "class": "spanstyle"
      }))), m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: uitabHome + 'tags'
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fas fa-tags"
      }), m("span", {
        "class": "spanstyle"
      })))));
    } else {
      return m("div", {
        id: "ItntUitab"
      }, m("div", {
        "class": "foureightheight"
      }), m("div", {
        "class": "mobile-app-icon-bar",
        id: "myDIV"
      }, m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: uitabHome
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fa fa-home"
      }), m("span", {
        "class": "spanstyle"
      }))), m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: uitabHome + 'tags'
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fas fa-tags"
      }), m("span", {
        "class": "spanstyle"
      }))), m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onclick: function onclick() {
          return _this.newDiscussionAction()["catch"](function () {});
        }
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fas fa-edit"
      }), m("span", {
        "class": "spanstyle"
      }))), m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: uitabHome + 'settings'
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fas fa-user-cog"
      }), m("span", {
        "class": "spanstyle"
      }))), m(flarum_forum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: uitabHome + 'notifications'
      }, m("button", {
        "class": "buttonstyle"
      }, m("i", {
        "class": "fas fa-bell"
      }), m("span", {
        "class": "spanstyle"
      })))));
    }
  };

  _proto.newDiscussionAction = function newDiscussionAction() {
    return new Promise(function (resolve, reject) {
      if (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
        flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.load(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a, {
          user: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user
        });
        flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.show();
        return resolve(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer);
      } else {
        flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default.a);
        return reject();
      }
    });
  };

  return ItntUitab;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Application */ "flarum/common/Application");
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ItntUitab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ItntUitab */ "./src/forum/components/ItntUitab.js");



app.initializers.add('itnt-uitab', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_Application__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'mount', function () {
    var footer = document.createElement('div');
    m.mount(document.body.appendChild(footer), _components_ItntUitab__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
});

/***/ }),

/***/ "flarum/common/Application":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/Application']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Application'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/Link":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Link']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/Link'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map