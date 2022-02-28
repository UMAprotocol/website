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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ \"./components/Icons/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Header/components.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/Users/alexandrumatei/Documents/programming/uma/website/components/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar HEADER_LINKS = [{\n  key: \"Projects\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://projects.umaproject.org/\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 22\n    }, _this);\n  }\n}, {\n  key: \"Products\",\n  component: function component(_ref) {\n    var path = _ref.path;\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"/products\",\n      active: path === \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 30\n    }, _this);\n  }\n}, {\n  key: \"Docs\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://docs.umaproject.org/\",\n      children: \"Docs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 21\n    }, _this);\n  }\n}, {\n  key: \"Community\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }, _this);\n  }\n}, {\n  key: \"Vote\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 22\n    }, _this);\n  }\n}];\n\nvar NavLinks = function NavLinks() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.LinkList, {\n    children: HEADER_LINKS.map(function (link) {\n      return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.LinkListItem, {\n        children: link.component({\n          path: router.pathname\n        })\n      }, link.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavLinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = NavLinks;\nvar Header = function Header() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.LogoLink, {\n        href: \"/\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_1__.UmaLogoIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavContainer, {\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(NavLinks, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Header;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c2, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNUyxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsRUFBQUEsR0FBRyxFQUFFLFVBRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBTSx1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFOO0FBQUE7QUFGYixDQURtQixFQUtuQjtBQUNFRCxFQUFBQSxHQUFHLEVBQUUsVUFEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUFjLHVFQUFDLGdEQUFEO0FBQVMsVUFBSSxFQUFDLFdBQWQ7QUFBMEIsWUFBTSxFQUFFQSxJQUFJLEtBQUssV0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZDtBQUFBO0FBRmIsQ0FMbUIsRUFTbkI7QUFDRUYsRUFBQUEsR0FBRyxFQUFFLE1BRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBSyx1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFMO0FBQUE7QUFGYixDQVRtQixFQWFuQjtBQUNFRCxFQUFBQSxHQUFHLEVBQUUsV0FEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFLLHVFQUFDLGdEQUFEO0FBQVMsVUFBSSxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUw7QUFBQTtBQUZiLENBYm1CLEVBaUJuQjtBQUNFRCxFQUFBQSxHQUFHLEVBQUUsTUFEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFNLHVFQUFDLGdEQUFEO0FBQVMsVUFBSSxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU47QUFBQTtBQUZiLENBakJtQixDQUFyQjs7QUF1QkEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdkLHNEQUFTLEVBQXhCO0FBRUEsU0FDRSx1RUFBQyxpREFBRDtBQUFBLGNBQ0dTLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsYUFDaEIsdUVBQUMscURBQUQ7QUFBQSxrQkFBOEJBLElBQUksQ0FBQ0wsU0FBTCxDQUFlO0FBQUVDLFVBQUFBLElBQUksRUFBRUUsTUFBTSxDQUFDRztBQUFmLFNBQWY7QUFBOUIsU0FBbUJELElBQUksQ0FBQ04sR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FWRDs7R0FBTUc7VUFDV2I7OztLQURYYTtBQVlDLElBQU1LLE1BQStCLEdBQUcsU0FBbENBLE1BQWtDLEdBQU07QUFDbkQsU0FDRSx1RUFBQyxrREFBRDtBQUFBLGNBQ0UsdUVBQUMsZ0RBQUQ7QUFBQSxpQkFDRSx1RUFBQyxpREFBRDtBQUFVLFlBQUksRUFBQyxHQUFmO0FBQUEsa0JBQ0UsdUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlFLHVFQUFDLHFEQUFEO0FBQUEsa0JBQ0UsdUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZE07TUFBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2YyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFVtYUxvZ29JY29uIH0gZnJvbSBcIi4uL0ljb25zXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vTGlua1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDb250ZW50LCBMaW5rTGlzdCwgTGlua0xpc3RJdGVtLCBMb2dvTGluaywgTmF2Q29udGFpbmVyLCBOYXZMaW5rIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXG5cbmNvbnN0IEhFQURFUl9MSU5LUyA9IFtcbiAge1xuICAgIGtleTogXCJQcm9qZWN0c1wiLFxuICAgIGNvbXBvbmVudDogKCkgPT4gPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vcHJvamVjdHMudW1hcHJvamVjdC5vcmcvXCI+UHJvamVjdHM8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIlByb2R1Y3RzXCIsXG4gICAgY29tcG9uZW50OiAoeyBwYXRoIH0pID0+IDxOYXZMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIiBhY3RpdmU9e3BhdGggPT09IFwiL3Byb2R1Y3RzXCJ9PlByb2R1Y3RzPC9OYXZMaW5rPixcbiAgfSxcbiAge1xuICAgIGtleTogXCJEb2NzXCIsXG4gICAgY29tcG9uZW50OiAoKSA9PjxOYXZMaW5rIGhyZWY9XCJodHRwczovL2RvY3MudW1hcHJvamVjdC5vcmcvXCI+RG9jczwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiQ29tbXVuaXR5XCIsXG4gICAgY29tcG9uZW50OiAoKSA9PjxOYXZMaW5rIGhyZWY9XCJodHRwczovL3ZvdGUudW1hcHJvamVjdC5vcmcvXCI+Vm90ZTwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiVm90ZVwiLFxuICAgIGNvbXBvbmVudDogKCkgPT4gPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vdm90ZS51bWFwcm9qZWN0Lm9yZy9cIj5Wb3RlPC9OYXZMaW5rPixcbiAgfSxcbl07XG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rTGlzdD5cbiAgICAgIHtIRUFERVJfTElOS1MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgIDxMaW5rTGlzdEl0ZW0ga2V5PXtsaW5rLmtleX0+e2xpbmsuY29tcG9uZW50KHsgcGF0aDogcm91dGVyLnBhdGhuYW1lIH0pfTwvTGlua0xpc3RJdGVtPlxuICAgICAgKSl9XG4gICAgPC9MaW5rTGlzdD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb250ZW50PlxuICAgICAgICA8TG9nb0xpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VW1hTG9nb0ljb24gLz5cbiAgICAgICAgPC9Mb2dvTGluaz5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TmF2TGlua3MgLz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgICBcbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlVtYUxvZ29JY29uIiwiQ29udGFpbmVyIiwiQ29udGVudCIsIkxpbmtMaXN0IiwiTGlua0xpc3RJdGVtIiwiTG9nb0xpbmsiLCJOYXZDb250YWluZXIiLCJOYXZMaW5rIiwiSEVBREVSX0xJTktTIiwia2V5IiwiY29tcG9uZW50IiwicGF0aCIsIk5hdkxpbmtzIiwicm91dGVyIiwibWFwIiwibGluayIsInBhdGhuYW1lIiwiSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});