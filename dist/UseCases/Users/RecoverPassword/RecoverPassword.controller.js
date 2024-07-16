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

// src/UseCases/Users/RecoverPassword/RecoverPassword.controller.ts
var RecoverPassword_controller_exports = {};
__export(RecoverPassword_controller_exports, {
  RecoverPasswordController: () => RecoverPasswordController
});
module.exports = __toCommonJS(RecoverPassword_controller_exports);
var RecoverPasswordController = class {
  constructor(RecoverPasswordUseCase) {
    this.RecoverPasswordUseCase = RecoverPasswordUseCase;
  }
  async handle(request, response) {
    const { password, verifyPassword } = request.body;
    const { id } = request.query;
    const result = await this.RecoverPasswordUseCase.execute({ id, password, verifyPassword });
    return response.status(201).json(result);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RecoverPasswordController
});
