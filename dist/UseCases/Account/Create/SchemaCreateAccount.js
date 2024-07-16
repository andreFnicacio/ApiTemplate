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

// src/UseCases/Account/Create/SchemaCreateAccount.ts
var SchemaCreateAccount_exports = {};
__export(SchemaCreateAccount_exports, {
  SchemaCreateAccount: () => SchemaCreateAccount
});
module.exports = __toCommonJS(SchemaCreateAccount_exports);
var import_zod = require("zod");

// src/shared/features/handleIsValidEmail/handleIsValidEmail.ts
var HandleIsValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailFormat = email.trim();
  const isValid = emailRegex.test(emailFormat);
  return isValid;
};

// src/UseCases/Account/Create/SchemaCreateAccount.ts
var SchemaCreateAccount = import_zod.z.object({
  name: import_zod.z.string({
    required_error: "Enviar o campo name",
    invalid_type_error: "Enviar name precisa ser string"
  }).trim().min(1, { message: "Nome \xE9 obrigat\xF3rio" }),
  email: import_zod.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "Enviar email como string"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val)) {
      ctx.addIssue({
        code: "custom",
        message: "Formato de email invalido"
      });
    }
  }),
  role: import_zod.z.enum(["ADMIN", "USER"], { required_error: "Enviar campo role", invalid_type_error: "Enviar role como ADMIN | USER" }),
  password: import_zod.z.string({
    required_error: "password n\xE3o encontrado",
    invalid_type_error: "Enviar password como string"
  }).trim().min(1, { message: "Senha \xE9 obrigat\xF3rio" }).min(8, { message: "Senha deve conter no m\xEDnimo 8 d\xEDgitos" }).refine((senha) => /[a-z]/.test(senha), {
    message: "A senha deve conter pelo menos uma letra min\xFAscula"
  }).refine((senha) => /[A-Z]/.test(senha), {
    message: "A senha deve conter pelo menos uma letra mai\xFAscula"
  }).refine((senha) => /\d/.test(senha), {
    message: "A senha deve conter pelo menos um n\xFAmero"
  })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SchemaCreateAccount
});
