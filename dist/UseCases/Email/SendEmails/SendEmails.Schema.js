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

// src/UseCases/Email/SendEmails/SendEmails.Schema.ts
var SendEmails_Schema_exports = {};
__export(SendEmails_Schema_exports, {
  SendEmailsSchema: () => SendEmailsSchema
});
module.exports = __toCommonJS(SendEmails_Schema_exports);
var import_zod = require("zod");
var SendEmailsSchema = import_zod.z.object({
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  from: import_zod.z.string({ required_error: "Enviar o campo from", invalid_type_error: "Campo from precisa ser string !" }).trim().refine(
    (data) => {
      const [name, email] = data.split("<");
      const [_, domain] = email.split("@");
      const [localPart] = domain.split(">");
      return !!name && !!email && !!localPart && !!domain;
    },
    { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' }
  ).optional(),
  to: import_zod.z.array(
    import_zod.z.string({ required_error: "Enviar o campo to", invalid_type_error: "Campo to precisa ser um email !" }).email("Campo to precisa ser um email v\xE1lido")
  ),
  subject: import_zod.z.string({ required_error: "Enviar o campo subject", invalid_type_error: "Campo subject precisa ser string !" }).trim(),
  text: import_zod.z.string({ required_error: "Enviar o campo text", invalid_type_error: "Campo text precisa ser string !" }).trim()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SendEmailsSchema
});
