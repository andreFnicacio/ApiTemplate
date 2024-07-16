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

// src/UseCases/Email/Delete/DeleteEmail.Schema.ts
var DeleteEmail_Schema_exports = {};
__export(DeleteEmail_Schema_exports, {
  DeleteEmailSchema: () => DeleteEmailSchema
});
module.exports = __toCommonJS(DeleteEmail_Schema_exports);
var import_zod = require("zod");
var DeleteEmailSchema = import_zod.z.object({
  id: import_zod.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteEmailSchema
});
