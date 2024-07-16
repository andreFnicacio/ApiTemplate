"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/shared/features/formatDate/FormatDate.ts
var FormatDate_exports = {};
__export(FormatDate_exports, {
  FormatDateBR: () => FormatDateBR,
  GetDateHoursBr: () => GetDateHoursBr,
  GetDateUSSemValue: () => GetDateUSSemValue,
  GetHoursCurrency: () => GetHoursCurrency
});
module.exports = __toCommonJS(FormatDate_exports);
var import_moment = __toESM(require("moment"));
var FormatDateBR = (value) => {
  const dateFormat = new Date(value).toLocaleDateString("pt-BR", {
    timeZone: "UTC"
  });
  return dateFormat;
};
var GetDateUSSemValue = () => {
  const momentDate = (0, import_moment.default)();
  const result = momentDate.utcOffset(-10800 / 60).format("YYYY-MM-DD");
  return result;
};
var GetDateHoursBr = () => {
  const resultHors = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }).format(/* @__PURE__ */ new Date());
  return resultHors;
};
var GetHoursCurrency = () => {
  const momentDate = (0, import_moment.default)();
  const hoursAtual = momentDate.utcOffset(-10800 / 60).format("HH:mm");
  return hoursAtual;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormatDateBR,
  GetDateHoursBr,
  GetDateUSSemValue,
  GetHoursCurrency
});
