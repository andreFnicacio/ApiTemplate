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

// src/shared/providers/templatesSendEmail/TemplateCardCore.ts
var TemplateCardCore_exports = {};
__export(TemplateCardCore_exports, {
  TemplateCardCore: () => TemplateCardCore
});
module.exports = __toCommonJS(TemplateCardCore_exports);
var TemplateCardCore = ({ content }) => `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <html>
    <body style="
      background: #eff7ff;
      font-family: Arial, Helvetica, sans-serif;
  
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      "
    >
      <div style="
          background-color: white;
          color: rgb(0, 0, 0);
  
          min-width: 400px;
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
          border-radius: 8px;
        ">
          <div style="display: flex; border-bottom: 1px solid rgb(161, 161, 161); padding-bottom: 12px;">
            <p style=" margin-left: 8px; text-align: center; font-weight: 600;">
              Bem vindo a Member Area.
            </p>
          </div>
  
            <div style="padding: 8px;">
              ${content}
            </div>

            <div style="border-top: 1px solid rgb(204, 204, 204); padding-top: 12px; margin-top: 16px;">
              <p style="margin: 4px 0;">Atenciosamente,</p>
              <p style="margin: 4px 0;">Member Area</p>
              <p style="margin: 4px 0;">(xx) x-xxxx-xxxx</p>
            </div>
          </div>
        </body>
    </html>
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TemplateCardCore
});
