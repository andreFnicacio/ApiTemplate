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

// src/Routes/Domain/DomainRoutes.ts
var DomainRoutes_exports = {};
__export(DomainRoutes_exports, {
  RoutesDomain: () => RoutesDomain
});
module.exports = __toCommonJS(DomainRoutes_exports);
var import_express = require("express");

// src/UseCases/Domain/Create/index.ts
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Domain/Create/CreateDomain.controller.ts
var CreateDomainController = class {
  constructor(CreateDomainUseCase2) {
    this.CreateDomainUseCase = CreateDomainUseCase2;
  }
  async handle(request, response) {
    const { domain, token } = request.body;
    const result = await this.CreateDomainUseCase.execute({ domain, userId: token.id });
    return response.status(201).json(result);
  }
};

// src/UseCases/Domain/Create/CreateDomain.UseCase.ts
var import_tsyringe = require("tsyringe");

// src/shared/providers/Ses.ts
var import_aws_sdk = __toESM(require("aws-sdk"));

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/providers/Ses.ts
import_aws_sdk.default.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});
var ses = new import_aws_sdk.default.SES();
var verifyDomainIdentity = async (domain) => {
  const params = {
    Domain: domain
  };
  try {
    const result = await ses.verifyDomainIdentity(params).promise();
    return result;
  } catch (error) {
    throw new AppError(`Failed to verify domain identity: ${error.message}`);
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

// src/UseCases/Domain/Create/SchemaCreateDomain.ts
var import_zod = require("zod");
var SchemaCreateDomain = import_zod.z.object({
  domain: import_zod.z.string({
    required_error: "Enviar o campo domain",
    invalid_type_error: "Dominio precisa ser string"
  }).trim().min(1, { message: "Dominio \xE9 obrigat\xF3rio" }),
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Domain/Create/CreateDomain.UseCase.ts
var CreateDomainUseCase = class {
  constructor(repositoryDomains) {
    this.repositoryDomains = repositoryDomains;
  }
  async execute(request) {
    try {
      const data = ZODVerifyParse({
        schema: SchemaCreateDomain,
        data: request
      });
      const { isExists: isExistsUsers } = await this.repositoryDomains.FindByDomain({ domain: data.domain });
      if (isExistsUsers)
        throw new AppError("Dominio j\xE1 cadastrado");
      const domainWithSes = await verifyDomainIdentity(data.domain);
      console.log({ domainWithSes });
      await this.repositoryDomains.Create({
        domain: data.domain,
        userId: data.userId
      });
      const returnResponse = {
        message: "Dominio criado !"
      };
      return returnResponse;
    } catch (error) {
      console.log({ error });
      const returnResponse = {
        message: "Error!"
      };
      return returnResponse;
    }
  }
};
CreateDomainUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryDomains"))
], CreateDomainUseCase);

// src/UseCases/Domain/Create/index.ts
var CreateDomainControllerIndex = new CreateDomainController(import_tsyringe2.container.resolve(CreateDomainUseCase));

// src/UseCases/Domain/Delete/index.ts
var import_tsyringe4 = require("tsyringe");

// src/UseCases/Domain/Delete/DeleteDomain.Controller.ts
var DeleteDomainController = class {
  constructor(DeleteDomainUseCase2) {
    this.DeleteDomainUseCase = DeleteDomainUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { id } = request.params;
    const result = await this.DeleteDomainUseCase.execute({ id, userId: token.id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Domain/Delete/DeleteDomain.UseCase.ts
var import_tsyringe3 = require("tsyringe");

// src/UseCases/Domain/Delete/DeleteDomain.Schema.ts
var import_zod3 = require("zod");
var DeleteDomainSchema = import_zod3.z.object({
  id: import_zod3.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod3.z.string({
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
  (0, import_tsyringe3.injectable)(),
  __decorateParam(0, (0, import_tsyringe3.inject)("RepositoryDomains"))
], DeleteDomainUseCase);

// src/UseCases/Domain/Delete/index.ts
var DeleteDomainControllerIndex = new DeleteDomainController(import_tsyringe4.container.resolve(DeleteDomainUseCase));

// src/UseCases/Domain/Get/index.ts
var import_tsyringe6 = require("tsyringe");

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
var import_tsyringe5 = require("tsyringe");

// src/UseCases/Domain/Get/GetDomain.Schema.ts
var import_zod5 = require("zod");
var GetDomainSchema = import_zod5.z.object({
  userId: import_zod5.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod5.z.coerce.number({
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
  pageSize: import_zod5.z.coerce.number({
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
  filter: import_zod5.z.string({
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
  (0, import_tsyringe5.injectable)(),
  __decorateParam(0, (0, import_tsyringe5.inject)("RepositoryDomains"))
], GetDomainUseCase);

// src/UseCases/Domain/Get/index.ts
var GetDomainControllerIndex = new GetDomainController(import_tsyringe6.container.resolve(GetDomainUseCase));

// src/UseCases/Domain/Update/index.ts
var import_tsyringe8 = require("tsyringe");

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
var import_tsyringe7 = require("tsyringe");

// src/UseCases/Domain/Update/UpdateDomain.Schema.ts
var import_zod7 = require("zod");
var UpdateDomainSchema = import_zod7.z.object({
  id: import_zod7.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  domain: import_zod7.z.string({
    required_error: "Enviar o campo domain",
    invalid_type_error: "Dominio precisa ser string"
  }).trim().min(1, { message: "Dominio \xE9 obrigat\xF3rio" }),
  userId: import_zod7.z.string({
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
  (0, import_tsyringe7.injectable)(),
  __decorateParam(0, (0, import_tsyringe7.inject)("RepositoryDomains"))
], UpdateDomainUseCase);

// src/UseCases/Domain/Update/index.ts
var UpdateDomainControllerIndex = new UpdateDomainController(import_tsyringe8.container.resolve(UpdateDomainUseCase));

// src/Routes/Domain/DomainRoutes.ts
var RoutesDomain = (0, import_express.Router)();
RoutesDomain.post("/domain/create", (req, res) => CreateDomainControllerIndex.handle(req, res));
RoutesDomain.get("/domain/get", (req, res) => GetDomainControllerIndex.handle(req, res));
RoutesDomain.put("/domain/update/:id", (req, res) => UpdateDomainControllerIndex.handle(req, res));
RoutesDomain.delete("/domain/delete/:id", (req, res) => DeleteDomainControllerIndex.handle(req, res));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoutesDomain
});
