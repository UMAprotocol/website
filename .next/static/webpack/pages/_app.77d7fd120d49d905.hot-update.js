"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COLORS\": function() { return /* binding */ COLORS; },\n/* harmony export */   \"LINKS\": function() { return /* binding */ LINKS; },\n/* harmony export */   \"BREAKPOINTS\": function() { return /* binding */ BREAKPOINTS; },\n/* harmony export */   \"QUERIES\": function() { return /* binding */ QUERIES; },\n/* harmony export */   \"PROJECTS\": function() { return /* binding */ PROJECTS; },\n/* harmony export */   \"COMMUNITY_LINKS\": function() { return /* binding */ COMMUNITY_LINKS; }\n/* harmony export */ });\nvar COLORS = {\n  gray: {\n    100: \"0deg 0% 99%\",\n    // #f5f5f5\n    200: \"hsl(120, 100%, 100%)\",\n    300: \"0deg 0% 96%\",\n    500: \"0deg 0% 90%\",\n    600: \"0deg 0% 35%\",\n    700: \"280deg 4% 15%\"\n  },\n  primary: {\n    500: \"0deg 100% 65%\",\n    700: \"0deg 100% 45%\"\n  },\n  green: \"133deg 68% 39%\",\n  white: \"0deg 100% 100%\",\n  black: \"0deg 0% 0%\"\n};\nvar LINKS = {\n  docs: \"https://docs.umaproject.org/\",\n  projects: \"https://projects.umaproject.org/\"\n};\nvar BREAKPOINTS = {\n  tabletMin: 550,\n  laptopMin: 800,\n  desktopMin: 1500\n};\nvar QUERIES = {\n  tabletAndUp: \"(min-width: \".concat(BREAKPOINTS.tabletMin / 16, \"rem)\"),\n  laptopAndUp: \"(min-width: \".concat(BREAKPOINTS.laptopMin / 16, \"rem)\"),\n  desktopAndUp: \"(min-width: \".concat(BREAKPOINTS.desktopMin / 16, \"rem)\"),\n  tabletAndDown: \"(max-width: \".concat((BREAKPOINTS.laptopMin - 1) / 16, \"rem)\")\n};\nvar PROJECTS = [{\n  icon: \"icons/projects/across.png\",\n  name: \"Polymarket\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Across Protocol\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Boba Network\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Sherlock\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Bankless DAO\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Shapeshift\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"BarnBridge\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Perpetual Protocol\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Open DAO\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Badger DAO\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Sushi Swap\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Balancer\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Hats Finance\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Aragon\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"DFX\",\n  url: \"https://google.com\"\n}];\nvar COMMUNITY_LINKS = [{\n  name: \"Medium\",\n  href: \"https://medium.com/uma-project\",\n  iconSrc: \"/icons/medium.svg\",\n  alt: \"medium\"\n}, {\n  name: \"Github\",\n  href: \"https://github.com/umaprotocol\",\n  iconSrc: \"/icons/github.svg\",\n  alt: \"github\"\n}, {\n  name: \"Twitter\",\n  href: \"https://twitter.com/umaprotocol\",\n  iconSrc: \"/icons/twitter.svg\",\n  alt: \"twitter\"\n}, {\n  name: \"Discord\",\n  href: \"https://discord.com/invite/jsb9XQJ\",\n  iconSrc: \"/icons/discord.svg\",\n  alt: \"discord\"\n}, {\n  name: \"Discourse\",\n  href: \"https://discourse.umaproject.org/\",\n  iconSrc: \"/icons/discourse.svg\",\n  alt: \"discourse\"\n}];\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHO0FBQ3BCQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixTQUFLLGFBREQ7QUFFSjtBQUNBLFNBQUssc0JBSEQ7QUFJSixTQUFLLGFBSkQ7QUFLSixTQUFLLGFBTEQ7QUFNSixTQUFLLGFBTkQ7QUFPSixTQUFLO0FBUEQsR0FEYztBQVVwQkMsRUFBQUEsT0FBTyxFQUFFO0FBQUUsU0FBSyxlQUFQO0FBQXdCLFNBQUs7QUFBN0IsR0FWVztBQVdwQkMsRUFBQUEsS0FBSyxFQUFFLGdCQVhhO0FBWXBCQyxFQUFBQSxLQUFLLEVBQUUsZ0JBWmE7QUFhcEJDLEVBQUFBLEtBQUssRUFBRTtBQWJhLENBQWY7QUFnQkEsSUFBTUMsS0FBSyxHQUFHO0FBQ25CQyxFQUFBQSxJQUFJLEVBQUUsOEJBRGE7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRTtBQUZTLENBQWQ7QUFLQSxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLFNBQVMsRUFBRSxHQURjO0FBRXpCQyxFQUFBQSxTQUFTLEVBQUUsR0FGYztBQUd6QkMsRUFBQUEsVUFBVSxFQUFFO0FBSGEsQ0FBcEI7QUFNQSxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLFdBQVcsd0JBQWlCTCxXQUFXLENBQUNDLFNBQVosR0FBd0IsRUFBekMsU0FEVTtBQUVyQkssRUFBQUEsV0FBVyx3QkFBaUJOLFdBQVcsQ0FBQ0UsU0FBWixHQUF3QixFQUF6QyxTQUZVO0FBR3JCSyxFQUFBQSxZQUFZLHdCQUFpQlAsV0FBVyxDQUFDRyxVQUFaLEdBQXlCLEVBQTFDLFNBSFM7QUFJckJLLEVBQUFBLGFBQWEsd0JBQWlCLENBQUNSLFdBQVcsQ0FBQ0UsU0FBWixHQUF3QixDQUF6QixJQUE4QixFQUEvQztBQUpRLENBQWhCO0FBT0EsSUFBTU8sUUFBUSxHQUFHLENBQUM7QUFDdkJDLEVBQUFBLElBQUksRUFBRSwyQkFEaUI7QUFFdkJDLEVBQUFBLElBQUksRUFBRSxZQUZpQjtBQUd2QkMsRUFBQUEsR0FBRyxFQUFFO0FBSGtCLENBQUQsRUFJckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxpQkFGTDtBQUdEQyxFQUFBQSxHQUFHLEVBQUU7QUFISixDQUpxQixFQVFyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsMkJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLGNBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0FScUIsRUFZckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxVQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBWnFCLEVBZ0JyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsMkJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLGNBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0FoQnFCLEVBb0JyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsMkJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLFlBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0FwQnFCLEVBd0JyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsMkJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLFlBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0F4QnFCLEVBNEJyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsMkJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLG9CQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBNUJxQixFQWdDckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxVQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBaENxQixFQW9DckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxZQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBcENxQixFQXdDckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxZQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBeENxQixFQTRDckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxVQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBNUNxQixFQWdEckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxjQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBaERxQixFQW9EckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxRQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBcERxQixFQXdEckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxLQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBeERxQixDQUFqQjtBQThEQSxJQUFNQyxlQUFlLEdBQUcsQ0FDN0I7QUFDRUYsRUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFFRUcsRUFBQUEsSUFBSSxFQUFFLGdDQUZSO0FBR0VDLEVBQUFBLE9BQU8sRUFBRSxtQkFIWDtBQUlFQyxFQUFBQSxHQUFHLEVBQUU7QUFKUCxDQUQ2QixFQU83QjtBQUNFTCxFQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFRyxFQUFBQSxJQUFJLEVBQUUsZ0NBRlI7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLG1CQUhYO0FBSUVDLEVBQUFBLEdBQUcsRUFBRTtBQUpQLENBUDZCLEVBYTdCO0FBQ0VMLEVBQUFBLElBQUksRUFBRSxTQURSO0FBRUVHLEVBQUFBLElBQUksRUFBRSxpQ0FGUjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsb0JBSFg7QUFJRUMsRUFBQUEsR0FBRyxFQUFFO0FBSlAsQ0FiNkIsRUFtQjdCO0FBQ0VMLEVBQUFBLElBQUksRUFBRSxTQURSO0FBRUVHLEVBQUFBLElBQUksRUFBRSxvQ0FGUjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsb0JBSFg7QUFJRUMsRUFBQUEsR0FBRyxFQUFFO0FBSlAsQ0FuQjZCLEVBeUI3QjtBQUNFTCxFQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFRyxFQUFBQSxJQUFJLEVBQUUsbUNBRlI7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLHNCQUhYO0FBSUVDLEVBQUFBLEdBQUcsRUFBRTtBQUpQLENBekI2QixDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb25zdGFudHMudHM/YTM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICBncmF5OiB7XG4gICAgMTAwOiBcIjBkZWcgMCUgOTklXCIsXG4gICAgLy8gI2Y1ZjVmNVxuICAgIDIwMDogXCJoc2woMTIwLCAxMDAlLCAxMDAlKVwiLFxuICAgIDMwMDogXCIwZGVnIDAlIDk2JVwiLFxuICAgIDUwMDogXCIwZGVnIDAlIDkwJVwiLFxuICAgIDYwMDogXCIwZGVnIDAlIDM1JVwiLFxuICAgIDcwMDogXCIyODBkZWcgNCUgMTUlXCIsXG4gIH0sXG4gIHByaW1hcnk6IHsgNTAwOiBcIjBkZWcgMTAwJSA2NSVcIiwgNzAwOiBcIjBkZWcgMTAwJSA0NSVcIiB9LFxuICBncmVlbjogXCIxMzNkZWcgNjglIDM5JVwiLFxuICB3aGl0ZTogXCIwZGVnIDEwMCUgMTAwJVwiLFxuICBibGFjazogXCIwZGVnIDAlIDAlXCIsXG59O1xuXG5leHBvcnQgY29uc3QgTElOS1MgPSB7XG4gIGRvY3M6IFwiaHR0cHM6Ly9kb2NzLnVtYXByb2plY3Qub3JnL1wiLFxuICBwcm9qZWN0czogXCJodHRwczovL3Byb2plY3RzLnVtYXByb2plY3Qub3JnL1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xuICB0YWJsZXRNaW46IDU1MCxcbiAgbGFwdG9wTWluOiA4MDAsXG4gIGRlc2t0b3BNaW46IDE1MDAsXG59O1xuXG5leHBvcnQgY29uc3QgUVVFUklFUyA9IHtcbiAgdGFibGV0QW5kVXA6IGAobWluLXdpZHRoOiAke0JSRUFLUE9JTlRTLnRhYmxldE1pbiAvIDE2fXJlbSlgLFxuICBsYXB0b3BBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMubGFwdG9wTWluIC8gMTZ9cmVtKWAsXG4gIGRlc2t0b3BBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMuZGVza3RvcE1pbiAvIDE2fXJlbSlgLFxuICB0YWJsZXRBbmREb3duOiBgKG1heC13aWR0aDogJHsoQlJFQUtQT0lOVFMubGFwdG9wTWluIC0gMSkgLyAxNn1yZW0pYCxcbn07XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUUyA9IFt7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvYWNyb3NzLnBuZ1wiLFxuICBuYW1lOiBcIlBvbHltYXJrZXRcIixcbiAgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2Fjcm9zcy5wbmdcIixcbiAgbmFtZTogXCJBY3Jvc3MgUHJvdG9jb2xcIixcbiAgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2Fjcm9zcy5wbmdcIixcbiAgbmFtZTogXCJCb2JhIE5ldHdvcmtcIixcbiAgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2Fjcm9zcy5wbmdcIixcbiAgbmFtZTogXCJTaGVybG9ja1wiLFxuICB1cmw6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG59LCB7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvYWNyb3NzLnBuZ1wiLFxuICBuYW1lOiBcIkJhbmtsZXNzIERBT1wiLFxuICB1cmw6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG59LCB7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvYWNyb3NzLnBuZ1wiLFxuICBuYW1lOiBcIlNoYXBlc2hpZnRcIixcbiAgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2Fjcm9zcy5wbmdcIixcbiAgbmFtZTogXCJCYXJuQnJpZGdlXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiUGVycGV0dWFsIFByb3RvY29sXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiT3BlbiBEQU9cIixcbiAgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2Fjcm9zcy5wbmdcIixcbiAgbmFtZTogXCJCYWRnZXIgREFPXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiU3VzaGkgU3dhcFwiLFxuICB1cmw6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG59LCB7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvYWNyb3NzLnBuZ1wiLFxuICBuYW1lOiBcIkJhbGFuY2VyXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiSGF0cyBGaW5hbmNlXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiQXJhZ29uXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiREZYXCIsXG4gIHVybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbn1dXG5cbmV4cG9ydCBjb25zdCBDT01NVU5JVFlfTElOS1MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIk1lZGl1bVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9tZWRpdW0uY29tL3VtYS1wcm9qZWN0XCIsXG4gICAgaWNvblNyYzogXCIvaWNvbnMvbWVkaXVtLnN2Z1wiLFxuICAgIGFsdDogXCJtZWRpdW1cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2l0aHViXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vdW1hcHJvdG9jb2xcIixcbiAgICBpY29uU3JjOiBcIi9pY29ucy9naXRodWIuc3ZnXCIsXG4gICAgYWx0OiBcImdpdGh1YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUd2l0dGVyXCIsXG4gICAgaHJlZjogXCJodHRwczovL3R3aXR0ZXIuY29tL3VtYXByb3RvY29sXCIsXG4gICAgaWNvblNyYzogXCIvaWNvbnMvdHdpdHRlci5zdmdcIixcbiAgICBhbHQ6IFwidHdpdHRlclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEaXNjb3JkXCIsXG4gICAgaHJlZjogXCJodHRwczovL2Rpc2NvcmQuY29tL2ludml0ZS9qc2I5WFFKXCIsXG4gICAgaWNvblNyYzogXCIvaWNvbnMvZGlzY29yZC5zdmdcIixcbiAgICBhbHQ6IFwiZGlzY29yZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEaXNjb3Vyc2VcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZGlzY291cnNlLnVtYXByb2plY3Qub3JnL1wiLFxuICAgIGljb25TcmM6IFwiL2ljb25zL2Rpc2NvdXJzZS5zdmdcIixcbiAgICBhbHQ6IFwiZGlzY291cnNlXCIsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbIkNPTE9SUyIsImdyYXkiLCJwcmltYXJ5IiwiZ3JlZW4iLCJ3aGl0ZSIsImJsYWNrIiwiTElOS1MiLCJkb2NzIiwicHJvamVjdHMiLCJCUkVBS1BPSU5UUyIsInRhYmxldE1pbiIsImxhcHRvcE1pbiIsImRlc2t0b3BNaW4iLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJsYXB0b3BBbmRVcCIsImRlc2t0b3BBbmRVcCIsInRhYmxldEFuZERvd24iLCJQUk9KRUNUUyIsImljb24iLCJuYW1lIiwidXJsIiwiQ09NTVVOSVRZX0xJTktTIiwiaHJlZiIsImljb25TcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.ts\n");

/***/ })

});