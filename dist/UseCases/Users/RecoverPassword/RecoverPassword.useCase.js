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

// src/UseCases/Users/RecoverPassword/RecoverPassword.useCase.ts
var RecoverPassword_useCase_exports = {};
__export(RecoverPassword_useCase_exports, {
  RecoverPasswordUseCase: () => RecoverPasswordUseCase
});
module.exports = __toCommonJS(RecoverPassword_useCase_exports);
var import_tsyringe = require("tsyringe");

// src/shared/features/verifyHoursIsAfter/verifyHoursIsAfter.ts
var import_moment = __toESM(require("moment"));
function VerifyDateHoursIsAfter({ hour }) {
  const now = (0, import_moment.default)();
  const isAfter = now.isAfter((0, import_moment.default)(hour));
  return isAfter;
}

// src/shared/Util/configHashPassword/handleCreatehash.ts
var import_crypto = __toESM(require("crypto"));
var handleCreateHash = (senha) => {
  const hash = import_crypto.default.createHash("sha256").update(senha).digest("hex");
  return hash;
};

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

// src/UseCases/Users/RecoverPassword/SchemaRecoverPassword.ts
var import_zod = require("zod");
var SchemaRecoverPassword = import_zod.z.object({
  id: import_zod.z.string({
    required_error: "id n\xE3o encontrado !",
    invalid_type_error: "Enviar id como string"
  }),
  password: import_zod.z.string({
    required_error: "password n\xE3o encontrado",
    invalid_type_error: "Enviar password como string"
  }).trim().min(1, { message: "Nova senha \xE9 obrigat\xF3rio" }).min(8, { message: "Nova senha deve conter no m\xEDnimo 8 d\xEDgitos" }).refine((senha) => /[a-z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra min\xFAscula"
  }).refine((senha) => /[A-Z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra mai\xFAscula"
  }).refine((senha) => /\d/.test(senha), {
    message: "A nova senha deve conter pelo menos um n\xFAmero"
  }),
  verifyPassword: import_zod.z.string({
    required_error: "verifyPassword n\xE3o encontrado",
    invalid_type_error: "Enviar verifyPassword como string"
  }).trim()
}).superRefine(({ password, verifyPassword }, ctx) => {
  if (password !== verifyPassword) {
    ctx.addIssue({
      code: "custom",
      message: "As senhas enviadas n\xE3o coincidem !"
    });
  }
});

// src/UseCases/Users/RecoverPassword/RecoverPassword.useCase.ts
var RecoverPasswordUseCase = class {
  constructor(RepositoryUsers, RepositoryRecoverPassword) {
    this.RepositoryUsers = RepositoryUsers;
    this.RepositoryRecoverPassword = RepositoryRecoverPassword;
  }
  async execute(request) {
    const { id, password } = ZODVerifyParse({
      schema: SchemaRecoverPassword,
      data: request
    });
    const { isExists, data: dataRecoverPassword } = await this.RepositoryRecoverPassword.FindById({ id });
    if (!isExists || !dataRecoverPassword) {
      const errorReturn = {
        isValid: false,
        messagE: "Link n\xE3o existe !"
      };
      return errorReturn;
    }
    const expired = VerifyDateHoursIsAfter({ hour: dataRecoverPassword.expirationAt });
    if (expired) {
      return {
        isValid: false,
        message: "Link Expirado !"
      };
    }
    const hashPassword = handleCreateHash(password);
    await this.RepositoryUsers.UpdatePassword({ id: dataRecoverPassword.userId, password: hashPassword });
    await this.RepositoryRecoverPassword.DeleteById({ id });
    const responseReturn = {
      isValid: true,
      message: "Senha alterada com sucesso !"
    };
    return responseReturn;
  }
};
RecoverPasswordUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryUsers")),
  __decorateParam(1, (0, import_tsyringe.inject)("RepositoryRecoverPassword"))
], RecoverPasswordUseCase);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RecoverPasswordUseCase
});
