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

// src/UseCases/Email/Get/GetEmail.Controller.ts
var GetEmail_Controller_exports = {};
__export(GetEmail_Controller_exports, {
  GetEmailController: () => GetEmailController
});
module.exports = __toCommonJS(GetEmail_Controller_exports);
var GetEmailController = class {
  constructor(GetEmailUseCase) {
    this.GetEmailUseCase = GetEmailUseCase;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { filter, page, pageSize } = request.query;
    const result = await this.GetEmailUseCase.execute({ page, pageSize, userId: token.id, filter });
    return response.status(200).json(result);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetEmailController
});
