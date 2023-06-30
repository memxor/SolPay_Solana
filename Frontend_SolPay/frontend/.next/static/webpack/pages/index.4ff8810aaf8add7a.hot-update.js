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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCashApp\": function() { return /* binding */ useCashApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/getAvatarUrl */ \"./functions/getAvatarUrl.js\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"./node_modules/@solana/wallet-adapter-base/lib/esm/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.mjs\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useCashApp = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), avatar = ref[0], setAvatar = ref[1];\n    var ref1 = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)(), connected = ref1.connected, publicKey = ref1.publicKey, sendTransaction = ref1.sendTransaction;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection)().connection;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (connected) {\n            setAvatar((0,_functions_getAvatarUrl__WEBPACK_IMPORTED_MODULE_2__.getAvatarUrl)(publicKey));\n        }\n    }, [\n        connected\n    ]);\n    var makeTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(from, to, amount, ref) {\n            var network, endpoint, connection, blockhash, transaction, transferIX;\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_7__.WalletAdapterNetwork.Devnet;\n                        endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl)(network);\n                        connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(endpoint);\n                        _ctx.next = 5;\n                        return connection.getLatestBlockhash(\"finalized\");\n                    case 5:\n                        blockhash = _ctx.sent.blockhash;\n                        transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction({\n                            recentBlockhash: blockhash,\n                            feePayer: from\n                        });\n                        transferIX = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.SystemProgram.transfer({\n                            fromPubkey: from,\n                            toPubkey: to,\n                            lamports: amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL\n                        });\n                        transferIX.keys.push({\n                            pubkey: ref,\n                            isSigner: false,\n                            isWritable: false\n                        });\n                        transaction.add(transferIX);\n                        return _ctx.abrupt(\"return\", transaction);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function makeTransaction(from, to, amount, ref) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doTransaction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var amount, receiver, transactionPurpose, fromWallet, toWallet, bnAmount, ref, transaction, txHash;\n            return _home_home_Projects_Solana_Projects_SolPay_Solana_Frontend_SolPay_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        amount = param.amount, receiver = param.receiver, transactionPurpose = param.transactionPurpose;\n                        _ctx.prev = 1;\n                        fromWallet = publicKey;\n                        toWallet = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(receiver);\n                        bnAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](amount);\n                        ref = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Keypair.generate().publicKey;\n                        transaction = makeTransaction(fromWallet, toWallet, bnAmount, ref);\n                        _ctx.next = 9;\n                        return sendTransaction(transaction, connection);\n                    case 9:\n                        txHash = _ctx.sent;\n                        _ctx.next = 14;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    12\n                ]\n            ]);\n        }));\n        return function doTransaction(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connected: connected,\n        publicKey: publicKey,\n        avatar: avatar,\n        doTransaction: doTransaction\n    };\n};\n_s(useCashApp, \"UGdOZPxcq0QoFi2RWy51MEVk/3o=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQzt3QkFDbkNXLFdBQVcsR0FBR1IsZUFBZSxDQUFDMkIsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRXpCLEdBQUcsQ0FBQyxDQUFDOzsrQkFFcEROLGVBQWUsQ0FBQ1UsV0FBVyxFQUFFVCxVQUFVLENBQUM7O3dCQUF2RCtCLE1BQU0sWUFBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7U0FPcEU7d0JBakJLTixhQUFhOzs7T0FpQmxCO0lBRUQsT0FBTztRQUFFNUIsU0FBUyxFQUFUQSxTQUFTO1FBQUVDLFNBQVMsRUFBVEEsU0FBUztRQUFFSCxNQUFNLEVBQU5BLE1BQU07UUFBRThCLGFBQWEsRUFBYkEsYUFBYTtLQUFFO0NBQ3pEO0dBN0RZL0IsVUFBVTs7UUFJK0JULG1FQUFTO1FBQ3BDRCx1RUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy9jYXNoYXBwLmpzPzkzMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0QXZhdGFyVXJsIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9nZXRBdmF0YXJVcmxcIjtcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZVwiO1xuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24sIGNsdXN0ZXJBcGlVcmwsIEtleXBhaXIsIExBTVBPUlRTX1BFUl9TT0wsIFB1YmxpY0tleSwgU3lzdGVtUHJvZ3JhbSwgVHJhbnNhY3Rpb24gfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUNhc2hBcHAgPSAoKSA9PiBcbntcbiAgICBjb25zdCBbYXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCB7IGNvbm5lY3RlZCwgcHVibGljS2V5LCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IFxuICAgIHtcbiAgICAgICAgaWYoY29ubmVjdGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXRBdmF0YXIoZ2V0QXZhdGFyVXJsKHB1YmxpY0tleSkpO1xuICAgICAgICB9XG4gICAgfSwgW2Nvbm5lY3RlZF0pO1xuXG4gICAgY29uc3QgbWFrZVRyYW5zYWN0aW9uID0gYXN5bmMgKGZyb20sIHRvLCBhbW91bnQsIHJlZikgPT4gXG4gICAge1xuICAgICAgICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuRGV2bmV0O1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGNsdXN0ZXJBcGlVcmwobmV0d29yayk7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihlbmRwb2ludCk7XG5cbiAgICAgICAgY29uc3QgeyBibG9ja2hhc2ggfSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0TGF0ZXN0QmxvY2toYXNoKFwiZmluYWxpemVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKHtyZWNlbnRCbG9ja2hhc2g6IGJsb2NraGFzaCwgZmVlUGF5ZXI6IGZyb219KTtcbiAgICAgICAgY29uc3QgdHJhbnNmZXJJWCA9IFN5c3RlbVByb2dyYW0udHJhbnNmZXIoe1xuICAgICAgICAgICAgZnJvbVB1YmtleTogZnJvbSxcbiAgICAgICAgICAgIHRvUHVia2V5OiB0bywgXG4gICAgICAgICAgICBsYW1wb3J0czogYW1vdW50ICogTEFNUE9SVFNfUEVSX1NPTFxuICAgICAgICB9KTtcblxuICAgICAgICB0cmFuc2ZlcklYLmtleXMucHVzaCh7XG4gICAgICAgICAgICBwdWJrZXk6IHJlZixcbiAgICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcbiAgICAgICAgICAgIGlzV3JpdGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRyYW5zYWN0aW9uLmFkZCh0cmFuc2ZlcklYKTtcblxuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfSBcblxuICAgIGNvbnN0IGRvVHJhbnNhY3Rpb24gPSBhc3luYyAoe2Ftb3VudCwgcmVjZWl2ZXIsIHRyYW5zYWN0aW9uUHVycG9zZX0pID0+XG4gICAge1xuICAgICAgICB0cnlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZnJvbVdhbGxldCA9IHB1YmxpY0tleTtcbiAgICAgICAgICAgIGNvbnN0IHRvV2FsbGV0ID0gbmV3IFB1YmxpY0tleShyZWNlaXZlcik7XG4gICAgICAgICAgICBjb25zdCBibkFtb3VudCA9IG5ldyBCaWdOdW1iZXIoYW1vdW50KTtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IEtleXBhaXIuZ2VuZXJhdGUoKS5wdWJsaWNLZXk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG1ha2VUcmFuc2FjdGlvbihmcm9tV2FsbGV0LCB0b1dhbGxldCwgYm5BbW91bnQsIHJlZik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0eEhhc2ggPSBhd2FpdCBzZW5kVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIGNvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycilcbiAgICAgICAge1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbm5lY3RlZCwgcHVibGljS2V5LCBhdmF0YXIsIGRvVHJhbnNhY3Rpb24gfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldEF2YXRhclVybCIsIldhbGxldEFkYXB0ZXJOZXR3b3JrIiwidXNlQ29ubmVjdGlvbiIsInVzZVdhbGxldCIsIkNvbm5lY3Rpb24iLCJjbHVzdGVyQXBpVXJsIiwiS2V5cGFpciIsIkxBTVBPUlRTX1BFUl9TT0wiLCJQdWJsaWNLZXkiLCJTeXN0ZW1Qcm9ncmFtIiwiVHJhbnNhY3Rpb24iLCJCaWdOdW1iZXIiLCJ1c2VDYXNoQXBwIiwiYXZhdGFyIiwic2V0QXZhdGFyIiwiY29ubmVjdGVkIiwicHVibGljS2V5Iiwic2VuZFRyYW5zYWN0aW9uIiwiY29ubmVjdGlvbiIsIm1ha2VUcmFuc2FjdGlvbiIsImZyb20iLCJ0byIsImFtb3VudCIsInJlZiIsIm5ldHdvcmsiLCJlbmRwb2ludCIsImJsb2NraGFzaCIsInRyYW5zYWN0aW9uIiwidHJhbnNmZXJJWCIsIkRldm5ldCIsImdldExhdGVzdEJsb2NraGFzaCIsInJlY2VudEJsb2NraGFzaCIsImZlZVBheWVyIiwidHJhbnNmZXIiLCJmcm9tUHVia2V5IiwidG9QdWJrZXkiLCJsYW1wb3J0cyIsImtleXMiLCJwdXNoIiwicHVia2V5IiwiaXNTaWduZXIiLCJpc1dyaXRhYmxlIiwiYWRkIiwiZG9UcmFuc2FjdGlvbiIsInJlY2VpdmVyIiwidHJhbnNhY3Rpb25QdXJwb3NlIiwiZnJvbVdhbGxldCIsInRvV2FsbGV0IiwiYm5BbW91bnQiLCJ0eEhhc2giLCJnZW5lcmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/cashapp.js\n"));

/***/ })

});