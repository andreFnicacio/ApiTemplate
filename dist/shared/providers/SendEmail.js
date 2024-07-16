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

// src/shared/providers/SendEmail.ts
var SendEmail_exports = {};
__export(SendEmail_exports, {
  sendMailNodemailer: () => sendMailNodemailer
});
module.exports = __toCommonJS(SendEmail_exports);

// src/config/configNodeMailer/index.ts
var import_nodemailer = __toESM(require("nodemailer"));
var import_config = require("dotenv/config");

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

// src/config/configNodeMailer/index.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendMailNodemailer
});
