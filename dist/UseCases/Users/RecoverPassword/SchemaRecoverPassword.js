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

// src/UseCases/Users/RecoverPassword/SchemaRecoverPassword.ts
var SchemaRecoverPassword_exports = {};
__export(SchemaRecoverPassword_exports, {
  SchemaRecoverPassword: () => SchemaRecoverPassword
});
module.exports = __toCommonJS(SchemaRecoverPassword_exports);
var import_zod = require("zod");
var SchemaRecoverPassword = import_zod.z.object({
  id: import_zod.z.string({
    required_error: "id n\xE3o encontrado !",
    invalid_type_error: "Enviar id como string"
  }),
  password: import_zod.z.string({
    required_error: "password n\xE3o encontrado",
    invalid_type_error: "Enviar password como string"
  }).trim().min(1, { message: "Nova senha \xE9 obrigat\xF3rio" }).min(8, { message: "Nova senha deve conter no m\xEDnimo 8 d\xEDgitos" }).refine((senha) => /[a-z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra min\xFAscula"
  }).refine((senha) => /[A-Z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra mai\xFAscula"
  }).refine((senha) => /\d/.test(senha), {
    message: "A nova senha deve conter pelo menos um n\xFAmero"
  }),
  verifyPassword: import_zod.z.string({
    required_error: "verifyPassword n\xE3o encontrado",
    invalid_type_error: "Enviar verifyPassword como string"
  }).trim()
}).superRefine(({ password, verifyPassword }, ctx) => {
  if (password !== verifyPassword) {
    ctx.addIssue({
      code: "custom",
      message: "As senhas enviadas n\xE3o coincidem !"
    });
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SchemaRecoverPassword
});
