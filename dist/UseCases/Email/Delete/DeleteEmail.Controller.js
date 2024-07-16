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

// src/UseCases/Email/Delete/DeleteEmail.Controller.ts
var DeleteEmail_Controller_exports = {};
__export(DeleteEmail_Controller_exports, {
  DeleteEmailController: () => DeleteEmailController
});
module.exports = __toCommonJS(DeleteEmail_Controller_exports);
var DeleteEmailController = class {
  constructor(DeleteEmailUseCase) {
    this.DeleteEmailUseCase = DeleteEmailUseCase;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { id } = request.params;
    const result = await this.DeleteEmailUseCase.execute({ id, userId: token.id });
    return response.status(200).json(result);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteEmailController
});
