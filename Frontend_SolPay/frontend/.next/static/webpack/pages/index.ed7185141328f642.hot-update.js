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

/***/ "./hooks/cashapp.js":
/*!**************************!*\
  !*** ./hooks/cashapp.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCashApp\": function() { return /* binding */ useCashApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/getAvatarUrl */ \"./functions/getAvatarUrl.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"./node_modules/@solana/wallet-adapter-base/lib/esm/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useCashApp = function() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), avatar = ref[0], setAvatar = ref[1];\n    var ref1 = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)(), connected = ref1.connected, publicKey = ref1.publicKey, sendTransaction = ref1.sendTransaction;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection)().connection;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), newTransactionModalOpen = ref2[0], setNewTransactionModalOpen = ref2[1];\n    var useLocalStorage = function(storageKey, fallBackState) {\n        _s1();\n        var ref;\n        var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((ref = JSON.parse(localStorage.getItem(storageKey))) !== null && ref !== void 0 ? ref : fallBackState), value = ref1[0], setValue = ref1[1];\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            localStorage.setItem(storageKey, JSON.stringify(value));\n        }, [\n            value,\n            setValue\n        ]);\n        return [\n            value,\n            setValue\n        ];\n    };\n    _s1(useLocalStorage, \"jHvJnacPfRxIKdlZrRB9rIpJAaA=\");\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(useLocalStorage(\"Transactions\", []), 2), transactions = ref3[0], setTransactions = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (connected) {\n            setAvatar((0,_functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__.getAvatarUrl)(publicKey));\n        }\n    }, [\n        connected\n    ]);\n    var makeTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(from, to, amount, ref) {\n            var network, endpoint, connection, blockhash, transaction, transferIX, transactionLength;\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__.WalletAdapterNetwork.Devnet;\n                        endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl)(network);\n                        connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(endpoint);\n                        _ctx.next = 5;\n                        return connection.getLatestBlockhash(\"finalized\");\n                    case 5:\n                        blockhash = _ctx.sent.blockhash;\n                        transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction({\n                            recentBlockhash: blockhash,\n                            feePayer: from\n                        });\n                        transferIX = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.SystemProgram.transfer({\n                            fromPubkey: from,\n                            toPubkey: to,\n                            lamports: amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL\n                        });\n                        transferIX.keys.push({\n                            pubkey: ref,\n                            isSigner: false,\n                            isWritable: false\n                        });\n                        transaction.add(transferIX);\n                        transactionLength = transaction.length;\n                        return _ctx.abrupt(\"return\", {\n                            transactionLength: transactionLength,\n                            transaction: transaction\n                        });\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function makeTransaction(from, to, amount, ref) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var amount, receiver, transactionPurpose, fromWallet, toWallet, bnAmount, ref, ref1, transactionLength, transaction, txHash, newID, newTransaction;\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        amount = param.amount, receiver = param.receiver, transactionPurpose = param.transactionPurpose;\n                        _ctx.prev = 1;\n                        fromWallet = publicKey;\n                        toWallet = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(receiver);\n                        bnAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](amount);\n                        ref = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Keypair.generate().publicKey;\n                        ref1 = makeTransaction(fromWallet, toWallet, bnAmount, ref), transactionLength = ref1.transactionLength, transaction = ref1.transaction;\n                        _ctx.next = 9;\n                        return sendTransaction(transaction, connection);\n                    case 9:\n                        txHash = _ctx.sent;\n                        newID = (transactionLength + 1).toString();\n                        newTransaction = {\n                            id: newID,\n                            from: {\n                                name: publicKey,\n                                handle: publicKey,\n                                avatar: avatar,\n                                verified: true\n                            },\n                            to: {\n                                name: receiver,\n                                handle: \"-\",\n                                avatar: (0,_functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__.getAvatarUrl)(receiver.toString()),\n                                verified: false\n                            },\n                            description: transactionPurpose,\n                            transactionDate: new Date(),\n                            status: \"Completed\",\n                            amount: amount,\n                            source: \"-\",\n                            identifier: \"-\"\n                        };\n                        setNewTransactionModalOpen(false);\n                        setTransactions([\n                            newTransaction\n                        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(transaction)));\n                        console.log(\"New Transaction: \", newTransaction);\n                        _ctx.next = 20;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0.message);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    17\n                ]\n            ]);\n        }));\n        return function doTransaction(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connected: connected,\n        publicKey: publicKey,\n        avatar: avatar,\n        doTransaction: doTransaction,\n        transactions: transactions,\n        setTransactions: setTransactions,\n        newTransactionModalOpen: newTransactionModalOpen,\n        setNewTransactionModalOpen: setNewTransactionModalOpen\n    };\n};\n_s(useCashApp, \"sWur1+JxK0q5St9j1FJaOBpE+88=\", true, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7d0JBRWxEdUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVkLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7d0JBS2pEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBSUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1NBR2hDO3dCQTdDS3hCLGFBQWE7OztPQTZDbEI7SUFFRCxPQUFPO1FBQUU3QyxTQUFTLEVBQVRBLFNBQVM7UUFBRUMsU0FBUyxFQUFUQSxTQUFTO1FBQUVILE1BQU0sRUFBTkEsTUFBTTtRQUFFK0MsYUFBYSxFQUFiQSxhQUFhO1FBQUU1QixZQUFZLEVBQVpBLFlBQVk7UUFBRUMsZUFBZSxFQUFmQSxlQUFlO1FBQUVkLHVCQUF1QixFQUF2QkEsdUJBQXVCO1FBQUVDLDBCQUEwQixFQUExQkEsMEJBQTBCO0tBQUU7Q0FDN0k7R0F4R1lSLFVBQVU7O1FBSStCVCxtRUFBUztRQUNwQ0QsdUVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvY2FzaGFwcC5qcz85MzA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEF2YXRhclVybCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZ2V0QXZhdGFyVXJsXCI7XG5pbXBvcnQgeyBXYWxsZXRBZGFwdGVyTmV0d29yayB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2VcIjtcbmltcG9ydCB7IHVzZUNvbm5lY3Rpb24sIHVzZVdhbGxldCB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBjbHVzdGVyQXBpVXJsLCBLZXlwYWlyLCBMQU1QT1JUU19QRVJfU09MLCBQdWJsaWNLZXksIFN5c3RlbVByb2dyYW0sIFRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VDYXNoQXBwID0gKCkgPT4gXG57XG4gICAgY29uc3QgW2F2YXRhciwgc2V0QXZhdGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgeyBjb25uZWN0ZWQsIHB1YmxpY0tleSwgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgICBjb25zdCBbbmV3VHJhbnNhY3Rpb25Nb2RhbE9wZW4sIHNldE5ld1RyYW5zYWN0aW9uTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gKHN0b3JhZ2VLZXksIGZhbGxCYWNrU3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpID8/IGZhbGxCYWNrU3RhdGVcbiAgICAgICAgKTtcblxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH0sIFt2YWx1ZSwgc2V0VmFsdWVdKTtcbiAgICAgICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdXG4gICAgfVxuXG4gICAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0VHJhbnNhY3Rpb25zXSA9IHVzZUxvY2FsU3RvcmFnZShcIlRyYW5zYWN0aW9uc1wiLCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gXG4gICAge1xuICAgICAgICBpZihjb25uZWN0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldEF2YXRhcihnZXRBdmF0YXJVcmwocHVibGljS2V5KSk7XG4gICAgICAgIH1cbiAgICB9LCBbY29ubmVjdGVkXSk7XG5cbiAgICBjb25zdCBtYWtlVHJhbnNhY3Rpb24gPSBhc3luYyAoZnJvbSwgdG8sIGFtb3VudCwgcmVmKSA9PiBcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBXYWxsZXRBZGFwdGVyTmV0d29yay5EZXZuZXQ7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gY2x1c3RlckFwaVVybChuZXR3b3JrKTtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKGVuZHBvaW50KTtcblxuICAgICAgICBjb25zdCB7IGJsb2NraGFzaCB9ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRMYXRlc3RCbG9ja2hhc2goXCJmaW5hbGl6ZWRcIik7XG5cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oe3JlY2VudEJsb2NraGFzaDogYmxvY2toYXNoLCBmZWVQYXllcjogZnJvbX0pO1xuICAgICAgICBjb25zdCB0cmFuc2ZlcklYID0gU3lzdGVtUHJvZ3JhbS50cmFuc2Zlcih7XG4gICAgICAgICAgICBmcm9tUHVia2V5OiBmcm9tLFxuICAgICAgICAgICAgdG9QdWJrZXk6IHRvLCBcbiAgICAgICAgICAgIGxhbXBvcnRzOiBhbW91bnQgKiBMQU1QT1JUU19QRVJfU09MXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRyYW5zZmVySVgua2V5cy5wdXNoKHtcbiAgICAgICAgICAgIHB1YmtleTogcmVmLFxuICAgICAgICAgICAgaXNTaWduZXI6IGZhbHNlLFxuICAgICAgICAgICAgaXNXcml0YWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdHJhbnNhY3Rpb24uYWRkKHRyYW5zZmVySVgpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkxlbmd0aCA9IHRyYW5zYWN0aW9uLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHt0cmFuc2FjdGlvbkxlbmd0aCwgdHJhbnNhY3Rpb259O1xuICAgIH0gXG5cbiAgICBjb25zdCBkb1RyYW5zYWN0aW9uID0gYXN5bmMgKHthbW91bnQsIHJlY2VpdmVyLCB0cmFuc2FjdGlvblB1cnBvc2V9KSA9PlxuICAgIHtcbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21XYWxsZXQgPSBwdWJsaWNLZXk7XG4gICAgICAgICAgICBjb25zdCB0b1dhbGxldCA9IG5ldyBQdWJsaWNLZXkocmVjZWl2ZXIpO1xuICAgICAgICAgICAgY29uc3QgYm5BbW91bnQgPSBuZXcgQmlnTnVtYmVyKGFtb3VudCk7XG4gICAgICAgICAgICBjb25zdCByZWYgPSBLZXlwYWlyLmdlbmVyYXRlKCkucHVibGljS2V5O1xuICAgICAgICAgICAgY29uc3Qge3RyYW5zYWN0aW9uTGVuZ3RoLCB0cmFuc2FjdGlvbn0gPSBtYWtlVHJhbnNhY3Rpb24oZnJvbVdhbGxldCwgdG9XYWxsZXQsIGJuQW1vdW50LCByZWYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdHhIYXNoID0gYXdhaXQgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3SUQgPSAodHJhbnNhY3Rpb25MZW5ndGggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG5ld0lELFxuICAgICAgICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHVibGljS2V5LFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmaWVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNlaXZlcixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnLScsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogZ2V0QXZhdGFyVXJsKHJlY2VpdmVyLnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0cmFuc2FjdGlvblB1cnBvc2UsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25EYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJDb21wbGV0ZWRcIixcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICctJyxcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnLSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXROZXdUcmFuc2FjdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRUcmFuc2FjdGlvbnMoW25ld1RyYW5zYWN0aW9uLCAuLi50cmFuc2FjdGlvbl0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBUcmFuc2FjdGlvbjogXCIsIG5ld1RyYW5zYWN0aW9uKTtcblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4geyBjb25uZWN0ZWQsIHB1YmxpY0tleSwgYXZhdGFyLCBkb1RyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9ucywgbmV3VHJhbnNhY3Rpb25Nb2RhbE9wZW4sIHNldE5ld1RyYW5zYWN0aW9uTW9kYWxPcGVuIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBdmF0YXJVcmwiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsInVzZUNvbm5lY3Rpb24iLCJ1c2VXYWxsZXQiLCJDb25uZWN0aW9uIiwiY2x1c3RlckFwaVVybCIsIktleXBhaXIiLCJMQU1QT1JUU19QRVJfU09MIiwiUHVibGljS2V5IiwiU3lzdGVtUHJvZ3JhbSIsIlRyYW5zYWN0aW9uIiwiQmlnTnVtYmVyIiwidXNlQ2FzaEFwcCIsImF2YXRhciIsInNldEF2YXRhciIsImNvbm5lY3RlZCIsInB1YmxpY0tleSIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3Rpb24iLCJuZXdUcmFuc2FjdGlvbk1vZGFsT3BlbiIsInNldE5ld1RyYW5zYWN0aW9uTW9kYWxPcGVuIiwidXNlTG9jYWxTdG9yYWdlIiwic3RvcmFnZUtleSIsImZhbGxCYWNrU3RhdGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2FjdGlvbnMiLCJtYWtlVHJhbnNhY3Rpb24iLCJmcm9tIiwidG8iLCJhbW91bnQiLCJyZWYiLCJuZXR3b3JrIiwiZW5kcG9pbnQiLCJibG9ja2hhc2giLCJ0cmFuc2FjdGlvbiIsInRyYW5zZmVySVgiLCJ0cmFuc2FjdGlvbkxlbmd0aCIsIkRldm5ldCIsImdldExhdGVzdEJsb2NraGFzaCIsInJlY2VudEJsb2NraGFzaCIsImZlZVBheWVyIiwidHJhbnNmZXIiLCJmcm9tUHVia2V5IiwidG9QdWJrZXkiLCJsYW1wb3J0cyIsImtleXMiLCJwdXNoIiwicHVia2V5IiwiaXNTaWduZXIiLCJpc1dyaXRhYmxlIiwiYWRkIiwibGVuZ3RoIiwiZG9UcmFuc2FjdGlvbiIsInJlY2VpdmVyIiwidHJhbnNhY3Rpb25QdXJwb3NlIiwiZnJvbVdhbGxldCIsInRvV2FsbGV0IiwiYm5BbW91bnQiLCJ0eEhhc2giLCJuZXdJRCIsIm5ld1RyYW5zYWN0aW9uIiwiZ2VuZXJhdGUiLCJ0b1N0cmluZyIsImlkIiwibmFtZSIsImhhbmRsZSIsInZlcmlmaWVkIiwiZGVzY3JpcHRpb24iLCJ0cmFuc2FjdGlvbkRhdGUiLCJEYXRlIiwic3RhdHVzIiwic291cmNlIiwiaWRlbnRpZmllciIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/cashapp.js\n"));

/***/ })

});