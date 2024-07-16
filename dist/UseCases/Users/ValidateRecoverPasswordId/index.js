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

// src/UseCases/Users/ValidateRecoverPasswordId/index.ts
var ValidateRecoverPasswordId_exports = {};
__export(ValidateRecoverPasswordId_exports, {
  ValidateForgotPasswordIndex: () => ValidateForgotPasswordIndex
});
module.exports = __toCommonJS(ValidateRecoverPasswordId_exports);
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Users/ValidateRecoverPasswordId/ValidateRecoverPassword.controller.ts
var ValidateForgotPasswordController = class {
  constructor(ValidateForgotPasswordUseCase2) {
    this.ValidateForgotPasswordUseCase = ValidateForgotPasswordUseCase2;
  }
  async handle(request, response) {
    const { id } = request.params;
    const result = await this.ValidateForgotPasswordUseCase.execute({ id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Users/ValidateRecoverPasswordId/ValidateRecoverPassword.useCase.ts
var import_tsyringe = require("tsyringe");

// src/shared/features/verifyHoursIsAfter/verifyHoursIsAfter.ts
var import_moment = __toESM(require("moment"));
function VerifyDateHoursIsAfter({ hour }) {
  const now = (0, import_moment.default)();
  const isAfter = now.isAfter((0, import_moment.default)(hour));
  return isAfter;
}

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/UseCases/Users/ValidateRecoverPasswordId/ValidateRecoverPassword.useCase.ts
var ValidateForgotPasswordUseCase = class {
  constructor(RepositoryRecoverPassword) {
    this.RepositoryRecoverPassword = RepositoryRecoverPassword;
  }
  async execute({ id }) {
    if (!id)
      throw new AppError("Enviar o id !");
    const { isExists, data } = await this.RepositoryRecoverPassword.FindById({ id });
    if (!isExists || !data) {
      return {
        isValid: false,
        message: "Link Inv\xE1lido !"
      };
    }
    const expired = VerifyDateHoursIsAfter({ hour: data.expirationAt });
    if (expired) {
      return {
        isValid: false,
        message: "Link Expirado !"
      };
    }
    return {
      isValid: true,
      message: "Link V\xE1lido !"
    };
  }
};
ValidateForgotPasswordUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryRecoverPassword"))
], ValidateForgotPasswordUseCase);

// src/UseCases/Users/ValidateRecoverPasswordId/index.ts
var ValidateForgotPasswordIndex = new ValidateForgotPasswordController(import_tsyringe2.container.resolve(ValidateForgotPasswordUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ValidateForgotPasswordIndex
});
