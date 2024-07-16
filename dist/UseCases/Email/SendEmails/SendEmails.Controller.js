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

// src/UseCases/Email/SendEmails/SendEmails.Controller.ts
var SendEmails_Controller_exports = {};
__export(SendEmails_Controller_exports, {
  SendEmailsController: () => SendEmailsController
});
module.exports = __toCommonJS(SendEmails_Controller_exports);
var SendEmailsController = class {
  constructor(SendEmailsUseCase) {
    this.SendEmailsUseCase = SendEmailsUseCase;
  }
  async handle(request, response) {
    const { token, subject, text, to, from } = request.body;
    const result = await this.SendEmailsUseCase.execute({ subject, text, to, userId: token.id, from });
    return response.status(200).json(result);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SendEmailsController
});
