"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _Users_alexandrumatei_Documents_programming_uma_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ \"./components/Icons/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./components/Header/components.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/alexandrumatei/Documents/programming/uma/website/components/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar HEADER_LINKS = [{\n  key: \"Projects\",\n  component: function component(_ref) {\n    var props = (0,_Users_alexandrumatei_Documents_programming_uma_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _ref);\n\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://projects.umaproject.org/\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 32\n    }, _this);\n  }\n}, {\n  key: \"Products\",\n  component: function component(_ref2) {\n    var props = (0,_Users_alexandrumatei_Documents_programming_uma_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _ref2);\n\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 31\n    }, _this);\n  }\n}, {\n  key: \"Docs\",\n  component: function component(_ref3) {\n    var props = (0,_Users_alexandrumatei_Documents_programming_uma_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _ref3);\n\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://docs.umaproject.org/\",\n      children: \"Docs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 31\n    }, _this);\n  }\n}, {\n  key: \"Community\",\n  component: function component(_ref4) {\n    var props = (0,_Users_alexandrumatei_Documents_programming_uma_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _ref4);\n\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 31\n    }, _this);\n  }\n}, {\n  key: \"Vote\",\n  component: function component(_ref5) {\n    var props = (0,_Users_alexandrumatei_Documents_programming_uma_website_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _ref5);\n\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 32\n    }, _this);\n  }\n}];\n\nvar NavLinks = function NavLinks() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LinkList, {\n    children: HEADER_LINKS.map(function (link) {\n      return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LinkListItem, {\n        children: link.component\n      }, link.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavLinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = NavLinks;\nvar Header = function Header() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Content, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LogoLink, {\n        href: \"/\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.UmaLogoIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavContainer, {\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinks, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Header;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c2, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNUyxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsRUFBQUEsR0FBRyxFQUFFLFVBRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsUUFBS0MsS0FBTDs7QUFBQSxXQUFnQix1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFoQjtBQUFBO0FBRmIsQ0FEbUIsRUFLbkI7QUFDRUYsRUFBQUEsR0FBRyxFQUFFLFVBRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsUUFBS0MsS0FBTDs7QUFBQSxXQUFlLHVFQUFDLGdEQUFEO0FBQVMsVUFBSSxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZjtBQUFBO0FBRmIsQ0FMbUIsRUFTbkI7QUFDRUYsRUFBQUEsR0FBRyxFQUFFLE1BRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsUUFBS0MsS0FBTDs7QUFBQSxXQUFlLHVFQUFDLGdEQUFEO0FBQVMsVUFBSSxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWY7QUFBQTtBQUZiLENBVG1CLEVBYW5CO0FBQ0VGLEVBQUFBLEdBQUcsRUFBRSxXQURQO0FBRUVDLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFFBQUtDLEtBQUw7O0FBQUEsV0FBZSx1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmO0FBQUE7QUFGYixDQWJtQixFQWlCbkI7QUFDRUYsRUFBQUEsR0FBRyxFQUFFLE1BRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsUUFBS0MsS0FBTDs7QUFBQSxXQUFnQix1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFoQjtBQUFBO0FBRmIsQ0FqQm1CLENBQXJCOztBQXVCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR2Qsc0RBQVMsRUFBeEI7QUFFQSxTQUNFLHVFQUFDLGlEQUFEO0FBQUEsY0FDR1MsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxhQUNoQix1RUFBQyxxREFBRDtBQUFBLGtCQUE4QkEsSUFBSSxDQUFDTDtBQUFuQyxTQUFtQkssSUFBSSxDQUFDTixHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVZEOztHQUFNRztVQUNXYjs7O0tBRFhhO0FBWUMsSUFBTUksTUFBK0IsR0FBRyxTQUFsQ0EsTUFBa0MsR0FBTTtBQUNuRCxTQUNFLHVFQUFDLGtEQUFEO0FBQUEsY0FDRSx1RUFBQyxnREFBRDtBQUFBLGlCQUNFLHVFQUFDLGlEQUFEO0FBQVUsWUFBSSxFQUFDLEdBQWY7QUFBQSxrQkFDRSx1RUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUUsdUVBQUMscURBQUQ7QUFBQSxrQkFDRSx1RUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FkTTtNQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVW1hTG9nb0ljb24gfSBmcm9tIFwiLi4vSWNvbnNcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9MaW5rXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIENvbnRlbnQsIExpbmtMaXN0LCBMaW5rTGlzdEl0ZW0sIExvZ29MaW5rLCBOYXZDb250YWluZXIsIE5hdkxpbmsgfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcblxuY29uc3QgSEVBREVSX0xJTktTID0gW1xuICB7XG4gICAga2V5OiBcIlByb2plY3RzXCIsXG4gICAgY29tcG9uZW50OiAoey4uLnByb3BzfSkgPT4gPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vcHJvamVjdHMudW1hcHJvamVjdC5vcmcvXCI+UHJvamVjdHM8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIlByb2R1Y3RzXCIsXG4gICAgY29tcG9uZW50OiAoey4uLnByb3BzfSkgPT48TmF2TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIkRvY3NcIixcbiAgICBjb21wb25lbnQ6ICh7Li4ucHJvcHN9KSA9PjxOYXZMaW5rIGhyZWY9XCJodHRwczovL2RvY3MudW1hcHJvamVjdC5vcmcvXCI+RG9jczwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiQ29tbXVuaXR5XCIsXG4gICAgY29tcG9uZW50OiAoey4uLnByb3BzfSkgPT48TmF2TGluayBocmVmPVwiaHR0cHM6Ly92b3RlLnVtYXByb2plY3Qub3JnL1wiPlZvdGU8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIlZvdGVcIixcbiAgICBjb21wb25lbnQ6ICh7Li4ucHJvcHN9KSA9PiA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly92b3RlLnVtYXByb2plY3Qub3JnL1wiPlZvdGU8L05hdkxpbms+LFxuICB9LFxuXTtcblxuY29uc3QgTmF2TGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtMaXN0PlxuICAgICAge0hFQURFUl9MSU5LUy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgPExpbmtMaXN0SXRlbSBrZXk9e2xpbmsua2V5fT57bGluay5jb21wb25lbnR9PC9MaW5rTGlzdEl0ZW0+XG4gICAgICApKX1cbiAgICA8L0xpbmtMaXN0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxMb2dvTGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxVbWFMb2dvSWNvbiAvPlxuICAgICAgICA8L0xvZ29MaW5rPlxuICAgICAgICA8TmF2Q29udGFpbmVyPlxuICAgICAgICAgIDxOYXZMaW5rcyAvPlxuICAgICAgICA8L05hdkNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVW1hTG9nb0ljb24iLCJDb250YWluZXIiLCJDb250ZW50IiwiTGlua0xpc3QiLCJMaW5rTGlzdEl0ZW0iLCJMb2dvTGluayIsIk5hdkNvbnRhaW5lciIsIk5hdkxpbmsiLCJIRUFERVJfTElOS1MiLCJrZXkiLCJjb21wb25lbnQiLCJwcm9wcyIsIk5hdkxpbmtzIiwicm91dGVyIiwibWFwIiwibGluayIsIkhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _extends; }\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzP2NhYzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js\n");

/***/ })

});