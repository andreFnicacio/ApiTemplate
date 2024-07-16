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

// src/UseCases/Email/Create/index.ts
var Create_exports = {};
__export(Create_exports, {
  CreateEmailControllerIndex: () => CreateEmailControllerIndex
});
module.exports = __toCommonJS(Create_exports);
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Email/Create/CreateEmail.Controller.ts
var CreateEmailController = class {
  constructor(CreateEmailUseCase2) {
    this.CreateEmailUseCase = CreateEmailUseCase2;
  }
  async handle(request, response) {
    const { token, email } = request.body;
    const result = await this.CreateEmailUseCase.execute({ email, userId: token.id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/Create/CreateEmail.UseCase.ts
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

// src/UseCases/Email/Create/CreateEmail.Schema.ts
var import_zod = require("zod");

// src/shared/features/handleIsValidEmail/handleIsValidEmail.ts
var HandleIsValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailFormat = email.trim();
  const isValid = emailRegex.test(emailFormat);
  return isValid;
};

// src/UseCases/Email/Create/CreateEmail.Schema.ts
var CreateEmailSchema = import_zod.z.object({
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  email: import_zod.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "email precisa ser string !"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val))
      ctx.addIssue({ code: "custom", message: "formato do email invalido !" });
  })
});

// src/UseCases/Email/Create/CreateEmail.UseCase.ts
var CreateEmailUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { email, userId } = ZODVerifyParse({
      schema: CreateEmailSchema,
      data: request
    });
    const { isExists } = await this.RepositoryEmails.CheckEmail({ email, userId });
    if (isExists)
      throw new AppError("Voc\xEA j\xE1 cadastrou esse email !");
    await this.RepositoryEmails.Create({ email, userId });
    const returnResponse = { message: "Email cadastrado com sucesso !" };
    return returnResponse;
  }
};
CreateEmailUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryEmails"))
], CreateEmailUseCase);

// src/UseCases/Email/Create/index.ts
var CreateEmailControllerIndex = new CreateEmailController(import_tsyringe2.container.resolve(CreateEmailUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateEmailControllerIndex
});
