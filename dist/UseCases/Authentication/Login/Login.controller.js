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

// src/UseCases/Authentication/Login/Login.controller.ts
var Login_controller_exports = {};
__export(Login_controller_exports, {
  LoginController: () => LoginController
});
module.exports = __toCommonJS(Login_controller_exports);
var LoginController = class {
  constructor(loginUseCase) {
    this.loginUseCase = loginUseCase;
  }
  async handle(request, response) {
    const { password, email } = request.body;
    const data = await this.loginUseCase.execute({ password, email });
    return response.status(200).json(data);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LoginController
});
