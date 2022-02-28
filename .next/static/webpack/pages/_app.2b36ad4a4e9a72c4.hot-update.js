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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COLORS\": function() { return /* binding */ COLORS; },\n/* harmony export */   \"LINKS\": function() { return /* binding */ LINKS; },\n/* harmony export */   \"BREAKPOINTS\": function() { return /* binding */ BREAKPOINTS; },\n/* harmony export */   \"QUERIES\": function() { return /* binding */ QUERIES; },\n/* harmony export */   \"PROJECTS\": function() { return /* binding */ PROJECTS; },\n/* harmony export */   \"COMMUNITY_LINKS\": function() { return /* binding */ COMMUNITY_LINKS; }\n/* harmony export */ });\nvar COLORS = {\n  gray: {\n    100: \"0deg 0% 99%\",\n    // #f5f5f5\n    200: \"hsl(120, 100%, 100%)\",\n    300: \"0deg 0% 96%\",\n    500: \"0deg 0% 90%\",\n    600: \"0deg 0% 35%\",\n    700: \"280deg 4% 15%\"\n  },\n  primary: {\n    500: \"0deg 100% 65%\",\n    700: \"0deg 100% 45%\"\n  },\n  green: \"133deg 68% 39%\",\n  white: \"0deg 100% 100%\",\n  black: \"0deg 0% 0%\"\n};\nvar LINKS = {\n  docs: \"https://docs.umaproject.org/\",\n  projects: \"https://projects.umaproject.org/\"\n};\nvar BREAKPOINTS = {\n  tabletMin: 550,\n  laptopMin: 800,\n  desktopMin: 1500\n};\nvar QUERIES = {\n  tabletAndUp: \"(min-width: \".concat(BREAKPOINTS.tabletMin / 16, \"rem)\"),\n  laptopAndUp: \"(min-width: \".concat(BREAKPOINTS.laptopMin / 16, \"rem)\"),\n  desktopAndUp: \"(min-width: \".concat(BREAKPOINTS.desktopMin / 16, \"rem)\"),\n  tabletAndDown: \"(max-width: \".concat((BREAKPOINTS.laptopMin - 1) / 16, \"rem)\")\n};\nvar PROJECTS = [{\n  icon: \"icons/projects/polymarket.png\",\n  name: \"Polymarket\",\n  url: \"https://polymarket.com/\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Across Protocol\",\n  url: \"https://across.to/\"\n}, {\n  icon: \"icons/projects/boba.svg\",\n  name: \"Boba Network\",\n  url: \"https://boba.network/\"\n}, {\n  icon: \"icons/projects/across.png\",\n  name: \"Sherlock\",\n  url: \"https://google.com\"\n}, {\n  icon: \"icons/projects/bankless.png\",\n  name: \"Bankless DAO\",\n  url: \"https://www.bankless.community/\"\n}, {\n  icon: \"icons/projects/shapeshift.svg\",\n  name: \"Shapeshift\",\n  url: \"https://shapeshift.com/\"\n}, {\n  icon: \"icons/projects/barnbridge.png\",\n  name: \"BarnBridge\",\n  url: \"https://barnbridge.com/\"\n}, {\n  icon: \"icons/projects/perp.png\",\n  name: \"Perpetual Protocol\",\n  url: \"https://perp.com/\"\n}, {\n  icon: \"icons/projects/opendao.png\",\n  name: \"Open DAO\",\n  url: \"https://opendao.io/\"\n}, {\n  icon: \"icons/projects/badger.png\",\n  name: \"Badger DAO\",\n  url: \"https://badger.com/\"\n}, {\n  icon: \"icons/projects/sushiswap.png\",\n  name: \"Sushi Swap\",\n  url: \"https://www.sushi.com/\"\n}, {\n  icon: \"icons/projects/balancer.png\",\n  name: \"Balancer\",\n  url: \"https://balancer.fi/\"\n}, {\n  icon: \"icons/projects/hats.webp\",\n  name: \"Hats Finance\",\n  url: \"https://hats.finance/\"\n}, {\n  icon: \"icons/projects/aragon.png\",\n  name: \"Aragon\",\n  url: \"https://aragon.org/\"\n}, {\n  icon: \"icons/projects/dfx.png\",\n  name: \"DFX\",\n  url: \"https://dfx.finance/\"\n}];\nvar COMMUNITY_LINKS = [{\n  name: \"Medium\",\n  href: \"https://medium.com/uma-project\",\n  iconSrc: \"/icons/social//medium.svg\",\n  alt: \"medium\"\n}, {\n  name: \"Github\",\n  href: \"https://github.com/umaprotocol\",\n  iconSrc: \"/icons/social//github.svg\",\n  alt: \"github\"\n}, {\n  name: \"Twitter\",\n  href: \"https://twitter.com/umaprotocol\",\n  iconSrc: \"/icons/social//twitter.svg\",\n  alt: \"twitter\"\n}, {\n  name: \"Discord\",\n  href: \"https://discord.com/invite/jsb9XQJ\",\n  iconSrc: \"/icons/social//discord.svg\",\n  alt: \"discord\"\n}, {\n  name: \"Discourse\",\n  href: \"https://discourse.umaproject.org/\",\n  iconSrc: \"/icons/social//discourse.svg\",\n  alt: \"discourse\"\n}];\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHO0FBQ3BCQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixTQUFLLGFBREQ7QUFFSjtBQUNBLFNBQUssc0JBSEQ7QUFJSixTQUFLLGFBSkQ7QUFLSixTQUFLLGFBTEQ7QUFNSixTQUFLLGFBTkQ7QUFPSixTQUFLO0FBUEQsR0FEYztBQVVwQkMsRUFBQUEsT0FBTyxFQUFFO0FBQUUsU0FBSyxlQUFQO0FBQXdCLFNBQUs7QUFBN0IsR0FWVztBQVdwQkMsRUFBQUEsS0FBSyxFQUFFLGdCQVhhO0FBWXBCQyxFQUFBQSxLQUFLLEVBQUUsZ0JBWmE7QUFhcEJDLEVBQUFBLEtBQUssRUFBRTtBQWJhLENBQWY7QUFnQkEsSUFBTUMsS0FBSyxHQUFHO0FBQ25CQyxFQUFBQSxJQUFJLEVBQUUsOEJBRGE7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRTtBQUZTLENBQWQ7QUFLQSxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLFNBQVMsRUFBRSxHQURjO0FBRXpCQyxFQUFBQSxTQUFTLEVBQUUsR0FGYztBQUd6QkMsRUFBQUEsVUFBVSxFQUFFO0FBSGEsQ0FBcEI7QUFNQSxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLFdBQVcsd0JBQWlCTCxXQUFXLENBQUNDLFNBQVosR0FBd0IsRUFBekMsU0FEVTtBQUVyQkssRUFBQUEsV0FBVyx3QkFBaUJOLFdBQVcsQ0FBQ0UsU0FBWixHQUF3QixFQUF6QyxTQUZVO0FBR3JCSyxFQUFBQSxZQUFZLHdCQUFpQlAsV0FBVyxDQUFDRyxVQUFaLEdBQXlCLEVBQTFDLFNBSFM7QUFJckJLLEVBQUFBLGFBQWEsd0JBQWlCLENBQUNSLFdBQVcsQ0FBQ0UsU0FBWixHQUF3QixDQUF6QixJQUE4QixFQUEvQztBQUpRLENBQWhCO0FBT0EsSUFBTU8sUUFBUSxHQUFHLENBQUM7QUFDdkJDLEVBQUFBLElBQUksRUFBRSwrQkFEaUI7QUFFdkJDLEVBQUFBLElBQUksRUFBRSxZQUZpQjtBQUd2QkMsRUFBQUEsR0FBRyxFQUFFO0FBSGtCLENBQUQsRUFJckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxpQkFGTDtBQUdEQyxFQUFBQSxHQUFHLEVBQUU7QUFISixDQUpxQixFQVFyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUseUJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLGNBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0FScUIsRUFZckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxVQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBWnFCLEVBZ0JyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsNkJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLGNBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0FoQnFCLEVBb0JyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsK0JBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLFlBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0FwQnFCLEVBd0JyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUsK0JBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLFlBRkw7QUFHREMsRUFBQUEsR0FBRyxFQUFFO0FBSEosQ0F4QnFCLEVBNEJyQjtBQUNERixFQUFBQSxJQUFJLEVBQUUseUJBREw7QUFFREMsRUFBQUEsSUFBSSxFQUFFLG9CQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBNUJxQixFQWdDckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDRCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxVQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBaENxQixFQW9DckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxZQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBcENxQixFQXdDckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDhCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxZQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBeENxQixFQTRDckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDZCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxVQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBNUNxQixFQWdEckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDBCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxjQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBaERxQixFQW9EckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLDJCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxRQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBcERxQixFQXdEckI7QUFDREYsRUFBQUEsSUFBSSxFQUFFLHdCQURMO0FBRURDLEVBQUFBLElBQUksRUFBRSxLQUZMO0FBR0RDLEVBQUFBLEdBQUcsRUFBRTtBQUhKLENBeERxQixDQUFqQjtBQThEQSxJQUFNQyxlQUFlLEdBQUcsQ0FDN0I7QUFDRUYsRUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFFRUcsRUFBQUEsSUFBSSxFQUFFLGdDQUZSO0FBR0VDLEVBQUFBLE9BQU8sRUFBRSwyQkFIWDtBQUlFQyxFQUFBQSxHQUFHLEVBQUU7QUFKUCxDQUQ2QixFQU83QjtBQUNFTCxFQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFRyxFQUFBQSxJQUFJLEVBQUUsZ0NBRlI7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLDJCQUhYO0FBSUVDLEVBQUFBLEdBQUcsRUFBRTtBQUpQLENBUDZCLEVBYTdCO0FBQ0VMLEVBQUFBLElBQUksRUFBRSxTQURSO0FBRUVHLEVBQUFBLElBQUksRUFBRSxpQ0FGUjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsNEJBSFg7QUFJRUMsRUFBQUEsR0FBRyxFQUFFO0FBSlAsQ0FiNkIsRUFtQjdCO0FBQ0VMLEVBQUFBLElBQUksRUFBRSxTQURSO0FBRUVHLEVBQUFBLElBQUksRUFBRSxvQ0FGUjtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsNEJBSFg7QUFJRUMsRUFBQUEsR0FBRyxFQUFFO0FBSlAsQ0FuQjZCLEVBeUI3QjtBQUNFTCxFQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFRyxFQUFBQSxJQUFJLEVBQUUsbUNBRlI7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLDhCQUhYO0FBSUVDLEVBQUFBLEdBQUcsRUFBRTtBQUpQLENBekI2QixDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb25zdGFudHMudHM/YTM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICBncmF5OiB7XG4gICAgMTAwOiBcIjBkZWcgMCUgOTklXCIsXG4gICAgLy8gI2Y1ZjVmNVxuICAgIDIwMDogXCJoc2woMTIwLCAxMDAlLCAxMDAlKVwiLFxuICAgIDMwMDogXCIwZGVnIDAlIDk2JVwiLFxuICAgIDUwMDogXCIwZGVnIDAlIDkwJVwiLFxuICAgIDYwMDogXCIwZGVnIDAlIDM1JVwiLFxuICAgIDcwMDogXCIyODBkZWcgNCUgMTUlXCIsXG4gIH0sXG4gIHByaW1hcnk6IHsgNTAwOiBcIjBkZWcgMTAwJSA2NSVcIiwgNzAwOiBcIjBkZWcgMTAwJSA0NSVcIiB9LFxuICBncmVlbjogXCIxMzNkZWcgNjglIDM5JVwiLFxuICB3aGl0ZTogXCIwZGVnIDEwMCUgMTAwJVwiLFxuICBibGFjazogXCIwZGVnIDAlIDAlXCIsXG59O1xuXG5leHBvcnQgY29uc3QgTElOS1MgPSB7XG4gIGRvY3M6IFwiaHR0cHM6Ly9kb2NzLnVtYXByb2plY3Qub3JnL1wiLFxuICBwcm9qZWN0czogXCJodHRwczovL3Byb2plY3RzLnVtYXByb2plY3Qub3JnL1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xuICB0YWJsZXRNaW46IDU1MCxcbiAgbGFwdG9wTWluOiA4MDAsXG4gIGRlc2t0b3BNaW46IDE1MDAsXG59O1xuXG5leHBvcnQgY29uc3QgUVVFUklFUyA9IHtcbiAgdGFibGV0QW5kVXA6IGAobWluLXdpZHRoOiAke0JSRUFLUE9JTlRTLnRhYmxldE1pbiAvIDE2fXJlbSlgLFxuICBsYXB0b3BBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMubGFwdG9wTWluIC8gMTZ9cmVtKWAsXG4gIGRlc2t0b3BBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMuZGVza3RvcE1pbiAvIDE2fXJlbSlgLFxuICB0YWJsZXRBbmREb3duOiBgKG1heC13aWR0aDogJHsoQlJFQUtQT0lOVFMubGFwdG9wTWluIC0gMSkgLyAxNn1yZW0pYCxcbn07XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUUyA9IFt7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvcG9seW1hcmtldC5wbmdcIixcbiAgbmFtZTogXCJQb2x5bWFya2V0XCIsXG4gIHVybDogXCJodHRwczovL3BvbHltYXJrZXQuY29tL1wiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2Fjcm9zcy5wbmdcIixcbiAgbmFtZTogXCJBY3Jvc3MgUHJvdG9jb2xcIixcbiAgdXJsOiBcImh0dHBzOi8vYWNyb3NzLnRvL1wiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2JvYmEuc3ZnXCIsXG4gIG5hbWU6IFwiQm9iYSBOZXR3b3JrXCIsXG4gIHVybDogXCJodHRwczovL2JvYmEubmV0d29yay9cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9hY3Jvc3MucG5nXCIsXG4gIG5hbWU6IFwiU2hlcmxvY2tcIixcbiAgdXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2JhbmtsZXNzLnBuZ1wiLFxuICBuYW1lOiBcIkJhbmtsZXNzIERBT1wiLFxuICB1cmw6IFwiaHR0cHM6Ly93d3cuYmFua2xlc3MuY29tbXVuaXR5L1wiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL3NoYXBlc2hpZnQuc3ZnXCIsXG4gIG5hbWU6IFwiU2hhcGVzaGlmdFwiLFxuICB1cmw6IFwiaHR0cHM6Ly9zaGFwZXNoaWZ0LmNvbS9cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9iYXJuYnJpZGdlLnBuZ1wiLFxuICBuYW1lOiBcIkJhcm5CcmlkZ2VcIixcbiAgdXJsOiBcImh0dHBzOi8vYmFybmJyaWRnZS5jb20vXCIsXG59LCB7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvcGVycC5wbmdcIixcbiAgbmFtZTogXCJQZXJwZXR1YWwgUHJvdG9jb2xcIixcbiAgdXJsOiBcImh0dHBzOi8vcGVycC5jb20vXCIsXG59LCB7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvb3BlbmRhby5wbmdcIixcbiAgbmFtZTogXCJPcGVuIERBT1wiLFxuICB1cmw6IFwiaHR0cHM6Ly9vcGVuZGFvLmlvL1wiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2JhZGdlci5wbmdcIixcbiAgbmFtZTogXCJCYWRnZXIgREFPXCIsXG4gIHVybDogXCJodHRwczovL2JhZGdlci5jb20vXCIsXG59LCB7XG4gIGljb246IFwiaWNvbnMvcHJvamVjdHMvc3VzaGlzd2FwLnBuZ1wiLFxuICBuYW1lOiBcIlN1c2hpIFN3YXBcIixcbiAgdXJsOiBcImh0dHBzOi8vd3d3LnN1c2hpLmNvbS9cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9iYWxhbmNlci5wbmdcIixcbiAgbmFtZTogXCJCYWxhbmNlclwiLFxuICB1cmw6IFwiaHR0cHM6Ly9iYWxhbmNlci5maS9cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9oYXRzLndlYnBcIixcbiAgbmFtZTogXCJIYXRzIEZpbmFuY2VcIixcbiAgdXJsOiBcImh0dHBzOi8vaGF0cy5maW5hbmNlL1wiLFxufSwge1xuICBpY29uOiBcImljb25zL3Byb2plY3RzL2FyYWdvbi5wbmdcIixcbiAgbmFtZTogXCJBcmFnb25cIixcbiAgdXJsOiBcImh0dHBzOi8vYXJhZ29uLm9yZy9cIixcbn0sIHtcbiAgaWNvbjogXCJpY29ucy9wcm9qZWN0cy9kZngucG5nXCIsXG4gIG5hbWU6IFwiREZYXCIsXG4gIHVybDogXCJodHRwczovL2RmeC5maW5hbmNlL1wiLFxufV1cblxuZXhwb3J0IGNvbnN0IENPTU1VTklUWV9MSU5LUyA9IFtcbiAge1xuICAgIG5hbWU6IFwiTWVkaXVtXCIsXG4gICAgaHJlZjogXCJodHRwczovL21lZGl1bS5jb20vdW1hLXByb2plY3RcIixcbiAgICBpY29uU3JjOiBcIi9pY29ucy9zb2NpYWwvL21lZGl1bS5zdmdcIixcbiAgICBhbHQ6IFwibWVkaXVtXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdpdGh1YlwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3VtYXByb3RvY29sXCIsXG4gICAgaWNvblNyYzogXCIvaWNvbnMvc29jaWFsLy9naXRodWIuc3ZnXCIsXG4gICAgYWx0OiBcImdpdGh1YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUd2l0dGVyXCIsXG4gICAgaHJlZjogXCJodHRwczovL3R3aXR0ZXIuY29tL3VtYXByb3RvY29sXCIsXG4gICAgaWNvblNyYzogXCIvaWNvbnMvc29jaWFsLy90d2l0dGVyLnN2Z1wiLFxuICAgIGFsdDogXCJ0d2l0dGVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRpc2NvcmRcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZGlzY29yZC5jb20vaW52aXRlL2pzYjlYUUpcIixcbiAgICBpY29uU3JjOiBcIi9pY29ucy9zb2NpYWwvL2Rpc2NvcmQuc3ZnXCIsXG4gICAgYWx0OiBcImRpc2NvcmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGlzY291cnNlXCIsXG4gICAgaHJlZjogXCJodHRwczovL2Rpc2NvdXJzZS51bWFwcm9qZWN0Lm9yZy9cIixcbiAgICBpY29uU3JjOiBcIi9pY29ucy9zb2NpYWwvL2Rpc2NvdXJzZS5zdmdcIixcbiAgICBhbHQ6IFwiZGlzY291cnNlXCIsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbIkNPTE9SUyIsImdyYXkiLCJwcmltYXJ5IiwiZ3JlZW4iLCJ3aGl0ZSIsImJsYWNrIiwiTElOS1MiLCJkb2NzIiwicHJvamVjdHMiLCJCUkVBS1BPSU5UUyIsInRhYmxldE1pbiIsImxhcHRvcE1pbiIsImRlc2t0b3BNaW4iLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJsYXB0b3BBbmRVcCIsImRlc2t0b3BBbmRVcCIsInRhYmxldEFuZERvd24iLCJQUk9KRUNUUyIsImljb24iLCJuYW1lIiwidXJsIiwiQ09NTVVOSVRZX0xJTktTIiwiaHJlZiIsImljb25TcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.ts\n");

/***/ })

});