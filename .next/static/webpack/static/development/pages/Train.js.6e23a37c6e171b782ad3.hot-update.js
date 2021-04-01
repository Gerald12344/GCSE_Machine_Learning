webpackHotUpdate("static/development/pages/Train.js",{

/***/ "./pages/Train.js":
/*!************************!*\
  !*** ./pages/Train.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/form.module.css */ "./styles/form.module.css");
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// (c) Harvey Randall - 2020-2021 
// GCSE exam algorithm for EPQ






function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      testHook = _useState[0],
      setTestHook = _useState[1]; //Hooks 


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      PredictedGrade = _useState2[0],
      setPredictedGrade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("loading"),
      one = _useState3[0],
      setOne = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("loading"),
      two = _useState4[0],
      setTwo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("loading"),
      three = _useState5[0],
      setThree = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("loading"),
      four = _useState6[0],
      setFour = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setOne(Math.floor(Math.random() * 9));
    setTwo(Math.floor(Math.random() * 9));
    setThree(Math.floor(Math.random() * 9));
    setFour(Math.floor(Math.random() * 9));
  }, [update]); //Return Hook

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      result = _useState7[0],
      setResult = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      update = _useState8[0],
      forceUpdate = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function _callee() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(window.origin + '/api/test'));

            case 3:
              data = _context.sent;
              setTestHook(data.data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setTestHook(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    })();
  });

  var sendToServer = function sendToServer(e) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function sendToServer$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            forceUpdate(update + 1);
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.origin + '/api/addtoDataTraining', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
              LastMockresult: one,
              TargetGrade: two,
              PredictedGrade: three,
              AttitudeToLearing: four
            }, "PredictedGrade", PredictedGrade));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  return __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main + ' ' + _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.center
  }, __jsx("div", null, "Welcome to the front end!!"), __jsx("h3", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.ResultBox
  }, testHook ? "Server is fully loaded and functional!" : "Loading..."), __jsx("h1", null, "What grade would you award this student "), __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Form
  }, __jsx("h3", null, "LastMockresult: ", one), __jsx("h3", null, "TargetGrade: ", two), __jsx("h3", null, "PredictedGrade: ", three), __jsx("h3", null, "AttitudeToLearing: ", four), __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_6__["Sliders"], {
    max: 9,
    title: "Acheived Grade",
    onChange: function onChange(e, val) {
      return setPredictedGrade(val / 9);
    }
  }), __jsx("button", {
    onClick: sendToServer,
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button
  }, "Send to Server")), __jsx("p", null, " You have entererd ", update, " data entries"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=Train.js.6e23a37c6e171b782ad3.hot-update.js.map