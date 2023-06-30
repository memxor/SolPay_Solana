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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header_Action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Action */ \"./components/header/Action.js\");\n/* harmony import */ var _components_header_NavMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/NavMenu */ \"./components/header/NavMenu.js\");\n/* harmony import */ var _components_header_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/Profile */ \"./components/header/Profile.js\");\n/* harmony import */ var _components_home_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/SearchBar */ \"./components/home/SearchBar.js\");\n/* harmony import */ var _components_transaction_NewTransactionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/transaction/NewTransactionModal */ \"./components/transaction/NewTransactionModal.js\");\n/* harmony import */ var _components_transaction_TransactionsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/transaction/TransactionsList */ \"./components/transaction/TransactionsList.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _components_transaction_TransactionQRModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/transaction/TransactionQRModal */ \"./components/transaction/TransactionQRModal.js\");\n/* harmony import */ var _data_transactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/transactions */ \"./data/transactions.js\");\n/* harmony import */ var _functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../functions/getAvatarUrl */ \"./functions/getAvatarUrl.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__.useWallet)(), connected = ref.connected, publicKey = ref.publicKey;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"11111111111111111111111111111111\"), userAddress = ref1[0], setUserAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), avatar = ref2[0], setAvatar = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionQRModalOpen = ref3[0], setTransactionQRModalOpen = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), newTransactionModalOpen = ref4[0], setNewTransactionModalOpen = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setAvatar((0,_functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_10__.getAvatarUrl)(userAddress));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex w-[250px] flex-col bg-[#0bb534] p-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setModalOpen: setTransactionQRModalOpen,\n                        avatar: avatar,\n                        userAddress: publicKey ? publicKey.toString() : \"Connect Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_transaction_TransactionQRModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        modalOpen: transactionQRModalOpen,\n                        setModalOpen: setTransactionQRModalOpen,\n                        userAddress: userAddress,\n                        myKey: publicKey\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_NavMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        connected: connected,\n                        myKey: publicKey\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Action__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setModalOpen: setNewTransactionModalOpen\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_transaction_NewTransactionModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        modalOpen: newTransactionModalOpen,\n                        setModalOpen: setNewTransactionModalOpen\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-1 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_transaction_TransactionsList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        connected: connected,\n                        transactions: _data_transactions__WEBPACK_IMPORTED_MODULE_9__.transactions\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(Home, \"7GWuoL4wUGL/rg1ucf0cPiuB6Co=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__.useWallet\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTJDO0FBQ0s7QUFDRTtBQUNBO0FBQ0U7QUFDMkI7QUFDTjtBQUNqQjtBQUNxQjtBQUMxQjtBQUNLO0FBSXhELElBQU1ZLElBQUksR0FBRyxXQUFNOztJQUNmLElBQWlDSixHQUFXLEdBQVhBLHdFQUFTLEVBQUUsRUFBcENLLFNBQVMsR0FBZ0JMLEdBQVcsQ0FBcENLLFNBQVMsRUFBRUMsU0FBUyxHQUFLTixHQUFXLENBQXpCTSxTQUFTO0lBQzVCLElBQXNDZCxJQUE0QyxHQUE1Q0EsK0NBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUEzRWUsV0FBVyxHQUFvQmYsSUFBNEMsR0FBaEUsRUFBRWdCLGNBQWMsR0FBSWhCLElBQTRDLEdBQWhEO0lBQ2xDLElBQTRCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWpDaUIsTUFBTSxHQUFlakIsSUFBWSxHQUEzQixFQUFFa0IsU0FBUyxHQUFJbEIsSUFBWSxHQUFoQjtJQUN4QixJQUE0REEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwRW1CLHNCQUFzQixHQUErQm5CLElBQWUsR0FBOUMsRUFBRW9CLHlCQUF5QixHQUFJcEIsSUFBZSxHQUFuQjtJQUN4RCxJQUE4REEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0RXFCLHVCQUF1QixHQUFnQ3JCLElBQWUsR0FBL0MsRUFBRXNCLDBCQUEwQixHQUFJdEIsSUFBZSxHQUFuQjtJQUUxREMsZ0RBQVMsQ0FBQyxXQUNWO1FBQ0lpQixTQUFTLENBQUNQLHNFQUFZLENBQUNJLFdBQVcsQ0FBQyxDQUFDO0tBQ3ZDLENBQUM7SUFFRixxQkFDSSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0JBQW9COzswQkFDL0IsOERBQUNDLFFBQU07Z0JBQUNELFNBQVMsRUFBQywyQ0FBMkM7O2tDQUN6RCw4REFBQ3BCLGtFQUFPO3dCQUFDc0IsWUFBWSxFQUFFTix5QkFBeUI7d0JBQUVILE1BQU0sRUFBRUEsTUFBTTt3QkFBRUYsV0FBVyxFQUFFRCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2EsUUFBUSxFQUFFLEdBQUcsZ0JBQWdCOzs7Ozs2QkFBSTtrQ0FDdEksOERBQUNsQixrRkFBa0I7d0JBQUNtQixTQUFTLEVBQUVULHNCQUFzQjt3QkFBRU8sWUFBWSxFQUFFTix5QkFBeUI7d0JBQUVMLFdBQVcsRUFBRUEsV0FBVzt3QkFBRWMsS0FBSyxFQUFFZixTQUFTOzs7Ozs2QkFBSTtrQ0FFOUksOERBQUNYLGtFQUFPO3dCQUFDVSxTQUFTLEVBQUVBLFNBQVM7d0JBQUVnQixLQUFLLEVBQUVmLFNBQVM7Ozs7OzZCQUFJO2tDQUVuRCw4REFBQ1osaUVBQU07d0JBQUN3QixZQUFZLEVBQUVKLDBCQUEwQjs7Ozs7NkJBQUk7a0NBQ3BELDhEQUFDaEIsbUZBQW1CO3dCQUFDc0IsU0FBUyxFQUFFUCx1QkFBdUI7d0JBQUVLLFlBQVksRUFBRUosMEJBQTBCOzs7Ozs2QkFBSTs7Ozs7O3FCQUNoRzswQkFFVCw4REFBQ1EsTUFBSTtnQkFBQ04sU0FBUyxFQUFDLHNCQUFzQjs7a0NBQ2xDLDhEQUFDbkIsa0VBQVM7Ozs7NkJBQUc7a0NBRWIsOERBQUNFLGdGQUFnQjt3QkFBQ00sU0FBUyxFQUFFQSxTQUFTO3dCQUFFSCxZQUFZLEVBQUVBLDREQUFZOzs7Ozs2QkFBSTs7Ozs7O3FCQUNuRTs7Ozs7O2FBQ0wsQ0FDVDtDQUNKO0dBL0JLRSxJQUFJOztRQUMyQkosb0VBQVM7OztBQUR4Q0ksS0FBQUEsSUFBSTtBQWlDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvQWN0aW9uJ1xuaW1wb3J0IE5hdk1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvTmF2TWVudSdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL1Byb2ZpbGUnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9TZWFyY2hCYXInXG5pbXBvcnQgTmV3VHJhbnNhY3Rpb25Nb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL3RyYW5zYWN0aW9uL05ld1RyYW5zYWN0aW9uTW9kYWwnXG5pbXBvcnQgVHJhbnNhY3Rpb25zTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uc0xpc3QnXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0J1xuaW1wb3J0IFRyYW5zYWN0aW9uUVJNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL3RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uUVJNb2RhbCdcbmltcG9ydCB7IHRyYW5zYWN0aW9ucyB9IGZyb20gJy4uL2RhdGEvdHJhbnNhY3Rpb25zJ1xuaW1wb3J0IHsgZ2V0QXZhdGFyVXJsIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9nZXRBdmF0YXJVcmxcIlxuXG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbm5lY3RlZCwgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKVxuICAgIGNvbnN0IFt1c2VyQWRkcmVzcywgc2V0VXNlckFkZHJlc3NdID0gdXNlU3RhdGUoXCIxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVwiKVxuICAgIGNvbnN0IFthdmF0YXIsIHNldEF2YXRhcl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFt0cmFuc2FjdGlvblFSTW9kYWxPcGVuLCBzZXRUcmFuc2FjdGlvblFSTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuZXdUcmFuc2FjdGlvbk1vZGFsT3Blbiwgc2V0TmV3VHJhbnNhY3Rpb25Nb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gXG4gICAge1xuICAgICAgICBzZXRBdmF0YXIoZ2V0QXZhdGFyVXJsKHVzZXJBZGRyZXNzKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCB3LVsyNTBweF0gZmxleC1jb2wgYmctWyMwYmI1MzRdIHAtMTJcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZSBzZXRNb2RhbE9wZW49e3NldFRyYW5zYWN0aW9uUVJNb2RhbE9wZW59IGF2YXRhcj17YXZhdGFyfSB1c2VyQWRkcmVzcz17cHVibGljS2V5ID8gcHVibGljS2V5LnRvU3RyaW5nKCkgOiBcIkNvbm5lY3QgV2FsbGV0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uUVJNb2RhbCBtb2RhbE9wZW49e3RyYW5zYWN0aW9uUVJNb2RhbE9wZW59IHNldE1vZGFsT3Blbj17c2V0VHJhbnNhY3Rpb25RUk1vZGFsT3Blbn0gdXNlckFkZHJlc3M9e3VzZXJBZGRyZXNzfSBteUtleT17cHVibGljS2V5fSAvPlxuXG4gICAgICAgICAgICAgICAgPE5hdk1lbnUgY29ubmVjdGVkPXtjb25uZWN0ZWR9IG15S2V5PXtwdWJsaWNLZXl9IC8+XG5cbiAgICAgICAgICAgICAgICA8QWN0aW9uIHNldE1vZGFsT3Blbj17c2V0TmV3VHJhbnNhY3Rpb25Nb2RhbE9wZW59IC8+XG4gICAgICAgICAgICAgICAgPE5ld1RyYW5zYWN0aW9uTW9kYWwgbW9kYWxPcGVuPXtuZXdUcmFuc2FjdGlvbk1vZGFsT3Blbn0gc2V0TW9kYWxPcGVuPXtzZXROZXdUcmFuc2FjdGlvbk1vZGFsT3Blbn0gLz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cblxuICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbnNMaXN0IGNvbm5lY3RlZD17Y29ubmVjdGVkfSB0cmFuc2FjdGlvbnM9e3RyYW5zYWN0aW9uc30gLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBY3Rpb24iLCJOYXZNZW51IiwiUHJvZmlsZSIsIlNlYXJjaEJhciIsIk5ld1RyYW5zYWN0aW9uTW9kYWwiLCJUcmFuc2FjdGlvbnNMaXN0IiwidXNlV2FsbGV0IiwiVHJhbnNhY3Rpb25RUk1vZGFsIiwidHJhbnNhY3Rpb25zIiwiZ2V0QXZhdGFyVXJsIiwiSG9tZSIsImNvbm5lY3RlZCIsInB1YmxpY0tleSIsInVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3MiLCJhdmF0YXIiLCJzZXRBdmF0YXIiLCJ0cmFuc2FjdGlvblFSTW9kYWxPcGVuIiwic2V0VHJhbnNhY3Rpb25RUk1vZGFsT3BlbiIsIm5ld1RyYW5zYWN0aW9uTW9kYWxPcGVuIiwic2V0TmV3VHJhbnNhY3Rpb25Nb2RhbE9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzZXRNb2RhbE9wZW4iLCJ0b1N0cmluZyIsIm1vZGFsT3BlbiIsIm15S2V5IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});