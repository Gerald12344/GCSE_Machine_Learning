module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: Sliders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sliders", function() { return Sliders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.module.css */ "./styles/form.module.css");
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Sliders(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", null, props.title), __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bar
  }, __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultValue: 1,
    "aria-labelledby": "discrete-slider",
    valueLabelDisplay: "auto",
    step: 1,
    marks: true,
    min: 1,
    max: props.max,
    onChange: props.onChange
  })));
}

/***/ }),

/***/ "./pages/Train.js":
/*!************************!*\
  !*** ./pages/Train.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/form.module.css */ "./styles/form.module.css");
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ






function HomePage() {
  let {
    0: testHook,
    1: setTestHook
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined); //Hooks 

  let {
    0: PredictedGrade,
    1: setPredictedGrade
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  let {
    0: one,
    1: setOne
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("loading");
  let {
    0: two,
    1: setTwo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("loading");
  let {
    0: three,
    1: setThree
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("loading");
  let {
    0: four,
    1: setFour
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("loading"); //Return Hook

  let {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  let {
    0: update,
    1: forceUpdate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setOne(Math.floor(Math.random() * 9));
    setTwo(Math.floor(Math.random() * 9));
    setThree(Math.floor(Math.random() * 9));
    setFour(Math.floor(Math.random() * 9));
  }, [update]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async () => {
      try {
        let data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(window.origin + '/api/test');
        setTestHook(data.data);
      } catch (e) {
        setTestHook(e);
      }
    })();
  }, []);

  let sendToServer = async e => {
    e.preventDefault();
    forceUpdate(update + 1);
    let data = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(window.origin + '/api/addtoDataTraining', {
      LastMockresult: one,
      TargetGrade: two,
      PredictedGrade: three,
      AttitudeToLearing: four,
      PredictedGrade
    });
  };

  return __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main + ' ' + _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center
  }, __jsx("div", null, "Welcome to the front end!!"), __jsx("h3", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ResultBox
  }, testHook ? "Server is fully loaded and functional!" : "Loading..."), __jsx("h1", null, "What grade would you award this student "), __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Form
  }, __jsx("h3", null, "LastMockresult: ", one), __jsx("h3", null, "TargetGrade: ", two), __jsx("h3", null, "PredictedGrade: ", three), __jsx("h3", null, "AttitudeToLearing: ", four), __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_4__["Sliders"], {
    max: 9,
    title: "Acheived Grade",
    onChange: (e, val) => setPredictedGrade(val / 9)
  }), __jsx("button", {
    onClick: sendToServer,
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button
  }, "Send to Server")), __jsx("p", null, " You have entererd ", update, " data entries"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./styles/form.module.css":
/*!********************************!*\
  !*** ./styles/form.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Form": "form_Form__1X50n",
	"bar": "form_bar__WiJsI",
	"button": "form_button__3KFfL",
	"main": "form_main__3XSUk",
	"center": "form_center__QuLrR",
	"ResultBox": "form_ResultBox__2cQt4"
};

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/Train.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/FrontEndOfEPQ/pages/Train.js */"./pages/Train.js");


/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=Train.js.map