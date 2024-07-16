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

// src/shared/providers/Ses.ts
var Ses_exports = {};
__export(Ses_exports, {
  deleteIdentity: () => deleteIdentity,
  getIdentityDetails: () => getIdentityDetails,
  sendEmail: () => sendEmail,
  verifyDomainIdentity: () => verifyDomainIdentity,
  verifyEmailIdentity: () => verifyEmailIdentity
});
module.exports = __toCommonJS(Ses_exports);
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
var verifyEmailIdentity = async (email) => {
  const params = {
    EmailAddress: email
  };
  try {
    const result = await ses.verifyEmailIdentity(params).promise();
    return result;
  } catch (error) {
    throw new AppError(`Failed to verify email identity: ${error.message}`);
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
var deleteIdentity = async (identity) => {
  const params = {
    Identity: identity
  };
  try {
    const result = await ses.deleteIdentity(params).promise();
    return result;
  } catch (error) {
    throw new AppError(`Failed to delete identity: ${error.message}`);
  }
};
var getIdentityDetails = async (identity) => {
  const params = {
    Identities: [identity]
  };
  try {
    const result = await ses.getIdentityVerificationAttributes(params).promise();
    return result.VerificationAttributes[identity];
  } catch (error) {
    throw new AppError(`Failed to get identity details: ${error.message}`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteIdentity,
  getIdentityDetails,
  sendEmail,
  verifyDomainIdentity,
  verifyEmailIdentity
});
