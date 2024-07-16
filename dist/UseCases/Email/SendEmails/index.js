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

// src/UseCases/Email/SendEmails/index.ts
var SendEmails_exports = {};
__export(SendEmails_exports, {
  SendEmailsControllerIndex: () => SendEmailsControllerIndex
});
module.exports = __toCommonJS(SendEmails_exports);
var import_tsyringe2 = require("tsyringe");

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
var import_tsyringe = require("tsyringe");

// src/shared/providers/Ses.ts
var import_aws_sdk = __toESM(require("aws-sdk"));

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/providers/Ses.ts
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

// src/UseCases/Email/SendEmails/SendEmails.Schema.ts
var import_zod = require("zod");
var SendEmailsSchema = import_zod.z.object({
  userId: import_zod.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  from: import_zod.z.string({ required_error: "Enviar o campo from", invalid_type_error: "Campo from precisa ser string !" }).trim().refine(
    (data) => {
      const [name, email] = data.split("<");
      const [_, domain] = email.split("@");
      const [localPart] = domain.split(">");
      return !!name && !!email && !!localPart && !!domain;
    },
    { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' }
  ).optional(),
  to: import_zod.z.array(
    import_zod.z.string({ required_error: "Enviar o campo to", invalid_type_error: "Campo to precisa ser um email !" }).email("Campo to precisa ser um email v\xE1lido")
  ),
  subject: import_zod.z.string({ required_error: "Enviar o campo subject", invalid_type_error: "Campo subject precisa ser string !" }).trim(),
  text: import_zod.z.string({ required_error: "Enviar o campo text", invalid_type_error: "Campo text precisa ser string !" }).trim()
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
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryEmails")),
  __decorateParam(1, (0, import_tsyringe.inject)("RepositoryUsers"))
], SendEmailsUseCase);

// src/UseCases/Email/SendEmails/index.ts
var SendEmailsControllerIndex = new SendEmailsController(import_tsyringe2.container.resolve(SendEmailsUseCase));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SendEmailsControllerIndex
});
