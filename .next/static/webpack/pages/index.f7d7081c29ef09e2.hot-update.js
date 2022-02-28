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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_BaseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/BaseButton */ \"./components/Button/BaseButton.tsx\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ \"./components/Icons/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./components/Header/components.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/Users/alexandrumatei/Documents/programming/uma/website/components/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HEADER_LINKS = [{\n  key: \"Projects\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://projects.umaproject.org/\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 22\n    }, _this);\n  }\n}, {\n  key: \"Products\",\n  component: function component(_ref) {\n    var path = _ref.path;\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"/products\",\n      active: path === \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 48\n    }, _this);\n  }\n}, {\n  key: \"Docs\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://docs.umaproject.org/\",\n      children: \"Docs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }, _this);\n  }\n}, {\n  key: \"Community\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CommunityDropdown, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 22\n    }, _this);\n  }\n}, {\n  key: \"Vote\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 22\n    }, _this);\n  }\n}];\n\nvar NavLinks = function NavLinks() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LinkList, {\n    children: HEADER_LINKS.map(function (link) {\n      return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LinkListItem, {\n        children: link.component({\n          path: router.pathname\n        })\n      }, link.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavLinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = NavLinks;\nvar Header = function Header() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Content, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LogoLink, {\n        href: \"/\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.UmaLogoIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavContainer, {\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinks, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Header;\n\nvar CommunityDropdown = function CommunityDropdown() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Button_BaseButton__WEBPACK_IMPORTED_MODULE_1__.BaseButton, {\n    children: [\"Community\", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.DownIcon, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = CommunityDropdown;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"CommunityDropdown\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQmFzZUJ1dHRvbiB9IGZyb20gXCIuLi9CdXR0b24vQmFzZUJ1dHRvblwiO1xuaW1wb3J0IHsgRG93bkljb24sIFVtYUxvZ29JY29uIH0gZnJvbSBcIi4uL0ljb25zXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vTGlua1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDb250ZW50LCBMaW5rTGlzdCwgTGlua0xpc3RJdGVtLCBMb2dvTGluaywgTmF2Q29udGFpbmVyLCBOYXZMaW5rIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXG5cblxuY29uc3QgSEVBREVSX0xJTktTID0gW1xuICB7XG4gICAga2V5OiBcIlByb2plY3RzXCIsXG4gICAgY29tcG9uZW50OiAoKSA9PiA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly9wcm9qZWN0cy51bWFwcm9qZWN0Lm9yZy9cIj5Qcm9qZWN0czwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiUHJvZHVjdHNcIixcbiAgICBjb21wb25lbnQ6ICh7IHBhdGggfTogeyBwYXRoOiBzdHJpbmcgfSkgPT4gPE5hdkxpbmsgaHJlZj1cIi9wcm9kdWN0c1wiIGFjdGl2ZT17cGF0aCA9PT0gXCIvcHJvZHVjdHNcIn0+UHJvZHVjdHM8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIkRvY3NcIixcbiAgICBjb21wb25lbnQ6ICgpID0+PE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZG9jcy51bWFwcm9qZWN0Lm9yZy9cIj5Eb2NzPC9OYXZMaW5rPixcbiAgfSxcbiAge1xuICAgIGtleTogXCJDb21tdW5pdHlcIixcbiAgICBjb21wb25lbnQ6ICgpID0+IDxDb21tdW5pdHlEcm9wZG93biAvPixcbiAgfSxcbiAge1xuICAgIGtleTogXCJWb3RlXCIsXG4gICAgY29tcG9uZW50OiAoKSA9PiA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly92b3RlLnVtYXByb2plY3Qub3JnL1wiPlZvdGU8L05hdkxpbms+LFxuICB9LFxuXTtcblxuY29uc3QgTmF2TGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtMaXN0PlxuICAgICAge0hFQURFUl9MSU5LUy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgPExpbmtMaXN0SXRlbSBrZXk9e2xpbmsua2V5fT57bGluay5jb21wb25lbnQoeyBwYXRoOiByb3V0ZXIucGF0aG5hbWUgfSl9PC9MaW5rTGlzdEl0ZW0+XG4gICAgICApKX1cbiAgICA8L0xpbmtMaXN0PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxMb2dvTGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxVbWFMb2dvSWNvbiAvPlxuICAgICAgICA8L0xvZ29MaW5rPlxuICAgICAgICA8TmF2Q29udGFpbmVyPlxuICAgICAgICAgIDxOYXZMaW5rcyAvPlxuICAgICAgICA8L05hdkNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIFxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IENvbW11bml0eURyb3Bkb3duOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZUJ1dHRvbj5cbiAgICAgIENvbW11bml0eVxuICAgICAgPERvd25JY29uIC8+XG4gICAgPC9CYXNlQnV0dG9uPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCYXNlQnV0dG9uIiwiRG93bkljb24iLCJVbWFMb2dvSWNvbiIsIkNvbnRhaW5lciIsIkNvbnRlbnQiLCJMaW5rTGlzdCIsIkxpbmtMaXN0SXRlbSIsIkxvZ29MaW5rIiwiTmF2Q29udGFpbmVyIiwiTmF2TGluayIsIkhFQURFUl9MSU5LUyIsImtleSIsImNvbXBvbmVudCIsInBhdGgiLCJOYXZMaW5rcyIsInJvdXRlciIsIm1hcCIsImxpbmsiLCJwYXRobmFtZSIsIkhlYWRlciIsIkNvbW11bml0eURyb3Bkb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});