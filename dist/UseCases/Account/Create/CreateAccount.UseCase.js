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

// src/UseCases/Account/Create/CreateAccount.UseCase.ts
var CreateAccount_UseCase_exports = {};
__export(CreateAccount_UseCase_exports, {
  CreateAccountUseCase: () => CreateAccountUseCase
});
module.exports = __toCommonJS(CreateAccount_UseCase_exports);
var import_tsyringe = require("tsyringe");

// src/shared/features/handleGenerateUuid/handleGenerateUuid.ts
var import_uuid = require("uuid");
var handleGenerateUuid = () => {
  const resultUuid = (0, import_uuid.v4)();
  return resultUuid;
};

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/Util/configHashPassword/handleCreatehash.ts
var import_crypto = __toESM(require("crypto"));
var handleCreateHash = (senha) => {
  const hash = import_crypto.default.createHash("sha256").update(senha).digest("hex");
  return hash;
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

// src/UseCases/Account/Create/SchemaCreateAccount.ts
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

// src/UseCases/Account/Create/CreateAccount.UseCase.ts
var CreateAccountUseCase = class {
  constructor(repositoryUser) {
    this.repositoryUser = repositoryUser;
  }
  async execute(request) {
    try {
      const data = ZODVerifyParse({
        schema: SchemaCreateAccount,
        data: request
      });
      const { isExists: isExistsUsers } = await this.repositoryUser.FindUserByEmail({ email: data.email });
      if (isExistsUsers)
        throw new AppError("Usu\xE1rio com este email j\xE1 existe");
      await this.repositoryUser.Create({
        name: data.name,
        email: data.email,
        id: handleGenerateUuid(),
        password: handleCreateHash(data.password),
        role: data.role
      });
      const returnResponse = {
        message: "Usu\xE1rio criado !"
      };
      return returnResponse;
    } catch (error) {
      console.log(error);
      const returnResponse = {
        message: "Error!"
      };
      return returnResponse;
    }
  }
};
CreateAccountUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryUsers"))
], CreateAccountUseCase);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateAccountUseCase
});
