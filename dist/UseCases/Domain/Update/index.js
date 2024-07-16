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

// src/UseCases/Domain/Update/index.ts
var Update_exports = {};
__export(Update_exports, {
  UpdateDomainControllerIndex: () => UpdateDomainControllerIndex
});
module.exports = __toCommonJS(Update_exports);
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Domain/Update/UpdateDomain.Controller.ts
var UpdateDomainController = class {
  constructor(UpdateDomainUseCase2) {
    this.UpdateDomainUseCase = UpdateDomainUseCase2;
  }
  async handle(request, response) {
    const { token, domain } = request.body;
    const { id } = request.params;
    const result = await this.UpdateDomainUseCase.execute({ id, domain, userId: token.id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Domain/Update/UpdateDomain.UseCase.ts
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

// src/UseCases/Domain/Update/UpdateDomain.Schema.ts
var import_zod = require("zod");
var UpdateDomainSchema = import_zod.z.object({
  id: import_zod.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  domain: import_zod.z.string({
    required_error: "Enviar o campo domain",
    invalid_type_error: "Dominio precisa ser string"
  }).trim().min(1, { message: "Dominio \xE9 obrigat\xF3rio" }),
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Domain/Update/UpdateDomain.UseCase.ts
var UpdateDomainUseCase = class {
  constructor(RepositoryDomains) {
    this.RepositoryDomains = RepositoryDomains;
  }
  async execute(request) {
    const { domain, userId, id } = ZODVerifyParse({
      schema: UpdateDomainSchema,
      data: request
    });
    const { data } = await this.RepositoryDomains.FindById({ id });
    console.log({ data });
    if (!data || data.userId !== userId)
      throw new AppError("N\xE3o existe um Dominio com esse id  !");
    await this.RepositoryDomains.Update({
      domain,
      id
    });
    const returnResponse = {
      message: "Dominio atualizado com sucesso !"
    };
    return returnResponse;
  }
};
UpdateDomainUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryDomains"))
], UpdateDomainUseCase);

// src/UseCases/Domain/Update/index.ts
var UpdateDomainControllerIndex = new UpdateDomainController(import_tsyringe2.container.resolve(UpdateDomainUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateDomainControllerIndex
});
