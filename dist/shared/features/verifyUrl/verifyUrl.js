"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/shared/features/verifyUrl/verifyUrl.ts
var verifyUrl_exports = {};
__export(verifyUrl_exports, {
  VerifyUrl: () => VerifyUrl
});
module.exports = __toCommonJS(verifyUrl_exports);
function VerifyUrl({ url }) {
  const regex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}([a-zA-Z0-9\.\-\_\~\:\@\?\#\[\]\$\&\'\(\)\*\+\,\;\=\!]*)?$/;
  const isValid = regex.test(url);
  return isValid;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VerifyUrl
});
