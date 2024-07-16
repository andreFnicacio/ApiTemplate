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

// src/Repositories/Domain/Postgres/RepositoryDomains.ts
var RepositoryDomains_exports = {};
__export(RepositoryDomains_exports, {
  RepositoryDomains: () => RepositoryDomains
});
module.exports = __toCommonJS(RepositoryDomains_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RepositoryDomains
});
