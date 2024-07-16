"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/shared/features/formatDate/VerifyDateIsValidLib/VerifyDateIsValidLib.spec.ts
var import_vitest = require("vitest");

// src/shared/features/formatDate/VerifyDateIsValidLib/VerifyDateIsValidLib.ts
var import_moment = __toESM(require("moment"));
var handleVerifyDateIsValidLib = (hours) => {
  const isValid = (0, import_moment.default)(hours, "YYYY-MM-DD", true).isValid();
  return isValid;
};

// src/shared/features/formatDate/VerifyDateIsValidLib/VerifyDateIsValidLib.spec.ts
(0, import_vitest.describe)("Verify is Date is valid", () => {
  (0, import_vitest.it)("Should verify is Date is valid", async () => {
    const dateBR = "2023-03-01";
    const resultDateUS = handleVerifyDateIsValidLib(dateBR);
    (0, import_vitest.expect)(resultDateUS).toBe(true);
  });
  (0, import_vitest.it)("Should return error is Date with format invalid", async () => {
    (0, import_vitest.expect)(handleVerifyDateIsValidLib("2023-0w3-01")).toBe(false);
    (0, import_vitest.expect)(handleVerifyDateIsValidLib("20s23-03-01")).toBe(false);
    (0, import_vitest.expect)(handleVerifyDateIsValidLib("s0:90")).toBe(false);
    (0, import_vitest.expect)(handleVerifyDateIsValidLib("0:2023-03-01")).toBe(false);
    (0, import_vitest.expect)(handleVerifyDateIsValidLib("25:2023-03-01")).toBe(false);
    (0, import_vitest.expect)(handleVerifyDateIsValidLib("10:2023-03-01")).toBe(false);
  });
});
