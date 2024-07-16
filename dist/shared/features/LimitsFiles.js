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

// src/shared/features/LimitsFiles.ts
var LimitsFiles_exports = {};
__export(LimitsFiles_exports, {
  SizeLimitUpload: () => SizeLimitUpload
});
module.exports = __toCommonJS(LimitsFiles_exports);
var SizeLimitUpload = {
  CLINIC_IMAGE: 1024 * 1024 * 5,
  FILES_MIGRATIONS_PATIENT: 1024 * 1024 * 10,
  FILES_PATIENT_IMAGE: 1024 * 1024 * 5,
  FILES_PATIENT_IMAGES: 1024 * 1024 * 5,
  FILES_FEEDBACK: 1024 * 1024 * 5,
  FILE_IMAGE_USER: 1024 * 1024 * 5
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SizeLimitUpload
});
