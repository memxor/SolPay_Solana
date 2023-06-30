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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCashApp\": function() { return /* binding */ useCashApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/getAvatarUrl */ \"./functions/getAvatarUrl.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"./node_modules/@solana/wallet-adapter-base/lib/esm/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useCashApp = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), avatar = ref[0], setAvatar = ref[1];\n    var ref1 = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)(), connected = ref1.connected, publicKey = ref1.publicKey, sendTransaction = ref1.sendTransaction;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection)().connection;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (connected) {\n            setAvatar((0,_functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__.getAvatarUrl)(publicKey));\n        }\n    }, [\n        connected\n    ]);\n    var makeTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(from, to, amount, ref) {\n            var network, endpoint, connection, blockhash, transaction, transferIX;\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_7__.WalletAdapterNetwork.Devnet;\n                        endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl)(network);\n                        connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(endpoint);\n                        _ctx.next = 5;\n                        return connection.getLatestBlockhash(\"finalized\");\n                    case 5:\n                        blockhash = _ctx.sent.blockhash;\n                        transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction({\n                            recentBlockhash: blockhash,\n                            feePayer: from\n                        });\n                        transferIX = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.SystemProgram.transfer({\n                            fromPubkey: from,\n                            toPubkey: to,\n                            lamports: (amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL).toNumber()\n                        });\n                        transferIX.keys.push({\n                            pubkey: ref,\n                            isSigner: false,\n                            isWritable: false\n                        });\n                        transaction.add(transferIX);\n                        return _ctx.abrupt(\"return\", transaction);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function makeTransaction(from, to, amount, ref) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var amount, reciever, transactionPurpose, fromWallet, toWallet, bnAmount, ref, transaction, txHash;\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        amount = param.amount, reciever = param.reciever, transactionPurpose = param.transactionPurpose;\n                        fromWallet = publicKey;\n                        toWallet = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(reciever);\n                        bnAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](amount);\n                        ref = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Keypair.generate().publicKey;\n                        transaction = makeTransaction(fromWallet, toWallet, bnAmount, ref);\n                        _ctx.next = 8;\n                        return sendTransaction(transaction, connection);\n                    case 8:\n                        txHash = _ctx.sent;\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function doTransaction(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connected: connected,\n        publicKey: publicKey,\n        avatar: avatar,\n        doTransaction: doTransaction\n    };\n};\n_s(useCashApp, \"UGdOZPxcq0QoFi2RWy51MEVk/3o=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHakIsNkRBQWdCLEVBQUUsQ0FBQ1UsU0FBUyxDQUFDO3dCQUNuQ1csV0FBVyxHQUFHUixlQUFlLENBQUM0QixVQUFVLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFMUIsR0FBRyxDQUFDLENBQUM7OytCQUVwRE4sZUFBZSxDQUFDVSxXQUFXLEVBQUVULFVBQVUsQ0FBQzs7d0JBQXZEZ0MsTUFBTSxZQUFpRDs7Ozs7O1NBRWhFO3dCQVZLTixhQUFhOzs7T0FVbEI7SUFFRCxPQUFPO1FBQUU3QixTQUFTLEVBQVRBLFNBQVM7UUFBRUMsU0FBUyxFQUFUQSxTQUFTO1FBQUVILE1BQU0sRUFBTkEsTUFBTTtRQUFFK0IsYUFBYSxFQUFiQSxhQUFhO0tBQUU7Q0FDekQ7R0F0RFloQyxVQUFVOztRQUkrQlQsbUVBQVM7UUFDcENELHVFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL2Nhc2hhcHAuanM/OTMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBdmF0YXJVcmwgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2dldEF2YXRhclVybFwiO1xuaW1wb3J0IHsgV2FsbGV0QWRhcHRlck5ldHdvcmsgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlXCI7XG5pbXBvcnQgeyB1c2VDb25uZWN0aW9uLCB1c2VXYWxsZXQgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiwgY2x1c3RlckFwaVVybCwgS2V5cGFpciwgTEFNUE9SVFNfUEVSX1NPTCwgUHVibGljS2V5LCBTeXN0ZW1Qcm9ncmFtLCBUcmFuc2FjdGlvbiB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FzaEFwcCA9ICgpID0+IFxue1xuICAgIGNvbnN0IFthdmF0YXIsIHNldEF2YXRhcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHsgY29ubmVjdGVkLCBwdWJsaWNLZXksIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gXG4gICAge1xuICAgICAgICBpZihjb25uZWN0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldEF2YXRhcihnZXRBdmF0YXJVcmwocHVibGljS2V5KSk7XG4gICAgICAgIH1cbiAgICB9LCBbY29ubmVjdGVkXSk7XG5cbiAgICBjb25zdCBtYWtlVHJhbnNhY3Rpb24gPSBhc3luYyAoZnJvbSwgdG8sIGFtb3VudCwgcmVmKSA9PiBcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBXYWxsZXRBZGFwdGVyTmV0d29yay5EZXZuZXQ7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gY2x1c3RlckFwaVVybChuZXR3b3JrKTtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKGVuZHBvaW50KTtcblxuICAgICAgICBjb25zdCB7IGJsb2NraGFzaCB9ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRMYXRlc3RCbG9ja2hhc2goXCJmaW5hbGl6ZWRcIik7XG5cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oe3JlY2VudEJsb2NraGFzaDogYmxvY2toYXNoLCBmZWVQYXllcjogZnJvbX0pO1xuICAgICAgICBjb25zdCB0cmFuc2ZlcklYID0gU3lzdGVtUHJvZ3JhbS50cmFuc2Zlcih7XG4gICAgICAgICAgICBmcm9tUHVia2V5OiBmcm9tLFxuICAgICAgICAgICAgdG9QdWJrZXk6IHRvLCBcbiAgICAgICAgICAgIGxhbXBvcnRzOiAoYW1vdW50ICogTEFNUE9SVFNfUEVSX1NPTCkudG9OdW1iZXIoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0cmFuc2ZlcklYLmtleXMucHVzaCh7XG4gICAgICAgICAgICBwdWJrZXk6IHJlZixcbiAgICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcbiAgICAgICAgICAgIGlzV3JpdGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRyYW5zYWN0aW9uLmFkZCh0cmFuc2ZlcklYKTtcblxuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfSBcblxuICAgIGNvbnN0IGRvVHJhbnNhY3Rpb24gPSBhc3luYyAoe2Ftb3VudCwgcmVjaWV2ZXIsIHRyYW5zYWN0aW9uUHVycG9zZX0pID0+XG4gICAge1xuICAgICAgICBjb25zdCBmcm9tV2FsbGV0ID0gcHVibGljS2V5O1xuICAgICAgICBjb25zdCB0b1dhbGxldCA9IG5ldyBQdWJsaWNLZXkocmVjaWV2ZXIpO1xuICAgICAgICBjb25zdCBibkFtb3VudCA9IG5ldyBCaWdOdW1iZXIoYW1vdW50KTtcbiAgICAgICAgY29uc3QgcmVmID0gS2V5cGFpci5nZW5lcmF0ZSgpLnB1YmxpY0tleTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBtYWtlVHJhbnNhY3Rpb24oZnJvbVdhbGxldCwgdG9XYWxsZXQsIGJuQW1vdW50LCByZWYpO1xuXG4gICAgICAgIGNvbnN0IHR4SGFzaCA9IGF3YWl0IHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgY29ubmVjdGlvbik7XG5cbiAgICB9XG5cbiAgICByZXR1cm4geyBjb25uZWN0ZWQsIHB1YmxpY0tleSwgYXZhdGFyLCBkb1RyYW5zYWN0aW9uIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBdmF0YXJVcmwiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsInVzZUNvbm5lY3Rpb24iLCJ1c2VXYWxsZXQiLCJDb25uZWN0aW9uIiwiY2x1c3RlckFwaVVybCIsIktleXBhaXIiLCJMQU1QT1JUU19QRVJfU09MIiwiUHVibGljS2V5IiwiU3lzdGVtUHJvZ3JhbSIsIlRyYW5zYWN0aW9uIiwiQmlnTnVtYmVyIiwidXNlQ2FzaEFwcCIsImF2YXRhciIsInNldEF2YXRhciIsImNvbm5lY3RlZCIsInB1YmxpY0tleSIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3Rpb24iLCJtYWtlVHJhbnNhY3Rpb24iLCJmcm9tIiwidG8iLCJhbW91bnQiLCJyZWYiLCJuZXR3b3JrIiwiZW5kcG9pbnQiLCJibG9ja2hhc2giLCJ0cmFuc2FjdGlvbiIsInRyYW5zZmVySVgiLCJEZXZuZXQiLCJnZXRMYXRlc3RCbG9ja2hhc2giLCJyZWNlbnRCbG9ja2hhc2giLCJmZWVQYXllciIsInRyYW5zZmVyIiwiZnJvbVB1YmtleSIsInRvUHVia2V5IiwibGFtcG9ydHMiLCJ0b051bWJlciIsImtleXMiLCJwdXNoIiwicHVia2V5IiwiaXNTaWduZXIiLCJpc1dyaXRhYmxlIiwiYWRkIiwiZG9UcmFuc2FjdGlvbiIsInJlY2lldmVyIiwidHJhbnNhY3Rpb25QdXJwb3NlIiwiZnJvbVdhbGxldCIsInRvV2FsbGV0IiwiYm5BbW91bnQiLCJ0eEhhc2giLCJnZW5lcmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/cashapp.js\n"));

/***/ })

});