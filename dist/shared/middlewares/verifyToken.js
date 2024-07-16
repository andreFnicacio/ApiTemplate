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

// src/shared/middlewares/verifyToken.ts
var verifyToken_exports = {};
__export(verifyToken_exports, {
  verifyToken: () => verifyToken
});
module.exports = __toCommonJS(verifyToken_exports);
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var import_config2 = require("dotenv/config");

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  verifyToken
});
