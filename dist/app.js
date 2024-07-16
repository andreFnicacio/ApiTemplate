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

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_reflect_metadata = require("reflect-metadata");

// src/config/DataBase/Prisma/Index.ts
var import_client = require("@prisma/client");

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

// src/config/DataBase/Prisma/Index.ts
var prisma = new import_client.PrismaClient();
prisma.$connect().then(() => logger.info("Database connected success")).catch(() => logger.fatal("Database not connected"));

// src/Repositories/Domain/Postgres/RepositoryDomains.ts
var RepositoryDomains = class {
  async Get({ page, pageSize, userId, filter }) {
    const data = await prisma.domains.findMany({
      where: {
        userId,
        ...filter && { domain: { contains: filter, mode: "insensitive" } }
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdAt: "desc"
      }
    });
    const total = await prisma.domains.count({
      where: {
        userId,
        ...filter && { domain: { contains: filter, mode: "insensitive" } }
      }
    });
    return {
      data,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    };
  }
  async Delete({ id }) {
    await prisma.domains.delete({
      where: {
        id
      }
    });
  }
  async GetCount() {
    const domainCount = await prisma.users.count({});
    return { count: domainCount };
  }
  async Update({ domain, id }) {
    await prisma.domains.update({
      where: {
        id
      },
      data: {
        domain
      }
    });
  }
  async FindById({ id }) {
    const dataDomain = await prisma.domains.findUnique({ where: { id } });
    return {
      isExists: !!dataDomain,
      data: dataDomain
    };
  }
  async FindByDomain({ domain }) {
    const dataDomain = await prisma.domains.findUnique({ where: { domain } });
    return {
      isExists: !!dataDomain,
      data: dataDomain
    };
  }
  async Create({ domain, id, userId }) {
    await prisma.domains.create({
      data: {
        domain,
        userId,
        id
      }
    });
  }
};

// src/Repositories/Email/Postgres/RepositoryEmail.ts
var RepositoryEmails = class {
  async GetSents({ page, pageSize, userId, filter }) {
    const data = await prisma.emailsSendeds.findMany({
      where: {
        userId,
        ...filter && {
          OR: [
            { to: { contains: filter, mode: "insensitive" } },
            { text: { contains: filter, mode: "insensitive" } },
            { subject: { contains: filter, mode: "insensitive" } }
          ]
        }
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdAt: "desc"
      }
    });
    const total = await prisma.emailsSendeds.count({
      where: {
        userId,
        ...filter && {
          OR: [
            { to: { contains: filter, mode: "insensitive" } },
            { text: { contains: filter, mode: "insensitive" } },
            { subject: { contains: filter, mode: "insensitive" } }
          ]
        }
      }
    });
    return {
      data,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    };
  }
  async SaveEmailSended({ subject, text, to, userId }) {
    await prisma.emailsSendeds.create({
      data: {
        to,
        text,
        userId,
        subject
      }
    });
  }
  async Get({ page, pageSize, userId, filter }) {
    const data = await prisma.emails.findMany({
      where: {
        userId,
        ...filter && {
          email: { contains: filter, mode: "insensitive" }
        }
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdAt: "desc"
      }
    });
    const total = await prisma.emails.count({
      where: {
        userId,
        ...filter && {
          email: { contains: filter, mode: "insensitive" }
        }
      }
    });
    return {
      data,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    };
  }
  async Update({ email, id }) {
    await prisma.emails.update({
      where: {
        id
      },
      data: {
        email
      }
    });
  }
  async FindById({ id, userId }) {
    const data = await prisma.emails.findFirst({
      where: {
        id,
        userId
      }
    });
    return {
      isExists: !!data,
      data
    };
  }
  async CheckEmail({ email, userId }) {
    const data = await prisma.emails.findFirst({
      where: {
        email,
        userId
      }
    });
    return {
      isExists: !!data,
      data
    };
  }
  async Create(data) {
    await prisma.emails.create({
      data: {
        email: data.email,
        userId: data.userId
      }
    });
  }
};

// src/Repositories/RecoverPassword/Postgres/RepositoryRecoverPassword.ts
var RepositoryRecoverPassword = class {
  async Create({ id, userId, expirationAt }) {
    await prisma.recoverPassword.create({
      data: {
        id,
        userId,
        expirationAt
      }
    });
  }
  async FindById({ id }) {
    const dataRecoverPassword = await prisma.recoverPassword.findFirst({
      where: {
        id
      }
    });
    return {
      isExists: !!dataRecoverPassword,
      data: dataRecoverPassword
    };
  }
  async FindByUserId({ userId }) {
    const dataRecoverPassword = await prisma.recoverPassword.findFirst({
      where: {
        userId
      }
    });
    return {
      isExists: !!dataRecoverPassword,
      data: dataRecoverPassword
    };
  }
  async DeleteById({ id }) {
    await prisma.recoverPassword.delete({ where: { id } });
  }
};

// src/Repositories/User/Postgres/RepositoryUsers.ts
var RepositoryUsers = class {
  async GetCount() {
    const userCount = await prisma.users.count({});
    return { count: userCount };
  }
  async UpdatePassword(data) {
    await prisma.users.update({
      where: {
        id: data.id
      },
      data: {
        password: data.password
      }
    });
  }
  async FindUserById({ id }) {
    const dataUser = await prisma.users.findUnique({ where: { id } });
    return {
      isExists: !!dataUser,
      data: dataUser
    };
  }
  async FindUserByEmail({ email }) {
    const dataUser = await prisma.users.findUnique({ where: { email } });
    return {
      isExists: !!dataUser,
      data: dataUser
    };
  }
  async Create({ email, id, name, password, role }) {
    await prisma.users.upsert({
      where: { email },
      update: {},
      create: { email, name, password, id, role }
    });
  }
};

// src/shared/Util/Container/index.ts
var import_tsyringe = require("tsyringe");
import_tsyringe.container.registerSingleton("RepositoryUsers", RepositoryUsers);
import_tsyringe.container.registerSingleton("RepositoryRecoverPassword", RepositoryRecoverPassword);
import_tsyringe.container.registerSingleton("RepositoryDomains", RepositoryDomains);
import_tsyringe.container.registerSingleton("RepositoryEmails", RepositoryEmails);

// src/app.ts
var import_express6 = __toESM(require("express"));
var import_express_async_errors = require("express-async-errors");
var import_cors = __toESM(require("cors"));
var import_morgan = __toESM(require("morgan"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/Util/Env/Env.ts
var import_dotenv = require("dotenv");
var import_zod = require("zod");
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

// src/Routes/index.ts
var import_express5 = require("express");

// src/shared/middlewares/verifyToken.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var import_config2 = require("dotenv/config");

// src/shared/Util/configToken/generateToken.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_config = require("dotenv/config");
var generateToken = ({ email, id }) => import_jsonwebtoken.default.sign(
  { email, id },
  String(env.SECRET_TOKEN),
  { expiresIn: 60 * 60 * 24 }
  // 24h
);

// src/shared/middlewares/verifyToken.ts
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

// src/Routes/Account/RoutesAccount.ts
var import_express = require("express");

// src/UseCases/Account/Create/index.ts
var import_tsyringe3 = require("tsyringe");

// src/UseCases/Account/Create/CreateAccount.controller.ts
var CreateAccountController = class {
  constructor(CreateAccountUseCase2) {
    this.CreateAccountUseCase = CreateAccountUseCase2;
  }
  async handle(request, response) {
    const { name, email, password, role } = request.body;
    const result = await this.CreateAccountUseCase.execute({ name, email, password, role });
    return response.status(201).json(result);
  }
};

// src/UseCases/Account/Create/CreateAccount.UseCase.ts
var import_tsyringe2 = require("tsyringe");

// src/shared/features/handleGenerateUuid/handleGenerateUuid.ts
var import_uuid = require("uuid");
var handleGenerateUuid = () => {
  const resultUuid = (0, import_uuid.v4)();
  return resultUuid;
};

// src/shared/Util/configHashPassword/handleCreatehash.ts
var import_crypto = __toESM(require("crypto"));
var handleCreateHash = (senha) => {
  const hash = import_crypto.default.createHash("sha256").update(senha).digest("hex");
  return hash;
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

// src/UseCases/Account/Create/SchemaCreateAccount.ts
var import_zod2 = require("zod");

// src/shared/features/handleIsValidEmail/handleIsValidEmail.ts
var HandleIsValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailFormat = email.trim();
  const isValid = emailRegex.test(emailFormat);
  return isValid;
};

// src/UseCases/Account/Create/SchemaCreateAccount.ts
var SchemaCreateAccount = import_zod2.z.object({
  name: import_zod2.z.string({
    required_error: "Enviar o campo name",
    invalid_type_error: "Enviar name precisa ser string"
  }).trim().min(1, { message: "Nome \xE9 obrigat\xF3rio" }),
  email: import_zod2.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "Enviar email como string"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val)) {
      ctx.addIssue({
        code: "custom",
        message: "Formato de email invalido"
      });
    }
  }),
  role: import_zod2.z.enum(["ADMIN", "USER"], { required_error: "Enviar campo role", invalid_type_error: "Enviar role como ADMIN | USER" }),
  password: import_zod2.z.string({
    required_error: "password n\xE3o encontrado",
    invalid_type_error: "Enviar password como string"
  }).trim().min(1, { message: "Senha \xE9 obrigat\xF3rio" }).min(8, { message: "Senha deve conter no m\xEDnimo 8 d\xEDgitos" }).refine((senha) => /[a-z]/.test(senha), {
    message: "A senha deve conter pelo menos uma letra min\xFAscula"
  }).refine((senha) => /[A-Z]/.test(senha), {
    message: "A senha deve conter pelo menos uma letra mai\xFAscula"
  }).refine((senha) => /\d/.test(senha), {
    message: "A senha deve conter pelo menos um n\xFAmero"
  })
});

// src/UseCases/Account/Create/CreateAccount.UseCase.ts
var CreateAccountUseCase = class {
  constructor(repositoryUser) {
    this.repositoryUser = repositoryUser;
  }
  async execute(request) {
    try {
      const data = ZODVerifyParse({
        schema: SchemaCreateAccount,
        data: request
      });
      const { isExists: isExistsUsers } = await this.repositoryUser.FindUserByEmail({ email: data.email });
      if (isExistsUsers)
        throw new AppError("Usu\xE1rio com este email j\xE1 existe");
      await this.repositoryUser.Create({
        name: data.name,
        email: data.email,
        id: handleGenerateUuid(),
        password: handleCreateHash(data.password),
        role: data.role
      });
      const returnResponse = {
        message: "Usu\xE1rio criado !"
      };
      return returnResponse;
    } catch (error) {
      console.log(error);
      const returnResponse = {
        message: "Error!"
      };
      return returnResponse;
    }
  }
};
CreateAccountUseCase = __decorateClass([
  (0, import_tsyringe2.injectable)(),
  __decorateParam(0, (0, import_tsyringe2.inject)("RepositoryUsers"))
], CreateAccountUseCase);

// src/UseCases/Account/Create/index.ts
var CreateAccountControllerIndex = new CreateAccountController(import_tsyringe3.container.resolve(CreateAccountUseCase));

// src/Routes/Account/RoutesAccount.ts
var RoutesAccount = (0, import_express.Router)();
RoutesAccount.post("/account", (req, res) => CreateAccountControllerIndex.handle(req, res));

// src/Routes/Authentication/RouterAuthentication.ts
var import_express2 = require("express");

// src/UseCases/Authentication/Login/index.ts
var import_tsyringe5 = require("tsyringe");

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
var import_tsyringe4 = require("tsyringe");
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
  (0, import_tsyringe4.injectable)(),
  __decorateParam(0, (0, import_tsyringe4.inject)("RepositoryUsers"))
], LoginUseCase);

// src/UseCases/Authentication/Login/index.ts
var LoginControllerIndex = new LoginController(import_tsyringe5.container.resolve(LoginUseCase));

// src/UseCases/Authentication/Sessions/index.ts
var import_tsyringe7 = require("tsyringe");

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
var import_tsyringe6 = require("tsyringe");
var SessionUseCase = class {
  constructor(RepositoryUsers2) {
    this.RepositoryUsers = RepositoryUsers2;
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
  (0, import_tsyringe6.injectable)(),
  __decorateParam(0, (0, import_tsyringe6.inject)("RepositoryUsers"))
], SessionUseCase);

// src/UseCases/Authentication/Sessions/index.ts
var SessionControllerIndex = new SessionUserController(import_tsyringe7.container.resolve(SessionUseCase));

// src/UseCases/Users/RecoverPassword/index.ts
var import_tsyringe9 = require("tsyringe");

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
var import_tsyringe8 = require("tsyringe");

// src/shared/features/verifyHoursIsAfter/verifyHoursIsAfter.ts
var import_moment = __toESM(require("moment"));
function VerifyDateHoursIsAfter({ hour }) {
  const now = (0, import_moment.default)();
  const isAfter = now.isAfter((0, import_moment.default)(hour));
  return isAfter;
}

// src/UseCases/Users/RecoverPassword/SchemaRecoverPassword.ts
var import_zod4 = require("zod");
var SchemaRecoverPassword = import_zod4.z.object({
  id: import_zod4.z.string({
    required_error: "id n\xE3o encontrado !",
    invalid_type_error: "Enviar id como string"
  }),
  password: import_zod4.z.string({
    required_error: "password n\xE3o encontrado",
    invalid_type_error: "Enviar password como string"
  }).trim().min(1, { message: "Nova senha \xE9 obrigat\xF3rio" }).min(8, { message: "Nova senha deve conter no m\xEDnimo 8 d\xEDgitos" }).refine((senha) => /[a-z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra min\xFAscula"
  }).refine((senha) => /[A-Z]/.test(senha), {
    message: "A nova senha deve conter pelo menos uma letra mai\xFAscula"
  }).refine((senha) => /\d/.test(senha), {
    message: "A nova senha deve conter pelo menos um n\xFAmero"
  }),
  verifyPassword: import_zod4.z.string({
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
  constructor(RepositoryUsers2, RepositoryRecoverPassword2) {
    this.RepositoryUsers = RepositoryUsers2;
    this.RepositoryRecoverPassword = RepositoryRecoverPassword2;
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
  (0, import_tsyringe8.injectable)(),
  __decorateParam(0, (0, import_tsyringe8.inject)("RepositoryUsers")),
  __decorateParam(1, (0, import_tsyringe8.inject)("RepositoryRecoverPassword"))
], RecoverPasswordUseCase);

// src/UseCases/Users/RecoverPassword/index.ts
var RecoverPasswordIndex = new RecoverPasswordController(import_tsyringe9.container.resolve(RecoverPasswordUseCase));

// src/UseCases/Users/SendEmailRecoverPassword/index.ts
var import_tsyringe11 = require("tsyringe");

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
var import_tsyringe10 = require("tsyringe");

// src/shared/features/GetFutureTimestamp/GetFutureTimestamp.ts
var import_moment2 = __toESM(require("moment"));
function GetFutureTimestamp({ amount, unit }) {
  const date = (0, import_moment2.default)();
  const timestampWithDelay = (0, import_moment2.default)(date).add(amount, unit).format("YYYY-MM-DD HH:mm:ss");
  return timestampWithDelay;
}

// src/config/configNodeMailer/index.ts
var import_nodemailer = __toESM(require("nodemailer"));
var import_config3 = require("dotenv/config");
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
  constructor(RepositoryUsers2, RepositoryRecoverPassword2) {
    this.RepositoryUsers = RepositoryUsers2;
    this.RepositoryRecoverPassword = RepositoryRecoverPassword2;
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
  (0, import_tsyringe10.injectable)(),
  __decorateParam(0, (0, import_tsyringe10.inject)("RepositoryUsers")),
  __decorateParam(1, (0, import_tsyringe10.inject)("RepositoryRecoverPassword"))
], SendEmailRecoverPasswordUseCase);

// src/UseCases/Users/SendEmailRecoverPassword/index.ts
var SendEmailRecoverPasswordIndex = new SendEmailRecoverPasswordController(import_tsyringe11.container.resolve(SendEmailRecoverPasswordUseCase));

// src/UseCases/Users/ValidateRecoverPasswordId/index.ts
var import_tsyringe13 = require("tsyringe");

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
var import_tsyringe12 = require("tsyringe");
var ValidateForgotPasswordUseCase = class {
  constructor(RepositoryRecoverPassword2) {
    this.RepositoryRecoverPassword = RepositoryRecoverPassword2;
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
  (0, import_tsyringe12.injectable)(),
  __decorateParam(0, (0, import_tsyringe12.inject)("RepositoryRecoverPassword"))
], ValidateForgotPasswordUseCase);

// src/UseCases/Users/ValidateRecoverPasswordId/index.ts
var ValidateForgotPasswordIndex = new ValidateForgotPasswordController(import_tsyringe13.container.resolve(ValidateForgotPasswordUseCase));

// src/Routes/Authentication/RouterAuthentication.ts
var routerAuthentication = (0, import_express2.Router)();
routerAuthentication.post("/login", (req, res) => LoginControllerIndex.handle(req, res));
routerAuthentication.post("/sessions", verifyToken, (req, res) => SessionControllerIndex.handle(req, res));
routerAuthentication.post("/forgotPassword", (req, res) => SendEmailRecoverPasswordIndex.handle(req, res));
routerAuthentication.post("/validateForgotPassword/:id", (req, res) => ValidateForgotPasswordIndex.handle(req, res));
routerAuthentication.post("/redefine-password", (req, res) => RecoverPasswordIndex.handle(req, res));

// src/Routes/Domain/DomainRoutes.ts
var import_express3 = require("express");

// src/UseCases/Domain/Create/index.ts
var import_tsyringe15 = require("tsyringe");

// src/UseCases/Domain/Create/CreateDomain.controller.ts
var CreateDomainController = class {
  constructor(CreateDomainUseCase2) {
    this.CreateDomainUseCase = CreateDomainUseCase2;
  }
  async handle(request, response) {
    const { domain, token } = request.body;
    const result = await this.CreateDomainUseCase.execute({ domain, userId: token.id });
    return response.status(201).json(result);
  }
};

// src/UseCases/Domain/Create/CreateDomain.UseCase.ts
var import_tsyringe14 = require("tsyringe");

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
var verifyDomainIdentity = async (domain) => {
  const params = {
    Domain: domain
  };
  try {
    const result = await ses.verifyDomainIdentity(params).promise();
    return result;
  } catch (error) {
    throw new AppError(`Failed to verify domain identity: ${error.message}`);
  }
};

// src/UseCases/Domain/Create/SchemaCreateDomain.ts
var import_zod6 = require("zod");
var SchemaCreateDomain = import_zod6.z.object({
  domain: import_zod6.z.string({
    required_error: "Enviar o campo domain",
    invalid_type_error: "Dominio precisa ser string"
  }).trim().min(1, { message: "Dominio \xE9 obrigat\xF3rio" }),
  userId: import_zod6.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Domain/Create/CreateDomain.UseCase.ts
var CreateDomainUseCase = class {
  constructor(repositoryDomains) {
    this.repositoryDomains = repositoryDomains;
  }
  async execute(request) {
    try {
      const data = ZODVerifyParse({
        schema: SchemaCreateDomain,
        data: request
      });
      const { isExists: isExistsUsers } = await this.repositoryDomains.FindByDomain({ domain: data.domain });
      if (isExistsUsers)
        throw new AppError("Dominio j\xE1 cadastrado");
      const domainWithSes = await verifyDomainIdentity(data.domain);
      console.log({ domainWithSes });
      await this.repositoryDomains.Create({
        domain: data.domain,
        userId: data.userId
      });
      const returnResponse = {
        message: "Dominio criado !"
      };
      return returnResponse;
    } catch (error) {
      console.log({ error });
      const returnResponse = {
        message: "Error!"
      };
      return returnResponse;
    }
  }
};
CreateDomainUseCase = __decorateClass([
  (0, import_tsyringe14.injectable)(),
  __decorateParam(0, (0, import_tsyringe14.inject)("RepositoryDomains"))
], CreateDomainUseCase);

// src/UseCases/Domain/Create/index.ts
var CreateDomainControllerIndex = new CreateDomainController(import_tsyringe15.container.resolve(CreateDomainUseCase));

// src/UseCases/Domain/Delete/index.ts
var import_tsyringe17 = require("tsyringe");

// src/UseCases/Domain/Delete/DeleteDomain.Controller.ts
var DeleteDomainController = class {
  constructor(DeleteDomainUseCase2) {
    this.DeleteDomainUseCase = DeleteDomainUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { id } = request.params;
    const result = await this.DeleteDomainUseCase.execute({ id, userId: token.id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Domain/Delete/DeleteDomain.UseCase.ts
var import_tsyringe16 = require("tsyringe");

// src/UseCases/Domain/Delete/DeleteDomain.Schema.ts
var import_zod8 = require("zod");
var DeleteDomainSchema = import_zod8.z.object({
  id: import_zod8.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod8.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Domain/Delete/DeleteDomain.UseCase.ts
var DeleteDomainUseCase = class {
  constructor(RepositoryDomains2) {
    this.RepositoryDomains = RepositoryDomains2;
  }
  async execute(request) {
    const { id, userId } = ZODVerifyParse({
      schema: DeleteDomainSchema,
      data: request
    });
    const { data } = await this.RepositoryDomains.FindById({ id });
    if (!data || data.userId !== userId)
      throw new AppError("N\xE3o existe um Dominio com esse id !");
    await this.RepositoryDomains.Delete({ id });
    const returnResponse = {
      message: "Dominio deletado com sucesso !"
    };
    return returnResponse;
  }
};
DeleteDomainUseCase = __decorateClass([
  (0, import_tsyringe16.injectable)(),
  __decorateParam(0, (0, import_tsyringe16.inject)("RepositoryDomains"))
], DeleteDomainUseCase);

// src/UseCases/Domain/Delete/index.ts
var DeleteDomainControllerIndex = new DeleteDomainController(import_tsyringe17.container.resolve(DeleteDomainUseCase));

// src/UseCases/Domain/Get/index.ts
var import_tsyringe19 = require("tsyringe");

// src/UseCases/Domain/Get/GetDomain.Controller.ts
var GetDomainController = class {
  constructor(GetDomainUseCase2) {
    this.GetDomainUseCase = GetDomainUseCase2;
  }
  async handle(request, response) {
    const { token } = request.body;
    const { page, pageSize, filter } = request.query;
    const result = await this.GetDomainUseCase.execute({ userId: token.id, page, pageSize, filter });
    return response.status(200).json(result);
  }
};

// src/UseCases/Domain/Get/GetDomain.UseCase.ts
var import_tsyringe18 = require("tsyringe");

// src/UseCases/Domain/Get/GetDomain.Schema.ts
var import_zod10 = require("zod");
var GetDomainSchema = import_zod10.z.object({
  userId: import_zod10.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod10.z.coerce.number({
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
  pageSize: import_zod10.z.coerce.number({
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
  filter: import_zod10.z.string({
    invalid_type_error: "Enviar filter como string"
  }).trim().transform((val) => val === "" ? void 0 : val).optional()
});

// src/UseCases/Domain/Get/GetDomain.UseCase.ts
var GetDomainUseCase = class {
  constructor(RepositoryDomains2) {
    this.RepositoryDomains = RepositoryDomains2;
  }
  async execute(request) {
    const { userId, page, pageSize, filter } = ZODVerifyParse({
      schema: GetDomainSchema,
      data: request
    });
    const { data, meta } = await this.RepositoryDomains.Get({ userId, page, pageSize, filter });
    const returnResponse = {
      data,
      meta
    };
    return returnResponse;
  }
};
GetDomainUseCase = __decorateClass([
  (0, import_tsyringe18.injectable)(),
  __decorateParam(0, (0, import_tsyringe18.inject)("RepositoryDomains"))
], GetDomainUseCase);

// src/UseCases/Domain/Get/index.ts
var GetDomainControllerIndex = new GetDomainController(import_tsyringe19.container.resolve(GetDomainUseCase));

// src/UseCases/Domain/Update/index.ts
var import_tsyringe21 = require("tsyringe");

// src/UseCases/Domain/Update/UpdateDomain.Controller.ts
var UpdateDomainController = class {
  constructor(UpdateDomainUseCase2) {
    this.UpdateDomainUseCase = UpdateDomainUseCase2;
  }
  async handle(request, response) {
    const { token, domain } = request.body;
    const { id } = request.params;
    const result = await this.UpdateDomainUseCase.execute({ id, domain, userId: token.id });
    return response.status(200).json(result);
  }
};

// src/UseCases/Domain/Update/UpdateDomain.UseCase.ts
var import_tsyringe20 = require("tsyringe");

// src/UseCases/Domain/Update/UpdateDomain.Schema.ts
var import_zod12 = require("zod");
var UpdateDomainSchema = import_zod12.z.object({
  id: import_zod12.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  domain: import_zod12.z.string({
    required_error: "Enviar o campo domain",
    invalid_type_error: "Dominio precisa ser string"
  }).trim().min(1, { message: "Dominio \xE9 obrigat\xF3rio" }),
  userId: import_zod12.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Domain/Update/UpdateDomain.UseCase.ts
var UpdateDomainUseCase = class {
  constructor(RepositoryDomains2) {
    this.RepositoryDomains = RepositoryDomains2;
  }
  async execute(request) {
    const { domain, userId, id } = ZODVerifyParse({
      schema: UpdateDomainSchema,
      data: request
    });
    const { data } = await this.RepositoryDomains.FindById({ id });
    console.log({ data });
    if (!data || data.userId !== userId)
      throw new AppError("N\xE3o existe um Dominio com esse id  !");
    await this.RepositoryDomains.Update({
      domain,
      id
    });
    const returnResponse = {
      message: "Dominio atualizado com sucesso !"
    };
    return returnResponse;
  }
};
UpdateDomainUseCase = __decorateClass([
  (0, import_tsyringe20.injectable)(),
  __decorateParam(0, (0, import_tsyringe20.inject)("RepositoryDomains"))
], UpdateDomainUseCase);

// src/UseCases/Domain/Update/index.ts
var UpdateDomainControllerIndex = new UpdateDomainController(import_tsyringe21.container.resolve(UpdateDomainUseCase));

// src/Routes/Domain/DomainRoutes.ts
var RoutesDomain = (0, import_express3.Router)();
RoutesDomain.post("/domain/create", (req, res) => CreateDomainControllerIndex.handle(req, res));
RoutesDomain.get("/domain/get", (req, res) => GetDomainControllerIndex.handle(req, res));
RoutesDomain.put("/domain/update/:id", (req, res) => UpdateDomainControllerIndex.handle(req, res));
RoutesDomain.delete("/domain/delete/:id", (req, res) => DeleteDomainControllerIndex.handle(req, res));

// src/Routes/Email/EmailRoutes.ts
var import_express4 = require("express");

// src/UseCases/Email/Create/index.ts
var import_tsyringe23 = require("tsyringe");

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
var import_tsyringe22 = require("tsyringe");

// src/UseCases/Email/Create/CreateEmail.Schema.ts
var import_zod14 = require("zod");
var CreateEmailSchema = import_zod14.z.object({
  userId: import_zod14.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  email: import_zod14.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "email precisa ser string !"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val))
      ctx.addIssue({ code: "custom", message: "formato do email invalido !" });
  })
});

// src/UseCases/Email/Create/CreateEmail.UseCase.ts
var CreateEmailUseCase = class {
  constructor(RepositoryEmails2) {
    this.RepositoryEmails = RepositoryEmails2;
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
  (0, import_tsyringe22.injectable)(),
  __decorateParam(0, (0, import_tsyringe22.inject)("RepositoryEmails"))
], CreateEmailUseCase);

// src/UseCases/Email/Create/index.ts
var CreateEmailControllerIndex = new CreateEmailController(import_tsyringe23.container.resolve(CreateEmailUseCase));

// src/UseCases/Email/Delete/index.ts
var import_tsyringe25 = require("tsyringe");

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
var import_tsyringe24 = require("tsyringe");

// src/UseCases/Email/Delete/DeleteEmail.Schema.ts
var import_zod16 = require("zod");
var DeleteEmailSchema = import_zod16.z.object({
  id: import_zod16.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod16.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" })
});

// src/UseCases/Email/Delete/DeleteEmail.UseCase.ts
var DeleteEmailUseCase = class {
  constructor(RepositoryEmails2) {
    this.RepositoryEmails = RepositoryEmails2;
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
  (0, import_tsyringe24.injectable)(),
  __decorateParam(0, (0, import_tsyringe24.inject)("RepositoryEmails"))
], DeleteEmailUseCase);

// src/UseCases/Email/Delete/index.ts
var DeleteEmailControllerIndex = new DeleteEmailController(import_tsyringe25.container.resolve(DeleteEmailUseCase));

// src/UseCases/Email/Get/index.ts
var import_tsyringe27 = require("tsyringe");

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
var import_tsyringe26 = require("tsyringe");

// src/UseCases/Email/Get/GetEmail.Schema.ts
var import_zod18 = require("zod");
var GetEmailSchema = import_zod18.z.object({
  userId: import_zod18.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod18.z.coerce.number({
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
  pageSize: import_zod18.z.coerce.number({
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
  filter: import_zod18.z.string({
    invalid_type_error: "Enviar filter como string"
  }).trim().transform((val) => val === "" ? void 0 : val).optional()
});

// src/UseCases/Email/Get/GetEmail.UseCase.ts
var GetEmailUseCase = class {
  constructor(RepositoryEmails2) {
    this.RepositoryEmails = RepositoryEmails2;
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
  (0, import_tsyringe26.injectable)(),
  __decorateParam(0, (0, import_tsyringe26.inject)("RepositoryEmails"))
], GetEmailUseCase);

// src/UseCases/Email/Get/index.ts
var GetEmailControllerIndex = new GetEmailController(import_tsyringe27.container.resolve(GetEmailUseCase));

// src/UseCases/Email/GetSents/index.ts
var import_tsyringe29 = require("tsyringe");

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
var import_tsyringe28 = require("tsyringe");

// src/UseCases/Email/GetSents/GetSentsEmails.Schema.ts
var import_zod20 = require("zod");
var GetSentsEmailsSchema = import_zod20.z.object({
  userId: import_zod20.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "UserId precisa ser string"
  }).trim().min(1, { message: "UserId \xE9 obrigat\xF3rio" }),
  page: import_zod20.z.coerce.number({
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
  pageSize: import_zod20.z.coerce.number({
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
  filter: import_zod20.z.string({
    invalid_type_error: "Enviar filter como string"
  }).trim().transform((val) => val === "" ? void 0 : val).optional()
});

// src/UseCases/Email/GetSents/GetSentsEmails.UseCase.ts
var GetSentsEmailsUseCase = class {
  constructor(RepositoryEmails2) {
    this.RepositoryEmails = RepositoryEmails2;
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
  (0, import_tsyringe28.injectable)(),
  __decorateParam(0, (0, import_tsyringe28.inject)("RepositoryEmails"))
], GetSentsEmailsUseCase);

// src/UseCases/Email/GetSents/index.ts
var GetSentsEmailsControllerIndex = new GetSentsEmailsController(import_tsyringe29.container.resolve(GetSentsEmailsUseCase));

// src/UseCases/Email/Send/index.ts
var import_tsyringe31 = require("tsyringe");

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
var import_tsyringe30 = require("tsyringe");

// src/UseCases/Email/Send/SendEmail.Schema.ts
var import_zod22 = require("zod");
var SendEmailSchema = import_zod22.z.object({
  userId: import_zod22.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  from: import_zod22.z.string({ required_error: "Enviar o campo from", invalid_type_error: "Campo from precisa ser string !" }).trim().refine(
    (data) => {
      const [name, email] = data.split("<");
      const [_, domain] = email.split("@");
      const [localPart] = domain.split(">");
      return !!name && !!email && !!localPart && !!domain;
    },
    { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' }
  ).optional(),
  to: import_zod22.z.string({ required_error: "Enviar o campo to", invalid_type_error: "Campo to precisa ser um email !" }).email("Campo to precisa ser um email v\xE1lido"),
  subject: import_zod22.z.string({ required_error: "Enviar o campo subject", invalid_type_error: "Campo subject precisa ser string !" }).trim(),
  text: import_zod22.z.string({ required_error: "Enviar o campo text", invalid_type_error: "Campo text precisa ser string !" }).trim()
});

// src/UseCases/Email/Send/SendEmail.UseCase.ts
var SendEmailUseCase = class {
  constructor(RepositoryEmails2) {
    this.RepositoryEmails = RepositoryEmails2;
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
  (0, import_tsyringe30.injectable)(),
  __decorateParam(0, (0, import_tsyringe30.inject)("RepositoryEmails"))
], SendEmailUseCase);

// src/UseCases/Email/Send/index.ts
var SendEmailControllerIndex = new SendEmailController(import_tsyringe31.container.resolve(SendEmailUseCase));

// src/UseCases/Email/SendEmails/index.ts
var import_tsyringe33 = require("tsyringe");

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
var import_tsyringe32 = require("tsyringe");

// src/UseCases/Email/SendEmails/SendEmails.Schema.ts
var import_zod24 = require("zod");
var SendEmailsSchema = import_zod24.z.object({
  userId: import_zod24.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  from: import_zod24.z.string({ required_error: "Enviar o campo from", invalid_type_error: "Campo from precisa ser string !" }).trim().refine(
    (data) => {
      const [name, email] = data.split("<");
      const [_, domain] = email.split("@");
      const [localPart] = domain.split(">");
      return !!name && !!email && !!localPart && !!domain;
    },
    { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' }
  ).optional(),
  to: import_zod24.z.array(
    import_zod24.z.string({ required_error: "Enviar o campo to", invalid_type_error: "Campo to precisa ser um email !" }).email("Campo to precisa ser um email v\xE1lido")
  ),
  subject: import_zod24.z.string({ required_error: "Enviar o campo subject", invalid_type_error: "Campo subject precisa ser string !" }).trim(),
  text: import_zod24.z.string({ required_error: "Enviar o campo text", invalid_type_error: "Campo text precisa ser string !" }).trim()
});

// src/UseCases/Email/SendEmails/SendEmails.UseCase.ts
var SendEmailsUseCase = class {
  constructor(RepositoryEmails2, RepositoryUsers2) {
    this.RepositoryEmails = RepositoryEmails2;
    this.RepositoryUsers = RepositoryUsers2;
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
  (0, import_tsyringe32.injectable)(),
  __decorateParam(0, (0, import_tsyringe32.inject)("RepositoryEmails")),
  __decorateParam(1, (0, import_tsyringe32.inject)("RepositoryUsers"))
], SendEmailsUseCase);

// src/UseCases/Email/SendEmails/index.ts
var SendEmailsControllerIndex = new SendEmailsController(import_tsyringe33.container.resolve(SendEmailsUseCase));

// src/UseCases/Email/Update/index.ts
var import_tsyringe35 = require("tsyringe");

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
var import_tsyringe34 = require("tsyringe");

// src/UseCases/Email/Update/UpdateEmails.Schema.ts
var import_zod26 = require("zod");
var UpdateEmailsSchema = import_zod26.z.object({
  id: import_zod26.z.string({ required_error: "Enviar o campo id", invalid_type_error: "Campo id precisa ser string !" }).trim(),
  userId: import_zod26.z.string({
    required_error: "Enviar o campo userId",
    invalid_type_error: "userId precisa ser string"
  }).trim().min(1, { message: "userId \xE9 obrigat\xF3rio" }),
  email: import_zod26.z.string({
    required_error: "Enviar campo email",
    invalid_type_error: "email precisa ser string !"
  }).trim().superRefine((val, ctx) => {
    if (!HandleIsValidEmail(val))
      ctx.addIssue({ code: "custom", message: "formato do email invalido !" });
  })
});

// src/UseCases/Email/Update/UpdateEmails.UseCase.ts
var UpdateEmailsUseCase = class {
  constructor(RepositoryEmails2) {
    this.RepositoryEmails = RepositoryEmails2;
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
  (0, import_tsyringe34.injectable)(),
  __decorateParam(0, (0, import_tsyringe34.inject)("RepositoryEmails"))
], UpdateEmailsUseCase);

// src/UseCases/Email/Update/index.ts
var UpdateEmailsControllerIndex = new UpdateEmailsController(import_tsyringe35.container.resolve(UpdateEmailsUseCase));

// src/Routes/Email/EmailRoutes.ts
var RoutesEmail = (0, import_express4.Router)();
RoutesEmail.post("/email/create", (req, res) => CreateEmailControllerIndex.handle(req, res));
RoutesEmail.get("/email/get", (req, res) => GetEmailControllerIndex.handle(req, res));
RoutesEmail.put("/email/update/:id", (req, res) => UpdateEmailsControllerIndex.handle(req, res));
RoutesEmail.delete("/email/delete/:id", (req, res) => DeleteEmailControllerIndex.handle(req, res));
RoutesEmail.post("/email/send-email", (req, res) => SendEmailControllerIndex.handle(req, res));
RoutesEmail.get("/email/sended-emails", (req, res) => GetSentsEmailsControllerIndex.handle(req, res));
RoutesEmail.post("/email/send-emails", (req, res) => SendEmailsControllerIndex.handle(req, res));

// src/Routes/index.ts
var routerIndex = (0, import_express5.Router)();
var routerTeste = (0, import_express5.Router)();
routerTeste.get("/", (req, res) => res.send("Hello World!"));
routerIndex.use(routerTeste);
routerIndex.use(RoutesAccount);
routerIndex.use(routerAuthentication);
routerIndex.use(verifyToken);
routerIndex.use(RoutesEmail);
routerIndex.use(RoutesDomain);

// src/shared/Swagger/swagger.json
var swagger_default = {
  openapi: "3.0.0",
  info: {
    title: "API TEMPLATE",
    description: "Est\xE1 api tem objetivo de informar como utilizar este servidor.",
    version: "1.0.0",
    contact: {
      email: ""
    }
  },
  servers: [
    {
      url: "http://localhost:3333",
      description: "API LOCAL"
    }
  ],
  paths: {
    "/login": {
      post: {
        summary: "Login",
        tags: [
          "Login/Session"
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: " "
              },
              examples: {
                Login: {
                  value: {
                    email: "root_dev_rm@hotmail.com",
                    password: "123456"
                  }
                }
              }
            }
          }
        },
        responses: {
          "401": {
            description: "Email/Senha incorreto"
          }
        }
      }
    },
    "/account": {
      post: {
        summary: "Cria uma conta",
        tags: [
          "Login/Session"
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: " "
              },
              examples: {
                Login: {
                  description: "role pode ser ADMIN ou USER",
                  value: {
                    name: "Nome do cliente",
                    email: "root_dev_rm@hotmail.com",
                    password: "123456",
                    role: "ADMIN"
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Usu\xE1rio criado",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  "Usu\xE1rio criado": {
                    value: {
                      message: "Usu\xE1rio criado !"
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "j\xE1 existe um usu\xE1rio com esse email",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  "usu\xE1rio j\xE1 existe": {
                    value: {
                      message: "Usu\xE1rio com este email j\xE1 existe"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/sessions": {
      post: {
        summary: "Sess\xE3o do usu\xE1rio",
        tags: [
          "Login/Session"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          "401": {
            description: "Token n\xE3o enviado, fa\xE7a seu login novamente"
          },
          "200": {
            description: "OK"
          }
        }
      }
    },
    "/forgotPassword": {
      post: {
        summary: "Recuperar senha do usu\xE1rio",
        description: "Neste rota ser\xE1 enviado o email do usu\xE1rio para criar uma valida\xE7\xE3o para ele poder alterar a senha",
        tags: [
          "User"
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "Recuperar senha": {
                  value: {
                    email: "root_dev_rm@hotmail.com"
                  }
                }
              }
            }
          }
        },
        responses: {
          "400": {
            description: "N\xE3o existe usu\xE1rio com este email !"
          },
          "200": {
            description: "Foi enviado um email para voc\xEA recuperar sua senha !"
          }
        }
      }
    },
    "/validateForgotPassword/{id}": {
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string"
          },
          description: "id para validar se o link \xE9 valido"
        }
      ],
      post: {
        summary: "Verifica se id para a recupera\xE7\xE3o de senha \xE9 v\xE1lido",
        description: "Se retornar falso nem deixe o usu\xE1rio enviar a solicita\xE7\xE3o de senha",
        tags: [
          "User"
        ],
        responses: {
          "200": {
            description: "link valido ou invalido",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  "Link V\xE1lido": {
                    value: {
                      isValid: true,
                      message: "Link V\xE1lido !"
                    }
                  },
                  "Link Inv\xE1lido": {
                    value: {
                      isValid: false,
                      message: "Link Inv\xE1lido !"
                    }
                  },
                  "Link Expirado": {
                    value: {
                      isValid: false,
                      message: "Link Expirado !"
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "id n\xE3o foi enviado",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  "sem o id no path": {
                    value: {
                      message: "Enviar o id !"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/redefine-password": {
      parameters: [
        {
          in: "query",
          name: "id",
          required: true,
          schema: {
            type: "string"
          },
          description: "id do link"
        }
      ],
      post: {
        summary: "Checa as informa\xE7\xF5es passadas e altera a senha do usu\xE1rio",
        description: "Est\xE1 rota \xE9 respons\xE1vel alterar a senha do usu\xE1rio",
        tags: [
          "User"
        ],
        requestBody: {
          description: "A senha deve conter pelo menos 1 caractere em mai\xFAsculo e um n\xFAmero",
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "Alterar Senha": {
                  value: {
                    password: "Password1",
                    verifyPassword: "Password1"
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "senha atualizada ou link expirado",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  "senha atualizada": {
                    value: {
                      isValid: true,
                      message: "Senha alterada com sucesso !"
                    }
                  },
                  "link Expirado": {
                    value: {
                      isValid: false,
                      message: "Link Expirado !"
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "id do link n\xE3o \xE9 v\xE1lido",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  "link n\xE3o existe": {
                    value: {
                      message: "Link n\xE3o existe !"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/domain/create": {
      post: {
        summary: "Cria um novo dom\xEDnio",
        tags: [
          "Domain"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: ""
              },
              examples: {
                "Criar Dom\xEDnio": {
                  value: {
                    domain: "example.com"
                  }
                }
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Dom\xEDnio criado !",
            content: {
              "application/json": {
                schema: {
                  $ref: ""
                },
                examples: {
                  Sucesso: {
                    value: {
                      message: "Dom\xEDnio criado !"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/domain/get": {
      get: {
        summary: "Obt\xE9m uma lista de dom\xEDnios",
        tags: [
          "Domain"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
              default: 1,
              description: "N\xFAmero da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
            },
            required: false
          },
          {
            name: "pageSize",
            in: "query",
            schema: {
              type: "integer",
              default: 10,
              description: "Tamanho da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
            },
            required: false
          },
          {
            name: "filter",
            in: "query",
            schema: {
              type: "string",
              description: "Filtro para busca (deve ser uma string, pode ser opcional)."
            },
            required: false
          }
        ],
        responses: {
          "200": {
            description: "Lista de dom\xEDnios retornada com sucesso!",
            content: {
              "application/json": {
                example: {
                  data: [
                    {
                      id: "e95662d6-7ab0-4934-b278-b4ebfc9d63a4",
                      userId: "eeaaac70-4141-4eb7-98ce-af660fe4bcfd",
                      domain: "example.com",
                      status: "DISCONNECTED",
                      updatedAt: "2024-07-06T23:46:48.194Z",
                      createdAt: "2024-07-06T23:46:48.194Z"
                    }
                  ],
                  meta: {
                    page: 1,
                    pageSize: 10,
                    total: 1,
                    totalPages: 1
                  }
                }
              }
            }
          }
        }
      }
    },
    "/domain/update/{id}": {
      put: {
        summary: "Atualiza um dom\xEDnio existente",
        tags: [
          "Domain"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "ID do dom\xEDnio a ser atualizado"
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  domain: {
                    type: "string",
                    description: "Novo nome do dom\xEDnio",
                    minLength: 1
                  }
                },
                required: [
                  "domain"
                ]
              },
              examples: {
                "Atualizar Dom\xEDnio": {
                  value: {
                    domain: "updatedexample.com"
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Dom\xEDnio atualizado com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  }
                },
                examples: {
                  Sucesso: {
                    value: {
                      message: "Dom\xEDnio atualizado com sucesso!"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/domain/delete/{id}": {
      delete: {
        summary: "Exclui um dom\xEDnio existente",
        tags: [
          "Domain"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "ID do dom\xEDnio a ser exclu\xEDdo"
          }
        ],
        responses: {
          "200": {
            description: "Dom\xEDnio exclu\xEDdo com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/email/create": {
      post: {
        summary: "Cria um novo email",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    description: "Endere\xE7o de email",
                    minLength: 1
                  }
                },
                required: [
                  "email"
                ]
              },
              examples: {
                "Criar Email": {
                  value: {
                    email: "example@example.com"
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Email criado com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  },
                  example: {
                    Sucesso: {
                      value: {
                        message: "Email criado com sucesso!"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/email/get": {
      get: {
        summary: "Obt\xE9m uma lista de emails",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
              default: 1,
              description: "N\xFAmero da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
            },
            required: false
          },
          {
            name: "pageSize",
            in: "query",
            schema: {
              type: "integer",
              default: 10,
              description: "Tamanho da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
            },
            required: false
          },
          {
            name: "filter",
            in: "query",
            schema: {
              type: "string",
              description: "Filtro para busca (deve ser uma string, pode ser opcional)."
            },
            required: false
          }
        ],
        responses: {
          "200": {
            description: "Lista de emails retornada com sucesso!",
            content: {
              "application/json": {
                schema: {},
                examples: {
                  Sucesso: {
                    value: {
                      data: [
                        {
                          id: "db49ac9c-e223-418f-b68f-0926645a6ce9",
                          userId: "eeaaac70-4141-4eb7-98ce-af660fe4bcfd",
                          email: "example@example.com",
                          status: "DISCONNECTED",
                          updatedAt: "2024-07-06T23:51:05.328Z",
                          createdAt: "2024-07-06T23:51:05.328Z"
                        }
                      ],
                      meta: {
                        page: 1,
                        pageSize: 10,
                        total: 1,
                        totalPages: 1
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/email/update/{id}": {
      put: {
        summary: "Atualiza um email existente",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "ID do email a ser atualizado"
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    description: "Novo endere\xE7o de email",
                    minLength: 1
                  }
                },
                required: [
                  "email"
                ]
              },
              examples: {
                "Atualizar Email": {
                  value: {
                    email: "updated@example.com"
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Email atualizado com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  },
                  example: {
                    Sucesso: {
                      value: {
                        message: "Email atualizado com sucesso!"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/email/delete/{id}": {
      delete: {
        summary: "Exclui um email existente",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string"
            },
            description: "ID do email a ser exclu\xEDdo"
          }
        ],
        responses: {
          "200": {
            description: "Email exclu\xEDdo com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  }
                },
                example: {
                  message: "Email exclu\xEDdo com sucesso!"
                }
              }
            }
          }
        }
      }
    },
    "/email/send-email": {
      post: {
        summary: "Envia um email",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  from: {
                    type: "string",
                    description: "Remetente do email no formato 'Seu Nome <email@dominio.com>'",
                    minLength: 1
                  },
                  to: {
                    type: "string",
                    format: "email",
                    description: "Destinat\xE1rio do email (deve ser um endere\xE7o de email v\xE1lido)"
                  },
                  subject: {
                    type: "string",
                    description: "Assunto do email",
                    minLength: 1
                  },
                  text: {
                    type: "string",
                    description: "Corpo do email",
                    minLength: 1
                  }
                },
                required: [
                  "to",
                  "subject",
                  "text"
                ]
              },
              examples: {
                "Enviar Email": {
                  value: {
                    from: "Seu Nome <seuemail@dominio.com>",
                    to: "destinatario@dominio.com",
                    subject: "Assunto do Email",
                    text: "Corpo do email aqui."
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Email enviado com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  }
                },
                example: {
                  message: "Email enviado com sucesso!"
                }
              }
            }
          }
        }
      }
    },
    "/email/sended-emails": {
      get: {
        summary: "Obt\xE9m uma lista de emails enviados",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
              default: 1,
              description: "N\xFAmero da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
            },
            required: false
          },
          {
            name: "pageSize",
            in: "query",
            schema: {
              type: "integer",
              default: 10,
              description: "Tamanho da p\xE1gina (n\xE3o pode ser igual ou menor que 0 e deve ser um n\xFAmero inteiro)."
            },
            required: false
          },
          {
            name: "filter",
            in: "query",
            schema: {
              type: "string",
              description: "Filtro para busca (deve ser uma string, pode ser opcional)."
            },
            required: false
          }
        ],
        responses: {
          "200": {
            description: "Lista de emails enviados retornada com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    emails: {
                      type: "array",
                      items: {
                        type: "string",
                        description: "Endere\xE7o de email enviado"
                      }
                    },
                    total: {
                      type: "integer",
                      description: "Total de emails enviados"
                    }
                  }
                },
                example: {
                  emails: [
                    "example1@example.com",
                    "example2@example.com"
                  ],
                  total: 2
                }
              }
            }
          }
        }
      }
    },
    "/email/send-emails": {
      post: {
        summary: "Envia emails para m\xFAltiplos destinat\xE1rios",
        tags: [
          "Email"
        ],
        security: [
          {
            bearerAuth: []
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  from: {
                    type: "string",
                    description: "Remetente do email no formato 'Seu Nome <email@dominio.com>'",
                    minLength: 1
                  },
                  to: {
                    type: "array",
                    items: {
                      type: "string",
                      format: "email",
                      description: "Destinat\xE1rio do email (deve ser um endere\xE7o de email v\xE1lido)"
                    }
                  },
                  subject: {
                    type: "string",
                    description: "Assunto do email",
                    minLength: 1
                  },
                  text: {
                    type: "string",
                    description: "Corpo do email",
                    minLength: 1
                  }
                },
                required: [
                  "to",
                  "subject",
                  "text"
                ]
              },
              examples: {
                "Enviar Emails": {
                  value: {
                    from: "Seu Nome <seuemail@dominio.com>",
                    to: [
                      "destinatario1@dominio.com",
                      "destinatario2@dominio.com"
                    ],
                    subject: "Assunto do Email",
                    text: "Corpo do email aqui."
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Emails enviados com sucesso!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      description: "Mensagem de sucesso"
                    }
                  }
                },
                example: {
                  message: "Emails enviados com sucesso!"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};

// src/app.ts
var app = (0, import_express6.default)();
app.use("/docs", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(swagger_default));
app.use(import_express6.default.json());
app.use(import_express6.default.urlencoded({ extended: false }));
app.use((0, import_morgan.default)("dev"));
app.use((0, import_cors.default)());
app.use(routerIndex);
if (env.NODE_ENV === "PRODUCTION") {
  process.on("uncaughtException", (error) => logger.error(error));
}
app.use(async (err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  response.status(500).json({ message: "Erro desconhecido!" });
  return next();
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
