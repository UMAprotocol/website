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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils/index.tsx\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ \"./components/Icons/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./components/Header/components.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/Users/alexandrumatei/Documents/programming/uma/website/components/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HEADER_LINKS = [{\n  key: \"Projects\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://projects.umaproject.org/\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 22\n    }, _this);\n  }\n}, {\n  key: \"Products\",\n  component: function component(_ref) {\n    var path = _ref.path;\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"/products\",\n      active: path === \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 48\n    }, _this);\n  }\n}, {\n  key: \"Docs\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://docs.umaproject.org/\",\n      children: \"Docs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }, _this);\n  }\n}, {\n  key: \"Community\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CommunityDropdown, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 22\n    }, _this);\n  }\n}, {\n  key: \"Vote\",\n  component: function component() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n      href: \"https://vote.umaproject.org/\",\n      children: \"Vote\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 22\n    }, _this);\n  }\n}];\n\nvar NavLinks = function NavLinks() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LinkList, {\n    children: HEADER_LINKS.map(function (link) {\n      return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LinkListItem, {\n        children: link.component({\n          path: router.pathname\n        })\n      }, link.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavLinks, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = NavLinks;\nvar Header = function Header() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Content, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.LogoLink, {\n        href: \"/\",\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.UmaLogoIcon, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.NavContainer, {\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinks, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Header;\n\nvar CommunityDropdown = function CommunityDropdown() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CommunityDropdownContainer, {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DropdownButton, {\n      children: [\"Community\", (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.DownIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DropdownValuesContainer, {\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CommunityLinks, {\n        children: _utils__WEBPACK_IMPORTED_MODULE_1__.COMMUNITY_LINKS.map(function (community, idx) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CommunityLink, {\n            href: community\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = CommunityDropdown;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"CommunityDropdown\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsYUFERixFQUtFLHVFQUFDLHVCQUFEO0FBQUEsZ0JBQ0UsdUVBQUMsY0FBRDtBQUFBLGtCQUNHckIsdURBQUEsQ0FBb0IsVUFBQ3NCLFNBQUQsRUFBWUMsR0FBWjtBQUFBLGlCQUNuQix1RUFBQyxzREFBRDtBQUF5QixnQkFBSSxFQUFFRDtBQUEvQixhQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUI7QUFBQSxTQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FsQkQ7O01BQU1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9mMmI2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDT01NVU5JVFlfTElOS1MgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IEJhc2VCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uL0Jhc2VCdXR0b25cIjtcbmltcG9ydCB7IERvd25JY29uLCBVbWFMb2dvSWNvbiB9IGZyb20gXCIuLi9JY29uc1wiXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL0xpbmtcIjtcbmltcG9ydCB7IENvbW11bml0eUxpbmssIENvbnRhaW5lciwgQ29udGVudCwgTGlua0xpc3QsIExpbmtMaXN0SXRlbSwgTG9nb0xpbmssIE5hdkNvbnRhaW5lciwgTmF2TGluayB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxuXG5cbmNvbnN0IEhFQURFUl9MSU5LUyA9IFtcbiAge1xuICAgIGtleTogXCJQcm9qZWN0c1wiLFxuICAgIGNvbXBvbmVudDogKCkgPT4gPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vcHJvamVjdHMudW1hcHJvamVjdC5vcmcvXCI+UHJvamVjdHM8L05hdkxpbms+LFxuICB9LFxuICB7XG4gICAga2V5OiBcIlByb2R1Y3RzXCIsXG4gICAgY29tcG9uZW50OiAoeyBwYXRoIH06IHsgcGF0aDogc3RyaW5nIH0pID0+IDxOYXZMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIiBhY3RpdmU9e3BhdGggPT09IFwiL3Byb2R1Y3RzXCJ9PlByb2R1Y3RzPC9OYXZMaW5rPixcbiAgfSxcbiAge1xuICAgIGtleTogXCJEb2NzXCIsXG4gICAgY29tcG9uZW50OiAoKSA9PjxOYXZMaW5rIGhyZWY9XCJodHRwczovL2RvY3MudW1hcHJvamVjdC5vcmcvXCI+RG9jczwvTmF2TGluaz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiQ29tbXVuaXR5XCIsXG4gICAgY29tcG9uZW50OiAoKSA9PiA8Q29tbXVuaXR5RHJvcGRvd24gLz4sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiVm90ZVwiLFxuICAgIGNvbXBvbmVudDogKCkgPT4gPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vdm90ZS51bWFwcm9qZWN0Lm9yZy9cIj5Wb3RlPC9OYXZMaW5rPixcbiAgfSxcbl07XG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rTGlzdD5cbiAgICAgIHtIRUFERVJfTElOS1MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgIDxMaW5rTGlzdEl0ZW0ga2V5PXtsaW5rLmtleX0+e2xpbmsuY29tcG9uZW50KHsgcGF0aDogcm91dGVyLnBhdGhuYW1lIH0pfTwvTGlua0xpc3RJdGVtPlxuICAgICAgKSl9XG4gICAgPC9MaW5rTGlzdD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb250ZW50PlxuICAgICAgICA8TG9nb0xpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8VW1hTG9nb0ljb24gLz5cbiAgICAgICAgPC9Mb2dvTGluaz5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TmF2TGlua3MgLz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG4gICAgICA8L0NvbnRlbnQ+XG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb21tdW5pdHlEcm9wZG93bjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbW11bml0eURyb3Bkb3duQ29udGFpbmVyPlxuICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICBDb21tdW5pdHlcbiAgICAgICAgPERvd25JY29uIC8+XG4gICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgPERyb3Bkb3duVmFsdWVzQ29udGFpbmVyPlxuICAgICAgICA8Q29tbXVuaXR5TGlua3M+XG4gICAgICAgICAge0NPTU1VTklUWV9MSU5LUy5tYXAoKGNvbW11bml0eSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8Q29tbXVuaXR5TGluayBrZXk9e2lkeH0gaHJlZj17Y29tbXVuaXR5fT5cblxuICAgICAgICAgICAgPC9Db21tdW5pdHlMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbW11bml0eUxpbmtzPlxuICAgICAgPC9Ecm9wZG93blZhbHVlc0NvbnRhaW5lcj5cbiAgICA8L0NvbW11bml0eURyb3Bkb3duQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNPTU1VTklUWV9MSU5LUyIsIkRvd25JY29uIiwiVW1hTG9nb0ljb24iLCJDb21tdW5pdHlMaW5rIiwiQ29udGFpbmVyIiwiQ29udGVudCIsIkxpbmtMaXN0IiwiTGlua0xpc3RJdGVtIiwiTG9nb0xpbmsiLCJOYXZDb250YWluZXIiLCJOYXZMaW5rIiwiSEVBREVSX0xJTktTIiwia2V5IiwiY29tcG9uZW50IiwicGF0aCIsIk5hdkxpbmtzIiwicm91dGVyIiwibWFwIiwibGluayIsInBhdGhuYW1lIiwiSGVhZGVyIiwiQ29tbXVuaXR5RHJvcGRvd24iLCJjb21tdW5pdHkiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});