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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ \"./components/Icons/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Header/components.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/Users/alexandrumatei/Documents/programming/uma/website/components/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar HEADER_LINKS = [{\n  key: \"Projects\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://projects.umaproject.org/\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 22\n    }, _this);\n  }\n}, {\n  key: \"Products\",\n  component: function component(_ref) {\n    var string = _ref.path;\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"/products\",\n      active: path === \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 38\n    }, _this);\n  }\n}, {\n  key: \"Docs\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://docs.umaproject.org/\",\n      children: \"Docs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 21\n    }, _this);\n  }\n}, {\n  key: \"Community\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }, _this);\n  }\n}, {\n  key: \"Vote\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 22\n    }, _this);\n  }\n}];\n\nvar NavLinks = function NavLinks() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.LinkList, {\n    children: HEADER_LINKS.map(function (link) {\n      return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.LinkListItem, {\n        children: link.component({\n          path: router.pathname\n        })\n      }, link.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavLinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = NavLinks;\nvar Header = function Header() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.LogoLink, {\n        href: \"/\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_1__.UmaLogoIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.NavContainer, {\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(NavLinks, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Header;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c2, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNUyxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsRUFBQUEsR0FBRyxFQUFFLFVBRFA7QUFFRUMsRUFBQUEsU0FBUyxFQUFFO0FBQUEsV0FBTSx1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFOO0FBQUE7QUFGYixDQURtQixFQUtuQjtBQUNFRCxFQUFBQSxHQUFHLEVBQUUsVUFEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBQSxRQUFTQyxNQUFULFFBQUdDLElBQUg7QUFBQSxXQUFzQix1RUFBQyxnREFBRDtBQUFTLFVBQUksRUFBQyxXQUFkO0FBQTBCLFlBQU0sRUFBRUEsSUFBSSxLQUFLLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXRCO0FBQUE7QUFGYixDQUxtQixFQVNuQjtBQUNFSCxFQUFBQSxHQUFHLEVBQUUsTUFEUDtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFBQSxXQUFLLHVFQUFDLGdEQUFEO0FBQVMsVUFBSSxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUw7QUFBQTtBQUZiLENBVG1CLEVBYW5CO0FBQ0VELEVBQUFBLEdBQUcsRUFBRSxXQURQO0FBRUVDLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQUssdUVBQUMsZ0RBQUQ7QUFBUyxVQUFJLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTDtBQUFBO0FBRmIsQ0FibUIsRUFpQm5CO0FBQ0VELEVBQUFBLEdBQUcsRUFBRSxNQURQO0FBRUVDLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0sdUVBQUMsZ0RBQUQ7QUFBUyxVQUFJLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUFBO0FBRmIsQ0FqQm1CLENBQXJCOztBQXVCQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7QUFFQSxTQUNFLHVFQUFDLGlEQUFEO0FBQUEsY0FDR1MsWUFBWSxDQUFDTyxHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxhQUNoQix1RUFBQyxxREFBRDtBQUFBLGtCQUE4QkEsSUFBSSxDQUFDTixTQUFMLENBQWU7QUFBRUUsVUFBQUEsSUFBSSxFQUFFRSxNQUFNLENBQUNHO0FBQWYsU0FBZjtBQUE5QixTQUFtQkQsSUFBSSxDQUFDUCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVZEOztHQUFNSTtVQUNXZDs7O0tBRFhjO0FBWUMsSUFBTUssTUFBK0IsR0FBRyxTQUFsQ0EsTUFBa0MsR0FBTTtBQUNuRCxTQUNFLHVFQUFDLGtEQUFEO0FBQUEsY0FDRSx1RUFBQyxnREFBRDtBQUFBLGlCQUNFLHVFQUFDLGlEQUFEO0FBQVUsWUFBSSxFQUFDLEdBQWY7QUFBQSxrQkFDRSx1RUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUUsdUVBQUMscURBQUQ7QUFBQSxrQkFDRSx1RUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FkTTtNQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVW1hTG9nb0ljb24gfSBmcm9tIFwiLi4vSWNvbnNcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9MaW5rXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIENvbnRlbnQsIExpbmtMaXN0LCBMaW5rTGlzdEl0ZW0sIExvZ29MaW5rLCBOYXZDb250YWluZXIsIE5hdkxpbmsgfSBmcm9tIFwiLi9jb21wb25lbnRzXCJcblxuY29uc3QgSEVBREVSX0xJTktTID0gW1xuICB7XG4gICAga2V5OiBcIlByb2plY3RzXCIsXG4gICAgY29tcG9uZW50OiAoKSA9PiA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly9wcm9qZWN0cy51bWFwcm9qZWN0Lm9yZy9cIj5Qcm9qZWN0czwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiUHJvZHVjdHNcIixcbiAgICBjb21wb25lbnQ6ICh7IHBhdGg6IHN0cmluZyB9KSA9PiA8TmF2TGluayBocmVmPVwiL3Byb2R1Y3RzXCIgYWN0aXZlPXtwYXRoID09PSBcIi9wcm9kdWN0c1wifT5Qcm9kdWN0czwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiRG9jc1wiLFxuICAgIGNvbXBvbmVudDogKCkgPT48TmF2TGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLnVtYXByb2plY3Qub3JnL1wiPkRvY3M8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIkNvbW11bml0eVwiLFxuICAgIGNvbXBvbmVudDogKCkgPT48TmF2TGluayBocmVmPVwiaHR0cHM6Ly92b3RlLnVtYXByb2plY3Qub3JnL1wiPlZvdGU8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIlZvdGVcIixcbiAgICBjb21wb25lbnQ6ICgpID0+IDxOYXZMaW5rIGhyZWY9XCJodHRwczovL3ZvdGUudW1hcHJvamVjdC5vcmcvXCI+Vm90ZTwvTmF2TGluaz4sXG4gIH0sXG5dO1xuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua0xpc3Q+XG4gICAgICB7SEVBREVSX0xJTktTLm1hcCgobGluaykgPT4gKFxuICAgICAgICA8TGlua0xpc3RJdGVtIGtleT17bGluay5rZXl9PntsaW5rLmNvbXBvbmVudCh7IHBhdGg6IHJvdXRlci5wYXRobmFtZSB9KX08L0xpbmtMaXN0SXRlbT5cbiAgICAgICkpfVxuICAgIDwvTGlua0xpc3Q+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q29udGVudD5cbiAgICAgICAgPExvZ29MaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPFVtYUxvZ29JY29uIC8+XG4gICAgICAgIDwvTG9nb0xpbms+XG4gICAgICAgIDxOYXZDb250YWluZXI+XG4gICAgICAgICAgPE5hdkxpbmtzIC8+XG4gICAgICAgIDwvTmF2Q29udGFpbmVyPlxuICAgICAgPC9Db250ZW50PlxuICAgICAgXG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJVbWFMb2dvSWNvbiIsIkNvbnRhaW5lciIsIkNvbnRlbnQiLCJMaW5rTGlzdCIsIkxpbmtMaXN0SXRlbSIsIkxvZ29MaW5rIiwiTmF2Q29udGFpbmVyIiwiTmF2TGluayIsIkhFQURFUl9MSU5LUyIsImtleSIsImNvbXBvbmVudCIsInN0cmluZyIsInBhdGgiLCJOYXZMaW5rcyIsInJvdXRlciIsIm1hcCIsImxpbmsiLCJwYXRobmFtZSIsIkhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});