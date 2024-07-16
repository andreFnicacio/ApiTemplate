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

// src/Routes/Email/EmailRoutes.ts
var EmailRoutes_exports = {};
__export(EmailRoutes_exports, {
  RoutesEmail: () => RoutesEmail
});
module.exports = __toCommonJS(EmailRoutes_exports);
var import_express = require("express");

// src/UseCases/Email/Create/index.ts
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

// src/UseCases/Email/Delete/index.ts
var import_tsyringe4 = require("tsyringe");

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
var import_tsyringe3 = require("tsyringe");

// src/UseCases/Email/Delete/DeleteEmail.Schema.ts
var import_zod3 = require("zod");
var DeleteEmailSchema = import_zod3.z.object({
  id: import_zod3.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod3.z.string({
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
  (0, import_tsyringe3.injectable)(),
  __decorateParam(0, (0, import_tsyringe3.inject)("RepositoryEmails"))
], DeleteEmailUseCase);

// src/UseCases/Email/Delete/index.ts
var DeleteEmailControllerIndex = new DeleteEmailController(import_tsyringe4.container.resolve(DeleteEmailUseCase));

// src/UseCases/Email/Get/index.ts
var import_tsyringe6 = require("tsyringe");

// src/UseCases/Email/Get/GetEmail.Controller.ts
var GetEmailController = class {
  constructor(GetEmailUseCase2) {
    this.GetEmailUseCase = GetEmailUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { filter, page, pageSize } = request.query;
    const result = await this.GetEmailUseCase.execute({ page, pageSize, userId: token.id, filter });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/Get/GetEmail.UseCase.ts
var import_tsyringe5 = require("tsyringe");

// src/UseCases/Email/Get/GetEmail.Schema.ts
var import_zod5 = require("zod");
var GetEmailSchema = import_zod5.z.object({
  userId: import_zod5.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod5.z.coerce.number({
    required_error: "page n\xE3o encontrado !",
    invalid_type_error: "Enviar page como number"
  }).superRefine((val, ctx) => {
    if (val <= 0) {
      ctx.addIssue({ code: "custom", message: "page n\xE3o pode ser igual ou menor que 0" });
    }
    if (!Number.isInteger(val)) {
      ctx.addIssue({ code: "custom", message: "page n\xE3o pode ser convertido em um n\xFAmero inteiro!" });
    }
  }).optional().default(1),
  pageSize: import_zod5.z.coerce.number({
    required_error: "pageSize n\xE3o encontrado !",
    invalid_type_error: "Enviar pageSize como number"
  }).superRefine((val, ctx) => {
    if (val <= 0) {
      ctx.addIssue({ code: "custom", message: "pageSize n\xE3o pode ser igual ou menor que 0" });
    }
    if (!Number.isInteger(val)) {
      ctx.addIssue({ code: "custom", message: "pageSize n\xE3o pode ser convertido em um n\xFAmero inteiro!" });
    }
  }).optional().default(10),
  filter: import_zod5.z.string({
    invalid_type_error: "Enviar filter como string"
  }).trim().transform((val) => val === "" ? void 0 : val).optional()
});

// src/UseCases/Email/Get/GetEmail.UseCase.ts
var GetEmailUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { page, pageSize, userId, filter } = ZODVerifyParse({
      schema: GetEmailSchema,
      data: request
    });
    const { data, meta } = await this.RepositoryEmails.Get({ page, pageSize, userId, filter });
    const returnResponse = { data, meta };
    return returnResponse;
  }
};
GetEmailUseCase = __decorateClass([
  (0, import_tsyringe5.injectable)(),
  __decorateParam(0, (0, import_tsyringe5.inject)("RepositoryEmails"))
], GetEmailUseCase);

// src/UseCases/Email/Get/index.ts
var GetEmailControllerIndex = new GetEmailController(import_tsyringe6.container.resolve(GetEmailUseCase));

// src/UseCases/Email/GetSents/index.ts
var import_tsyringe8 = require("tsyringe");

// src/UseCases/Email/GetSents/GetSentsEmails.Controller.ts
var GetSentsEmailsController = class {
  constructor(GetSentsEmailsUseCase2) {
    this.GetSentsEmailsUseCase = GetSentsEmailsUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { page, pageSize, filter } = request.query;
    const result = await this.GetSentsEmailsUseCase.execute({ page, pageSize, userId: token.id, filter });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/GetSents/GetSentsEmails.UseCase.ts
var import_tsyringe7 = require("tsyringe");

// src/UseCases/Email/GetSents/GetSentsEmails.Schema.ts
var import_zod7 = require("zod");
var GetSentsEmailsSchema = import_zod7.z.object({
  userId: import_zod7.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod7.z.coerce.number({
    required_error: "page n\xE3o encontrado !",
    invalid_type_error: "Enviar page como number"
  }).superRefine((val, ctx) => {
    if (val <= 0) {
      ctx.addIssue({ code: "custom", message: "page n\xE3o pode ser igual ou menor que 0" });
    }
    if (!Number.isInteger(val)) {
      ctx.addIssue({ code: "custom", message: "page n\xE3o pode ser convertido em um n\xFAmero inteiro!" });
    }
  }).optional().default(1),
  pageSize: import_zod7.z.coerce.number({
    required_error: "pageSize n\xE3o encontrado !",
    invalid_type_error: "Enviar pageSize como number"
  }).superRefine((val, ctx) => {
    if (val <= 0) {
      ctx.addIssue({ code: "custom", message: "pageSize n\xE3o pode ser igual ou menor que 0" });
    }
    if (!Number.isInteger(val)) {
      ctx.addIssue({ code: "custom", message: "pageSize n\xE3o pode ser convertido em um n\xFAmero inteiro!" });
    }
  }).optional().default(10),
  filter: import_zod7.z.string({
    invalid_type_error: "Enviar filter como string"
  }).trim().transform((val) => val === "" ? void 0 : val).optional()
});

// src/UseCases/Email/GetSents/GetSentsEmails.UseCase.ts
var GetSentsEmailsUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { page, pageSize, userId, filter } = ZODVerifyParse({
      schema: GetSentsEmailsSchema,
      data: request
    });
    const { data, meta } = await this.RepositoryEmails.GetSents({ page, pageSize, userId, filter });
    const returnResponse = { data, meta };
    return returnResponse;
  }
};
GetSentsEmailsUseCase = __decorateClass([
  (0, import_tsyringe7.injectable)(),
  __decorateParam(0, (0, import_tsyringe7.inject)("RepositoryEmails"))
], GetSentsEmailsUseCase);

// src/UseCases/Email/GetSents/index.ts
var GetSentsEmailsControllerIndex = new GetSentsEmailsController(import_tsyringe8.container.resolve(GetSentsEmailsUseCase));

// src/UseCases/Email/Send/index.ts
var import_tsyringe10 = require("tsyringe");

// src/UseCases/Email/Send/SendEmail.Controller.ts
var SendEmailController = class {
  constructor(SendEmailUseCase2) {
    this.SendEmailUseCase = SendEmailUseCase2;
  }
  async handle(request, response) {
    const { token, from, subject, to, text } = request.body;
    const result = await this.SendEmailUseCase.execute({ from, subject, to, userId: token.id, text });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/Send/SendEmail.UseCase.ts
var import_tsyringe9 = require("tsyringe");

// src/shared/providers/Ses.ts
var import_aws_sdk = __toESM(require("aws-sdk"));
import_aws_sdk.default.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});
var ses = new import_aws_sdk.default.SES();
var sendEmail = async (to, subject, body) => {
  const params = {
    Source: process.env.SES_VERIFIED_EMAIL,
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8"
      },
      Body: {
        Text: {
          Data: body,
          Charset: "UTF-8"
        }
      }
    }
  };
  try {
    const result = await ses.sendEmail(params).promise();
    console.log(`Email sent to ${to}: ${result.MessageId}`);
    return result;
  } catch (error) {
    throw new AppError(`Failed to send email: ${error.message}`);
  }
};

// src/UseCases/Email/Send/SendEmail.Schema.ts
var import_zod9 = require("zod");
var SendEmailSchema = import_zod9.z.object({
  userId: import_zod9.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  from: import_zod9.z.string({ required_error: "Enviar o campo from", invalid_type_error: "Campo from precisa ser string !" }).trim().refine(
    (data) => {
      const [name, email] = data.split("<");
      const [_, domain] = email.split("@");
      const [localPart] = domain.split(">");
      return !!name && !!email && !!localPart && !!domain;
    },
    { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' }
  ).optional(),
  to: import_zod9.z.string({ required_error: "Enviar o campo to", invalid_type_error: "Campo to precisa ser um email !" }).email("Campo to precisa ser um email v\xE1lido"),
  subject: import_zod9.z.string({ required_error: "Enviar o campo subject", invalid_type_error: "Campo subject precisa ser string !" }).trim(),
  text: import_zod9.z.string({ required_error: "Enviar o campo text", invalid_type_error: "Campo text precisa ser string !" }).trim()
});

// src/UseCases/Email/Send/SendEmail.UseCase.ts
var SendEmailUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { subject, to, userId, text } = ZODVerifyParse({
      schema: SendEmailSchema,
      data: request
    });
    const response = await sendEmail(to, subject, text);
    await this.RepositoryEmails.SaveEmailSended({ subject, text, to, userId });
    const returnResponse = {
      message: "Email disparado com sucesso !",
      response
    };
    return returnResponse;
  }
};
SendEmailUseCase = __decorateClass([
  (0, import_tsyringe9.injectable)(),
  __decorateParam(0, (0, import_tsyringe9.inject)("RepositoryEmails"))
], SendEmailUseCase);

// src/UseCases/Email/Send/index.ts
var SendEmailControllerIndex = new SendEmailController(import_tsyringe10.container.resolve(SendEmailUseCase));

// src/UseCases/Email/SendEmails/index.ts
var import_tsyringe12 = require("tsyringe");

// src/UseCases/Email/SendEmails/SendEmails.Controller.ts
var SendEmailsController = class {
  constructor(SendEmailsUseCase2) {
    this.SendEmailsUseCase = SendEmailsUseCase2;
  }
  async handle(request, response) {
    const { token, subject, text, to, from } = request.body;
    const result = await this.SendEmailsUseCase.execute({ subject, text, to, userId: token.id, from });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/SendEmails/SendEmails.UseCase.ts
var import_tsyringe11 = require("tsyringe");

// src/UseCases/Email/SendEmails/SendEmails.Schema.ts
var import_zod11 = require("zod");
var SendEmailsSchema = import_zod11.z.object({
  userId: import_zod11.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  from: import_zod11.z.string({ required_error: "Enviar o campo from", invalid_type_error: "Campo from precisa ser string !" }).trim().refine(
    (data) => {
      const [name, email] = data.split("<");
      const [_, domain] = email.split("@");
      const [localPart] = domain.split(">");
      return !!name && !!email && !!localPart && !!domain;
    },
    { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' }
  ).optional(),
  to: import_zod11.z.array(
    import_zod11.z.string({ required_error: "Enviar o campo to", invalid_type_error: "Campo to precisa ser um email !" }).email("Campo to precisa ser um email v\xE1lido")
  ),
  subject: import_zod11.z.string({ required_error: "Enviar o campo subject", invalid_type_error: "Campo subject precisa ser string !" }).trim(),
  text: import_zod11.z.string({ required_error: "Enviar o campo text", invalid_type_error: "Campo text precisa ser string !" }).trim()
});

// src/UseCases/Email/SendEmails/SendEmails.UseCase.ts
var SendEmailsUseCase = class {
  constructor(RepositoryEmails, RepositoryUsers) {
    this.RepositoryEmails = RepositoryEmails;
    this.RepositoryUsers = RepositoryUsers;
  }
  async execute(request) {
    const { subject, text, to, userId } = ZODVerifyParse({
      schema: SendEmailsSchema,
      data: request
    });
    const { isExists } = await this.RepositoryUsers.FindUserById({ id: userId });
    if (!isExists)
      throw new AppError("Dados do usuario nao encontrado !");
    to.forEach(async (receiver) => {
      await sendEmail(receiver, subject, text);
      await this.RepositoryEmails.SaveEmailSended({ subject, text, to: receiver, userId });
    });
    const returnResponse = {
      message: "Emails disparados !"
    };
    return returnResponse;
  }
};
SendEmailsUseCase = __decorateClass([
  (0, import_tsyringe11.injectable)(),
  __decorateParam(0, (0, import_tsyringe11.inject)("RepositoryEmails")),
  __decorateParam(1, (0, import_tsyringe11.inject)("RepositoryUsers"))
], SendEmailsUseCase);

// src/UseCases/Email/SendEmails/index.ts
var SendEmailsControllerIndex = new SendEmailsController(import_tsyringe12.container.resolve(SendEmailsUseCase));

// src/UseCases/Email/Update/index.ts
var import_tsyringe14 = require("tsyringe");

// src/UseCases/Email/Update/UpdateEmails.Controller.ts
var UpdateEmailsController = class {
  constructor(UpdateEmailsUseCase2) {
    this.UpdateEmailsUseCase = UpdateEmailsUseCase2;
  }
  async handle(request, response) {
    const { token, email } = request.body;
    const { id } = request.params;
    const result = await this.UpdateEmailsUseCase.execute({ userId: token.id, email, id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Email/Update/UpdateEmails.UseCase.ts
var import_tsyringe13 = require("tsyringe");

// src/UseCases/Email/Update/UpdateEmails.Schema.ts
var import_zod13 = require("zod");
var UpdateEmailsSchema = import_zod13.z.object({
  id: import_zod13.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod13.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  email: import_zod13.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "email precisa ser string !"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val))
      ctx.addIssue({ code: "custom", message: "formato do email invalido !" });
  })
});

// src/UseCases/Email/Update/UpdateEmails.UseCase.ts
var UpdateEmailsUseCase = class {
  constructor(RepositoryEmails) {
    this.RepositoryEmails = RepositoryEmails;
  }
  async execute(request) {
    const { email, id, userId } = ZODVerifyParse({
      schema: UpdateEmailsSchema,
      data: request
    });
    const { isExists } = await this.RepositoryEmails.FindById({ id, userId });
    if (!isExists)
      throw new AppError("N\xE3o existe um email cadastrado com esse id !");
    await this.RepositoryEmails.Update({ email, id });
    const returnResponse = { message: "Email atualizado com sucesso !" };
    return returnResponse;
  }
};
UpdateEmailsUseCase = __decorateClass([
  (0, import_tsyringe13.injectable)(),
  __decorateParam(0, (0, import_tsyringe13.inject)("RepositoryEmails"))
], UpdateEmailsUseCase);

// src/UseCases/Email/Update/index.ts
var UpdateEmailsControllerIndex = new UpdateEmailsController(import_tsyringe14.container.resolve(UpdateEmailsUseCase));

// src/Routes/Email/EmailRoutes.ts
var RoutesEmail = (0, import_express.Router)();
RoutesEmail.post("/email/create", (req, res) => CreateEmailControllerIndex.handle(req, res));
RoutesEmail.get("/email/get", (req, res) => GetEmailControllerIndex.handle(req, res));
RoutesEmail.put("/email/update/:id", (req, res) => UpdateEmailsControllerIndex.handle(req, res));
RoutesEmail.delete("/email/delete/:id", (req, res) => DeleteEmailControllerIndex.handle(req, res));
RoutesEmail.post("/email/send-email", (req, res) => SendEmailControllerIndex.handle(req, res));
RoutesEmail.get("/email/sended-emails", (req, res) => GetSentsEmailsControllerIndex.handle(req, res));
RoutesEmail.post("/email/send-emails", (req, res) => SendEmailsControllerIndex.handle(req, res));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoutesEmail
});
