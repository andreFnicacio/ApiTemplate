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

// src/UseCases/Email/Delete/index.ts
var Delete_exports = {};
__export(Delete_exports, {
  DeleteEmailControllerIndex: () => DeleteEmailControllerIndex
});
module.exports = __toCommonJS(Delete_exports);
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Email/Delete/DeleteEmail.Controller.ts
var DeleteEmailController = class {
  constructor(DeleteEmailUseCase2) {
    this.DeleteEmailUseCase = DeleteEmailUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { id } = request.params;
    const result = await this.DeleteEmailUseCase.execute({ id, userId: token.id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/Delete/DeleteEmail.UseCase.ts
var import_tsyringe = require("tsyringe");

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

// src/UseCases/Email/Delete/DeleteEmail.Schema.ts
var import_zod = require("zod");
var DeleteEmailSchema = import_zod.z.object({
  id: import_zod.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Email/Delete/DeleteEmail.UseCase.ts
var DeleteEmailUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { id, userId } = ZODVerifyParse({
      schema: DeleteEmailSchema,
      data: request
    });
    const { isExists } = await this.RepositoryEmails.FindById({ id, userId });
    if (!isExists)
      throw new AppError("N\xE3o existe um email com esse id !");
    const returnResponse = { message: "Email deletado com sucesso !" };
    return returnResponse;
  }
};
DeleteEmailUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryEmails"))
], DeleteEmailUseCase);

// src/UseCases/Email/Delete/index.ts
var DeleteEmailControllerIndex = new DeleteEmailController(import_tsyringe2.container.resolve(DeleteEmailUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteEmailControllerIndex
});
