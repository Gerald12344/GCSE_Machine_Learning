webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/form.module.css */ "./styles/form.module.css");
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/slider */ "./components/slider.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      testHook = _useState[0],
      setTestHook = _useState[1]; //Hooks 


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      LastMockresult = _useState2[0],
      setLastMockresult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      TargetGrade = _useState3[0],
      setTargetGrade = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      PredictedGrade = _useState4[0],
      setPredictedGrade = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      AttitudeToLearing = _useState5[0],
      setAttitudeToLearing = _useState5[1]; //Return Hook


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      result = _useState6[0],
      setResult = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(window.origin + '/api/test'));

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
  }, []);

  var sendToServer = function sendToServer(e) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function sendToServer$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            setResult("LOADING...");
            _context2.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(window.origin + '/api/inputTest', {
              LastMockresult: LastMockresult,
              TargetGrade: TargetGrade,
              PredictedGrade: PredictedGrade,
              AttitudeToLearing: AttitudeToLearing
            }));

          case 4:
            data = _context2.sent;
            console.log({
              LastMockresult: LastMockresult,
              TargetGrade: TargetGrade,
              PredictedGrade: PredictedGrade,
              AttitudeToLearing: AttitudeToLearing
            });
            console.log(data.data.AchievedGrade);
            setResult(data.data.AchievedGrade);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  return __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main
  }, __jsx("div", null, "Welcome to the front end!!"), __jsx("h3", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ResultBox
  }, testHook ? "Server is fully loaded and functional!" : "Loading..."), __jsx("h1", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ResultBox
  }, result ? "I would award this student a grade ".concat(Math.floor(result * 9)) : "", " with a confidence of ", Math.floor(result - Math.floor(result * 9) / 9), "%"), __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Form + ' ' + _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.center,
    severity: "warning"
  }, "This students grade is 2 above there last mock result, you need to verify this grade"), __jsx("div", {
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Form
  }, __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_5__["Sliders"], {
    max: 9,
    title: "Last Mock result",
    onChange: function onChange(e, val) {
      return setLastMockresult(val / 9);
    }
  }), __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_5__["Sliders"], {
    max: 9,
    title: "Target Grade",
    onChange: function onChange(e, val) {
      return setTargetGrade(val / 9);
    }
  }), __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_5__["Sliders"], {
    max: 9,
    title: "Predicted Grade",
    onChange: function onChange(e, val) {
      return setPredictedGrade(val / 9);
    }
  }), __jsx(_components_slider__WEBPACK_IMPORTED_MODULE_5__["Sliders"], {
    max: 4,
    title: "Attidue to Learning",
    onChange: function onChange(e, val) {
      return setAttitudeToLearing(val / 4);
    }
  }), __jsx("button", {
    onClick: sendToServer,
    className: _styles_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button
  }, "Send to Server")));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.69797b70a431b7f188d4.hot-update.js.map