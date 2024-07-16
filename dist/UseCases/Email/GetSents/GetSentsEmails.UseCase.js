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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/UseCases/Email/GetSents/GetSentsEmails.UseCase.ts
var GetSentsEmails_UseCase_exports = {};
__export(GetSentsEmails_UseCase_exports, {
  GetSentsEmailsUseCase: () => GetSentsEmailsUseCase
});
module.exports = __toCommonJS(GetSentsEmails_UseCase_exports);
var import_tsyringe = require("tsyringe");

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/Util/ZOD/zod.ts
var ZODVerifyParse = ({ schema, data }) => {
  try {
    const resultParse = schema.parse(data);
    return resultParse;
  } catch (error) {
    const { message: messageError } = JSON.parse(error.message)[0];
    throw new AppError(messageError, 422);
  }
};

// src/UseCases/Email/GetSents/GetSentsEmails.Schema.ts
var import_zod = require("zod");
var GetSentsEmailsSchema = import_zod.z.object({
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod.z.coerce.number({
    required_error: "page n\xE3o encontrado !",
    invalid_type_error: "Enviar page como number"
  }).superRefine((val, ctx) => {
    if (val <= 0) {
      ctx.addIssue({ code: "custom", message: "page n\xE3o pode ser igual ou menor que 0" });
    }
    if (!Number.isInteger(val)) {
      ctx.addIssue({ code: "custom", message: "page n\xE3o pode ser convertido em um n\xFAmero inteiro!" });
    }
  }).optional().default(1),
  pageSize: import_zod.z.coerce.number({
    required_error: "pageSize n\xE3o encontrado !",
    invalid_type_error: "Enviar pageSize como number"
  }).superRefine((val, ctx) => {
    if (val <= 0) {
      ctx.addIssue({ code: "custom", message: "pageSize n\xE3o pode ser igual ou menor que 0" });
    }
    if (!Number.isInteger(val)) {
      ctx.addIssue({ code: "custom", message: "pageSize n\xE3o pode ser convertido em um n\xFAmero inteiro!" });
    }
  }).optional().default(10),
  filter: import_zod.z.string({
    invalid_type_error: "Enviar filter como string"
  }).trim().transform((val) => val === "" ? void 0 : val).optional()
});

// src/UseCases/Email/GetSents/GetSentsEmails.UseCase.ts
var GetSentsEmailsUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { page, pageSize, userId, filter } = ZODVerifyParse({
      schema: GetSentsEmailsSchema,
      data: request
    });
    const { data, meta } = await this.RepositoryEmails.GetSents({ page, pageSize, userId, filter });
    const returnResponse = { data, meta };
    return returnResponse;
  }
};
GetSentsEmailsUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryEmails"))
], GetSentsEmailsUseCase);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetSentsEmailsUseCase
});
