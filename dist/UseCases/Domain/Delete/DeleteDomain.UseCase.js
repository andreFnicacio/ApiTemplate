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

// src/UseCases/Domain/Delete/DeleteDomain.UseCase.ts
var DeleteDomain_UseCase_exports = {};
__export(DeleteDomain_UseCase_exports, {
  DeleteDomainUseCase: () => DeleteDomainUseCase
});
module.exports = __toCommonJS(DeleteDomain_UseCase_exports);
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

// src/UseCases/Domain/Delete/DeleteDomain.Schema.ts
var import_zod = require("zod");
var DeleteDomainSchema = import_zod.z.object({
  id: import_zod.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Domain/Delete/DeleteDomain.UseCase.ts
var DeleteDomainUseCase = class {
  constructor(RepositoryDomains) {
    this.RepositoryDomains = RepositoryDomains;
  }
  async execute(request) {
    const { id, userId } = ZODVerifyParse({
      schema: DeleteDomainSchema,
      data: request
    });
    const { data } = await this.RepositoryDomains.FindById({ id });
    if (!data || data.userId !== userId)
      throw new AppError("N\xE3o existe um Dominio com esse id !");
    await this.RepositoryDomains.Delete({ id });
    const returnResponse = {
      message: "Dominio deletado com sucesso !"
    };
    return returnResponse;
  }
};
DeleteDomainUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryDomains"))
], DeleteDomainUseCase);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteDomainUseCase
});
