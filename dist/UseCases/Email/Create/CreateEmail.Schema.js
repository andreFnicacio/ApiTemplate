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

// src/UseCases/Email/Create/CreateEmail.Schema.ts
var CreateEmail_Schema_exports = {};
__export(CreateEmail_Schema_exports, {
  CreateEmailSchema: () => CreateEmailSchema
});
module.exports = __toCommonJS(CreateEmail_Schema_exports);
var import_zod = require("zod");

// src/shared/features/handleIsValidEmail/handleIsValidEmail.ts
var HandleIsValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailFormat = email.trim();
  const isValid = emailRegex.test(emailFormat);
  return isValid;
};

// src/UseCases/Email/Create/CreateEmail.Schema.ts
var CreateEmailSchema = import_zod.z.object({
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  email: import_zod.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "email precisa ser string !"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val))
      ctx.addIssue({ code: "custom", message: "formato do email invalido !" });
  })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateEmailSchema
});
