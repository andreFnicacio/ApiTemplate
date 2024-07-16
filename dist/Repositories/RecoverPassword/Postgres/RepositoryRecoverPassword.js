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

// src/Repositories/RecoverPassword/Postgres/RepositoryRecoverPassword.ts
var RepositoryRecoverPassword_exports = {};
__export(RepositoryRecoverPassword_exports, {
  RepositoryRecoverPassword: () => RepositoryRecoverPassword
});
module.exports = __toCommonJS(RepositoryRecoverPassword_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RepositoryRecoverPassword
});
