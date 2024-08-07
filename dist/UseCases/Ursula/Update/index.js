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

// src/UseCases/Ursula/Update/index.ts
var Update_exports = {};
__export(Update_exports, {
  UpdateUrsulaControllerIndex: () => UpdateUrsulaControllerIndex
});
module.exports = __toCommonJS(Update_exports);
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Ursula/Update/UpdateUrsula.Controller.ts
var UpdateUrsulaController = class {
  constructor(UpdateUrsulaUseCase2) {
    this.UpdateUrsulaUseCase = UpdateUrsulaUseCase2;
  }
  async handle(request, response) {
    const {} = request.body;
    const result = await this.UpdateUrsulaUseCase.execute({});
    return response.status(200).json(result);
  }
};

// src/UseCases/Ursula/Update/UpdateUrsula.UseCase.ts
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

// src/UseCases/Ursula/Update/UpdateUrsula.Schema.ts
var import_zod = require("zod");
var UpdateUrsulaSchema = import_zod.z.object({});

// src/UseCases/Ursula/Update/UpdateUrsula.UseCase.ts
var UpdateUrsulaUseCase = class {
  constructor(Repository) {
    this.Repository = Repository;
  }
  async execute(request) {
    const {} = ZODVerifyParse({
      schema: UpdateUrsulaSchema,
      data: request
    });
    const returnResponse = {};
    return returnResponse;
  }
};
UpdateUrsulaUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("Repository"))
], UpdateUrsulaUseCase);

// src/UseCases/Ursula/Update/index.ts
var UpdateUrsulaControllerIndex = new UpdateUrsulaController(import_tsyringe2.container.resolve(UpdateUrsulaUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateUrsulaControllerIndex
});
