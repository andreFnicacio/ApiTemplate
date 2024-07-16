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

// src/UseCases/Domain/Get/index.ts
var Get_exports = {};
__export(Get_exports, {
  GetDomainControllerIndex: () => GetDomainControllerIndex
});
module.exports = __toCommonJS(Get_exports);
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Domain/Get/GetDomain.Controller.ts
var GetDomainController = class {
  constructor(GetDomainUseCase2) {
    this.GetDomainUseCase = GetDomainUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { page, pageSize, filter } = request.query;
    const result = await this.GetDomainUseCase.execute({ userId: token.id, page, pageSize, filter });
    return response.status(200).json(result);
  }
};

// src/UseCases/Domain/Get/GetDomain.UseCase.ts
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

// src/UseCases/Domain/Get/GetDomain.Schema.ts
var import_zod = require("zod");
var GetDomainSchema = import_zod.z.object({
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

// src/UseCases/Domain/Get/GetDomain.UseCase.ts
var GetDomainUseCase = class {
  constructor(RepositoryDomains) {
    this.RepositoryDomains = RepositoryDomains;
  }
  async execute(request) {
    const { userId, page, pageSize, filter } = ZODVerifyParse({
      schema: GetDomainSchema,
      data: request
    });
    const { data, meta } = await this.RepositoryDomains.Get({ userId, page, pageSize, filter });
    const returnResponse = {
      data,
      meta
    };
    return returnResponse;
  }
};
GetDomainUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryDomains"))
], GetDomainUseCase);

// src/UseCases/Domain/Get/index.ts
var GetDomainControllerIndex = new GetDomainController(import_tsyringe2.container.resolve(GetDomainUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetDomainControllerIndex
});
