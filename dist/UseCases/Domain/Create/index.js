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

// src/UseCases/Domain/Create/index.ts
var Create_exports = {};
__export(Create_exports, {
  CreateDomainControllerIndex: () => CreateDomainControllerIndex
});
module.exports = __toCommonJS(Create_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateDomainControllerIndex
});
