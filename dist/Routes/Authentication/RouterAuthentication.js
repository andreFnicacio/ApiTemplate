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

// src/Routes/Authentication/RouterAuthentication.ts
var RouterAuthentication_exports = {};
__export(RouterAuthentication_exports, {
  routerAuthentication: () => routerAuthentication
});
module.exports = __toCommonJS(RouterAuthentication_exports);
var import_express = require("express");

// src/UseCases/Authentication/Login/index.ts
var import_tsyringe2 = require("tsyringe");

// src/UseCases/Authentication/Login/Login.controller.ts
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

// src/UseCases/Authentication/Login/Login.UseCase.ts
var import_tsyringe = require("tsyringe");

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/Util/configHashPassword/handleCreatehash.ts
var import_crypto = __toESM(require("crypto"));
var handleCreateHash = (senha) => {
  const hash = import_crypto.default.createHash("sha256").update(senha).digest("hex");
  return hash;
};

// src/shared/Util/configToken/generateToken.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_config = require("dotenv/config");

// src/shared/Util/Env/Env.ts
var import_dotenv = require("dotenv");
var import_zod = require("zod");

// src/shared/Util/configLogger/index.ts
var import_pino = __toESM(require("pino"));
var import_pino_pretty = __toESM(require("pino-pretty"));
var pinoStyles = (0, import_pino_pretty.default)({
  colorize: true,
  levelFirst: true,
  translateTime: "dd-mm-yyyy HH:MM:ss"
});
var valuesLevel = {
  dev: "debug",
  prod: "info"
};
var logger = (0, import_pino.default)(
  {
    level: process.env.NODE_ENV === "DEV" ? valuesLevel.dev : valuesLevel.prod
  },
  pinoStyles
);

// src/shared/Util/Env/Env.ts
if (process.env.NODE_ENV === "test") {
  (0, import_dotenv.config)({ path: ".env" });
} else {
  (0, import_dotenv.config)();
}
var envSchema = import_zod.z.object({
  PORT: import_zod.z.string().default("3001"),
  NODE_ENV: import_zod.z.enum(["DEV", "PRODUCTION", "test", "LOCAL"]).default("PRODUCTION"),
  EMAIL_HOST: import_zod.z.string(),
  EMAIL_PORT: import_zod.z.string(),
  EMAIL_USER: import_zod.z.string(),
  EMAIL_PASS: import_zod.z.string(),
  LINK_LOGIN: import_zod.z.string(),
  RECOVERY_PASSWORD_EXPIRATION_LIMIT_IN_MINUTES: import_zod.z.string(),
  LINK_RECOVER_PASSWORD: import_zod.z.string(),
  DATABASE_URL: import_zod.z.string({ required_error: "Colocar env DATABASE_URL" }),
  SECRET_TOKEN: import_zod.z.string(),
  AWS_SECRET_ACCESS_KEY: import_zod.z.string(),
  AWS_DEFAULT_REGION: import_zod.z.string(),
  AWS_ACCESS_KEY_ID: import_zod.z.string(),
  AWS_NAME_BUCKET: import_zod.z.string(),
  LOCAL_UPLOAD_FILES: import_zod.z.enum(["S3", "local"])
});
var envZod = envSchema.safeParse(process.env);
if (envZod.success === false) {
  logger.fatal(envZod.error.format());
  throw new Error("\u{1F6D1} Invalid environment variables !");
}
var env = {
  ...envZod.data
};

// src/shared/Util/configToken/generateToken.ts
var generateToken = ({ email, id }) => import_jsonwebtoken.default.sign(
  { email, id },
  String(env.SECRET_TOKEN),
  { expiresIn: 60 * 60 * 24 }
  // 24h
);

// src/UseCases/Authentication/Login/Login.UseCase.ts
var LoginUseCase = class {
  constructor(repositoryUser) {
    this.repositoryUser = repositoryUser;
  }
  async execute({ email, password }) {
    if (!email.length)
      throw new AppError("Enviar email", 422);
    if (!password.length)
      throw new AppError("Enviar senha", 422);
    const { isExists: isExistsUser, data: resDataUser } = await this.repositoryUser.FindUserByEmail({ email });
    if (!isExistsUser || !resDataUser?.id)
      throw new AppError("Email/Senha incorreto", 401);
    const hashPassoWord = handleCreateHash(password);
    if (hashPassoWord !== resDataUser.password)
      throw new AppError("Email/Senha incorreto", 401);
    const token = generateToken({ email, id: resDataUser.id });
    const { password: passNotUser, ...restDataUser } = resDataUser;
    const returnResponse = {
      ...restDataUser,
      token
    };
    return returnResponse;
  }
};
LoginUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("RepositoryUsers"))
], LoginUseCase);

// src/UseCases/Authentication/Login/index.ts
var LoginControllerIndex = new LoginController(import_tsyringe2.container.resolve(LoginUseCase));

// src/UseCases/Authentication/Sessions/index.ts
var import_tsyringe4 = require("tsyringe");

// src/UseCases/Authentication/Sessions/Session.controller.ts
var SessionUserController = class {
  constructor(SessionUseCase2) {
    this.SessionUseCase = SessionUseCase2;
  }
  async handle(request, response) {
    const {
      token: { id }
    } = request.body;
    const result = await this.SessionUseCase.execute({ idUser: id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Authentication/Sessions/Session.useCase.ts
var import_tsyringe3 = require("tsyringe");
var SessionUseCase = class {
  constructor(RepositoryUsers) {
    this.RepositoryUsers = RepositoryUsers;
  }
  async execute({ idUser }) {
    const { data: resDataUser, isExists } = await this.RepositoryUsers.FindUserById({ id: idUser });
    if (!isExists || !resDataUser)
      throw new AppError("Email/Senha incorreto", 401);
    const token = generateToken({
      email: resDataUser?.email,
      id: resDataUser?.id
    });
    const { ...restDataUser } = resDataUser;
    return {
      ...restDataUser,
      token
    };
  }
};
SessionUseCase = __decorateClass([
  (0, import_tsyringe3.injectable)(),
  __decorateParam(0, (0, import_tsyringe3.inject)("RepositoryUsers"))
], SessionUseCase);

// src/UseCases/Authentication/Sessions/index.ts
var SessionControllerIndex = new SessionUserController(import_tsyringe4.container.resolve(SessionUseCase));

// src/UseCases/Users/RecoverPassword/index.ts
var import_tsyringe6 = require("tsyringe");

// src/UseCases/Users/RecoverPassword/RecoverPassword.controller.ts
var RecoverPasswordController = class {
  constructor(RecoverPasswordUseCase2) {
    this.RecoverPasswordUseCase = RecoverPasswordUseCase2;
  }
  async handle(request, response) {
    const { password, verifyPassword } = request.body;
    const { id } = request.query;
    const result = await this.RecoverPasswordUseCase.execute({ id, password, verifyPassword });
    return response.status(201).json(result);
  }
};

// src/UseCases/Users/RecoverPassword/RecoverPassword.useCase.ts
var import_tsyringe5 = require("tsyringe");

// src/shared/features/verifyHoursIsAfter/verifyHoursIsAfter.ts
var import_moment = __toESM(require("moment"));
function VerifyDateHoursIsAfter({ hour }) {
  const now = (0, import_moment.default)();
  const isAfter = now.isAfter((0, import_moment.default)(hour));
  return isAfter;
}

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

// src/UseCases/Users/RecoverPassword/SchemaRecoverPassword.ts
var import_zod2 = require("zod");
var SchemaRecoverPassword = import_zod2.z.object({
  id: import_zod2.z.string({
    required_error: "id n\xE3o encontrado !",
    invalid_type_error: "Enviar id como string"
  }),
  password: import_zod2.z.string({
    required_error: "password n\xE3o encontrado",
    invalid_type_error: "Enviar password como string"
  }).trim().min(1, { message: "Nova senha \xE9 obrigat\xF3rio" }).min(8, { message: "Nova senha deve conter no m\xEDnimo 8 d\xEDgitos" }).refine((senha) => /[a-z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra min\xFAscula"
  }).refine((senha) => /[A-Z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra mai\xFAscula"
  }).refine((senha) => /\d/.test(senha), {
    message: "A nova senha deve conter pelo menos um n\xFAmero"
  }),
  verifyPassword: import_zod2.z.string({
    required_error: "verifyPassword n\xE3o encontrado",
    invalid_type_error: "Enviar verifyPassword como string"
  }).trim()
}).superRefine(({ password, verifyPassword }, ctx) => {
  if (password !== verifyPassword) {
    ctx.addIssue({
      code: "custom",
      message: "As senhas enviadas n\xE3o coincidem !"
    });
  }
});

// src/UseCases/Users/RecoverPassword/RecoverPassword.useCase.ts
var RecoverPasswordUseCase = class {
  constructor(RepositoryUsers, RepositoryRecoverPassword) {
    this.RepositoryUsers = RepositoryUsers;
    this.RepositoryRecoverPassword = RepositoryRecoverPassword;
  }
  async execute(request) {
    const { id, password } = ZODVerifyParse({
      schema: SchemaRecoverPassword,
      data: request
    });
    const { isExists, data: dataRecoverPassword } = await this.RepositoryRecoverPassword.FindById({ id });
    if (!isExists || !dataRecoverPassword) {
      const errorReturn = {
        isValid: false,
        messagE: "Link n\xE3o existe !"
      };
      return errorReturn;
    }
    const expired = VerifyDateHoursIsAfter({ hour: dataRecoverPassword.expirationAt });
    if (expired) {
      return {
        isValid: false,
        message: "Link Expirado !"
      };
    }
    const hashPassword = handleCreateHash(password);
    await this.RepositoryUsers.UpdatePassword({ id: dataRecoverPassword.userId, password: hashPassword });
    await this.RepositoryRecoverPassword.DeleteById({ id });
    const responseReturn = {
      isValid: true,
      message: "Senha alterada com sucesso !"
    };
    return responseReturn;
  }
};
RecoverPasswordUseCase = __decorateClass([
  (0, import_tsyringe5.injectable)(),
  __decorateParam(0, (0, import_tsyringe5.inject)("RepositoryUsers")),
  __decorateParam(1, (0, import_tsyringe5.inject)("RepositoryRecoverPassword"))
], RecoverPasswordUseCase);

// src/UseCases/Users/RecoverPassword/index.ts
var RecoverPasswordIndex = new RecoverPasswordController(import_tsyringe6.container.resolve(RecoverPasswordUseCase));

// src/UseCases/Users/SendEmailRecoverPassword/index.ts
var import_tsyringe8 = require("tsyringe");

// src/UseCases/Users/SendEmailRecoverPassword/SendEmailRecoverPassword.controller.ts
var SendEmailRecoverPasswordController = class {
  constructor(SendEmailRecoverPasswordUseCase2) {
    this.SendEmailRecoverPasswordUseCase = SendEmailRecoverPasswordUseCase2;
  }
  async handle(request, response) {
    const { email } = request.body;
    const result = await this.SendEmailRecoverPasswordUseCase.execute({ email });
    return response.status(200).json(result);
  }
};

// src/UseCases/Users/SendEmailRecoverPassword/SendEmailRecoverPassword.useCase.ts
var import_tsyringe7 = require("tsyringe");

// src/shared/features/GetFutureTimestamp/GetFutureTimestamp.ts
var import_moment2 = __toESM(require("moment"));
function GetFutureTimestamp({ amount, unit }) {
  const date = (0, import_moment2.default)();
  const timestampWithDelay = (0, import_moment2.default)(date).add(amount, unit).format("YYYY-MM-DD HH:mm:ss");
  return timestampWithDelay;
}

// src/shared/features/handleGenerateUuid/handleGenerateUuid.ts
var import_uuid = require("uuid");
var handleGenerateUuid = () => {
  const resultUuid = (0, import_uuid.v4)();
  return resultUuid;
};

// src/config/configNodeMailer/index.ts
var import_nodemailer = __toESM(require("nodemailer"));
var import_config2 = require("dotenv/config");
var transporter = import_nodemailer.default.createTransport({
  host: env.EMAIL_HOST,
  port: Number(env.EMAIL_HOST),
  secure: false,
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS
  },
  tls: { rejectUnauthorized: false }
});
transporter.verify((error, success) => {
  if (error) {
    return logger.fatal(`Error connection Gmail ${error}`);
  }
  logger.info("Success connected Gmail");
  return success;
});

// src/shared/providers/templatesSendEmail/TemplateCardCore.ts
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

// src/shared/providers/SendEmail.ts
var sendMailNodemailer = async ({ toEmail, content, subject }) => {
  transporter.sendMail({
    from: "Comunica\xE7\xE3o member area <richardsendemail@gmail.com",
    to: [`${toEmail}`],
    text: "Texto do E-mail",
    subject,
    // Assunto
    html: TemplateCardCore({ content })
    // conteúdo
  }).then(() => {
    const success = "Email enviado com sucesso !";
    return success;
  }).catch((error) => {
    logger.fatal(error);
    const fatal = "Internal Server error";
    return fatal;
  });
};

// src/shared/providers/templatesSendEmail/TemplateForgotPassword.ts
var TemplateForgotPassword = ({ id, name }) => `
<div>
      <p style="padding-bottom: 12px;">
        Ol\xE1, ${name}
      </p>

      <div>
        <p style="padding-bottom: 4px; font-size: 16px;">
          Voc\xEA solicitou a recupera\xE7\xE3o de senha no Member Area \u{1F511}\u{1F513}
        </p>
        <p style="padding-bottom: 4px; font-size: 14px;">
          Voc\xEA pode recuperar sua senha em <strong>30 minutos</strong> ap\xF3s solicitar,
          caso n\xE3o tenha feito o pedido de recupera\xE7\xE3o de senha desconsiderar email
        </p>
      </div>  

      <div>
        <a target="_blank" href=${env.LINK_RECOVER_PASSWORD}${id}>
          <button style="
                background-color: #3980f5;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
              ">
            Recuperar senha
          </button>
        </a>
      </div>
</div>
`;

// src/UseCases/Users/SendEmailRecoverPassword/SendEmailRecoverPassword.useCase.ts
var SendEmailRecoverPasswordUseCase = class {
  constructor(RepositoryUsers, RepositoryRecoverPassword) {
    this.RepositoryUsers = RepositoryUsers;
    this.RepositoryRecoverPassword = RepositoryRecoverPassword;
  }
  async execute({ email }) {
    try {
      const { data: userData, isExists } = await this.RepositoryUsers.FindUserByEmail({ email });
      if (!isExists || !userData?.id)
        throw new AppError("N\xE3o existe usu\xE1rio com este email !");
      const { data: dataRecoverPassword } = await this.RepositoryRecoverPassword.FindByUserId({ userId: userData.id });
      if (dataRecoverPassword)
        await this.RepositoryRecoverPassword.DeleteById({ id: dataRecoverPassword.id });
      const idRecoverPassword = handleGenerateUuid();
      const expiration = GetFutureTimestamp({ amount: env.RECOVERY_PASSWORD_EXPIRATION_LIMIT_IN_MINUTES, unit: "minutes" });
      await this.RepositoryRecoverPassword.Create({
        id: idRecoverPassword,
        userId: userData.id,
        expirationAt: new Date(expiration)
      });
      sendMailNodemailer({
        content: TemplateForgotPassword({ id: idRecoverPassword, name: userData.name }),
        toEmail: userData.email,
        subject: "Member Area - Redefini\xE7\xE3o de senha"
      });
      const responseReturn = {
        message: "Foi enviado um email para voc\xEA recuperar sua senha !"
      };
      return responseReturn;
    } catch (error) {
      console.log(error);
    }
  }
};
SendEmailRecoverPasswordUseCase = __decorateClass([
  (0, import_tsyringe7.injectable)(),
  __decorateParam(0, (0, import_tsyringe7.inject)("RepositoryUsers")),
  __decorateParam(1, (0, import_tsyringe7.inject)("RepositoryRecoverPassword"))
], SendEmailRecoverPasswordUseCase);

// src/UseCases/Users/SendEmailRecoverPassword/index.ts
var SendEmailRecoverPasswordIndex = new SendEmailRecoverPasswordController(import_tsyringe8.container.resolve(SendEmailRecoverPasswordUseCase));

// src/UseCases/Users/ValidateRecoverPasswordId/index.ts
var import_tsyringe10 = require("tsyringe");

// src/UseCases/Users/ValidateRecoverPasswordId/ValidateRecoverPassword.controller.ts
var ValidateForgotPasswordController = class {
  constructor(ValidateForgotPasswordUseCase2) {
    this.ValidateForgotPasswordUseCase = ValidateForgotPasswordUseCase2;
  }
  async handle(request, response) {
    const { id } = request.params;
    const result = await this.ValidateForgotPasswordUseCase.execute({ id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Users/ValidateRecoverPasswordId/ValidateRecoverPassword.useCase.ts
var import_tsyringe9 = require("tsyringe");
var ValidateForgotPasswordUseCase = class {
  constructor(RepositoryRecoverPassword) {
    this.RepositoryRecoverPassword = RepositoryRecoverPassword;
  }
  async execute({ id }) {
    if (!id)
      throw new AppError("Enviar o id !");
    const { isExists, data } = await this.RepositoryRecoverPassword.FindById({ id });
    if (!isExists || !data) {
      return {
        isValid: false,
        message: "Link Inv\xE1lido !"
      };
    }
    const expired = VerifyDateHoursIsAfter({ hour: data.expirationAt });
    if (expired) {
      return {
        isValid: false,
        message: "Link Expirado !"
      };
    }
    return {
      isValid: true,
      message: "Link V\xE1lido !"
    };
  }
};
ValidateForgotPasswordUseCase = __decorateClass([
  (0, import_tsyringe9.injectable)(),
  __decorateParam(0, (0, import_tsyringe9.inject)("RepositoryRecoverPassword"))
], ValidateForgotPasswordUseCase);

// src/UseCases/Users/ValidateRecoverPasswordId/index.ts
var ValidateForgotPasswordIndex = new ValidateForgotPasswordController(import_tsyringe10.container.resolve(ValidateForgotPasswordUseCase));

// src/shared/middlewares/verifyToken.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var import_config3 = require("dotenv/config");
var verifyToken = async (req, res, next) => {
  const authToken = req.headers.authorization;
  const SECRET = env.SECRET_TOKEN;
  if (!authToken)
    return res.status(401).json({ message: "Token n\xE3o enviado, fa\xE7a seu login novamente" });
  const [Bearer, token] = authToken.split(" ");
  if (Bearer && Bearer !== "Bearer")
    res.status(401).json({ message: "Token com formato invalido !" });
  let resultToken = token;
  import_jsonwebtoken2.default.verify(resultToken, SECRET, { ignoreExpiration: true }, (err, decoded) => {
    if (err)
      throw new AppError("Token com  invalido !", 401);
    const decodedToken = decoded;
    resultToken = generateToken({ ...decodedToken });
  });
  return import_jsonwebtoken2.default.verify(resultToken, SECRET, (err, decoded) => {
    if (err?.message === "jwt expired")
      throw new AppError("Sess\xE3o expirada, fa\xE7a seu login novamente !", 401);
    if (err)
      throw new AppError("Token com formato invalido !", 401);
    const decodedToken = decoded;
    if (!decodedToken.id)
      throw new AppError("Token com formato invalido !", 401);
    if (!decodedToken.email)
      throw new AppError("Token com formato invalido !", 401);
    req.body = {
      ...req.body,
      token: {
        email: decodedToken.email,
        id: decodedToken.id
      }
    };
    return next();
  });
};

// src/Routes/Authentication/RouterAuthentication.ts
var routerAuthentication = (0, import_express.Router)();
routerAuthentication.post("/login", (req, res) => LoginControllerIndex.handle(req, res));
routerAuthentication.post("/sessions", verifyToken, (req, res) => SessionControllerIndex.handle(req, res));
routerAuthentication.post("/forgotPassword", (req, res) => SendEmailRecoverPasswordIndex.handle(req, res));
routerAuthentication.post("/validateForgotPassword/:id", (req, res) => ValidateForgotPasswordIndex.handle(req, res));
routerAuthentication.post("/redefine-password", (req, res) => RecoverPasswordIndex.handle(req, res));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  routerAuthentication
});
