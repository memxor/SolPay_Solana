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

/***/ "./components/transaction/NewTransactionModal.js":
/*!*******************************************************!*\
  !*** ./components/transaction/NewTransactionModal.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ \"./components/Modal.js\");\n/* harmony import */ var _hooks_cashapp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/cashapp */ \"./hooks/cashapp.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar NewTransactionModal = function(param) {\n    var modalOpen = param.modalOpen, setModalOpen = param.setModalOpen;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), amount = ref[0], setAmount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), receiver = ref1[0], setReceiver = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), transactionPurpose = ref2[0], setTransactionPurpose = ref2[1];\n    var doTransaction = (0,_hooks_cashapp__WEBPACK_IMPORTED_MODULE_4__.useCashApp)().doTransaction;\n    var onAmountInput = function(e) {\n        e.preventDefault();\n        var newAmount = e.target.value;\n        setAmount(newAmount);\n        var input = document.querySelector(\"input#amount\");\n        input.style.width = newAmount.length + \"ch\";\n    };\n    var onPay = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(receiver);\n                        _ctx.next = 3;\n                        return doTransaction({\n                            amount: amount,\n                            receiver: receiver,\n                            transactionPurpose: transactionPurpose\n                        });\n                    case 3:\n                        setAmount(0);\n                        setReceiver(\"\");\n                        setTransactionPurpose(\"\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onPay() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        modalOpen: modalOpen,\n        setModalOpen: setModalOpen,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"relative flex flex-col items-center justify-center space-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center text-center text-7xl font-semibold text-[#00d54f]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: \"w-12 outline-none\",\n                            id: \"amount\",\n                            name: \"amount\",\n                            type: \"number\",\n                            value: amount,\n                            onChange: onAmountInput,\n                            min: 0\n                        }, void 0, false, {\n                            fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"amount\",\n                            children: \"SOL\"\n                        }, void 0, false, {\n                            fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex w-full flex-col space-y-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex rounded-lg border border-gray-200 p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    className: \"text-gray-300\",\n                                    htmlFor: \"receiver\",\n                                    children: \"To:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"w-full pl-2 font-medium text-gray-600 placeholder-gray-300 outline-none\",\n                                    id: \"receiver\",\n                                    name: \"receiver\",\n                                    type: \"text\",\n                                    placeholder: \"Name, $Cashtag, SMS, Email\",\n                                    value: receiver,\n                                    onChange: function(e) {\n                                        return setReceiver(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex rounded-lg border border-gray-200 p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    className: \"text-gray-300\",\n                                    htmlFor: \"transactionPurpose\",\n                                    children: \"For:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"w-full pl-2 font-medium text-gray-600 placeholder-gray-300 outline-none\",\n                                    id: \"transactionPurpose\",\n                                    name: \"transactionPurpose\",\n                                    type: \"text\",\n                                    placeholder: \"Dinner, Rent, etc.\",\n                                    value: transactionPurpose,\n                                    onChange: function(e) {\n                                        return setTransactionPurpose(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex w-full space-x-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: onPay,\n                        className: \"w-full rounded-lg bg-[#00d54f] py-3 px-12 text-white hover:bg-opacity-70\",\n                        children: \"Pay\"\n                    }, void 0, false, {\n                        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/home/Projects/Solana_Projects/SolPay_Solana/Frontend_SolPay/frontend/components/transaction/NewTransactionModal.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, _this);\n};\n_s(NewTransactionModal, \"v99Qnx7nogPkCi/rHeKI/eoQG+c=\", false, function() {\n    return [\n        _hooks_cashapp__WEBPACK_IMPORTED_MODULE_4__.useCashApp\n    ];\n});\n_c = NewTransactionModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTransactionModal);\nvar _c;\n$RefreshReg$(_c, \"NewTransactionModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RyYW5zYWN0aW9uL05ld1RyYW5zYWN0aW9uTW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztBQUFnQztBQUNKO0FBQ3FCO0FBRWpELElBQU1HLG1CQUFtQixHQUFHLGdCQUM1QjtRQUQrQkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFlBQVksU0FBWkEsWUFBWTs7SUFFbEQsSUFBNEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBaENNLE1BQU0sR0FBZU4sR0FBVyxHQUExQixFQUFFTyxTQUFTLEdBQUlQLEdBQVcsR0FBZjtJQUN4QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFyQ1EsUUFBUSxHQUFpQlIsSUFBWSxHQUE3QixFQUFFUyxXQUFXLEdBQUlULElBQVksR0FBaEI7SUFDNUIsSUFBb0RBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBekRVLGtCQUFrQixHQUEyQlYsSUFBWSxHQUF2QyxFQUFFVyxxQkFBcUIsR0FBSVgsSUFBWSxHQUFoQjtJQUVoRCxJQUFNLGFBQWUsR0FBS0UsMERBQVUsRUFBRSxDQUE5QlUsYUFBYTtJQUVyQixJQUFNQyxhQUFhLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQixJQUFNQyxTQUFTLEdBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLO1FBRWhDWCxTQUFTLENBQUNTLFNBQVMsQ0FBQztRQUVwQixJQUFNRyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNwREYsS0FBSyxDQUFDRyxLQUFLLENBQUNDLEtBQUssR0FBR1AsU0FBUyxDQUFDUSxNQUFNLEdBQUcsSUFBSTtLQUM5QztJQUVELElBQU1DLEtBQUs7bUJBQUcsNlJBQ2Q7Ozs7d0JBQ0lDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsUUFBUSxDQUFDLENBQUM7OytCQUNoQkksYUFBYSxDQUFDOzRCQUFDTixNQUFNLEVBQU5BLE1BQU07NEJBQUVFLFFBQVEsRUFBUkEsUUFBUTs0QkFBRUUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7eUJBQUMsQ0FBQzs7d0JBQzNESCxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNaRSxXQUFXLENBQUMsRUFBRSxDQUFDO3dCQUNmRSxxQkFBcUIsQ0FBQyxFQUFFLENBQUM7Ozs7OztTQUM1Qjt3QkFQS2MsS0FBSzs7O09BT1Y7SUFFRCxxQkFDSSw4REFBQ3hCLDhDQUFLO1FBQUNHLFNBQVMsRUFBRUEsU0FBUztRQUFFQyxZQUFZLEVBQUVBLFlBQVk7a0JBQ25ELDRFQUFDdUIsS0FBRztZQUFDQyxTQUFTLEVBQUMsOERBQThEOzs4QkFDekUsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvRkFBb0Y7O3NDQUMvRiw4REFBQ1YsT0FBSzs0QkFBQ1UsU0FBUyxFQUFDLG1CQUFtQjs0QkFBQ0MsRUFBRSxFQUFDLFFBQVE7NEJBQUNDLElBQUksRUFBQyxRQUFROzRCQUFDQyxJQUFJLEVBQUMsUUFBUTs0QkFBQ2QsS0FBSyxFQUFFWixNQUFNOzRCQUFFMkIsUUFBUSxFQUFFcEIsYUFBYTs0QkFBRXFCLEdBQUcsRUFBRSxDQUFDOzs7OztpQ0FBSTtzQ0FDL0gsOERBQUNDLE9BQUs7NEJBQUNDLE9BQU8sRUFBQyxRQUFRO3NDQUFDLEtBQUc7Ozs7O2lDQUFROzs7Ozs7eUJBQ2pDOzhCQUVOLDhEQUFDUixLQUFHO29CQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOztzQ0FDM0MsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7OzhDQUN2RCw4REFBQ00sT0FBSztvQ0FBQ04sU0FBUyxFQUFDLGVBQWU7b0NBQUNPLE9BQU8sRUFBQyxVQUFVOzhDQUFDLEtBRXBEOzs7Ozt5Q0FBUTs4Q0FDUiw4REFBQ2pCLE9BQUs7b0NBQUNVLFNBQVMsRUFBQyx5RUFBeUU7b0NBQUNDLEVBQUUsRUFBQyxVQUFVO29DQUFDQyxJQUFJLEVBQUMsVUFBVTtvQ0FBQ0MsSUFBSSxFQUFDLE1BQU07b0NBQUNLLFdBQVcsRUFBQyw0QkFBNEI7b0NBQUNuQixLQUFLLEVBQUVWLFFBQVE7b0NBQUV5QixRQUFRLEVBQUUsU0FBQ25CLENBQUM7K0NBQUtMLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEtBQUssQ0FBQztxQ0FBQTs7Ozs7eUNBQUk7Ozs7OztpQ0FDN087c0NBRU4sOERBQUNVLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7OzhDQUN2RCw4REFBQ00sT0FBSztvQ0FBQ04sU0FBUyxFQUFDLGVBQWU7b0NBQUNPLE9BQU8sRUFBQyxvQkFBb0I7OENBQUMsTUFFOUQ7Ozs7O3lDQUFROzhDQUNSLDhEQUFDakIsT0FBSztvQ0FBQ1UsU0FBUyxFQUFDLHlFQUF5RTtvQ0FBQ0MsRUFBRSxFQUFDLG9CQUFvQjtvQ0FBQ0MsSUFBSSxFQUFDLG9CQUFvQjtvQ0FBQ0MsSUFBSSxFQUFDLE1BQU07b0NBQUNLLFdBQVcsRUFBQyxvQkFBb0I7b0NBQUNuQixLQUFLLEVBQUVSLGtCQUFrQjtvQ0FBRXVCLFFBQVEsRUFBRSxTQUFDbkIsQ0FBQzsrQ0FBS0gscUJBQXFCLENBQUNHLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUM7cUNBQUE7Ozs7O3lDQUFJOzs7Ozs7aUNBQzdROzs7Ozs7eUJBQ0o7OEJBRU4sOERBQUNVLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx1QkFBdUI7OEJBQ2xDLDRFQUFDUyxRQUFNO3dCQUFDQyxPQUFPLEVBQUVkLEtBQUs7d0JBQUVJLFNBQVMsRUFBQywwRUFBMEU7a0NBQUMsS0FFN0c7Ozs7OzZCQUFTOzs7Ozt5QkFDUDs7Ozs7O2lCQUNKOzs7OzthQUNGLENBQ1g7Q0FDSjtHQTNESzFCLG1CQUFtQjs7UUFNS0Qsc0RBQVU7OztBQU5sQ0MsS0FBQUEsbUJBQW1CO0FBNkR6QiwrREFBZUEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24vTmV3VHJhbnNhY3Rpb25Nb2RhbC5qcz8yNGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnXG5pbXBvcnQgeyB1c2VDYXNoQXBwIH0gZnJvbSAnLi4vLi4vaG9va3MvY2FzaGFwcCc7XG5cbmNvbnN0IE5ld1RyYW5zYWN0aW9uTW9kYWwgPSAoeyBtb2RhbE9wZW4sIHNldE1vZGFsT3BlbiB9KSA9PiBcbntcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbcmVjZWl2ZXIsIHNldFJlY2VpdmVyXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt0cmFuc2FjdGlvblB1cnBvc2UsIHNldFRyYW5zYWN0aW9uUHVycG9zZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IHsgZG9UcmFuc2FjdGlvbiB9ID0gdXNlQ2FzaEFwcCgpO1xuXG4gICAgY29uc3Qgb25BbW91bnRJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBuZXdBbW91bnQgPSBlLnRhcmdldC52YWx1ZVxuXG4gICAgICAgIHNldEFtb3VudChuZXdBbW91bnQpXG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNhbW91bnQnKVxuICAgICAgICBpbnB1dC5zdHlsZS53aWR0aCA9IG5ld0Ftb3VudC5sZW5ndGggKyAnY2gnXG4gICAgfVxuXG4gICAgY29uc3Qgb25QYXkgPSBhc3luYyAoKSA9PiBcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VpdmVyKTtcbiAgICAgICAgYXdhaXQgZG9UcmFuc2FjdGlvbih7YW1vdW50LCByZWNlaXZlciwgdHJhbnNhY3Rpb25QdXJwb3NlfSk7XG4gICAgICAgIHNldEFtb3VudCgwKVxuICAgICAgICBzZXRSZWNlaXZlcihcIlwiKVxuICAgICAgICBzZXRUcmFuc2FjdGlvblB1cnBvc2UoXCJcIilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgbW9kYWxPcGVuPXttb2RhbE9wZW59IHNldE1vZGFsT3Blbj17c2V0TW9kYWxPcGVufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LTd4bCBmb250LXNlbWlib2xkIHRleHQtWyMwMGQ1NGZdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEyIG91dGxpbmUtbm9uZVwiIGlkPVwiYW1vdW50XCIgbmFtZT1cImFtb3VudFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YW1vdW50fSBvbkNoYW5nZT17b25BbW91bnRJbnB1dH0gbWluPXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPlNPTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIiBodG1sRm9yPVwicmVjZWl2ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBwbGFjZWhvbGRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmVcIiBpZD1cInJlY2VpdmVyXCIgbmFtZT1cInJlY2VpdmVyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUsICRDYXNodGFnLCBTTVMsIEVtYWlsXCIgdmFsdWU9e3JlY2VpdmVyfSBvbkNoYW5nZT17KGUpID0+IHNldFJlY2VpdmVyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCIgaHRtbEZvcj1cInRyYW5zYWN0aW9uUHVycG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBwbGFjZWhvbGRlci1ncmF5LTMwMCBvdXRsaW5lLW5vbmVcIiBpZD1cInRyYW5zYWN0aW9uUHVycG9zZVwiIG5hbWU9XCJ0cmFuc2FjdGlvblB1cnBvc2VcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGlubmVyLCBSZW50LCBldGMuXCIgdmFsdWU9e3RyYW5zYWN0aW9uUHVycG9zZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUcmFuc2FjdGlvblB1cnBvc2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgc3BhY2UteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25QYXl9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLVsjMDBkNTRmXSBweS0zIHB4LTEyIHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS03MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGF5XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdUcmFuc2FjdGlvbk1vZGFsXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNb2RhbCIsInVzZUNhc2hBcHAiLCJOZXdUcmFuc2FjdGlvbk1vZGFsIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiYW1vdW50Iiwic2V0QW1vdW50IiwicmVjZWl2ZXIiLCJzZXRSZWNlaXZlciIsInRyYW5zYWN0aW9uUHVycG9zZSIsInNldFRyYW5zYWN0aW9uUHVycG9zZSIsImRvVHJhbnNhY3Rpb24iLCJvbkFtb3VudElucHV0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3QW1vdW50IiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJvblBheSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm5hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJtaW4iLCJsYWJlbCIsImh0bWxGb3IiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/transaction/NewTransactionModal.js\n"));

/***/ })

});