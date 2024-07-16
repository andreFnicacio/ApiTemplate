"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig;
var init_httpExtensionConfiguration = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
    getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
      let httpHandler = runtimeConfig.httpHandler;
      return {
        setHttpHandler(handler) {
          httpHandler = handler;
        },
        httpHandler() {
          return httpHandler;
        },
        updateHttpClientConfig(key, value) {
          httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return httpHandler.httpHandlerConfigs();
        }
      };
    };
    resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    init_httpExtensionConfiguration();
  }
});

// node_modules/@smithy/types/dist-es/abort.js
var init_abort = __esm({
  "node_modules/@smithy/types/dist-es/abort.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
var init_auth = __esm({
  "node_modules/@smithy/types/dist-es/auth/auth.js"() {
    (function(HttpAuthLocation2) {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
    })(HttpAuthLocation || (HttpAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
var init_HttpApiKeyAuth = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    (function(HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = __esm({
  "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm({
  "node_modules/@smithy/types/dist-es/auth/index.js"() {
    init_auth();
    init_HttpApiKeyAuth();
    init_HttpAuthScheme();
    init_HttpAuthSchemeProvider();
    init_HttpSigner();
    init_IdentityProviderConfig();
  }
});

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = __esm({
  "node_modules/@smithy/types/dist-es/checksum.js"() {
  }
});

// node_modules/@smithy/types/dist-es/client.js
var init_client = __esm({
  "node_modules/@smithy/types/dist-es/client.js"() {
  }
});

// node_modules/@smithy/types/dist-es/command.js
var init_command = __esm({
  "node_modules/@smithy/types/dist-es/command.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/config.js
var init_config = __esm({
  "node_modules/@smithy/types/dist-es/connection/config.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = __esm({
  "node_modules/@smithy/types/dist-es/connection/manager.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = __esm({
  "node_modules/@smithy/types/dist-es/connection/pool.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm({
  "node_modules/@smithy/types/dist-es/connection/index.js"() {
    init_config();
    init_manager();
    init_pool();
  }
});

// node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = __esm({
  "node_modules/@smithy/types/dist-es/crypto.js"() {
  }
});

// node_modules/@smithy/types/dist-es/encode.js
var init_encode = __esm({
  "node_modules/@smithy/types/dist-es/encode.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm({
  "node_modules/@smithy/types/dist-es/endpoint.js"() {
    (function(EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme || (EndpointURLScheme = {}));
  }
});

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    init_EndpointRuleObject();
    init_ErrorRuleObject();
    init_RuleSetObject();
    init_shared();
    init_TreeRuleObject();
  }
});

// node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = __esm({
  "node_modules/@smithy/types/dist-es/eventStream.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    (function(AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId || (AlgorithmId = {}));
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_defaultClientConfiguration();
    init_defaultExtensionConfiguration();
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
var init_http = __esm({
  "node_modules/@smithy/types/dist-es/http.js"() {
    (function(FieldPosition2) {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition || (FieldPosition = {}));
  }
});

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = __esm({
  "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = __esm({
  "node_modules/@smithy/types/dist-es/identity/identity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm({
  "node_modules/@smithy/types/dist-es/identity/index.js"() {
    init_apiKeyIdentity();
    init_awsCredentialIdentity();
    init_identity();
    init_tokenIdentity();
  }
});

// node_modules/@smithy/types/dist-es/logger.js
var init_logger = __esm({
  "node_modules/@smithy/types/dist-es/logger.js"() {
  }
});

// node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY;
var init_middleware = __esm({
  "node_modules/@smithy/types/dist-es/middleware.js"() {
    SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = __esm({
  "node_modules/@smithy/types/dist-es/pagination.js"() {
  }
});

// node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
var init_profile = __esm({
  "node_modules/@smithy/types/dist-es/profile.js"() {
    (function(IniSectionType2) {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
    })(IniSectionType || (IniSectionType = {}));
  }
});

// node_modules/@smithy/types/dist-es/response.js
var init_response = __esm({
  "node_modules/@smithy/types/dist-es/response.js"() {
  }
});

// node_modules/@smithy/types/dist-es/retry.js
var init_retry = __esm({
  "node_modules/@smithy/types/dist-es/retry.js"() {
  }
});

// node_modules/@smithy/types/dist-es/serde.js
var init_serde = __esm({
  "node_modules/@smithy/types/dist-es/serde.js"() {
  }
});

// node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = __esm({
  "node_modules/@smithy/types/dist-es/shapes.js"() {
  }
});

// node_modules/@smithy/types/dist-es/signature.js
var init_signature = __esm({
  "node_modules/@smithy/types/dist-es/signature.js"() {
  }
});

// node_modules/@smithy/types/dist-es/stream.js
var init_stream = __esm({
  "node_modules/@smithy/types/dist-es/stream.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
var init_transfer = __esm({
  "node_modules/@smithy/types/dist-es/transfer.js"() {
    (function(RequestHandlerProtocol2) {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
  }
});

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = __esm({
  "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = __esm({
  "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = __esm({
  "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
  }
});

// node_modules/@smithy/types/dist-es/uri.js
var init_uri = __esm({
  "node_modules/@smithy/types/dist-es/uri.js"() {
  }
});

// node_modules/@smithy/types/dist-es/util.js
var init_util = __esm({
  "node_modules/@smithy/types/dist-es/util.js"() {
  }
});

// node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = __esm({
  "node_modules/@smithy/types/dist-es/waiter.js"() {
  }
});

// node_modules/@smithy/types/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@smithy/types/dist-es/index.js"() {
    init_abort();
    init_auth2();
    init_blob_payload_input_types();
    init_checksum();
    init_client();
    init_command();
    init_connection();
    init_crypto();
    init_encode();
    init_endpoint();
    init_endpoints();
    init_eventStream();
    init_extensions2();
    init_http();
    init_httpHandlerInitialization();
    init_identity2();
    init_logger();
    init_middleware();
    init_pagination();
    init_profile();
    init_response();
    init_retry();
    init_serde();
    init_shapes();
    init_signature();
    init_stream();
    init_streaming_blob_common_types();
    init_streaming_blob_payload_input_types();
    init_streaming_blob_payload_output_types();
    init_transfer();
    init_client_payload_blob_type_narrow();
    init_no_undefined();
    init_type_transform();
    init_uri();
    init_util();
    init_waiter();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Field.js"() {
    init_dist_es();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest;
var init_httpRequest = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    HttpRequest = class {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static isInstance(request2) {
        if (!request2)
          return false;
        const req = request2;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        const cloned = new HttpRequest({
          ...this,
          headers: { ...this.headers }
        });
        if (cloned.query)
          cloned.query = cloneQuery(cloned.query);
        return cloned;
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse;
var init_httpResponse = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    HttpResponse = class {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = __esm({
  "node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = __esm({
  "node_modules/@smithy/protocol-http/dist-es/types.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es2 = __esm({
  "node_modules/@smithy/protocol-http/dist-es/index.js"() {
    init_extensions();
    init_Field();
    init_Fields();
    init_httpHandler();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostname();
    init_types();
  }
});

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin;
var init_dist_es3 = __esm({
  "node_modules/@aws-sdk/middleware-host-header/dist-es/index.js"() {
    init_dist_es2();
    hostHeaderMiddleware = (options) => (next) => async (args) => {
      if (!HttpRequest.isInstance(args.request))
        return next(args);
      const { request: request2 } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request2.headers[":authority"]) {
        delete request2.headers["host"];
        request2.headers[":authority"] = request2.hostname + (request2.port ? ":" + request2.port : "");
      } else if (!request2.headers["host"]) {
        let host = request2.hostname;
        if (request2.port != null)
          host += `:${request2.port}`;
        request2.headers["host"] = host;
      }
      return next(args);
    };
    hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    getHostHeaderPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }
    });
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin;
var init_loggerMiddleware = __esm({
  "node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js"() {
    loggerMiddleware = () => (next, context) => async (args) => {
      try {
        const response = await next(args);
        const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger3?.info?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger3?.error?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    };
    loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    getLoggerPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }
    });
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/index.js
var init_dist_es4 = __esm({
  "node_modules/@aws-sdk/middleware-logger/dist-es/index.js"() {
    init_loggerMiddleware();
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME, ENV_LAMBDA_FUNCTION_NAME, ENV_TRACE_ID, recursionDetectionMiddleware, addRecursionDetectionMiddlewareOptions, getRecursionDetectionPlugin;
var init_dist_es5 = __esm({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js"() {
    init_dist_es2();
    TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    recursionDetectionMiddleware = (options) => (next) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest.isInstance(request2) || options.runtime !== "node" || request2.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceId = process.env[ENV_TRACE_ID];
      const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request2.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request: request2
      });
    };
    addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    getRecursionDetectionPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger;
var init_NoOpLogger = __esm({
  "node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
    NoOpLogger = class {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
  }
});

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
var init_MiddlewareStack = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
    getAllAliases = (name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    };
    getMiddlewareNameWithAliases = (name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    };
    constructStack = () => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = (entries) => entries.sort((a5, b5) => stepWeights[b5.step] - stepWeights[a5.step] || priorityWeights[b5.priority || "normal"] - priorityWeights[a5.priority || "normal"]);
      const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      };
      const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      };
      const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      };
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    };
    stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es6 = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/index.js"() {
    init_MiddlewareStack();
  }
});

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client;
var init_client2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/client.js"() {
    init_dist_es6();
    Client = class {
      constructor(config2) {
        this.middlewareStack = constructStack();
        this.config = config2;
      }
      send(command, optionsOrCb, cb2) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb2;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
          handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        if (this.config.requestHandler.destroy)
          this.config.requestHandler.destroy();
      }
    };
  }
});

// node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es7 = __esm({
  "node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
  }
});

// node_modules/@smithy/util-buffer-from/dist-es/index.js
var import_buffer, fromArrayBuffer, fromString;
var init_dist_es8 = __esm({
  "node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es7();
    import_buffer = require("buffer");
    fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return import_buffer.Buffer.from(input, offset, length);
    };
    fromString = (input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
    };
  }
});

// node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX, fromBase64;
var init_fromBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/fromBase64.js"() {
    init_dist_es8();
    BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    fromBase64 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = fromString(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf8;
var init_fromUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/fromUtf8.js"() {
    init_dist_es8();
    fromUtf8 = (input) => {
      const buf = fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf8();
    toUint8Array = (data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf8;
var init_toUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUtf8.js"() {
    init_dist_es8();
    toUtf8 = (input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es9 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_fromUtf8();
    init_toUint8Array();
    init_toUtf8();
  }
});

// node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64;
var init_toBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/toBase64.js"() {
    init_dist_es8();
    init_dist_es9();
    toBase64 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = fromUtf8(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    };
  }
});

// node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es10 = __esm({
  "node_modules/@smithy/util-base64/dist-es/index.js"() {
    init_fromBase64();
    init_toBase64();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
var init_transforms = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
    init_dist_es10();
    init_dist_es9();
    init_Uint8ArrayBlobAdapter();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter;
var init_Uint8ArrayBlobAdapter = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
    init_transforms();
    Uint8ArrayBlobAdapter = class extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
var import_stream, getAwsChunkedEncodingStream;
var init_getAwsChunkedEncodingStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js"() {
    import_stream = require("stream");
    getAwsChunkedEncodingStream = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new import_stream.Readable({ read: () => {
      } });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    };
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri, hexEncode;
var init_escape_uri = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
    hexEncode = (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`;
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
    init_escape_uri();
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es11 = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    init_escape_uri();
    init_escape_uri_path();
  }
});

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i5 = 0, iLen = value.length; i5 < iLen; i5++) {
        parts.push(`${key}=${escapeUri(value[i5])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
var init_dist_es12 = __esm({
  "node_modules/@smithy/querystring-builder/dist-es/index.js"() {
    init_dist_es11();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES;
var init_constants = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/constants.js"() {
    NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders;
var init_get_transformed_headers = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js"() {
    getTransformedHeaders = (headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var setConnectionTimeout;
var init_set_connection_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js"() {
    setConnectionTimeout = (request2, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request2.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
          name: "TimeoutError"
        }));
      }, timeoutInMs);
      request2.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var setSocketKeepAlive;
var init_set_socket_keep_alive = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js"() {
    setSocketKeepAlive = (request2, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request2.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var setSocketTimeout;
var init_set_socket_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js"() {
    setSocketTimeout = (request2, reject, timeoutInMs = 0) => {
      request2.setTimeout(timeoutInMs, () => {
        request2.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
async function writeRequestBody(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME) {
  const headers = request2.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];
  let timeoutId = -1;
  let hasError = false;
  if (expect === "100-continue") {
    await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          clearTimeout(timeoutId);
          resolve();
        });
        httpRequest2.on("error", () => {
          hasError = true;
          clearTimeout(timeoutId);
          resolve();
        });
      })
    ]);
  }
  if (!hasError) {
    writeBody(httpRequest2, request2.body);
  }
}
function writeBody(httpRequest2, body) {
  if (body instanceof import_stream2.Readable) {
    body.pipe(httpRequest2);
    return;
  }
  if (body) {
    if (Buffer.isBuffer(body) || typeof body === "string") {
      httpRequest2.end(body);
      return;
    }
    const uint8 = body;
    if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
      httpRequest2.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
      return;
    }
    httpRequest2.end(Buffer.from(body));
    return;
  }
  httpRequest2.end();
}
var import_stream2, MIN_WAIT_TIME;
var init_write_request_body = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/write-request-body.js"() {
    import_stream2 = require("stream");
    MIN_WAIT_TIME = 1e3;
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
var import_http, import_https, NodeHttpHandler;
var init_node_http_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js"() {
    init_dist_es2();
    init_dist_es12();
    import_http = require("http");
    import_https = require("https");
    init_constants();
    init_get_transformed_headers();
    init_set_connection_timeout();
    init_set_socket_keep_alive();
    init_set_socket_timeout();
    init_write_request_body();
    NodeHttpHandler = class {
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger3 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger3?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      resolveDefaultConfig(options) {
        const { requestTimeout: requestTimeout2, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout2 ?? socketTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof import_http.Agent || typeof httpAgent?.destroy === "function") {
              return httpAgent;
            }
            return new import_http.Agent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof import_https.Agent || typeof httpsAgent?.destroy === "function") {
              return httpsAgent;
            }
            return new import_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: console
        };
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request2, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _reject(arg);
          };
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request2.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          socketCheckTimeoutId = setTimeout(() => {
            this.socketWarningTimestamp = NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, this.config.logger);
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3));
          const queryString = buildQueryString(request2.query || {});
          let auth = void 0;
          if (request2.username != null || request2.password != null) {
            const username = request2.username ?? "";
            const password = request2.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request2.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request2.fragment) {
            path += `#${request2.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request2.headers,
            host: request2.hostname,
            method: request2.method,
            path,
            port: request2.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? import_https.request : import_http.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          setConnectionTimeout(req, reject, this.config.connectionTimeout);
          setSocketTimeout(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            const onAbort = () => {
              req.destroy();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            setSocketKeepAlive(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = writeRequestBody(req, request2, this.config.requestTimeout).catch((e5) => {
            clearTimeout(socketCheckTimeoutId);
            return _reject(e5);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config2) => {
          return {
            ...config2,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var NodeHttp2ConnectionPool;
var init_node_http2_connection_pool = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js"() {
    NodeHttp2ConnectionPool = class {
      constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s5) => s5 !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js
var init_node_http2_connection_manager = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js"() {
    init_node_http2_connection_pool();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js"() {
    init_dist_es2();
    init_dist_es12();
    init_get_transformed_headers();
    init_node_http2_connection_manager();
    init_write_request_body();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
var import_stream3, Collector;
var init_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js"() {
    import_stream3 = require("stream");
    Collector = class extends import_stream3.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
async function collectReadableStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
var streamCollector, isReadableStreamInstance;
var init_stream_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js"() {
    init_collector();
    streamCollector = (stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    };
    isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
  }
});

// node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es13 = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/index.js"() {
    init_node_http_handler();
    init_node_http2_handler();
    init_stream_collector();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
var init_request_timeout = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var init_fetch_http_handler = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
    init_dist_es2();
    init_dist_es12();
    init_request_timeout();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
var streamCollector2;
var init_stream_collector2 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
    init_dist_es10();
    streamCollector2 = (stream) => {
      if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
      }
      return collectStream(stream);
    };
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
var init_dist_es14 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
    init_fetch_http_handler();
    init_stream_collector2();
  }
});

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i5 = 0; i5 < encoded.length; i5 += 2) {
    const encodedByte = encoded.slice(i5, i5 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i5 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i5 = 0; i5 < bytes.byteLength; i5++) {
    out += SHORT_TO_HEX[bytes[i5]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es15 = __esm({
  "node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i5 = 0; i5 < 256; i5++) {
      let encodedByte = i5.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i5] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i5;
    }
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED, sdkStreamMixin, isBlobInstance, isReadableStreamInstance2;
var init_sdk_stream_mixin_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
    init_dist_es14();
    init_dist_es10();
    init_dist_es15();
    init_dist_es9();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    sdkStreamMixin = (stream) => {
      if (!isBlobInstance(stream) && !isReadableStreamInstance2(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await streamCollector2(stream);
      };
      const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return toBase64(buf);
          } else if (encoding === "hex") {
            return toHex(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return toUtf8(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if (isReadableStreamInstance2(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }
      });
    };
    isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
    isReadableStreamInstance2 = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
var import_stream4, import_util, ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2, sdkStreamMixin2;
var init_sdk_stream_mixin = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js"() {
    init_dist_es13();
    init_dist_es8();
    import_stream4 = require("stream");
    import_util = require("util");
    init_sdk_stream_mixin_browser();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2 = "The stream has already been transformed.";
    sdkStreamMixin2 = (stream) => {
      if (!(stream instanceof import_stream4.Readable)) {
        try {
          return sdkStreamMixin(stream);
        } catch (e5) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
        }
        transformed = true;
        return await streamCollector(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return fromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new import_util.TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof import_stream4.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          }
          transformed = true;
          return import_stream4.Readable.toWeb(stream);
        }
      });
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es16 = __esm({
  "node_modules/@smithy/util-stream/dist-es/index.js"() {
    init_Uint8ArrayBlobAdapter();
    init_getAwsChunkedEncodingStream();
    init_sdk_stream_mixin();
  }
});

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var collectBody;
var init_collect_stream_body = __esm({
  "node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
    init_dist_es16();
    collectBody = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/command.js
var Command, ClassBuilder;
var init_command2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/command.js"() {
    init_dist_es6();
    init_dist_es();
    Command = class {
      constructor() {
        this.middlewareStack = constructStack();
      }
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger3 } = configuration;
        const handlerExecutionContext = {
          logger: logger3,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [SMITHY_CONTEXT_KEY]: {
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
      }
    };
    ClassBuilder = class {
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_2) => _2;
        this._outputFilterSensitiveLog = (_2) => _2;
        this._serializer = null;
        this._deserializer = null;
      }
      init(cb2) {
        this._init = cb2;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_2) => _2, outputFilter = (_2) => _2) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
          }
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        };
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/constants.js
var SENSITIVE_STRING;
var init_constants2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/constants.js"() {
    SENSITIVE_STRING = "***SensitiveInformation***";
  }
});

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var createAggregatedClient;
var init_create_aggregated_client = __esm({
  "node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
    createAggregatedClient = (commands4, Client2) => {
      for (const command of Object.keys(commands4)) {
        const CommandCtor = commands4[command];
        const methodImpl = async function(args, optionsOrCb, cb2) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb2 === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb2);
          } else {
            return this.send(command2, optionsOrCb);
          }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectInt32, expectShort, expectByte, expectSizedInt, castInt, expectNonNull, expectObject, expectString, strictParseFloat32, NUMBER_REGEX, parseNumber, strictParseInt32, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/parse-utils.js"() {
    expectNumber = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    };
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = (value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    };
    expectLong = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    };
    expectInt32 = (value) => expectSizedInt(value, 32);
    expectShort = (value) => expectSizedInt(value, 16);
    expectByte = (value) => expectSizedInt(value, 8);
    expectSizedInt = (value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    };
    castInt = (value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    };
    expectNonNull = (value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    };
    expectObject = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    };
    expectString = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    };
    strictParseFloat32 = (value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    };
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = (value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    };
    strictParseInt32 = (value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    };
    strictParseShort = (value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    };
    strictParseByte = (value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    };
    stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s5) => !s5.includes("stackTraceWarning")).join("\n");
    };
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
var MONTHS, RFC3339, parseRfc3339DateTime, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, buildDate, FIFTY_YEARS_IN_MILLIS, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/date-utils.js"() {
    init_parse_utils();
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    };
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    };
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    buildDate = (year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
    };
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = (year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    };
    isLeapYear = (year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };
    parseDateValue = (value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    };
    parseMilliseconds = (value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    };
    parseOffsetToMilliseconds = (value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    };
    stripLeadingZeroes = (value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException, decorateServiceException;
var init_exceptions = __esm({
  "node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
    ServiceException = class extends Error {
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
    };
    decorateServiceException = (exception, additions = {}) => {
      Object.entries(additions).filter(([, v6]) => v6 !== void 0).forEach(([k5, v6]) => {
        if (exception[k5] == void 0 || exception[k5] === "") {
          exception[k5] = v6;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError, withBaseException, deserializeMetadata;
var init_default_error_handler = __esm({
  "node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
    init_exceptions();
    throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    };
    withBaseException = (ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    };
    deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
  }
});

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode;
var init_defaults_mode = __esm({
  "node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
    loadConfigsForDefaultMode = (mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var warningEmitted, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    warningEmitted = false;
    emitWarningIfUnsupportedVersion = (version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var getChecksumConfiguration2, resolveChecksumRuntimeConfig2;
var init_checksum3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
    init_dist_es();
    getChecksumConfiguration2 = (runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in AlgorithmId) {
        const algorithmId = AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    };
    resolveChecksumRuntimeConfig2 = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var getRetryConfiguration, resolveRetryRuntimeConfig;
var init_retry2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
    getRetryConfiguration = (runtimeConfig) => {
      let _retryStrategy = runtimeConfig.retryStrategy;
      return {
        setRetryStrategy(retryStrategy) {
          _retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return _retryStrategy;
        }
      };
    };
    resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig;
var init_defaultExtensionConfiguration2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
    init_checksum3();
    init_retry2();
    getDefaultExtensionConfiguration = (runtimeConfig) => {
      return {
        ...getChecksumConfiguration2(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig)
      };
    };
    resolveDefaultRuntimeConfig = (config2) => {
      return {
        ...resolveChecksumRuntimeConfig2(config2),
        ...resolveRetryRuntimeConfig(config2)
      };
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
    init_defaultExtensionConfiguration2();
  }
});

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c5) {
    return "%" + c5.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var getArrayIfSingleItem;
var init_get_array_if_single_item = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
    getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode;
var init_get_value_from_text_node = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    getValueFromTextNode = (obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var StringWrapper;
var init_lazy_json = __esm({
  "node_modules/@smithy/smithy-client/dist-es/lazy-json.js"() {
    StringWrapper = function() {
      const Class = Object.getPrototypeOf(this).constructor;
      const Constructor = Function.bind.apply(String, [null, ...arguments]);
      const instance = new Constructor();
      Object.setPrototypeOf(instance, Class.prototype);
      return instance;
    };
    StringWrapper.prototype = Object.create(String.prototype, {
      constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(StringWrapper, String);
  }
});

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
var take, mapWithFilter, applyInstruction, nonNullish, pass;
var init_object_mapping = __esm({
  "node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
    take = (source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    };
    mapWithFilter = (target, filter, instructions) => {
      return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    };
    applyInstruction = (target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    };
    nonNullish = (_2) => _2 != null;
    pass = (_2) => _2;
  }
});

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var resolvedPath;
var init_resolve_path = __esm({
  "node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var init_ser_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
var _json;
var init_serde_json = __esm({
  "node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
    _json = (obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_2) => _2 != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/split-every.js
var init_split_every = __esm({
  "node_modules/@smithy/smithy-client/dist-es/split-every.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es17 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/index.js"() {
    init_NoOpLogger();
    init_client2();
    init_collect_stream_body();
    init_command2();
    init_constants2();
    init_create_aggregated_client();
    init_date_utils();
    init_default_error_handler();
    init_defaults_mode();
    init_emitWarningIfUnsupportedVersion();
    init_extensions3();
    init_exceptions();
    init_extended_encode_uri_component();
    init_get_array_if_single_item();
    init_get_value_from_text_node();
    init_lazy_json();
    init_object_mapping();
    init_parse_utils();
    init_resolve_path();
    init_ser_utils();
    init_serde_json();
    init_split_every();
  }
});

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext;
var init_getSmithyContext = __esm({
  "node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
    init_dist_es();
    getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});
  }
});

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
    normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es18 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/index.js"() {
    init_getSmithyContext();
    init_normalizeProvider();
  }
});

// node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
var init_constants3 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/constants.js"() {
    ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    AUTH_HEADER = "authorization";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    DATE_HEADER = "date";
    GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    SHA256_HEADER = "x-amz-content-sha256";
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    PROXY_HEADER_PATTERN = /^proxy-/;
    SEC_HEADER_PATTERN = /^sec-/;
    ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    MAX_CACHE_SIZE = 50;
    KEY_TYPE_IDENTIFIER = "aws4_request";
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
var init_credentialDerivation = __esm({
  "node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
    init_dist_es15();
    init_dist_es9();
    init_constants3();
    signingKeyCache = {};
    cacheQueue = [];
    createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
    getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    };
    hmac = (ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update(toUint8Array(data));
      return hash.digest();
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders;
var init_getCanonicalHeaders = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
    init_constants3();
    getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery;
var init_getCanonicalQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
    init_dist_es11();
    init_constants3();
    getCanonicalQuery = ({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
          serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).sort().join("&");
        }
      }
      return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash;
var init_getPayloadHash = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
    init_dist_es7();
    init_dist_es15();
    init_dist_es9();
    init_constants3();
    getPayloadHash = async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
function negate(bytes) {
  for (let i5 = 0; i5 < 8; i5++) {
    bytes[i5] ^= 255;
  }
  for (let i5 = 7; i5 > -1; i5--) {
    bytes[i5]++;
    if (bytes[i5] !== 0)
      break;
  }
}
var HeaderFormatter, HEADER_VALUE_TYPE, UUID_PATTERN, Int64;
var init_HeaderFormatter = __esm({
  "node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
    init_dist_es15();
    init_dist_es9();
    HeaderFormatter = class {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    (function(HEADER_VALUE_TYPE3) {
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    Int64 = class {
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
          bytes[i5] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader;
var init_headerUtil = __esm({
  "node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
    hasHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
var cloneRequest, cloneQuery2;
var init_cloneRequest = __esm({
  "node_modules/@smithy/signature-v4/dist-es/cloneRequest.js"() {
    cloneRequest = ({ headers, query, ...rest }) => ({
      ...rest,
      headers: { ...headers },
      query: query ? cloneQuery2(query) : void 0
    });
    cloneQuery2 = (query) => Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }
});

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery;
var init_moveHeadersToQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
    init_cloneRequest();
    moveHeadersToQuery = (request2, options = {}) => {
      const { headers, query = {} } = typeof request2.clone === "function" ? request2.clone() : cloneRequest(request2);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request2,
        headers,
        query
      };
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest;
var init_prepareRequest = __esm({
  "node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
    init_cloneRequest();
    init_constants3();
    prepareRequest = (request2) => {
      request2 = typeof request2.clone === "function" ? request2.clone() : cloneRequest(request2);
      for (const headerName of Object.keys(request2.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request2.headers[headerName];
        }
      }
      return request2;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601, toDate;
var init_utilDate = __esm({
  "node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
    iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
    toDate = (time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4, formatDate, getCanonicalHeaderList;
var init_SignatureV4 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
    init_dist_es15();
    init_dist_es18();
    init_dist_es11();
    init_dist_es9();
    init_constants3();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_HeaderFormatter();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_utilDate();
    SignatureV4 = class {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.headerFormatter = new HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request2 = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
          request2.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request2.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request2.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request2.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request2.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        request2.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request2.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request2;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request2 = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request2.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request2.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request2, this.sha256);
        if (!hasHeader(SHA256_HEADER, request2.headers) && this.applyChecksum) {
          request2.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, payloadHash));
        request2.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request2;
      }
      createCanonicalRequest(request2, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request2.method}
${this.getCanonicalPath(request2)}
${getCanonicalQuery(request2)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
    };
    formatDate = (now) => {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    };
    getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
  }
});

// node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es19 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/index.js"() {
    init_SignatureV4();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_credentialDerivation();
  }
});

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var booleanSelector;
var init_booleanSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    booleanSelector = (obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    };
  }
});

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
var init_numberSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
  }
});

// node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType;
var init_types2 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/types.js"() {
    (function(SelectorType2) {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
    })(SelectorType || (SelectorType = {}));
  }
});

// node_modules/@smithy/util-config-provider/dist-es/index.js
var init_dist_es20 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/index.js"() {
    init_booleanSelector();
    init_numberSelector();
    init_types2();
  }
});

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError;
var init_ProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
    ProviderError = class extends Error {
      constructor(message, options = true) {
        let logger3;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger3 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger3 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, ProviderError.prototype);
        logger3?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError;
var init_CredentialsProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
    init_ProviderError();
    CredentialsProviderError = class extends ProviderError {
      constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var TokenProviderError;
var init_TokenProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
    init_ProviderError();
    TokenProviderError = class extends ProviderError {
      constructor(message, options = true) {
        super(message, options);
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/chain.js
var chain;
var init_chain = __esm({
  "node_modules/@smithy/property-provider/dist-es/chain.js"() {
    init_ProviderError();
    chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
var fromStatic;
var init_fromStatic = __esm({
  "node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    fromStatic = (staticValue) => () => Promise.resolve(staticValue);
  }
});

// node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize;
var init_memoize = __esm({
  "node_modules/@smithy/property-provider/dist-es/memoize.js"() {
    memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/index.js
var init_dist_es21 = __esm({
  "node_modules/@smithy/property-provider/dist-es/index.js"() {
    init_CredentialsProviderError();
    init_ProviderError();
    init_TokenProviderError();
    init_chain();
    init_fromStatic();
    init_memoize();
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
  };
}
var init_configurations = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX, isIpAddress;
var init_isIpAddress = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js"() {
    IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX, isValidHostLabel;
var init_isValidHostLabel = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js"() {
    VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    isValidHostLabel = (value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
var customEndpointFunctions;
var init_customEndpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js"() {
    customEndpointFunctions = {};
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
var debugId;
var init_debugId = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js"() {
    debugId = "endpoints";
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
var init_toDebugString = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/index.js
var init_debug = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/index.js"() {
    init_debugId();
    init_toDebugString();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError;
var init_EndpointError = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js"() {
    EndpointError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
var init_EndpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/shared.js
var init_shared2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/index.js
var init_types3 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError();
    init_EndpointFunctions();
    init_EndpointRuleObject2();
    init_ErrorRuleObject2();
    init_RuleSetObject2();
    init_TreeRuleObject2();
    init_shared2();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals;
var init_booleanEquals = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js"() {
    booleanEquals = (value1, value2) => value1 === value2;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList;
var init_getAttrPathList = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js"() {
    init_types3();
    getAttrPathList = (path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr;
var init_getAttr = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js"() {
    init_types3();
    init_getAttrPathList();
    getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value);
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
var isSet;
var init_isSet = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js"() {
    isSet = (value) => value != null;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
var not;
var init_not = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/not.js"() {
    not = (value) => !value;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS, parseURL;
var init_parseURL = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js"() {
    init_dist_es();
    init_isIpAddress();
    DEFAULT_PORTS = {
      [EndpointURLScheme.HTTP]: 80,
      [EndpointURLScheme.HTTPS]: 443
    };
    parseURL = (value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k5, v6]) => `${k5}=${v6}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals;
var init_stringEquals = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js"() {
    stringEquals = (value1, value2) => value1 === value2;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
var substring;
var init_substring = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/substring.js"() {
    substring = (input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode;
var init_uriEncode = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js"() {
    uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/index.js
var init_lib = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/index.js"() {
    init_booleanEquals();
    init_getAttr();
    init_isSet();
    init_isValidHostLabel();
    init_not();
    init_parseURL();
    init_stringEquals();
    init_substring();
    init_uriEncode();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions;
var init_endpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js"() {
    init_lib();
    endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate;
var init_evaluateTemplate = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js"() {
    init_lib();
    evaluateTemplate = (template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue;
var init_getReferenceValue = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js"() {
    getReferenceValue = ({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression;
var init_evaluateExpression = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js"() {
    init_types3();
    init_callFunction();
    init_evaluateTemplate();
    init_getReferenceValue();
    evaluateExpression = (obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction;
var init_callFunction = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js"() {
    init_customEndpointFunctions();
    init_endpointFunctions();
    init_evaluateExpression();
    callFunction = ({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition;
var init_evaluateCondition = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js"() {
    init_debug();
    init_types3();
    init_callFunction();
    evaluateCondition = ({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions;
var init_evaluateConditions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js"() {
    init_debug();
    init_evaluateCondition();
    evaluateConditions = (conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders;
var init_getEndpointHeaders = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js"() {
    init_types3();
    init_evaluateExpression();
    getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      })
    }), {});
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
var getEndpointProperty;
var init_getEndpointProperty = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js"() {
    init_types3();
    init_evaluateTemplate();
    init_getEndpointProperties();
    getEndpointProperty = (property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties;
var init_getEndpointProperties = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js"() {
    init_getEndpointProperty();
    getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: getEndpointProperty(propertyVal, options)
    }), {});
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl;
var init_getEndpointUrl = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js"() {
    init_types3();
    init_evaluateExpression();
    getEndpointUrl = (endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule;
var init_evaluateEndpointRule = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js"() {
    init_debug();
    init_evaluateConditions();
    init_getEndpointHeaders();
    init_getEndpointProperties();
    init_getEndpointUrl();
    evaluateEndpointRule = (endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule;
var init_evaluateErrorRule = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js"() {
    init_types3();
    init_evaluateConditions();
    init_evaluateExpression();
    evaluateErrorRule = (errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      }));
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
var evaluateTreeRule;
var init_evaluateTreeRule = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js"() {
    init_evaluateConditions();
    init_evaluateRules();
    evaluateTreeRule = (treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules;
var init_evaluateRules = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js"() {
    init_types3();
    init_evaluateEndpointRule();
    init_evaluateErrorRule();
    init_evaluateTreeRule();
    evaluateRules = (rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError(`Rules evaluation failed`);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/index.js
var init_utils = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/index.js"() {
    init_customEndpointFunctions();
    init_evaluateRules();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint;
var init_resolveEndpoint = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js"() {
    init_debug();
    init_types3();
    init_utils();
    resolveEndpoint = (ruleSetObject, options) => {
      const { endpointParams, logger: logger3 } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v6]) => v6.default != null).map(([k5, v6]) => [k5, v6.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v6]) => v6.required).map(([k5]) => k5);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger: logger3, referenceRecord: {} });
      if (options.endpointParams?.Endpoint) {
        try {
          const givenEndpoint = new URL(options.endpointParams.Endpoint);
          const { protocol, port } = givenEndpoint;
          endpoint.url.protocol = protocol;
          endpoint.url.port = port;
        } catch (e5) {
        }
      }
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/index.js
var init_dist_es22 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/index.js"() {
    init_isIpAddress();
    init_isValidHostLabel();
    init_customEndpointFunctions();
    init_resolveEndpoint();
    init_types3();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
var init_isIpAddress2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js"() {
    init_dist_es22();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket;
var init_isVirtualHostableS3Bucket = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js"() {
    init_dist_es22();
    init_isIpAddress2();
    isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!isValidHostLabel(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if (isIpAddress(value)) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var parseArn;
var init_parseArn = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js"() {
    parseArn = (value) => {
      const segments = value.split(":");
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourceId] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
        return null;
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
      };
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default;
var init_partitions = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json"() {
    partitions_default = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "aws-global": {
            description: "AWS Standard global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "AWS China global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "AWS GovCloud (US) global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "c2s.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "AWS ISO (US) global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "sc2s.sgov.gov",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "AWS ISOB (US) global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "cloud.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "csp.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {}
      }],
      version: "1.1"
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo, selectedUserAgentPrefix, partition, getUserAgentPrefix;
var init_partition = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js"() {
    init_partitions();
    selectedPartitionsInfo = partitions_default;
    selectedUserAgentPrefix = "";
    partition = (value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    };
    getUserAgentPrefix = () => selectedUserAgentPrefix;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions;
var init_aws = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/aws.js"() {
    init_dist_es22();
    init_isVirtualHostableS3Bucket();
    init_parseArn();
    init_partition();
    awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
var init_resolveEndpoint2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js"() {
    init_dist_es22();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
var init_EndpointError2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js"() {
    init_dist_es22();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
var init_shared3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
var init_types4 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError2();
    init_EndpointRuleObject3();
    init_ErrorRuleObject3();
    init_RuleSetObject3();
    init_TreeRuleObject3();
    init_shared3();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/index.js
var init_dist_es23 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/index.js"() {
    init_aws();
    init_partition();
    init_isIpAddress2();
    init_resolveEndpoint2();
    init_types4();
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_NAME_SEPARATOR, UA_NAME_ESCAPE_REGEX, UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR;
var init_constants4 = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js"() {
    USER_AGENT = "user-agent";
    X_AMZ_USER_AGENT = "x-amz-user-agent";
    SPACE = " ";
    UA_NAME_SEPARATOR = "/";
    UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    UA_ESCAPE_CHAR = "-";
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware, escapeUserAgent, getUserAgentMiddlewareOptions, getUserAgentPlugin;
var init_user_agent_middleware = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js"() {
    init_dist_es23();
    init_dist_es2();
    init_constants4();
    userAgentMiddleware = (options) => (next, context) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest.isInstance(request2))
        return next(args);
      const { headers } = request2;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const prefix = getUserAgentPrefix();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request: request2
      });
    };
    escapeUserAgent = (userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    };
    getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    getUserAgentPlugin = (config2) => ({
      applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config2), getUserAgentMiddlewareOptions);
      }
    });
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
var init_dist_es24 = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js"() {
    init_configurations();
    init_user_agent_middleware();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var ENV_USE_DUALSTACK_ENDPOINT, CONFIG_USE_DUALSTACK_ENDPOINT, NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseDualstackEndpointConfigOptions = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"() {
    init_dist_es20();
    ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => booleanSelector(env3, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
      configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var ENV_USE_FIPS_ENDPOINT, CONFIG_USE_FIPS_ENDPOINT, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseFipsEndpointConfigOptions = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"() {
    init_dist_es20();
    ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => booleanSelector(env3, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
      configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
var init_resolveCustomEndpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js"() {
    init_dist_es18();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
var init_getEndpointFromRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
var init_resolveEndpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js"() {
    init_dist_es18();
    init_getEndpointFromRegion();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
var init_endpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js"() {
    init_NodeUseDualstackEndpointConfigOptions();
    init_NodeUseFipsEndpointConfigOptions();
    init_resolveCustomEndpointsConfig();
    init_resolveEndpointsConfig();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
var REGION_ENV_NAME, REGION_INI_NAME, NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS;
var init_config2 = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js"() {
    REGION_ENV_NAME = "AWS_REGION";
    REGION_INI_NAME = "region";
    NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => env3[REGION_ENV_NAME],
      configFileSelector: (profile) => profile[REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion;
var init_isFipsRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
    isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion;
var init_getRealRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion();
    getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig;
var init_resolveRegionConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_getRealRegion();
    init_isFipsRegion();
    resolveRegionConfig = (input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return {
        ...input,
        region: async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      };
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
var init_regionConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js"() {
    init_config2();
    init_resolveRegionConfig();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
var init_PartitionHash = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
var init_RegionHash = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
var init_getHostnameFromVariants = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
var init_getResolvedHostname = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
var init_getResolvedPartition = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
var init_getResolvedSigningRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
var init_getRegionInfo = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js"() {
    init_getHostnameFromVariants();
    init_getResolvedHostname();
    init_getResolvedPartition();
    init_getResolvedSigningRegion();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
var init_regionInfo = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js"() {
    init_PartitionHash();
    init_RegionHash();
    init_getRegionInfo();
  }
});

// node_modules/@smithy/config-resolver/dist-es/index.js
var init_dist_es25 = __esm({
  "node_modules/@smithy/config-resolver/dist-es/index.js"() {
    init_endpointsConfig();
    init_regionConfig();
    init_regionInfo();
  }
});

// node_modules/@smithy/middleware-content-length/dist-es/index.js
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request2 = args.request;
    if (HttpRequest.isInstance(request2)) {
      const { body, headers } = request2;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request2.headers = {
            ...request2.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
var CONTENT_LENGTH_HEADER, contentLengthMiddlewareOptions, getContentLengthPlugin;
var init_dist_es26 = __esm({
  "node_modules/@smithy/middleware-content-length/dist-es/index.js"() {
    init_dist_es2();
    CONTENT_LENGTH_HEADER = "content-length";
    contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    getContentLengthPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
var init_s3 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
    resolveParamsForS3 = async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    };
    DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    DOTS_PATTERN = /\.\./;
    isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
    isArnBucketName = (bucketName) => {
      const [arn, partition2, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition2 && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
var init_service_customizations = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
    init_s3();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider;
var init_createConfigValueProvider = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
    createConfigValueProvider = (configKey, canonicalEndpointParamKey, config2) => {
      const configProvider = async () => {
        const configValue = config2[configKey] ?? config2[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      };
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js
function getSelectorName(functionString) {
  try {
    const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
    constants.delete("CONFIG");
    constants.delete("CONFIG_PREFIX_SEPARATOR");
    constants.delete("ENV");
    return [...constants].join(", ");
  } catch (e5) {
    return functionString;
  }
}
var init_getSelectorName = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js"() {
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromEnv.js
var fromEnv;
var init_fromEnv = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromEnv.js"() {
    init_dist_es21();
    init_getSelectorName();
    fromEnv = (envVarSelector, logger3) => async () => {
      try {
        const config2 = envVarSelector(process.env);
        if (config2 === void 0) {
          throw new Error();
        }
        return config2;
      } catch (e5) {
        throw new CredentialsProviderError(e5.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: logger3 });
      }
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js
var import_os, import_path, homeDirCache, getHomeDirCacheKey, getHomeDir;
var init_getHomeDir = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js"() {
    import_os = require("os");
    import_path = require("path");
    homeDirCache = {};
    getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    getHomeDir = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${import_path.sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0, import_os.homedir)();
      return homeDirCache[homeDirCacheKey];
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE, DEFAULT_PROFILE, getProfileName;
var init_getProfileName = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js"() {
    ENV_PROFILE = "AWS_PROFILE";
    DEFAULT_PROFILE = "default";
    getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
var import_crypto, import_path2, getSSOTokenFilepath;
var init_getSSOTokenFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js"() {
    import_crypto = require("crypto");
    import_path2 = require("path");
    init_getHomeDir();
    getSSOTokenFilepath = (id) => {
      const hasher = (0, import_crypto.createHash)("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return (0, import_path2.join)(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
var import_fs, readFile, getSSOTokenFromFile;
var init_getSSOTokenFromFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js"() {
    import_fs = require("fs");
    init_getSSOTokenFilepath();
    ({ readFile } = import_fs.promises);
    getSSOTokenFromFile = async (id) => {
      const ssoTokenFilepath = getSSOTokenFilepath(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js
var getConfigData;
var init_getConfigData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getConfigData = (data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    });
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js
var import_path3, ENV_CONFIG_PATH, getConfigFilepath;
var init_getConfigFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js"() {
    import_path3 = require("path");
    init_getHomeDir();
    ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || (0, import_path3.join)(getHomeDir(), ".aws", "config");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
var import_path4, ENV_CREDENTIALS_PATH, getCredentialsFilepath;
var init_getCredentialsFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js"() {
    import_path4 = require("path");
    init_getHomeDir();
    ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || (0, import_path4.join)(getHomeDir(), ".aws", "credentials");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js
var prefixKeyRegex, profileNameBlockList, parseIni;
var init_parseIni = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    profileNameBlockList = ["__proto__", "profile __proto__"];
    parseIni = (iniData) => {
      const map2 = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map2[currentSection] = map2[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map2[currentSection][key] = value;
            }
          }
        }
      }
      return map2;
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js
var import_fs2, readFile2, filePromisesHash, slurpFile;
var init_slurpFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js"() {
    import_fs2 = require("fs");
    ({ readFile: readFile2 } = import_fs2.promises);
    filePromisesHash = {};
    slurpFile = (path, options) => {
      if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = readFile2(path, "utf8");
      }
      return filePromisesHash[path];
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
var import_path5, swallowError, CONFIG_PREFIX_SEPARATOR, loadSharedConfigFiles;
var init_loadSharedConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js"() {
    import_path5 = require("path");
    init_getConfigData();
    init_getConfigFilepath();
    init_getCredentialsFilepath();
    init_getHomeDir();
    init_parseIni();
    init_slurpFile();
    swallowError = () => ({});
    CONFIG_PREFIX_SEPARATOR = ".";
    loadSharedConfigFiles = async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = getHomeDir();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = (0, import_path5.join)(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = (0, import_path5.join)(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        slurpFile(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        slurpFile(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js
var getSsoSessionData;
var init_getSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getSsoSessionData = (data) => Object.entries(data).filter(([key]) => key.startsWith(IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {});
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var swallowError2, loadSsoSessionData;
var init_loadSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js"() {
    init_getConfigFilepath();
    init_getSsoSessionData();
    init_parseIni();
    init_slurpFile();
    swallowError2 = () => ({});
    loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2);
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var mergeConfigFiles;
var init_mergeConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js"() {
    mergeConfigFiles = (...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js
var parseKnownFiles;
var init_parseKnownFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js"() {
    init_loadSharedConfigFiles();
    init_mergeConfigFiles();
    parseKnownFiles = async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/types.js
var init_types5 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/types.js"() {
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/index.js
var init_dist_es27 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/index.js"() {
    init_getHomeDir();
    init_getProfileName();
    init_getSSOTokenFilepath();
    init_getSSOTokenFromFile();
    init_loadSharedConfigFiles();
    init_loadSsoSessionData();
    init_parseKnownFiles();
    init_types5();
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles;
var init_fromSharedConfigFiles = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js"() {
    init_dist_es21();
    init_dist_es27();
    init_getSelectorName();
    fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = getProfileName(init);
      const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e5) {
        throw new CredentialsProviderError(e5.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromStatic.js
var isFunction, fromStatic2;
var init_fromStatic2 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromStatic.js"() {
    init_dist_es21();
    isFunction = (func) => typeof func === "function";
    fromStatic2 = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue);
  }
});

// node_modules/@smithy/node-config-provider/dist-es/configLoader.js
var loadConfig;
var init_configLoader = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/configLoader.js"() {
    init_dist_es21();
    init_fromEnv();
    init_fromSharedConfigFiles();
    init_fromStatic2();
    loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue)));
  }
});

// node_modules/@smithy/node-config-provider/dist-es/index.js
var init_dist_es28 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/index.js"() {
    init_configLoader();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js
var ENV_ENDPOINT_URL, CONFIG_ENDPOINT_URL, getEndpointUrlConfig;
var init_getEndpointUrlConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js"() {
    init_dist_es27();
    ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    CONFIG_ENDPOINT_URL = "endpoint_url";
    getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env3) => {
        const serviceSuffixParts = serviceId.split(" ").map((w5) => w5.toUpperCase());
        const serviceEndpointUrl = env3[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env3[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config2) => {
        if (config2 && profile.services) {
          const servicesSection = config2[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w5) => w5.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      default: void 0
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js
var getEndpointFromConfig;
var init_getEndpointFromConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js"() {
    init_dist_es28();
    init_getEndpointUrlConfig();
    getEndpointFromConfig = async (serviceId) => loadConfig(getEndpointUrlConfig(serviceId))();
  }
});

// node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_dist_es29 = __esm({
  "node_modules/@smithy/querystring-parser/dist-es/index.js"() {
  }
});

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl;
var init_dist_es30 = __esm({
  "node_modules/@smithy/url-parser/dist-es/index.js"() {
    init_dist_es29();
    parseUrl = (url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
    init_dist_es30();
    toEndpointV1 = (endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return parseUrl(endpoint.url);
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions, resolveParams;
var init_getEndpointFromInstructions = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
    init_service_customizations();
    init_createConfigValueProvider();
    init_getEndpointFromConfig();
    init_toEndpointV1();
    getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    };
    resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
var init_adaptors = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
    init_getEndpointFromInstructions();
    init_toEndpointV1();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware;
var init_endpointMiddleware = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
    init_dist_es18();
    init_getEndpointFromInstructions();
    endpointMiddleware = ({ config: config2, instructions }) => {
      return (next, context) => async (args) => {
        const endpoint = await getEndpointFromInstructions(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config2 }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware;
var init_deserializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
    deserializerMiddleware = (options, deserializer) => (next) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          error.message += "\n  " + hint;
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
        }
        throw error;
      }
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware;
var init_serializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
    serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
      const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request2 = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request: request2
      });
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
function getSerdePlugin(config2, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config2, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config2, serializer), serializerMiddlewareOption);
    }
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_serdePlugin = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
    init_deserializerMiddleware();
    init_serializerMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/index.js
var init_dist_es31 = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/index.js"() {
    init_deserializerMiddleware();
    init_serdePlugin();
    init_serializerMiddleware();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions, getEndpointPlugin;
var init_getEndpointPlugin = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
    init_dist_es31();
    init_endpointMiddleware();
    endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
    getEndpointPlugin = (config2, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
          config: config2,
          instructions
        }), endpointMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig;
var init_resolveEndpointConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
    init_dist_es18();
    init_toEndpointV1();
    resolveEndpointConfig = (input) => {
      const tls = input.tls ?? true;
      const { endpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
      };
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
var init_types6 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
var init_dist_es32 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
    init_adaptors();
    init_endpointMiddleware();
    init_getEndpointPlugin();
    init_resolveEndpointConfig();
    init_types6();
  }
});

// node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE;
var init_config3 = __esm({
  "node_modules/@smithy/util-retry/dist-es/config.js"() {
    (function(RETRY_MODES2) {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
    })(RETRY_MODES || (RETRY_MODES = {}));
    DEFAULT_MAX_ATTEMPTS = 3;
    DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
  }
});

// node_modules/@smithy/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, NODEJS_TIMEOUT_ERROR_CODES2;
var init_constants5 = __esm({
  "node_modules/@smithy/service-error-classification/dist-es/constants.js"() {
    THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    NODEJS_TIMEOUT_ERROR_CODES2 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError, isThrottlingError, isTransientError, isServerError;
var init_dist_es33 = __esm({
  "node_modules/@smithy/service-error-classification/dist-es/index.js"() {
    init_constants5();
    isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
    isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
    isTransientError = (error) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES2.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
    isServerError = (error) => {
      if (error.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter;
var init_DefaultRateLimiter = __esm({
  "node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js"() {
    init_dist_es33();
    DefaultRateLimiter = class {
      constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (isThrottlingError(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t5 = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t5 * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, THROTTLING_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, RETRY_COST, TIMEOUT_RETRY_COST, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER;
var init_constants6 = __esm({
  "node_modules/@smithy/util-retry/dist-es/constants.js"() {
    DEFAULT_RETRY_DELAY_BASE = 100;
    MAXIMUM_RETRY_DELAY = 20 * 1e3;
    THROTTLING_RETRY_DELAY_BASE = 500;
    INITIAL_RETRY_TOKENS = 500;
    RETRY_COST = 5;
    TIMEOUT_RETRY_COST = 10;
    NO_RETRY_INCREMENT = 1;
    INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    REQUEST_HEADER = "amz-sdk-request";
  }
});

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy;
var init_defaultRetryBackoffStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js"() {
    init_constants6();
    getDefaultRetryBackoffStrategy = () => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      };
      const setDelayBase = (delay) => {
        delayBase = delay;
      };
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken;
var init_defaultRetryToken = __esm({
  "node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js"() {
    init_constants6();
    createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = () => retryCount;
      const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
      const getRetryCost = () => retryCost;
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy;
var init_StandardRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js"() {
    init_config3();
    init_constants6();
    init_defaultRetryBackoffStrategy();
    init_defaultRetryToken();
    StandardRetryStrategy = class {
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = RETRY_MODES.STANDARD;
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy;
var init_AdaptiveRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_config3();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    AdaptiveRetryStrategy = class {
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
var init_ConfiguredRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js"() {
    init_constants6();
    init_StandardRetryStrategy();
  }
});

// node_modules/@smithy/util-retry/dist-es/types.js
var init_types7 = __esm({
  "node_modules/@smithy/util-retry/dist-es/types.js"() {
  }
});

// node_modules/@smithy/util-retry/dist-es/index.js
var init_dist_es34 = __esm({
  "node_modules/@smithy/util-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy();
    init_ConfiguredRetryStrategy();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    init_config3();
    init_constants6();
    init_types7();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
var init_defaultRetryQuota = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js"() {
    init_dist_es34();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
var init_delayDecider = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/delayDecider.js"() {
    init_dist_es34();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
var init_retryDecider = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retryDecider.js"() {
    init_dist_es33();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError;
var init_util2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/util.js"() {
    asSdkError = (error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
var import_uuid;
var init_StandardRetryStrategy2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js"() {
    init_dist_es2();
    init_dist_es33();
    init_dist_es34();
    import_uuid = require("uuid");
    init_defaultRetryQuota();
    init_delayDecider();
    init_retryDecider();
    init_util2();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
var init_AdaptiveRetryStrategy2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_dist_es34();
    init_StandardRetryStrategy2();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
var ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, resolveRetryConfig, ENV_RETRY_MODE, CONFIG_RETRY_MODE, NODE_RETRY_MODE_CONFIG_OPTIONS;
var init_configurations2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/configurations.js"() {
    init_dist_es18();
    init_dist_es34();
    ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    CONFIG_MAX_ATTEMPTS = "max_attempts";
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => {
        const value = env3[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      default: DEFAULT_MAX_ATTEMPTS
    };
    resolveRetryConfig = (input) => {
      const { retryStrategy } = input;
      const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
      return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await normalizeProvider(input.retryMode)();
          if (retryMode === RETRY_MODES.ADAPTIVE) {
            return new AdaptiveRetryStrategy(maxAttempts);
          }
          return new StandardRetryStrategy(maxAttempts);
        }
      };
    };
    ENV_RETRY_MODE = "AWS_RETRY_MODE";
    CONFIG_RETRY_MODE = "retry_mode";
    NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => env3[ENV_RETRY_MODE],
      configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
      default: DEFAULT_RETRY_MODE
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
var init_omitRetryHeadersMiddleware = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js"() {
    init_dist_es2();
    init_dist_es34();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js
var import_stream5, isStreamingPayload;
var init_isStreamingPayload = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js"() {
    import_stream5 = require("stream");
    isStreamingPayload = (request2) => request2?.body instanceof import_stream5.Readable || typeof ReadableStream !== "undefined" && request2?.body instanceof ReadableStream;
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var import_uuid2, retryMiddleware, isRetryStrategyV2, getRetryErrorInfo, getRetryErrorType, retryMiddlewareOptions, getRetryPlugin, getRetryAfterHint;
var init_retryMiddleware = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js"() {
    init_dist_es2();
    init_dist_es33();
    init_dist_es17();
    init_dist_es34();
    import_uuid2 = require("uuid");
    init_isStreamingPayload();
    init_util2();
    retryMiddleware = (options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request: request2 } = args;
        const isRequest = HttpRequest.isInstance(request2);
        if (isRequest) {
          request2.headers[INVOCATION_ID_HEADER] = (0, import_uuid2.v4)();
        }
        while (true) {
          try {
            if (isRequest) {
              request2.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e5) {
            const retryErrorInfo = getRetryErrorInfo(e5);
            lastError = asSdkError(e5);
            if (isRequest && isStreamingPayload(request2)) {
              (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    };
    isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
    getRetryErrorInfo = (error) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = getRetryAfterHint(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    };
    getRetryErrorType = (error) => {
      if (isThrottlingError(error))
        return "THROTTLING";
      if (isTransientError(error))
        return "TRANSIENT";
      if (isServerError(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    };
    retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    getRetryPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }
    });
    getRetryAfterHint = (response) => {
      if (!HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/index.js
var init_dist_es35 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy2();
    init_StandardRetryStrategy2();
    init_configurations2();
    init_delayDecider();
    init_omitRetryHeadersMiddleware();
    init_retryDecider();
    init_retryMiddleware();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var warningEmitted2, emitWarningIfUnsupportedVersion2;
var init_emitWarningIfUnsupportedVersion2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    warningEmitted2 = false;
    emitWarningIfUnsupportedVersion2 = (version) => {
      if (version && !warningEmitted2 && parseInt(version.substring(1, version.indexOf("."))) < 18) {
        warningEmitted2 = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client3 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion2();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var getDateHeader2;
var init_getDateHeader = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    init_dist_es2();
    getDateHeader2 = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate2;
var init_getSkewCorrectedDate = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate2 = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed2;
var init_isClockSkewed = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed2 = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate2(systemClockOffset).getTime() - clockTime) >= 3e5;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset2;
var init_getUpdatedSystemClockOffset = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset2 = (clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed2(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    init_dist_es2();
    init_utils2();
    throwSigningPropertyError = (name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    };
    validateSigningProperties = async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config2 = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config2.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingName = signingProperties?.signingName;
      return {
        config: config2,
        signer,
        signingRegion,
        signingName
      };
    };
    AwsSdkSigV4Signer = class {
      async sign(httpRequest2, identity, signingProperties) {
        if (!HttpRequest.isInstance(httpRequest2)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config: config2, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
        const signedRequest = await signer.sign(httpRequest2, {
          signingDate: getSkewCorrectedDate2(config2.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader2(error.$response);
          if (serverTime) {
            const config2 = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config2.systemClockOffset;
            config2.systemClockOffset = getUpdatedSystemClockOffset2(serverTime, config2.systemClockOffset);
            const clockSkewCorrected = config2.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader2(httpResponse);
        if (dateHeader) {
          const config2 = throwSigningPropertyError("config", signingProperties.config);
          config2.systemClockOffset = getUpdatedSystemClockOffset2(dateHeader, config2.systemClockOffset);
        }
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map2 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map2.set(scheme.schemeId, scheme);
  }
  return map2;
}
var httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    init_dist_es();
    init_dist_es18();
    httpAuthSchemeMiddleware = (config2, mwOptions) => (next, context) => async (args) => {
      const options = config2.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config2, context, args.input));
      const authSchemes = convertHttpAuthSchemesToMap(config2.httpAuthSchemes);
      const smithyContext = getSmithyContext(context);
      const failureReasons = [];
      for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config2));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config2, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_dist_es32();
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: endpointMiddlewareOptions.name
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = (config2, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config2, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions;
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    init_dist_es31();
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    init_dist_es2();
    init_dist_es();
    init_dist_es18();
    defaultErrorHandler = (signingProperties) => (error) => {
      throw error;
    };
    defaultSuccessHandler = (httpResponse, signingProperties) => {
    };
    httpSigningMiddleware = (config2) => (next, context) => async (args) => {
      if (!HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = getSmithyContext(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_dist_es35();
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: retryMiddlewareOptions.name
    };
    getHttpSigningPlugin = (config2) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config2), httpSigningMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      constructor(config2) {
        this.authSchemes = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(config2)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var init_httpApiKeyAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    init_dist_es();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var init_httpBearerAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      async sign(httpRequest2, identity, signingProperties) {
        return httpRequest2;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
    memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/@smithy/core/dist-es/getSmithyContext.js
var init_getSmithyContext2 = __esm({
  "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    init_dist_es();
  }
});

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2;
var init_normalizeProvider2 = __esm({
  "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider2 = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var RequestBuilder;
var init_requestBuilder = __esm({
  "node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
    init_dist_es2();
    init_dist_es17();
    RequestBuilder = class {
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config2, input, ...additionalArguments) {
    let token = config2.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input[inputTokenName] = token;
      if (pageSizeTokenName) {
        input[pageSizeTokenName] = input[pageSizeTokenName] ?? config2.pageSize;
      }
      if (config2.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config2.client, input, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config2.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  };
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = async (CommandCtor, client, input, ...args) => {
      return await client.send(new CommandCtor(input), ...args);
    };
    get = (fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    };
  }
});

// node_modules/@smithy/core/dist-es/index.js
var init_dist_es36 = __esm({
  "node_modules/@smithy/core/dist-es/index.js"() {
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_util_identity_and_auth();
    init_getSmithyContext2();
    init_normalizeProvider2();
    init_requestBuilder();
    init_createPaginator();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_dist_es36();
    init_dist_es19();
    resolveAwsSdkSigV4Config = (config2) => {
      let normalizedCreds;
      if (config2.credentials) {
        normalizedCreds = memoizeIdentityProvider(config2.credentials, isIdentityExpired, doesIdentityRequireRefresh);
      }
      if (!normalizedCreds) {
        if (config2.credentialDefaultProvider) {
          normalizedCreds = normalizeProvider2(config2.credentialDefaultProvider(Object.assign({}, config2, {
            parentClientConfig: config2
          })));
        } else {
          normalizedCreds = async () => {
            throw new Error("`credentials` is missing");
          };
        }
      }
      const { signingEscapePath = true, systemClockOffset = config2.systemClockOffset || 0, sha256 } = config2;
      let signer;
      if (config2.signer) {
        signer = normalizeProvider2(config2.signer);
      } else if (config2.regionInfoProvider) {
        signer = () => normalizeProvider2(config2.region)().then(async (region) => [
          await config2.regionInfoProvider(region, {
            useFipsEndpoint: await config2.useFipsEndpoint(),
            useDualstackEndpoint: await config2.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config2.signingRegion = config2.signingRegion || signingRegion || region;
          config2.signingName = config2.signingName || signingService || config2.serviceId;
          const params = {
            ...config2,
            credentials: normalizedCreds,
            region: config2.signingRegion,
            service: config2.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config2.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        });
      } else {
        signer = async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config2.signingName || config2.defaultSigningName,
            signingRegion: await normalizeProvider2(config2.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config2.signingRegion = config2.signingRegion || signingRegion;
          config2.signingName = config2.signingName || signingService || config2.serviceId;
          const params = {
            ...config2,
            credentials: normalizedCreds,
            region: config2.signingRegion,
            service: config2.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config2.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        };
      }
      return {
        ...config2,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer
      };
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_resolveAwsSdkSigV4Config();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var init_coercing_serializers = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var init_awsExpectUnion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    init_dist_es17();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString;
var init_common = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    init_dist_es17();
    collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e5) {
          if (e5?.name === "SyntaxError") {
            Object.defineProperty(e5, "$responseBodyText", {
              value: encoded
            });
          }
          throw e5;
        }
      }
      return {};
    });
    parseJsonErrorBody = async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    loadRestJsonErrorCode = (output, data) => {
      const findKey = (object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
      }
      if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
      }
    };
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v6) {
      return typeof v6 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a5, arrayMode) {
      if (a5) {
        const keys = Object.keys(a5);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          if (arrayMode === "strict") {
            target[keys[i5]] = [a5[keys[i5]]];
          } else {
            target[keys[i5]] = a5[keys[i5]];
          }
        }
      }
    };
    exports.getValue = function(v6) {
      if (exports.isExist(v6)) {
        return v6;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<" && xmlData[i5 + 1] === "?") {
          i5 += 2;
          i5 = readPI(xmlData, i5);
          if (i5.err)
            return i5;
        } else if (xmlData[i5] === "<") {
          let tagStartPos = i5;
          i5++;
          if (xmlData[i5] === "!") {
            i5 = readCommentAndCDATA(xmlData, i5);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i5] === "/") {
              closingTag = true;
              i5++;
            }
            let tagName = "";
            for (; i5 < xmlData.length && xmlData[i5] !== ">" && xmlData[i5] !== " " && xmlData[i5] !== "	" && xmlData[i5] !== "\n" && xmlData[i5] !== "\r"; i5++) {
              tagName += xmlData[i5];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i5--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i5));
            }
            const result = readAttributeStr(xmlData, i5);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i5));
            }
            let attrStr = result.value;
            i5 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i5 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i5));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i5 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i5));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i5++; i5 < xmlData.length; i5++) {
              if (xmlData[i5] === "<") {
                if (xmlData[i5 + 1] === "!") {
                  i5++;
                  i5 = readCommentAndCDATA(xmlData, i5);
                  continue;
                } else if (xmlData[i5 + 1] === "?") {
                  i5 = readPI(xmlData, ++i5);
                  if (i5.err)
                    return i5;
                } else {
                  break;
                }
              } else if (xmlData[i5] === "&") {
                const afterAmp = validateAmpersand(xmlData, i5);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i5));
                i5 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i5])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i5));
                }
              }
            }
            if (xmlData[i5] === "<") {
              i5--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i5])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i5] + "' is not expected.", getLineNumberForPosition(xmlData, i5));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t5) => t5.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i5) {
      const start = i5;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] == "?" || xmlData[i5] == " ") {
          const tagname = xmlData.substr(start, i5 - start);
          if (i5 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i5));
          } else if (xmlData[i5] == "?" && xmlData[i5 + 1] == ">") {
            i5++;
            break;
          } else {
            continue;
          }
        }
      }
      return i5;
    }
    function readCommentAndCDATA(xmlData, i5) {
      if (xmlData.length > i5 + 5 && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === "-") {
        for (i5 += 3; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "-" && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      } else if (xmlData.length > i5 + 8 && xmlData[i5 + 1] === "D" && xmlData[i5 + 2] === "O" && xmlData[i5 + 3] === "C" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "Y" && xmlData[i5 + 6] === "P" && xmlData[i5 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i5] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i5 + 9 && xmlData[i5 + 1] === "[" && xmlData[i5 + 2] === "C" && xmlData[i5 + 3] === "D" && xmlData[i5 + 4] === "A" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "A" && xmlData[i5 + 7] === "[") {
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "]" && xmlData[i5 + 1] === "]" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      }
      return i5;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i5) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === doubleQuote || xmlData[i5] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i5];
          } else if (startChar !== xmlData[i5]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i5] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i5];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i5,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i5 = 0; i5 < matches.length; i5++) {
        if (matches[i5][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' has no space in starting.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] !== void 0 && matches[i5][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' is without value.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i5][2] + "' is not allowed.", getPositionFromMatch(matches[i5]));
        }
        const attrName = matches[i5][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i5]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i5]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i5) {
      let re = /\d/;
      if (xmlData[i5] === "x") {
        i5++;
        re = /[\da-fA-F]/;
      }
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === ";")
          return i5;
        if (!xmlData[i5].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i5) {
      i5++;
      if (xmlData[i5] === ";")
        return -1;
      if (xmlData[i5] === "#") {
        i5++;
        return validateNumberAmpersand(xmlData, i5);
      }
      let count = 0;
      for (; i5 < xmlData.length; i5++, count++) {
        if (xmlData[i5].match(/\w/) && count < 20)
          continue;
        if (xmlData[i5] === ";")
          break;
        return -1;
      }
      return i5;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module2) {
    "use strict";
    var XmlNode2 = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__")
          key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__")
          node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module2.exports = XmlNode2;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module2) {
    var util = require_util();
    function readDocType(xmlData, i5) {
      const entities = {};
      if (xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "C" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "Y" && xmlData[i5 + 7] === "P" && xmlData[i5 + 8] === "E") {
        i5 = i5 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i5)) {
              i5 += 7;
              [entityName, val, i5] = readEntityExp(xmlData, i5 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i5))
              i5 += 8;
            else if (hasBody && isAttlist(xmlData, i5))
              i5 += 8;
            else if (hasBody && isNotation(xmlData, i5))
              i5 += 9;
            else if (isComment)
              comment = true;
            else
              throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i5] === ">") {
            if (comment) {
              if (xmlData[i5 - 1] === "-" && xmlData[i5 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i5] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i5];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i5 };
    }
    function readEntityExp(xmlData, i5) {
      let entityName2 = "";
      for (; i5 < xmlData.length && (xmlData[i5] !== "'" && xmlData[i5] !== '"'); i5++) {
        entityName2 += xmlData[i5];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1)
        throw new Error("External entites are not supported");
      const startChar = xmlData[i5++];
      let val2 = "";
      for (; i5 < xmlData.length && xmlData[i5] !== startChar; i5++) {
        val2 += xmlData[i5];
      }
      return [entityName2, val2, i5];
    }
    function isComment(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "-" && xmlData[i5 + 3] === "-")
        return true;
      return false;
    }
    function isEntity(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "N" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "I" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "Y")
        return true;
      return false;
    }
    function isElement(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "L" && xmlData[i5 + 4] === "E" && xmlData[i5 + 5] === "M" && xmlData[i5 + 6] === "E" && xmlData[i5 + 7] === "N" && xmlData[i5 + 8] === "T")
        return true;
      return false;
    }
    function isAttlist(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "A" && xmlData[i5 + 3] === "T" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "L" && xmlData[i5 + 6] === "I" && xmlData[i5 + 7] === "S" && xmlData[i5 + 8] === "T")
        return true;
      return false;
    }
    function isNotation(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "N" && xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "A" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "I" && xmlData[i5 + 8] === "O" && xmlData[i5 + 9] === "N")
        return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module2.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    module2.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module2) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i5 = 0; i5 < entKeys.length; i5++) {
        const ent = entKeys[i5];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities)
            val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i5 = 0; i5 < len; i5++) {
          const attrName = this.resolveNameSpace(matches[i5][1]);
          let oldVal = matches[i5][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__")
              aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        const ch2 = xmlData[i5];
        if (ch2 === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            let tagData = readTagExp(xmlData, i5, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i5 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i5 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i5 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i5 = endIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i5);
            this.docTypeEntities = result.entities;
            i5 = result.i;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i5 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0)
                val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i5 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i5, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i5 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i5 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${tagName}`);
                i5 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i5 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i5];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i5, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i5; index < xmlData.length; index++) {
        let ch2 = xmlData[index];
        if (attrBoundary) {
          if (ch2 === attrBoundary)
            attrBoundary = "";
        } else if (ch2 === '"' || ch2 === "'") {
          attrBoundary = ch2;
        } else if (ch2 === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch2 === "	") {
          ch2 = " ";
        }
        tagExp += ch2;
      }
    }
    function findClosingIndex(xmlData, str, i5, errMsg) {
      const closingIndex = xmlData.indexOf(str, i5);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i5, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i5 + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    function readStopNodeData(xmlData, tagName, i5) {
      const startIndex = i5;
      let openTagCount = 1;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i5),
                  i: closeIndex
                };
              }
            }
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i5 + 1, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i5 + 3, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "StopNode is not closed.") - 2;
            i5 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i5, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i5 = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module2.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0)
            text = tagObj[property];
          else
            text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode)
              val2[options.textNodeName] = "";
            else
              val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0)
          compressedObj[options.textNodeName] = text;
      } else if (text !== void 0)
        compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@")
          return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          const atrrName = keys[i5];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module2.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@")
          return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i5 = 0; i5 < options.entities.length; i5++) {
          const entity = options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module2.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a5) {
        return a5;
      },
      attributeValueProcessor: function(attrName, a5) {
        return a5;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?")
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j5 = 0; j5 < arrLen; j5++) {
            const item = jObj[key][j5];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L2 = Ks.length;
            for (let j5 = 0; j5 < L2; j5++) {
              attrStr += this.buildAttrPairStr(Ks[j5], "" + jObj[key][Ks[j5]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode)
          closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i5 = 0; i5 < this.options.entities.length; i5++) {
          const entity = this.options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module2.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_fast_xml_parser, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    init_dist_es17();
    import_fast_xml_parser = __toESM(require_fxp());
    init_common();
    parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: (_2, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e5) {
          if (e5 && typeof e5 === "object") {
            Object.defineProperty(e5, "$responseBodyText", {
              value: encoded
            });
          }
          throw e5;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
      }
      return {};
    });
    parseXmlErrorBody = async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    loadRestXmlErrorCode = (output, data) => {
      if (data?.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (data?.Code !== void 0) {
        return data.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_coercing_serializers();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_parseXmlBody();
  }
});

// node_modules/@aws-sdk/core/dist-es/index.js
var init_dist_es37 = __esm({
  "node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client3();
    init_httpAuthSchemes2();
    init_protocols();
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var ENV_KEY, ENV_SECRET, ENV_SESSION, ENV_EXPIRATION, ENV_CREDENTIAL_SCOPE, fromEnv2;
var init_fromEnv2 = __esm({
  "node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js"() {
    init_dist_es21();
    ENV_KEY = "AWS_ACCESS_KEY_ID";
    ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    ENV_SESSION = "AWS_SESSION_TOKEN";
    ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
    fromEnv2 = (init) => async () => {
      init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const accessKeyId = process.env[ENV_KEY];
      const secretAccessKey = process.env[ENV_SECRET];
      const sessionToken = process.env[ENV_SESSION];
      const expiry = process.env[ENV_EXPIRATION];
      const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
      if (accessKeyId && secretAccessKey) {
        return {
          accessKeyId,
          secretAccessKey,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) },
          ...credentialScope && { credentialScope }
        };
      }
      throw new CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  ENV_CREDENTIAL_SCOPE: () => ENV_CREDENTIAL_SCOPE,
  ENV_EXPIRATION: () => ENV_EXPIRATION,
  ENV_KEY: () => ENV_KEY,
  ENV_SECRET: () => ENV_SECRET,
  ENV_SESSION: () => ENV_SESSION,
  fromEnv: () => fromEnv2
});
var init_dist_es38 = __esm({
  "node_modules/@aws-sdk/credential-provider-env/dist-es/index.js"() {
    init_fromEnv2();
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = (0, import_http2.request)({
      method: "GET",
      ...options,
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(import_buffer2.Buffer.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
var import_buffer2, import_http2;
var init_httpRequest2 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js"() {
    init_dist_es21();
    import_buffer2 = require("buffer");
    import_http2 = require("http");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
var isImdsCredentials, fromImdsCredentials;
var init_ImdsCredentials = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js"() {
    isImdsCredentials = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string";
    fromImdsCredentials = (creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration)
    });
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
var DEFAULT_TIMEOUT, DEFAULT_MAX_RETRIES, providerConfigFromInit;
var init_RemoteProviderInit = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js"() {
    DEFAULT_TIMEOUT = 1e3;
    DEFAULT_MAX_RETRIES = 0;
    providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout });
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
var retry;
var init_retry3 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js"() {
    retry = (toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i5 = 0; i5 < maxRetries; i5++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js
var import_url, ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, ENV_CMDS_AUTH_TOKEN, fromContainerMetadata, requestFromEcsImds, CMDS_IP, GREENGRASS_HOSTS, GREENGRASS_PROTOCOLS, getCmdsUri;
var init_fromContainerMetadata = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js"() {
    init_dist_es21();
    import_url = require("url");
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromContainerMetadata = (init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri({ logger: init.logger });
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: init.logger
          });
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    };
    requestFromEcsImds = async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout
      });
      return buffer.toString();
    };
    CMDS_IP = "169.254.170.2";
    GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    getCmdsUri = async ({ logger: logger3 }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0, import_url.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: false,
            logger: logger3
          });
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: false,
            logger: logger3
          });
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, {
        tryNextLink: false,
        logger: logger3
      });
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js
var InstanceMetadataV1FallbackError;
var init_InstanceMetadataV1FallbackError = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js"() {
    init_dist_es21();
    InstanceMetadataV1FallbackError = class extends CredentialsProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, InstanceMetadataV1FallbackError.prototype);
      }
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
var init_Endpoint = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js"() {
    (function(Endpoint2) {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
    })(Endpoint || (Endpoint = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
var ENV_ENDPOINT_NAME, CONFIG_ENDPOINT_NAME, ENDPOINT_CONFIG_OPTIONS;
var init_EndpointConfigOptions = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js"() {
    ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => env3[ENV_ENDPOINT_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
      default: void 0
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
var init_EndpointMode = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js"() {
    (function(EndpointMode2) {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
    })(EndpointMode || (EndpointMode = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js
var ENV_ENDPOINT_MODE_NAME, CONFIG_ENDPOINT_MODE_NAME, ENDPOINT_MODE_CONFIG_OPTIONS;
var init_EndpointModeConfigOptions = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js"() {
    init_EndpointMode();
    ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => env3[ENV_ENDPOINT_MODE_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
      default: EndpointMode.IPv4
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js
var getInstanceMetadataEndpoint, getFromEndpointConfig, getFromEndpointModeConfig;
var init_getInstanceMetadataEndpoint = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js"() {
    init_dist_es28();
    init_dist_es30();
    init_Endpoint();
    init_EndpointConfigOptions();
    init_EndpointMode();
    init_EndpointModeConfigOptions();
    getInstanceMetadataEndpoint = async () => parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig());
    getFromEndpointConfig = async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)();
    getFromEndpointModeConfig = async () => {
      const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case EndpointMode.IPv4:
          return Endpoint.IPv4;
        case EndpointMode.IPv6:
          return Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS, STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS, STATIC_STABILITY_DOC_URL, getExtendedInstanceMetadataCredentials;
var init_getExtendedInstanceMetadataCredentials = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js"() {
    STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    getExtendedInstanceMetadataCredentials = (credentials, logger3) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger3.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL);
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js
var staticStabilityProvider;
var init_staticStabilityProvider = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js"() {
    init_getExtendedInstanceMetadataCredentials();
    staticStabilityProvider = (provider, options = {}) => {
      const logger3 = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger3);
          }
        } catch (e5) {
          if (pastCredentials) {
            logger3.warn("Credential renew failed: ", e5);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger3);
          } else {
            throw e5;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js
var IMDS_PATH, IMDS_TOKEN_PATH, AWS_EC2_METADATA_V1_DISABLED, PROFILE_AWS_EC2_METADATA_V1_DISABLED, X_AWS_EC2_METADATA_TOKEN, fromInstanceMetadata, getInstanceMetadataProvider, getMetadataToken, getProfile, getCredentialsFromProfile;
var init_fromInstanceMetadata = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js"() {
    init_dist_es28();
    init_dist_es21();
    init_InstanceMetadataV1FallbackError();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    init_getInstanceMetadataEndpoint();
    init_staticStabilityProvider();
    IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    IMDS_TOKEN_PATH = "/latest/api/token";
    AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger });
    getInstanceMetadataProvider = (init = {}) => {
      let disableFetchToken = false;
      const { logger: logger3, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials2 = async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await loadConfig({
            environmentVariableSelector: (env3) => {
              const envValue = env3[AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
              if (envValue === void 0) {
                throw new CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`, { logger: init.logger });
              }
              return fallbackBlockedFromProcessEnv;
            },
            configFileSelector: (profile2) => {
              const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
              return fallbackBlockedFromProfile;
            },
            default: false
          }, {
            profile
          })();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      };
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials2(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if (error?.statusCode === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials2(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials2(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    };
    getMetadataToken = async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    });
    getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
    getCredentialsFromProfile = async (profile, options, init) => {
      const credentialsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile
      })).toString());
      if (!isImdsCredentials(credentialsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: init.logger
        });
      }
      return fromImdsCredentials(credentialsResponse);
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/types.js
var init_types8 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/types.js"() {
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
  DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
  ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
  ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
  Endpoint: () => Endpoint,
  fromContainerMetadata: () => fromContainerMetadata,
  fromInstanceMetadata: () => fromInstanceMetadata,
  getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
  httpRequest: () => httpRequest,
  providerConfigFromInit: () => providerConfigFromInit
});
var init_dist_es39 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/index.js"() {
    init_fromContainerMetadata();
    init_fromInstanceMetadata();
    init_RemoteProviderInit();
    init_types8();
    init_httpRequest2();
    init_getInstanceMetadataEndpoint();
    init_Endpoint();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js
var ECS_CONTAINER_HOST, EKS_CONTAINER_HOST_IPv4, EKS_CONTAINER_HOST_IPv6, checkUrl;
var init_checkUrl = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js"() {
    init_dist_es21();
    ECS_CONTAINER_HOST = "169.254.170.2";
    EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    checkUrl = (url, logger3) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger: logger3 });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js
function createGetRequest(url) {
  return new HttpRequest({
    protocol: url.protocol,
    hostname: url.hostname,
    port: Number(url.port),
    path: url.pathname,
    query: Array.from(url.searchParams.entries()).reduce((acc, [k5, v6]) => {
      acc[k5] = v6;
      return acc;
    }, {}),
    fragment: url.hash
  });
}
async function getCredentials(response, logger3) {
  const stream = sdkStreamMixin2(response.body);
  const str = await stream.transformToString();
  if (response.statusCode === 200) {
    const parsed = JSON.parse(str);
    if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
      throw new CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: logger3 });
    }
    return {
      accessKeyId: parsed.AccessKeyId,
      secretAccessKey: parsed.SecretAccessKey,
      sessionToken: parsed.Token,
      expiration: parseRfc3339DateTime(parsed.Expiration)
    };
  }
  if (response.statusCode >= 400 && response.statusCode < 500) {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(str);
    } catch (e5) {
    }
    throw Object.assign(new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger3 }), {
      Code: parsedBody.Code,
      Message: parsedBody.Message
    });
  }
  throw new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger3 });
}
var init_requestHelpers = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js"() {
    init_dist_es21();
    init_dist_es2();
    init_dist_es17();
    init_dist_es16();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
var retryWrapper;
var init_retry_wrapper = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js"() {
    retryWrapper = (toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i5 = 0; i5 < maxRetries; ++i5) {
          try {
            return await toRetry();
          } catch (e5) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js
var import_promises, AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, DEFAULT_LINK_LOCAL_HOST, AWS_CONTAINER_CREDENTIALS_FULL_URI, AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE, AWS_CONTAINER_AUTHORIZATION_TOKEN, fromHttp;
var init_fromHttp = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js"() {
    init_dist_es13();
    init_dist_es21();
    import_promises = __toESM(require("fs/promises"));
    init_checkUrl();
    init_requestHelpers();
    init_retry_wrapper();
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromHttp = (options = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger ? console.warn : options.logger.warn;
      if (relative && full) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
      }
      const url = new URL(host);
      checkUrl(url, options.logger);
      const requestHandler = new NodeHttpHandler({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return retryWrapper(async () => {
        const request2 = createGetRequest(url);
        if (token) {
          request2.headers.Authorization = token;
        } else if (tokenFile) {
          request2.headers.Authorization = (await import_promises.default.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request2);
          return getCredentials(result.response);
        } catch (e5) {
          throw new CredentialsProviderError(String(e5), { logger: options.logger });
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/index.js
var dist_es_exports3 = {};
__export(dist_es_exports3, {
  fromHttp: () => fromHttp
});
var init_dist_es40 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/index.js"() {
    init_fromHttp();
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
var ENV_IMDS_DISABLED, remoteProvider;
var init_remoteProvider = __esm({
  "node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js"() {
    init_dist_es21();
    ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    remoteProvider = async (init) => {
      const { ENV_CMDS_FULL_URI: ENV_CMDS_FULL_URI2, ENV_CMDS_RELATIVE_URI: ENV_CMDS_RELATIVE_URI2, fromContainerMetadata: fromContainerMetadata2, fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
      if (process.env[ENV_CMDS_RELATIVE_URI2] || process.env[ENV_CMDS_FULL_URI2]) {
        init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es40(), dist_es_exports3));
        return chain(fromHttp2(init), fromContainerMetadata2(init));
      }
      if (process.env[ENV_IMDS_DISABLED]) {
        return async () => {
          throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
        };
      }
      init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
      return fromInstanceMetadata2(init);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile;
var init_isSsoProfile = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js"() {
    isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS, REFRESH_MESSAGE;
var init_constants7 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/constants.js"() {
    EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
      region: authParameters.region
    },
    propertiesExtractor: (config2, context) => ({
      signingProperties: {
        config: config2,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es37();
    init_dist_es18();
    defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config2, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config2.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "RegisterClient": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "StartDeviceAuthorization": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    resolveHttpAuthSchemeConfig = (config2) => {
      const config_0 = resolveAwsSdkSigV4Config(config2);
      return {
        ...config_0
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2, commonParams2;
var init_EndpointParameters = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters2 = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      };
    };
    commonParams2 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/package.json
var package_default2;
var init_package = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/package.json"() {
    package_default2 = {
      name: "@aws-sdk/client-sso-oidc",
      description: "AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",
      version: "3.614.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso-oidc",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso-oidc"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.614.0",
        "@aws-sdk/credential-provider-node": "3.614.0",
        "@aws-sdk/middleware-host-header": "3.609.0",
        "@aws-sdk/middleware-logger": "3.609.0",
        "@aws-sdk/middleware-recursion-detection": "3.609.0",
        "@aws-sdk/middleware-user-agent": "3.614.0",
        "@aws-sdk/region-config-resolver": "3.614.0",
        "@aws-sdk/types": "3.609.0",
        "@aws-sdk/util-endpoints": "3.614.0",
        "@aws-sdk/util-user-agent-browser": "3.609.0",
        "@aws-sdk/util-user-agent-node": "3.614.0",
        "@smithy/config-resolver": "^3.0.5",
        "@smithy/core": "^2.2.6",
        "@smithy/fetch-http-handler": "^3.2.1",
        "@smithy/hash-node": "^3.0.3",
        "@smithy/invalid-dependency": "^3.0.3",
        "@smithy/middleware-content-length": "^3.0.3",
        "@smithy/middleware-endpoint": "^3.0.5",
        "@smithy/middleware-retry": "^3.0.9",
        "@smithy/middleware-serde": "^3.0.3",
        "@smithy/middleware-stack": "^3.0.3",
        "@smithy/node-config-provider": "^3.1.4",
        "@smithy/node-http-handler": "^3.1.2",
        "@smithy/protocol-http": "^4.0.3",
        "@smithy/smithy-client": "^3.1.7",
        "@smithy/types": "^3.3.0",
        "@smithy/url-parser": "^3.0.3",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.9",
        "@smithy/util-defaults-mode-node": "^3.0.9",
        "@smithy/util-endpoints": "^2.0.5",
        "@smithy/util-middleware": "^3.0.3",
        "@smithy/util-retry": "^3.0.3",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      peerDependencies: {
        "@aws-sdk/client-sts": "^3.614.0"
      },
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso-oidc"
      }
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
var crtAvailability;
var init_crt_availability = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js"() {
    crtAvailability = {
      isCrtAvailable: false
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var isCrtAvailable;
var init_is_crt_available = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js"() {
    init_crt_availability();
    isCrtAvailable = () => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
var import_os2, import_process, UA_APP_ID_ENV_NAME, UA_APP_ID_INI_NAME, defaultUserAgent;
var init_dist_es41 = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js"() {
    init_dist_es28();
    import_os2 = require("os");
    import_process = require("process");
    init_is_crt_available();
    init_crt_availability();
    UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    UA_APP_ID_INI_NAME = "sdk-ua-app-id";
    defaultUserAgent = ({ serviceId, clientVersion }) => {
      const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${(0, import_os2.platform)()}`, (0, import_os2.release)()],
        ["lang/js"],
        ["md/nodejs", `${import_process.versions.node}`]
      ];
      const crtAvailable = isCrtAvailable();
      if (crtAvailable) {
        sections.push(crtAvailable);
      }
      if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
      }
      if (import_process.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${import_process.env.AWS_EXECUTION_ENV}`]);
      }
      const appIdPromise = loadConfig({
        environmentVariableSelector: (env3) => env3[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: void 0
      })();
      let resolvedUserAgent = void 0;
      return async () => {
        if (!resolvedUserAgent) {
          const appId = await appIdPromise;
          resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
      };
    };
  }
});

// node_modules/@smithy/hash-node/dist-es/index.js
function castSourceData(toCast, encoding) {
  if (import_buffer3.Buffer.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return fromArrayBuffer(toCast);
}
var import_buffer3, import_crypto2, Hash;
var init_dist_es42 = __esm({
  "node_modules/@smithy/hash-node/dist-es/index.js"() {
    init_dist_es8();
    init_dist_es9();
    import_buffer3 = require("buffer");
    import_crypto2 = require("crypto");
    Hash = class {
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? (0, import_crypto2.createHmac)(this.algorithmIdentifier, castSourceData(this.secret)) : (0, import_crypto2.createHash)(this.algorithmIdentifier);
      }
    };
  }
});

// node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js
var import_fs3, calculateBodyLength;
var init_calculateBodyLength = __esm({
  "node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js"() {
    import_fs3 = require("fs");
    calculateBodyLength = (body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, import_fs3.lstatSync)(body.path).size;
      } else if (typeof body.fd === "number") {
        return (0, import_fs3.fstatSync)(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    };
  }
});

// node_modules/@smithy/util-body-length-node/dist-es/index.js
var init_dist_es43 = __esm({
  "node_modules/@smithy/util-body-length-node/dist-es/index.js"() {
    init_calculateBodyLength();
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js"() {
    u = "required";
    v = "fn";
    w = "argv";
    x = "ref";
    a = true;
    b = "isSet";
    c = "booleanEquals";
    d = "error";
    e = "endpoint";
    f = "tree";
    g = "PartitionResult";
    h = "getAttr";
    i = { [u]: false, "type": "String" };
    j = { [u]: true, "default": false, "type": "Boolean" };
    k = { [x]: "Endpoint" };
    l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    n = {};
    o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    p = { [x]: g };
    q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    r = [l];
    s = [m];
    t = [{ [x]: "Region" }];
    _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    ruleSet = _data;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver;
var init_endpointResolver = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es23();
    init_dist_es22();
    init_ruleset();
    defaultEndpointResolver = (endpointParams, context = {}) => {
      return resolveEndpoint(ruleSet, {
        endpointParams,
        logger: context.logger
      });
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js
var getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js"() {
    init_dist_es37();
    init_dist_es36();
    init_dist_es17();
    init_dist_es30();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    getRuntimeConfig = (config2) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config2?.base64Decoder ?? fromBase64,
        base64Encoder: config2?.base64Encoder ?? toBase64,
        disableHostPrefix: config2?.disableHostPrefix ?? false,
        endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver,
        extensions: config2?.extensions ?? [],
        httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config2?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config2?.logger ?? new NoOpLogger(),
        serviceId: config2?.serviceId ?? "SSO OIDC",
        urlParser: config2?.urlParser ?? parseUrl,
        utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config2?.utf8Encoder ?? toUtf8
      };
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
var AWS_EXECUTION_ENV, AWS_REGION_ENV, AWS_DEFAULT_REGION_ENV, ENV_IMDS_DISABLED2, DEFAULTS_MODE_OPTIONS, IMDS_REGION_PATH;
var init_constants8 = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js"() {
    AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    AWS_REGION_ENV = "AWS_REGION";
    AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    ENV_IMDS_DISABLED2 = "AWS_EC2_METADATA_DISABLED";
    DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    IMDS_REGION_PATH = "/latest/meta-data/placement/region";
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
var AWS_DEFAULTS_MODE_ENV, AWS_DEFAULTS_MODE_CONFIG, NODE_DEFAULTS_MODE_CONFIG_OPTIONS;
var init_defaultsModeConfig = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js"() {
    AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env3) => {
        return env3[AWS_DEFAULTS_MODE_ENV];
      },
      configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      },
      default: "legacy"
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig, resolveNodeDefaultsModeAuto, inferPhysicalRegion;
var init_resolveDefaultsModeConfig = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js"() {
    init_dist_es25();
    init_dist_es28();
    init_dist_es21();
    init_constants8();
    init_defaultsModeConfig();
    resolveDefaultsModeConfig = ({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => memoize(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode?.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
      }
    });
    resolveNodeDefaultsModeAuto = async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    };
    inferPhysicalRegion = async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED2]) {
        try {
          const { getInstanceMetadataEndpoint: getInstanceMetadataEndpoint2, httpRequest: httpRequest2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
          const endpoint = await getInstanceMetadataEndpoint2();
          return (await httpRequest2({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e5) {
        }
      }
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/index.js
var init_dist_es44 = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/index.js"() {
    init_resolveDefaultsModeConfig();
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js
var getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js"() {
    init_package();
    init_dist_es37();
    init_dist_es54();
    init_dist_es41();
    init_dist_es25();
    init_dist_es42();
    init_dist_es35();
    init_dist_es28();
    init_dist_es13();
    init_dist_es43();
    init_dist_es34();
    init_runtimeConfig_shared();
    init_dist_es17();
    init_dist_es44();
    init_dist_es17();
    getRuntimeConfig2 = (config2) => {
      emitWarningIfUnsupportedVersion(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config2);
      const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig(config2);
      emitWarningIfUnsupportedVersion2(process.version);
      return {
        ...clientSharedValues,
        ...config2,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config2?.credentialDefaultProvider ?? defaultProvider,
        defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        maxAttempts: config2?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config2?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: NodeHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
        retryMode: config2?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
        }),
        sha256: config2?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config2?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config2?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config2?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
var getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration;
var init_extensions4 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js"() {
    getAwsRegionExtensionConfiguration = (runtimeConfig) => {
      let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === void 0) {
          throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
          return region;
        }
        return region();
      };
      return {
        setRegion(region) {
          runtimeConfigRegion = region;
        },
        region() {
          return runtimeConfigRegion;
        }
      };
    };
    resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    };
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
var init_config4 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js"() {
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
var init_isFipsRegion2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
var init_getRealRegion2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion2();
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var init_resolveRegionConfig2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_getRealRegion2();
    init_isFipsRegion2();
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
var init_regionConfig2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js"() {
    init_config4();
    init_resolveRegionConfig2();
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
var init_dist_es45 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/index.js"() {
    init_extensions4();
    init_regionConfig2();
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig = (config2) => {
      return {
        httpAuthSchemes: config2.httpAuthSchemes(),
        httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
        credentials: config2.credentials()
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js
var asPartial, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js"() {
    init_dist_es45();
    init_dist_es2();
    init_dist_es17();
    init_httpAuthExtensionConfiguration();
    asPartial = (t5) => t5;
    resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js
var SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es24();
    init_dist_es25();
    init_dist_es36();
    init_dist_es26();
    init_dist_es32();
    init_dist_es35();
    init_dist_es17();
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOOIDCClient = class extends Client {
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        const _config_1 = resolveClientEndpointParameters2(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSSOOIDCHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config2) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config2.credentials
        });
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js
var SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js"() {
    init_dist_es17();
    SSOOIDCServiceException = class extends ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js
var AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException, InvalidRequestRegionException, InvalidClientMetadataException, InvalidRedirectUriException, CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog, CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog, RegisterClientResponseFilterSensitiveLog, StartDeviceAuthorizationRequestFilterSensitiveLog;
var init_models_0 = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js"() {
    init_dist_es17();
    init_SSOOIDCServiceException();
    AccessDeniedException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    ExpiredTokenException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestRegionException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidRequestRegionException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
      }
    };
    InvalidClientMetadataException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidClientMetadataException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRedirectUriException = class extends SSOOIDCServiceException {
      constructor(opts) {
        super({
          name: "InvalidRedirectUriException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRedirectUriException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRedirectUriException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    CreateTokenRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }
    });
    CreateTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.idToken && { idToken: SENSITIVE_STRING }
    });
    CreateTokenWithIAMRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.assertion && { assertion: SENSITIVE_STRING },
      ...obj.subjectToken && { subjectToken: SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }
    });
    CreateTokenWithIAMResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.idToken && { idToken: SENSITIVE_STRING }
    });
    RegisterClientResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING }
    });
    StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING }
    });
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js
var se_CreateTokenCommand, se_CreateTokenWithIAMCommand, se_RegisterClientCommand, se_StartDeviceAuthorizationCommand, de_CreateTokenCommand, de_CreateTokenWithIAMCommand, de_RegisterClientCommand, de_StartDeviceAuthorizationCommand, de_CommandError2, throwDefaultError3, de_AccessDeniedExceptionRes, de_AuthorizationPendingExceptionRes, de_ExpiredTokenExceptionRes, de_InternalServerExceptionRes, de_InvalidClientExceptionRes, de_InvalidClientMetadataExceptionRes, de_InvalidGrantExceptionRes, de_InvalidRedirectUriExceptionRes, de_InvalidRequestExceptionRes, de_InvalidRequestRegionExceptionRes, de_InvalidScopeExceptionRes, de_SlowDownExceptionRes, de_UnauthorizedClientExceptionRes, de_UnsupportedGrantTypeExceptionRes, deserializeMetadata3, _ai;
var init_Aws_restJson1 = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js"() {
    init_dist_es37();
    init_dist_es36();
    init_dist_es17();
    init_models_0();
    init_SSOOIDCServiceException();
    se_CreateTokenCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/token");
      let body;
      body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        codeVerifier: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_2) => _json(_2)
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    };
    se_CreateTokenWithIAMCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/token");
      const query = map({
        [_ai]: [, "t"]
      });
      let body;
      body = JSON.stringify(take(input, {
        assertion: [],
        clientId: [],
        code: [],
        codeVerifier: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        requestedTokenType: [],
        scope: (_2) => _json(_2),
        subjectToken: [],
        subjectTokenType: []
      }));
      b5.m("POST").h(headers).q(query).b(body);
      return b5.build();
    };
    se_RegisterClientCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/client/register");
      let body;
      body = JSON.stringify(take(input, {
        clientName: [],
        clientType: [],
        entitledApplicationArn: [],
        grantTypes: (_2) => _json(_2),
        issuerUrl: [],
        redirectUris: (_2) => _json(_2),
        scopes: (_2) => _json(_2)
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    };
    se_StartDeviceAuthorizationCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/device_authorization");
      let body;
      body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        startUrl: []
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    };
    de_CreateTokenCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        refreshToken: expectString,
        tokenType: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_CreateTokenWithIAMCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        issuedTokenType: expectString,
        refreshToken: expectString,
        scope: _json,
        tokenType: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_RegisterClientCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        authorizationEndpoint: expectString,
        clientId: expectString,
        clientIdIssuedAt: expectLong,
        clientSecret: expectString,
        clientSecretExpiresAt: expectLong,
        tokenEndpoint: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_StartDeviceAuthorizationCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        deviceCode: expectString,
        expiresIn: expectInt32,
        interval: expectInt32,
        userCode: expectString,
        verificationUri: expectString,
        verificationUriComplete: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_CommandError2 = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        case "InvalidRequestRegionException":
        case "com.amazonaws.ssooidc#InvalidRequestRegionException":
          throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
          throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        case "InvalidRedirectUriException":
        case "com.amazonaws.ssooidc#InvalidRedirectUriException":
          throw await de_InvalidRedirectUriExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError3({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    throwDefaultError3 = withBaseException(SSOOIDCServiceException);
    de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InternalServerExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidClientExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidRedirectUriExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRedirectUriException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidRequestRegionExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        endpoint: expectString,
        error: expectString,
        error_description: expectString,
        region: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestRegionException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_SlowDownExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    deserializeMetadata3 = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    _ai = "aws_iam";
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js
var CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenWithIAMCommand.js
var CreateTokenWithIAMCommand;
var init_CreateTokenWithIAMCommand = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenWithIAMCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenWithIAMCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateTokenWithIAM", {}).n("SSOOIDCClient", "CreateTokenWithIAMCommand").f(CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog).ser(se_CreateTokenWithIAMCommand).de(de_CreateTokenWithIAMCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/RegisterClientCommand.js
var RegisterClientCommand;
var init_RegisterClientCommand = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/RegisterClientCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    RegisterClientCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "RegisterClient", {}).n("SSOOIDCClient", "RegisterClientCommand").f(void 0, RegisterClientResponseFilterSensitiveLog).ser(se_RegisterClientCommand).de(de_RegisterClientCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/StartDeviceAuthorizationCommand.js
var StartDeviceAuthorizationCommand;
var init_StartDeviceAuthorizationCommand = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/StartDeviceAuthorizationCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    StartDeviceAuthorizationCommand = class extends Command.classBuilder().ep({
      ...commonParams2
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "StartDeviceAuthorization", {}).n("SSOOIDCClient", "StartDeviceAuthorizationCommand").f(StartDeviceAuthorizationRequestFilterSensitiveLog, void 0).ser(se_StartDeviceAuthorizationCommand).de(de_StartDeviceAuthorizationCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDC.js
var commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDC.js"() {
    init_dist_es17();
    init_CreateTokenCommand();
    init_CreateTokenWithIAMCommand();
    init_RegisterClientCommand();
    init_StartDeviceAuthorizationCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand,
      CreateTokenWithIAMCommand,
      RegisterClientCommand,
      StartDeviceAuthorizationCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
    };
    createAggregatedClient(commands, SSOOIDC);
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/index.js
var init_commands = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/index.js"() {
    init_CreateTokenCommand();
    init_CreateTokenWithIAMCommand();
    init_RegisterClientCommand();
    init_StartDeviceAuthorizationCommand();
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/index.js
var init_models = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/models/index.js"() {
    init_models_0();
  }
});

// node_modules/@aws-sdk/client-sso-oidc/dist-es/index.js
var dist_es_exports4 = {};
__export(dist_es_exports4, {
  $Command: () => Command,
  AccessDeniedException: () => AccessDeniedException,
  AuthorizationPendingException: () => AuthorizationPendingException,
  CreateTokenCommand: () => CreateTokenCommand,
  CreateTokenRequestFilterSensitiveLog: () => CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog: () => CreateTokenResponseFilterSensitiveLog,
  CreateTokenWithIAMCommand: () => CreateTokenWithIAMCommand,
  CreateTokenWithIAMRequestFilterSensitiveLog: () => CreateTokenWithIAMRequestFilterSensitiveLog,
  CreateTokenWithIAMResponseFilterSensitiveLog: () => CreateTokenWithIAMResponseFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException,
  InternalServerException: () => InternalServerException,
  InvalidClientException: () => InvalidClientException,
  InvalidClientMetadataException: () => InvalidClientMetadataException,
  InvalidGrantException: () => InvalidGrantException,
  InvalidRedirectUriException: () => InvalidRedirectUriException,
  InvalidRequestException: () => InvalidRequestException,
  InvalidRequestRegionException: () => InvalidRequestRegionException,
  InvalidScopeException: () => InvalidScopeException,
  RegisterClientCommand: () => RegisterClientCommand,
  RegisterClientResponseFilterSensitiveLog: () => RegisterClientResponseFilterSensitiveLog,
  SSOOIDC: () => SSOOIDC,
  SSOOIDCClient: () => SSOOIDCClient,
  SSOOIDCServiceException: () => SSOOIDCServiceException,
  SlowDownException: () => SlowDownException,
  StartDeviceAuthorizationCommand: () => StartDeviceAuthorizationCommand,
  StartDeviceAuthorizationRequestFilterSensitiveLog: () => StartDeviceAuthorizationRequestFilterSensitiveLog,
  UnauthorizedClientException: () => UnauthorizedClientException,
  UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
  __Client: () => Client
});
var init_dist_es46 = __esm({
  "node_modules/@aws-sdk/client-sso-oidc/dist-es/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_models();
    init_SSOOIDCServiceException();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var ssoOidcClientsHash, getSsoOidcClient;
var init_getSsoOidcClient = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js"() {
    ssoOidcClientsHash = {};
    getSsoOidcClient = async (ssoRegion) => {
      const { SSOOIDCClient: SSOOIDCClient2 } = await Promise.resolve().then(() => (init_dist_es46(), dist_es_exports4));
      if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
      }
      const ssoOidcClient = new SSOOIDCClient2({ region: ssoRegion });
      ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
      return ssoOidcClient;
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken;
var init_getNewSsoOidcToken = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js"() {
    init_getSsoOidcClient();
    getNewSsoOidcToken = async (ssoToken, ssoRegion) => {
      const { CreateTokenCommand: CreateTokenCommand2 } = await Promise.resolve().then(() => (init_dist_es46(), dist_es_exports4));
      const ssoOidcClient = await getSsoOidcClient(ssoRegion);
      return ssoOidcClient.send(new CreateTokenCommand2({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var validateTokenExpiry;
var init_validateTokenExpiry = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js"() {
    init_dist_es21();
    init_constants7();
    validateTokenExpiry = (token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var validateTokenKey;
var init_validateTokenKey = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js"() {
    init_dist_es21();
    init_constants7();
    validateTokenKey = (key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
      }
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
var import_fs4, writeFile, writeSSOTokenToFile;
var init_writeSSOTokenToFile = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js"() {
    init_dist_es27();
    import_fs4 = require("fs");
    ({ writeFile } = import_fs4.promises);
    writeSSOTokenToFile = (id, ssoToken) => {
      const tokenFilepath = getSSOTokenFilepath(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var lastRefreshAttemptTime, fromSso;
var init_fromSso = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromSso.js"() {
    init_dist_es21();
    init_dist_es27();
    init_constants7();
    init_getNewSsoOidcToken();
    init_validateTokenExpiry();
    init_validateTokenKey();
    init_writeSSOTokenToFile();
    lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    fromSso = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await parseKnownFiles(init);
      const profileName = getProfileName(init);
      const profile = profiles[profileName];
      if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await loadSsoSessionData(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
      } catch (e5) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js
var init_fromStatic3 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js"() {
    init_dist_es21();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js
var init_nodeProvider = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js"() {
    init_dist_es21();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/index.js
var init_dist_es47 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/index.js"() {
    init_fromSso();
    init_fromStatic3();
    init_nodeProvider();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "awsssoportal",
      region: authParameters.region
    },
    propertiesExtractor: (config2, context) => ({
      signingProperties: {
        config: config2,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption2(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOHttpAuthSchemeParametersProvider, defaultSSOHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig2;
var init_httpAuthSchemeProvider2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es37();
    init_dist_es18();
    defaultSSOHttpAuthSchemeParametersProvider = async (config2, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config2.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "ListAccountRoles": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "ListAccounts": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "Logout": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
        }
      }
      return options;
    };
    resolveHttpAuthSchemeConfig2 = (config2) => {
      const config_0 = resolveAwsSdkSigV4Config(config2);
      return {
        ...config_0
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters3, commonParams3;
var init_EndpointParameters2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters3 = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      };
    };
    commonParams3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-sso/package.json
var package_default3;
var init_package2 = __esm({
  "node_modules/@aws-sdk/client-sso/package.json"() {
    package_default3 = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.614.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.614.0",
        "@aws-sdk/middleware-host-header": "3.609.0",
        "@aws-sdk/middleware-logger": "3.609.0",
        "@aws-sdk/middleware-recursion-detection": "3.609.0",
        "@aws-sdk/middleware-user-agent": "3.614.0",
        "@aws-sdk/region-config-resolver": "3.614.0",
        "@aws-sdk/types": "3.609.0",
        "@aws-sdk/util-endpoints": "3.614.0",
        "@aws-sdk/util-user-agent-browser": "3.609.0",
        "@aws-sdk/util-user-agent-node": "3.614.0",
        "@smithy/config-resolver": "^3.0.5",
        "@smithy/core": "^2.2.6",
        "@smithy/fetch-http-handler": "^3.2.1",
        "@smithy/hash-node": "^3.0.3",
        "@smithy/invalid-dependency": "^3.0.3",
        "@smithy/middleware-content-length": "^3.0.3",
        "@smithy/middleware-endpoint": "^3.0.5",
        "@smithy/middleware-retry": "^3.0.9",
        "@smithy/middleware-serde": "^3.0.3",
        "@smithy/middleware-stack": "^3.0.3",
        "@smithy/node-config-provider": "^3.1.4",
        "@smithy/node-http-handler": "^3.1.2",
        "@smithy/protocol-http": "^4.0.3",
        "@smithy/smithy-client": "^3.1.7",
        "@smithy/types": "^3.3.0",
        "@smithy/url-parser": "^3.0.3",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.9",
        "@smithy/util-defaults-mode-node": "^3.0.9",
        "@smithy/util-endpoints": "^2.0.5",
        "@smithy/util-middleware": "^3.0.3",
        "@smithy/util-retry": "^3.0.3",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
var u2, v2, w2, x2, a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, _data2, ruleSet2;
var init_ruleset2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js"() {
    u2 = "required";
    v2 = "fn";
    w2 = "argv";
    x2 = "ref";
    a2 = true;
    b2 = "isSet";
    c2 = "booleanEquals";
    d2 = "error";
    e2 = "endpoint";
    f2 = "tree";
    g2 = "PartitionResult";
    h2 = "getAttr";
    i2 = { [u2]: false, "type": "String" };
    j2 = { [u2]: true, "default": false, "type": "Boolean" };
    k2 = { [x2]: "Endpoint" };
    l2 = { [v2]: c2, [w2]: [{ [x2]: "UseFIPS" }, true] };
    m2 = { [v2]: c2, [w2]: [{ [x2]: "UseDualStack" }, true] };
    n2 = {};
    o2 = { [v2]: h2, [w2]: [{ [x2]: g2 }, "supportsFIPS"] };
    p2 = { [x2]: g2 };
    q2 = { [v2]: c2, [w2]: [true, { [v2]: h2, [w2]: [p2, "supportsDualStack"] }] };
    r2 = [l2];
    s2 = [m2];
    t2 = [{ [x2]: "Region" }];
    _data2 = { version: "1.0", parameters: { Region: i2, UseDualStack: j2, UseFIPS: j2, Endpoint: i2 }, rules: [{ conditions: [{ [v2]: b2, [w2]: [k2] }], rules: [{ conditions: r2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d2 }, { conditions: s2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d2 }, { endpoint: { url: k2, properties: n2, headers: n2 }, type: e2 }], type: f2 }, { conditions: [{ [v2]: b2, [w2]: t2 }], rules: [{ conditions: [{ [v2]: "aws.partition", [w2]: t2, assign: g2 }], rules: [{ conditions: [l2, m2], rules: [{ conditions: [{ [v2]: c2, [w2]: [a2, o2] }, q2], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d2 }], type: f2 }, { conditions: r2, rules: [{ conditions: [{ [v2]: c2, [w2]: [o2, a2] }], rules: [{ conditions: [{ [v2]: "stringEquals", [w2]: [{ [v2]: h2, [w2]: [p2, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n2, headers: n2 }, type: e2 }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d2 }], type: f2 }, { conditions: s2, rules: [{ conditions: [q2], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d2 }], type: f2 }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }], type: f2 }, { error: "Invalid Configuration: Missing Region", type: d2 }] };
    ruleSet2 = _data2;
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver2;
var init_endpointResolver2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es23();
    init_dist_es22();
    init_ruleset2();
    defaultEndpointResolver2 = (endpointParams, context = {}) => {
      return resolveEndpoint(ruleSet2, {
        endpointParams,
        logger: context.logger
      });
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js
var getRuntimeConfig3;
var init_runtimeConfig_shared2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js"() {
    init_dist_es37();
    init_dist_es36();
    init_dist_es17();
    init_dist_es30();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider2();
    init_endpointResolver2();
    getRuntimeConfig3 = (config2) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config2?.base64Decoder ?? fromBase64,
        base64Encoder: config2?.base64Encoder ?? toBase64,
        disableHostPrefix: config2?.disableHostPrefix ?? false,
        endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver2,
        extensions: config2?.extensions ?? [],
        httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config2?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config2?.logger ?? new NoOpLogger(),
        serviceId: config2?.serviceId ?? "SSO",
        urlParser: config2?.urlParser ?? parseUrl,
        utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config2?.utf8Encoder ?? toUtf8
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js
var getRuntimeConfig4;
var init_runtimeConfig2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js"() {
    init_package2();
    init_dist_es37();
    init_dist_es41();
    init_dist_es25();
    init_dist_es42();
    init_dist_es35();
    init_dist_es28();
    init_dist_es13();
    init_dist_es43();
    init_dist_es34();
    init_runtimeConfig_shared2();
    init_dist_es17();
    init_dist_es44();
    init_dist_es17();
    getRuntimeConfig4 = (config2) => {
      emitWarningIfUnsupportedVersion(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config2);
      const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig3(config2);
      emitWarningIfUnsupportedVersion2(process.version);
      return {
        ...clientSharedValues,
        ...config2,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default3.version }),
        maxAttempts: config2?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config2?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: NodeHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
        retryMode: config2?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
        }),
        sha256: config2?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config2?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config2?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config2?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration2, resolveHttpAuthRuntimeConfig2;
var init_httpAuthExtensionConfiguration2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration2 = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig2 = (config2) => {
      return {
        httpAuthSchemes: config2.httpAuthSchemes(),
        httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
        credentials: config2.credentials()
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js
var asPartial2, resolveRuntimeExtensions2;
var init_runtimeExtensions2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js"() {
    init_dist_es45();
    init_dist_es2();
    init_dist_es17();
    init_httpAuthExtensionConfiguration2();
    asPartial2 = (t5) => t5;
    resolveRuntimeExtensions2 = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial2(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial2(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial2(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial2(getHttpAuthExtensionConfiguration2(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig2(extensionConfiguration)
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js
var SSOClient;
var init_SSOClient = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es24();
    init_dist_es25();
    init_dist_es36();
    init_dist_es26();
    init_dist_es32();
    init_dist_es35();
    init_dist_es17();
    init_httpAuthSchemeProvider2();
    init_EndpointParameters2();
    init_runtimeConfig2();
    init_runtimeExtensions2();
    SSOClient = class extends Client {
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig4(configuration || {});
        const _config_1 = resolveClientEndpointParameters3(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
        const _config_8 = resolveRuntimeExtensions2(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSSOHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config2) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config2.credentials
        });
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js
var SSOServiceException;
var init_SSOServiceException = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js"() {
    init_dist_es17();
    SSOServiceException = class extends ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js
var InvalidRequestException2, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException, GetRoleCredentialsRequestFilterSensitiveLog, RoleCredentialsFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog, ListAccountRolesRequestFilterSensitiveLog, ListAccountsRequestFilterSensitiveLog, LogoutRequestFilterSensitiveLog;
var init_models_02 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js"() {
    init_dist_es17();
    init_SSOServiceException();
    InvalidRequestException2 = class extends SSOServiceException {
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException2.prototype);
      }
    };
    ResourceNotFoundException = class extends SSOServiceException {
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
      }
    };
    TooManyRequestsException = class extends SSOServiceException {
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
      }
    };
    UnauthorizedException = class extends SSOServiceException {
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
      }
    };
    GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
    RoleCredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: SENSITIVE_STRING }
    });
    GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
    });
    ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
    ListAccountsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
    LogoutRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js
var se_GetRoleCredentialsCommand, se_ListAccountRolesCommand, se_ListAccountsCommand, se_LogoutCommand, de_GetRoleCredentialsCommand, de_ListAccountRolesCommand, de_ListAccountsCommand, de_LogoutCommand, de_CommandError3, throwDefaultError4, de_InvalidRequestExceptionRes2, de_ResourceNotFoundExceptionRes, de_TooManyRequestsExceptionRes, de_UnauthorizedExceptionRes, deserializeMetadata4, isSerializableHeaderValue2, _aI, _aT, _ai2, _mR, _mr, _nT, _nt, _rN, _rn, _xasbt;
var init_Aws_restJson12 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js"() {
    init_dist_es37();
    init_dist_es36();
    init_dist_es17();
    init_models_02();
    init_SSOServiceException();
    se_GetRoleCredentialsCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue2, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/federation/credentials");
      const query = map({
        [_rn]: [, expectNonNull(input[_rN], `roleName`)],
        [_ai2]: [, expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    };
    se_ListAccountRolesCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue2, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/assignment/roles");
      const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai2]: [, expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    };
    se_ListAccountsCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue2, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/assignment/accounts");
      const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    };
    se_LogoutCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue2, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/logout");
      let body;
      b5.m("POST").h(headers).b(body);
      return b5.build();
    };
    de_GetRoleCredentialsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        roleCredentials: _json
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_ListAccountRolesCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        nextToken: expectString,
        roleList: _json
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_ListAccountsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accountList: _json,
        nextToken: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_LogoutCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      await collectBody(output.body, context);
      return contents;
    };
    de_CommandError3 = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes2(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError4({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    throwDefaultError4 = withBaseException(SSOServiceException);
    de_InvalidRequestExceptionRes2 = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException2({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    deserializeMetadata4 = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    isSerializableHeaderValue2 = (value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
    _aI = "accountId";
    _aT = "accessToken";
    _ai2 = "account_id";
    _mR = "maxResults";
    _mr = "max_result";
    _nT = "nextToken";
    _nt = "next_token";
    _rN = "roleName";
    _rn = "role_name";
    _xasbt = "x-amz-sso_bearer_token";
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js
var GetRoleCredentialsCommand;
var init_GetRoleCredentialsCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    GetRoleCredentialsCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountRolesCommand.js
var ListAccountRolesCommand;
var init_ListAccountRolesCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountRolesCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    ListAccountRolesCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountsCommand.js
var ListAccountsCommand;
var init_ListAccountsCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountsCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    ListAccountsCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/LogoutCommand.js
var LogoutCommand;
var init_LogoutCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/LogoutCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    LogoutCommand = class extends Command.classBuilder().ep({
      ...commonParams3
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/SSO.js
var commands2, SSO;
var init_SSO = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/SSO.js"() {
    init_dist_es17();
    init_GetRoleCredentialsCommand();
    init_ListAccountRolesCommand();
    init_ListAccountsCommand();
    init_LogoutCommand();
    init_SSOClient();
    commands2 = {
      GetRoleCredentialsCommand,
      ListAccountRolesCommand,
      ListAccountsCommand,
      LogoutCommand
    };
    SSO = class extends SSOClient {
    };
    createAggregatedClient(commands2, SSO);
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/index.js
var init_commands2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/index.js"() {
    init_GetRoleCredentialsCommand();
    init_ListAccountRolesCommand();
    init_ListAccountsCommand();
    init_LogoutCommand();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/Interfaces.js
var init_Interfaces = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/Interfaces.js"() {
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountRolesPaginator.js
var paginateListAccountRoles;
var init_ListAccountRolesPaginator = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountRolesPaginator.js"() {
    init_dist_es36();
    init_ListAccountRolesCommand();
    init_SSOClient();
    paginateListAccountRoles = createPaginator(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountsPaginator.js
var paginateListAccounts;
var init_ListAccountsPaginator = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountsPaginator.js"() {
    init_dist_es36();
    init_ListAccountsCommand();
    init_SSOClient();
    paginateListAccounts = createPaginator(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/index.js
var init_pagination2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/index.js"() {
    init_Interfaces();
    init_ListAccountRolesPaginator();
    init_ListAccountsPaginator();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/models/index.js
var init_models2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/models/index.js"() {
    init_models_02();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/index.js
var init_dist_es48 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/index.js"() {
    init_SSOClient();
    init_SSO();
    init_commands2();
    init_pagination2();
    init_models2();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js
var loadSso_exports = {};
__export(loadSso_exports, {
  GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
  SSOClient: () => SSOClient
});
var init_loadSso = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js"() {
    init_dist_es48();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var SHOULD_FAIL_CREDENTIAL_CHAIN, resolveSSOCredentials;
var init_resolveSSOCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js"() {
    init_dist_es47();
    init_dist_es21();
    init_dist_es27();
    SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, profile, logger: logger3 }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await fromSso({ profile })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e5) {
          throw new CredentialsProviderError(e5.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger3
          });
        }
      } else {
        try {
          token = await getSSOTokenFromFile(ssoStartUrl);
        } catch (e5) {
          throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger3
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(() => (init_loadSso(), loadSso_exports));
      const sso = ssoClient || new SSOClient2(Object.assign({}, clientConfig ?? {}, {
        region: clientConfig?.region ?? ssoRegion
      }));
      let ssoResp;
      try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand2({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e5) {
        throw new CredentialsProviderError(e5, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var validateSsoProfile;
var init_validateSsoProfile = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js"() {
    init_dist_es21();
    validateSsoProfile = (profile, logger3) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: logger3 });
      }
      return profile;
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var fromSSO;
var init_fromSSO = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js"() {
    init_dist_es21();
    init_dist_es27();
    init_isSsoProfile();
    init_resolveSSOCredentials();
    init_validateSsoProfile();
    fromSSO = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = getProfileName(init);
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await loadSsoSessionData(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          profile: profileName
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          profile: profileName
        });
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js
var init_types9 = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js
var dist_es_exports5 = {};
__export(dist_es_exports5, {
  fromSSO: () => fromSSO,
  isSsoProfile: () => isSsoProfile,
  validateSsoProfile: () => validateSsoProfile
});
var init_dist_es49 = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js"() {
    init_fromSSO();
    init_isSsoProfile();
    init_types9();
    init_validateSsoProfile();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var resolveCredentialSource;
var init_resolveCredentialSource = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js"() {
    init_dist_es21();
    resolveCredentialSource = (credentialSource, profileName, logger3) => {
      const sourceProvidersMap = {
        EcsContainer: async (options) => {
          const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es40(), dist_es_exports3));
          const { fromContainerMetadata: fromContainerMetadata2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return chain(fromHttp2(options ?? {}), fromContainerMetadata2(options));
        },
        Ec2InstanceMetadata: async (options) => {
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
          return fromInstanceMetadata2(options);
        },
        Environment: async (options) => {
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv: fromEnv3 } = await Promise.resolve().then(() => (init_dist_es38(), dist_es_exports));
          return fromEnv3(options);
        }
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger: logger3 });
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption3(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
      region: authParameters.region
    },
    propertiesExtractor: (config2, context) => ({
      signingProperties: {
        config: config2,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption3(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig3;
var init_httpAuthSchemeProvider3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es37();
    init_dist_es18();
    init_STSClient();
    defaultSTSHttpAuthSchemeParametersProvider = async (config2, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config2.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSTSHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption3(authParameters));
        }
      }
      return options;
    };
    resolveStsAuthConfig = (input) => ({
      ...input,
      stsClientCtor: STSClient
    });
    resolveHttpAuthSchemeConfig3 = (config2) => {
      const config_0 = resolveStsAuthConfig(config2);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      return {
        ...config_1
      };
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters4, commonParams4;
var init_EndpointParameters3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters4 = (options) => {
      return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      };
    };
    commonParams4 = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-sts/package.json
var package_default4;
var init_package3 = __esm({
  "node_modules/@aws-sdk/client-sts/package.json"() {
    package_default4 = {
      name: "@aws-sdk/client-sts",
      description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
      version: "3.614.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sts",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
        test: "yarn test:unit",
        "test:unit": "jest"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/client-sso-oidc": "3.614.0",
        "@aws-sdk/core": "3.614.0",
        "@aws-sdk/credential-provider-node": "3.614.0",
        "@aws-sdk/middleware-host-header": "3.609.0",
        "@aws-sdk/middleware-logger": "3.609.0",
        "@aws-sdk/middleware-recursion-detection": "3.609.0",
        "@aws-sdk/middleware-user-agent": "3.614.0",
        "@aws-sdk/region-config-resolver": "3.614.0",
        "@aws-sdk/types": "3.609.0",
        "@aws-sdk/util-endpoints": "3.614.0",
        "@aws-sdk/util-user-agent-browser": "3.609.0",
        "@aws-sdk/util-user-agent-node": "3.614.0",
        "@smithy/config-resolver": "^3.0.5",
        "@smithy/core": "^2.2.6",
        "@smithy/fetch-http-handler": "^3.2.1",
        "@smithy/hash-node": "^3.0.3",
        "@smithy/invalid-dependency": "^3.0.3",
        "@smithy/middleware-content-length": "^3.0.3",
        "@smithy/middleware-endpoint": "^3.0.5",
        "@smithy/middleware-retry": "^3.0.9",
        "@smithy/middleware-serde": "^3.0.3",
        "@smithy/middleware-stack": "^3.0.3",
        "@smithy/node-config-provider": "^3.1.4",
        "@smithy/node-http-handler": "^3.1.2",
        "@smithy/protocol-http": "^4.0.3",
        "@smithy/smithy-client": "^3.1.7",
        "@smithy/types": "^3.3.0",
        "@smithy/url-parser": "^3.0.3",
        "@smithy/util-base64": "^3.0.0",
        "@smithy/util-body-length-browser": "^3.0.0",
        "@smithy/util-body-length-node": "^3.0.0",
        "@smithy/util-defaults-mode-browser": "^3.0.9",
        "@smithy/util-defaults-mode-node": "^3.0.9",
        "@smithy/util-endpoints": "^2.0.5",
        "@smithy/util-middleware": "^3.0.3",
        "@smithy/util-retry": "^3.0.3",
        "@smithy/util-utf8": "^3.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node16": "16.1.3",
        "@types/node": "^16.18.96",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~4.9.5"
      },
      engines: {
        node: ">=16.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sts"
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
var F, G, H, I, J, a3, b3, c3, d3, e3, f3, g3, h3, i3, j3, k3, l3, m3, n3, o3, p3, q3, r3, s3, t3, u3, v3, w3, x3, y, z, A, B, C, D, E, _data3, ruleSet3;
var init_ruleset3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js"() {
    F = "required";
    G = "type";
    H = "fn";
    I = "argv";
    J = "ref";
    a3 = false;
    b3 = true;
    c3 = "booleanEquals";
    d3 = "stringEquals";
    e3 = "sigv4";
    f3 = "sts";
    g3 = "us-east-1";
    h3 = "endpoint";
    i3 = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    j3 = "tree";
    k3 = "error";
    l3 = "getAttr";
    m3 = { [F]: false, [G]: "String" };
    n3 = { [F]: true, "default": false, [G]: "Boolean" };
    o3 = { [J]: "Endpoint" };
    p3 = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    q3 = { [J]: "Region" };
    r3 = { [H]: "aws.partition", [I]: [q3], "assign": "PartitionResult" };
    s3 = { [J]: "UseFIPS" };
    t3 = { [J]: "UseDualStack" };
    u3 = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e3, "signingName": f3, "signingRegion": g3 }] }, "headers": {} };
    v3 = {};
    w3 = { "conditions": [{ [H]: d3, [I]: [q3, "aws-global"] }], [h3]: u3, [G]: h3 };
    x3 = { [H]: c3, [I]: [s3, true] };
    y = { [H]: c3, [I]: [t3, true] };
    z = { [H]: l3, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    A = { [J]: "PartitionResult" };
    B = { [H]: c3, [I]: [true, { [H]: l3, [I]: [A, "supportsDualStack"] }] };
    C = [{ [H]: "isSet", [I]: [o3] }];
    D = [x3];
    E = [y];
    _data3 = { version: "1.0", parameters: { Region: m3, UseDualStack: n3, UseFIPS: n3, Endpoint: m3, UseGlobalEndpoint: n3 }, rules: [{ conditions: [{ [H]: c3, [I]: [{ [J]: "UseGlobalEndpoint" }, b3] }, { [H]: "not", [I]: C }, p3, r3, { [H]: c3, [I]: [s3, a3] }, { [H]: c3, [I]: [t3, a3] }], rules: [{ conditions: [{ [H]: d3, [I]: [q3, "ap-northeast-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "ap-south-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "ap-southeast-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "ap-southeast-2"] }], endpoint: u3, [G]: h3 }, w3, { conditions: [{ [H]: d3, [I]: [q3, "ca-central-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-central-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-north-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-west-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-west-2"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "eu-west-3"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "sa-east-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, g3] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "us-east-2"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "us-west-1"] }], endpoint: u3, [G]: h3 }, { conditions: [{ [H]: d3, [I]: [q3, "us-west-2"] }], endpoint: u3, [G]: h3 }, { endpoint: { url: i3, properties: { authSchemes: [{ name: e3, signingName: f3, signingRegion: "{Region}" }] }, headers: v3 }, [G]: h3 }], [G]: j3 }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k3 }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k3 }, { endpoint: { url: o3, properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { conditions: [p3], rules: [{ conditions: [r3], rules: [{ conditions: [x3, y], rules: [{ conditions: [{ [H]: c3, [I]: [b3, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k3 }], [G]: j3 }, { conditions: D, rules: [{ conditions: [{ [H]: c3, [I]: [z, b3] }], rules: [{ conditions: [{ [H]: d3, [I]: [{ [H]: l3, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v3, headers: v3 }, [G]: h3 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k3 }], [G]: j3 }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k3 }], [G]: j3 }, w3, { endpoint: { url: i3, properties: v3, headers: v3 }, [G]: h3 }], [G]: j3 }], [G]: j3 }, { error: "Invalid Configuration: Missing Region", [G]: k3 }] };
    ruleSet3 = _data3;
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver3;
var init_endpointResolver3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es23();
    init_dist_es22();
    init_ruleset3();
    defaultEndpointResolver3 = (endpointParams, context = {}) => {
      return resolveEndpoint(ruleSet3, {
        endpointParams,
        logger: context.logger
      });
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js
var getRuntimeConfig5;
var init_runtimeConfig_shared3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js"() {
    init_dist_es37();
    init_dist_es36();
    init_dist_es17();
    init_dist_es30();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider3();
    init_endpointResolver3();
    getRuntimeConfig5 = (config2) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config2?.base64Decoder ?? fromBase64,
        base64Encoder: config2?.base64Encoder ?? toBase64,
        disableHostPrefix: config2?.disableHostPrefix ?? false,
        endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver3,
        extensions: config2?.extensions ?? [],
        httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config2?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config2?.logger ?? new NoOpLogger(),
        serviceId: config2?.serviceId ?? "STS",
        urlParser: config2?.urlParser ?? parseUrl,
        utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config2?.utf8Encoder ?? toUtf8
      };
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
var getRuntimeConfig6;
var init_runtimeConfig3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js"() {
    init_package3();
    init_dist_es37();
    init_dist_es54();
    init_dist_es41();
    init_dist_es25();
    init_dist_es36();
    init_dist_es42();
    init_dist_es35();
    init_dist_es28();
    init_dist_es13();
    init_dist_es43();
    init_dist_es34();
    init_runtimeConfig_shared3();
    init_dist_es17();
    init_dist_es44();
    init_dist_es17();
    getRuntimeConfig6 = (config2) => {
      emitWarningIfUnsupportedVersion(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config2);
      const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig5(config2);
      emitWarningIfUnsupportedVersion2(process.version);
      return {
        ...clientSharedValues,
        ...config2,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config2?.credentialDefaultProvider ?? defaultProvider,
        defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default4.version }),
        httpAuthSchemes: config2?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await defaultProvider(idProps?.__config || {})()),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        maxAttempts: config2?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config2?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: NodeHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
        retryMode: config2?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
        }),
        sha256: config2?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config2?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config2?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config2?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      };
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration3, resolveHttpAuthRuntimeConfig3;
var init_httpAuthExtensionConfiguration3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration3 = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig3 = (config2) => {
      return {
        httpAuthSchemes: config2.httpAuthSchemes(),
        httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
        credentials: config2.credentials()
      };
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js
var asPartial3, resolveRuntimeExtensions3;
var init_runtimeExtensions3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js"() {
    init_dist_es45();
    init_dist_es2();
    init_dist_es17();
    init_httpAuthExtensionConfiguration3();
    asPartial3 = (t5) => t5;
    resolveRuntimeExtensions3 = (runtimeConfig, extensions) => {
      const extensionConfiguration = {
        ...asPartial3(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial3(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial3(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial3(getHttpAuthExtensionConfiguration3(runtimeConfig))
      };
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig3(extensionConfiguration)
      };
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/STSClient.js
var STSClient;
var init_STSClient = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/STSClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es24();
    init_dist_es25();
    init_dist_es36();
    init_dist_es26();
    init_dist_es32();
    init_dist_es35();
    init_dist_es17();
    init_httpAuthSchemeProvider3();
    init_EndpointParameters3();
    init_runtimeConfig3();
    init_runtimeExtensions3();
    STSClient = class extends Client {
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig6(configuration || {});
        const _config_1 = resolveClientEndpointParameters4(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig3(_config_6);
        const _config_8 = resolveRuntimeExtensions3(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
          identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
      getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSTSHttpAuthSchemeParametersProvider;
      }
      getIdentityProviderConfigProvider() {
        return async (config2) => new DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config2.credentials
        });
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js
var STSServiceException;
var init_STSServiceException = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js"() {
    init_dist_es17();
    STSServiceException = class extends ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js
var ExpiredTokenException2, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, IDPCommunicationErrorException, InvalidAuthorizationMessageException, CredentialsFilterSensitiveLog, AssumeRoleResponseFilterSensitiveLog, AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog, AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog, GetFederationTokenResponseFilterSensitiveLog, GetSessionTokenResponseFilterSensitiveLog;
var init_models_03 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js"() {
    init_dist_es17();
    init_STSServiceException();
    ExpiredTokenException2 = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException2.prototype);
      }
    };
    MalformedPolicyDocumentException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
      }
    };
    IDPCommunicationErrorException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
      }
    };
    InvalidAuthorizationMessageException = class extends STSServiceException {
      constructor(opts) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...opts
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
      }
    };
    CredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }
    });
    AssumeRoleResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.SAMLAssertion && { SAMLAssertion: SENSITIVE_STRING }
    });
    AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: SENSITIVE_STRING }
    });
    AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js
var se_AssumeRoleCommand, se_AssumeRoleWithSAMLCommand, se_AssumeRoleWithWebIdentityCommand, se_DecodeAuthorizationMessageCommand, se_GetAccessKeyInfoCommand, se_GetCallerIdentityCommand, se_GetFederationTokenCommand, se_GetSessionTokenCommand, de_AssumeRoleCommand, de_AssumeRoleWithSAMLCommand, de_AssumeRoleWithWebIdentityCommand, de_DecodeAuthorizationMessageCommand, de_GetAccessKeyInfoCommand, de_GetCallerIdentityCommand, de_GetFederationTokenCommand, de_GetSessionTokenCommand, de_CommandError4, de_ExpiredTokenExceptionRes2, de_IDPCommunicationErrorExceptionRes, de_IDPRejectedClaimExceptionRes, de_InvalidAuthorizationMessageExceptionRes, de_InvalidIdentityTokenExceptionRes, de_MalformedPolicyDocumentExceptionRes, de_PackedPolicyTooLargeExceptionRes, de_RegionDisabledExceptionRes, se_AssumeRoleRequest, se_AssumeRoleWithSAMLRequest, se_AssumeRoleWithWebIdentityRequest, se_DecodeAuthorizationMessageRequest, se_GetAccessKeyInfoRequest, se_GetCallerIdentityRequest, se_GetFederationTokenRequest, se_GetSessionTokenRequest, se_policyDescriptorListType, se_PolicyDescriptorType, se_ProvidedContext, se_ProvidedContextsListType, se_Tag, se_tagKeyListType, se_tagListType, de_AssumedRoleUser, de_AssumeRoleResponse, de_AssumeRoleWithSAMLResponse, de_AssumeRoleWithWebIdentityResponse, de_Credentials, de_DecodeAuthorizationMessageResponse, de_ExpiredTokenException, de_FederatedUser, de_GetAccessKeyInfoResponse, de_GetCallerIdentityResponse, de_GetFederationTokenResponse, de_GetSessionTokenResponse, de_IDPCommunicationErrorException, de_IDPRejectedClaimException, de_InvalidAuthorizationMessageException, de_InvalidIdentityTokenException, de_MalformedPolicyDocumentException, de_PackedPolicyTooLargeException, de_RegionDisabledException, deserializeMetadata5, throwDefaultError5, buildHttpRpcRequest, SHARED_HEADERS, _, _A, _AKI2, _AR, _ARI, _ARU, _ARWSAML, _ARWWI, _Ac, _Ar, _Au, _C2, _CA, _DAM, _DM, _DS, _E, _EI, _EM, _FU, _FUI, _GAKI, _GCI, _GFT, _GST, _I, _K, _N2, _NQ, _P, _PA, _PAr, _PAro, _PC, _PI, _PPS, _Pr, _RA, _RSN, _S, _SAK2, _SAMLA, _SFWIT, _SI, _SN, _ST2, _STe, _T, _TC, _TTK, _UI, _V, _Va, _WIT, _a, _m, buildFormUrlencodedString, loadQueryErrorCode;
var init_Aws_query = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js"() {
    init_dist_es37();
    init_dist_es2();
    init_dist_es17();
    init_models_03();
    init_STSServiceException();
    se_AssumeRoleCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_AssumeRoleWithSAMLCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        [_A]: _ARWSAML,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_DecodeAuthorizationMessageCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        [_A]: _DAM,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_GetAccessKeyInfoCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        [_A]: _GAKI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_GetCallerIdentityCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        [_A]: _GCI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_GetFederationTokenCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        [_A]: _GFT,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_GetSessionTokenCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        [_A]: _GST,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    de_AssumeRoleCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_AssumeRoleWithSAMLCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_DecodeAuthorizationMessageCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_GetAccessKeyInfoCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_GetCallerIdentityCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_GetFederationTokenCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_GetSessionTokenCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_CommandError4 = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseXmlErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes2(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
          throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError5({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    de_ExpiredTokenExceptionRes2 = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new ExpiredTokenException2({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_InvalidAuthorizationMessageExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
      const exception = new InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new RegionDisabledException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    se_AssumeRoleRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EI] != null) {
        entries[_EI] = input[_EI];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      if (input[_SI] != null) {
        entries[_SI] = input[_SI];
      }
      if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (input[_PC]?.length === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    };
    se_AssumeRoleWithSAMLRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
      }
      if (input[_SAMLA] != null) {
        entries[_SAMLA] = input[_SAMLA];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    };
    se_AssumeRoleWithWebIdentityRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
      }
      if (input[_PI] != null) {
        entries[_PI] = input[_PI];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    };
    se_DecodeAuthorizationMessageRequest = (input, context) => {
      const entries = {};
      if (input[_EM] != null) {
        entries[_EM] = input[_EM];
      }
      return entries;
    };
    se_GetAccessKeyInfoRequest = (input, context) => {
      const entries = {};
      if (input[_AKI2] != null) {
        entries[_AKI2] = input[_AKI2];
      }
      return entries;
    };
    se_GetCallerIdentityRequest = (input, context) => {
      const entries = {};
      return entries;
    };
    se_GetFederationTokenRequest = (input, context) => {
      const entries = {};
      if (input[_N2] != null) {
        entries[_N2] = input[_N2];
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    };
    se_GetSessionTokenRequest = (input, context) => {
      const entries = {};
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      return entries;
    };
    se_policyDescriptorListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    se_PolicyDescriptorType = (input, context) => {
      const entries = {};
      if (input[_a] != null) {
        entries[_a] = input[_a];
      }
      return entries;
    };
    se_ProvidedContext = (input, context) => {
      const entries = {};
      if (input[_PAro] != null) {
        entries[_PAro] = input[_PAro];
      }
      if (input[_CA] != null) {
        entries[_CA] = input[_CA];
      }
      return entries;
    };
    se_ProvidedContextsListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    se_Tag = (input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    };
    se_tagKeyListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    };
    se_tagListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    de_AssumedRoleUser = (output, context) => {
      const contents = {};
      if (output[_ARI] != null) {
        contents[_ARI] = expectString(output[_ARI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    };
    de_AssumeRoleResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    };
    de_AssumeRoleWithSAMLResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_S] != null) {
        contents[_S] = expectString(output[_S]);
      }
      if (output[_ST2] != null) {
        contents[_ST2] = expectString(output[_ST2]);
      }
      if (output[_I] != null) {
        contents[_I] = expectString(output[_I]);
      }
      if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
      }
      if (output[_NQ] != null) {
        contents[_NQ] = expectString(output[_NQ]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    };
    de_AssumeRoleWithWebIdentityResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      if (output[_SFWIT] != null) {
        contents[_SFWIT] = expectString(output[_SFWIT]);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_Pr] != null) {
        contents[_Pr] = expectString(output[_Pr]);
      }
      if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    };
    de_Credentials = (output, context) => {
      const contents = {};
      if (output[_AKI2] != null) {
        contents[_AKI2] = expectString(output[_AKI2]);
      }
      if (output[_SAK2] != null) {
        contents[_SAK2] = expectString(output[_SAK2]);
      }
      if (output[_STe] != null) {
        contents[_STe] = expectString(output[_STe]);
      }
      if (output[_E] != null) {
        contents[_E] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_E]));
      }
      return contents;
    };
    de_DecodeAuthorizationMessageResponse = (output, context) => {
      const contents = {};
      if (output[_DM] != null) {
        contents[_DM] = expectString(output[_DM]);
      }
      return contents;
    };
    de_ExpiredTokenException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_FederatedUser = (output, context) => {
      const contents = {};
      if (output[_FUI] != null) {
        contents[_FUI] = expectString(output[_FUI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    };
    de_GetAccessKeyInfoResponse = (output, context) => {
      const contents = {};
      if (output[_Ac] != null) {
        contents[_Ac] = expectString(output[_Ac]);
      }
      return contents;
    };
    de_GetCallerIdentityResponse = (output, context) => {
      const contents = {};
      if (output[_UI] != null) {
        contents[_UI] = expectString(output[_UI]);
      }
      if (output[_Ac] != null) {
        contents[_Ac] = expectString(output[_Ac]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    };
    de_GetFederationTokenResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      if (output[_FU] != null) {
        contents[_FU] = de_FederatedUser(output[_FU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      return contents;
    };
    de_GetSessionTokenResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      return contents;
    };
    de_IDPCommunicationErrorException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_IDPRejectedClaimException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_InvalidAuthorizationMessageException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_InvalidIdentityTokenException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_MalformedPolicyDocumentException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_PackedPolicyTooLargeException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_RegionDisabledException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    deserializeMetadata5 = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    throwDefaultError5 = withBaseException(STSServiceException);
    buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new HttpRequest(contents);
    };
    SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    _ = "2011-06-15";
    _A = "Action";
    _AKI2 = "AccessKeyId";
    _AR = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARU = "AssumedRoleUser";
    _ARWSAML = "AssumeRoleWithSAML";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _Ac = "Account";
    _Ar = "Arn";
    _Au = "Audience";
    _C2 = "Credentials";
    _CA = "ContextAssertion";
    _DAM = "DecodeAuthorizationMessage";
    _DM = "DecodedMessage";
    _DS = "DurationSeconds";
    _E = "Expiration";
    _EI = "ExternalId";
    _EM = "EncodedMessage";
    _FU = "FederatedUser";
    _FUI = "FederatedUserId";
    _GAKI = "GetAccessKeyInfo";
    _GCI = "GetCallerIdentity";
    _GFT = "GetFederationToken";
    _GST = "GetSessionToken";
    _I = "Issuer";
    _K = "Key";
    _N2 = "Name";
    _NQ = "NameQualifier";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "PrincipalArn";
    _PAro = "ProviderArn";
    _PC = "ProvidedContexts";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RSN = "RoleSessionName";
    _S = "Subject";
    _SAK2 = "SecretAccessKey";
    _SAMLA = "SAMLAssertion";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST2 = "SubjectType";
    _STe = "SessionToken";
    _T = "Tags";
    _TC = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _UI = "UserId";
    _V = "Version";
    _Va = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _m = "message";
    buildFormUrlencodedString = (formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&");
    loadQueryErrorCode = (output, data) => {
      if (data.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js
var AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithSAMLCommand.js
var AssumeRoleWithSAMLCommand;
var init_AssumeRoleWithSAMLCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithSAMLCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleWithSAMLCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").f(AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog).ser(se_AssumeRoleWithSAMLCommand).de(de_AssumeRoleWithSAMLCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js
var AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleWithWebIdentityCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/DecodeAuthorizationMessageCommand.js
var DecodeAuthorizationMessageCommand;
var init_DecodeAuthorizationMessageCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/DecodeAuthorizationMessageCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_Aws_query();
    DecodeAuthorizationMessageCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").f(void 0, void 0).ser(se_DecodeAuthorizationMessageCommand).de(de_DecodeAuthorizationMessageCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/GetAccessKeyInfoCommand.js
var GetAccessKeyInfoCommand;
var init_GetAccessKeyInfoCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/GetAccessKeyInfoCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_Aws_query();
    GetAccessKeyInfoCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").f(void 0, void 0).ser(se_GetAccessKeyInfoCommand).de(de_GetAccessKeyInfoCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/GetCallerIdentityCommand.js
var GetCallerIdentityCommand;
var init_GetCallerIdentityCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/GetCallerIdentityCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_Aws_query();
    GetCallerIdentityCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").f(void 0, void 0).ser(se_GetCallerIdentityCommand).de(de_GetCallerIdentityCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/GetFederationTokenCommand.js
var GetFederationTokenCommand;
var init_GetFederationTokenCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/GetFederationTokenCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    GetFederationTokenCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").f(void 0, GetFederationTokenResponseFilterSensitiveLog).ser(se_GetFederationTokenCommand).de(de_GetFederationTokenCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/GetSessionTokenCommand.js
var GetSessionTokenCommand;
var init_GetSessionTokenCommand = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/GetSessionTokenCommand.js"() {
    init_dist_es32();
    init_dist_es31();
    init_dist_es17();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    GetSessionTokenCommand = class extends Command.classBuilder().ep({
      ...commonParams4
    }).m(function(Command2, cs2, config2, o5) {
      return [
        getSerdePlugin(config2, this.serialize, this.deserialize),
        getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").f(void 0, GetSessionTokenResponseFilterSensitiveLog).ser(se_GetSessionTokenCommand).de(de_GetSessionTokenCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/STS.js
var commands3, STS;
var init_STS = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/STS.js"() {
    init_dist_es17();
    init_AssumeRoleCommand();
    init_AssumeRoleWithSAMLCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_DecodeAuthorizationMessageCommand();
    init_GetAccessKeyInfoCommand();
    init_GetCallerIdentityCommand();
    init_GetFederationTokenCommand();
    init_GetSessionTokenCommand();
    init_STSClient();
    commands3 = {
      AssumeRoleCommand,
      AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand,
      GetCallerIdentityCommand,
      GetFederationTokenCommand,
      GetSessionTokenCommand
    };
    STS = class extends STSClient {
    };
    createAggregatedClient(commands3, STS);
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/commands/index.js
var init_commands3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithSAMLCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_DecodeAuthorizationMessageCommand();
    init_GetAccessKeyInfoCommand();
    init_GetCallerIdentityCommand();
    init_GetFederationTokenCommand();
    init_GetSessionTokenCommand();
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/models/index.js
var init_models3 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/models/index.js"() {
    init_models_03();
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js
var ASSUME_ROLE_DEFAULT_REGION, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity;
var init_defaultStsRoleAssumers = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    resolveRegion = async (_region, _parentRegion, credentialProviderLogger) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (provider)`, `${parentRegion} (parent client)`, `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`);
      return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
    };
    getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger: logger3 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          stsClient = new stsClientCtor({
            credentialDefaultProvider: () => async () => closureSourceCreds,
            region: resolvedRegion,
            requestHandler,
            logger: logger3
          });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          credentialScope: Credentials.CredentialScope
        };
      };
    };
    getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger: logger3 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          stsClient = new stsClientCtor({
            region: resolvedRegion,
            requestHandler,
            logger: logger3
          });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          credentialScope: Credentials.CredentialScope
        };
      };
    };
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider;
var init_defaultRoleAssumers = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = (baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          constructor(config2) {
            super(config2);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    };
    getDefaultRoleAssumer2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    getDefaultRoleAssumerWithWebIdentity2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    });
  }
});

// node_modules/@aws-sdk/client-sts/dist-es/index.js
var dist_es_exports6 = {};
__export(dist_es_exports6, {
  $Command: () => Command,
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithSAMLCommand: () => AssumeRoleWithSAMLCommand,
  AssumeRoleWithSAMLRequestFilterSensitiveLog: () => AssumeRoleWithSAMLRequestFilterSensitiveLog,
  AssumeRoleWithSAMLResponseFilterSensitiveLog: () => AssumeRoleWithSAMLResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
  DecodeAuthorizationMessageCommand: () => DecodeAuthorizationMessageCommand,
  ExpiredTokenException: () => ExpiredTokenException2,
  GetAccessKeyInfoCommand: () => GetAccessKeyInfoCommand,
  GetCallerIdentityCommand: () => GetCallerIdentityCommand,
  GetFederationTokenCommand: () => GetFederationTokenCommand,
  GetFederationTokenResponseFilterSensitiveLog: () => GetFederationTokenResponseFilterSensitiveLog,
  GetSessionTokenCommand: () => GetSessionTokenCommand,
  GetSessionTokenResponseFilterSensitiveLog: () => GetSessionTokenResponseFilterSensitiveLog,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  InvalidAuthorizationMessageException: () => InvalidAuthorizationMessageException,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  RegionDisabledException: () => RegionDisabledException,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  __Client: () => Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_dist_es50 = __esm({
  "node_modules/@aws-sdk/client-sts/dist-es/index.js"() {
    init_STSClient();
    init_STS();
    init_commands3();
    init_models3();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var isAssumeRoleProfile, isAssumeRoleWithSourceProfile, isCredentialSourceProfile, resolveAssumeRoleCredentials;
var init_resolveAssumeRoleCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js"() {
    init_dist_es21();
    init_dist_es27();
    init_resolveCredentialSource();
    init_resolveProfileData();
    isAssumeRoleProfile = (arg, { profile = "default", logger: logger3 } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger: logger3 }) || isCredentialSourceProfile(arg, { profile, logger: logger3 }));
    };
    isAssumeRoleWithSourceProfile = (arg, { profile, logger: logger3 }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger3?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    };
    isCredentialSourceProfile = (arg, { profile, logger: logger3 }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger3?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    };
    resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const data = profiles[profileName];
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer: getDefaultRoleAssumer3 } = await Promise.resolve().then(() => (init_dist_es50(), dist_es_exports6));
        options.roleAssumer = getDefaultRoleAssumer3({
          ...options.clientConfig,
          credentialProviderLogger: options.logger,
          parentClientConfig: options?.parentClientConfig
        }, options.clientPlugins);
      }
      const { source_profile } = data;
      if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
      }
      options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
      const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, {
        ...profiles,
        [source_profile]: {
          ...profiles[source_profile],
          role_arn: data.role_arn ?? profiles[source_profile].role_arn
        }
      }, options, {
        ...visitedProfiles,
        [source_profile]: true
      }) : (await resolveCredentialSource(data.credential_source, profileName, options.logger)(options))();
      const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10)
      };
      const { mfa_serial } = data;
      if (mfa_serial) {
        if (!options.mfaCodeProvider) {
          throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
      }
      const sourceCreds = await sourceCredsProvider;
      return options.roleAssumer(sourceCreds, params);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var getValidatedProcessCredentials;
var init_getValidatedProcessCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js"() {
    getValidatedProcessCredentials = (profileName, data) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope }
      };
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
var import_child_process, import_util4, resolveProcessCredentials;
var init_resolveProcessCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js"() {
    init_dist_es21();
    import_child_process = require("child_process");
    import_util4 = require("util");
    init_getValidatedProcessCredentials();
    resolveProcessCredentials = async (profileName, profiles, logger3) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = (0, import_util4.promisify)(import_child_process.exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data);
          } catch (error) {
            throw new CredentialsProviderError(error.message, { logger: logger3 });
          }
        } else {
          throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger: logger3 });
        }
      } else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
          logger: logger3
        });
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var fromProcess;
var init_fromProcess = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js"() {
    init_dist_es27();
    init_resolveProcessCredentials();
    fromProcess = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      const profiles = await parseKnownFiles(init);
      return resolveProcessCredentials(getProfileName(init), profiles, init.logger);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/index.js
var dist_es_exports7 = {};
__export(dist_es_exports7, {
  fromProcess: () => fromProcess
});
var init_dist_es51 = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/index.js"() {
    init_fromProcess();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var isProcessProfile, resolveProcessCredentials2;
var init_resolveProcessCredentials2 = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js"() {
    isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
    resolveProcessCredentials2 = async (options, profile) => Promise.resolve().then(() => (init_dist_es51(), dist_es_exports7)).then(({ fromProcess: fromProcess2 }) => fromProcess2({
      ...options,
      profile
    })());
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var resolveSsoCredentials, isSsoProfile2;
var init_resolveSsoCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js"() {
    resolveSsoCredentials = async (profile, options = {}) => {
      const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es49(), dist_es_exports5));
      return fromSSO2({
        profile,
        logger: options.logger
      })();
    };
    isSsoProfile2 = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var isStaticCredsProfile, resolveStaticCredentials;
var init_resolveStaticCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js"() {
    isStaticCredsProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
    resolveStaticCredentials = (profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope
      });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken;
var init_fromWebToken = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js"() {
    fromWebToken = (init) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity3 } = await Promise.resolve().then(() => (init_dist_es50(), dist_es_exports6));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity3({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: init.parentClientConfig
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
var import_fs5, ENV_TOKEN_FILE, ENV_ROLE_ARN, ENV_ROLE_SESSION_NAME, fromTokenFile;
var init_fromTokenFile = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js"() {
    init_dist_es21();
    import_fs5 = require("fs");
    init_fromWebToken();
    ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    ENV_ROLE_ARN = "AWS_ROLE_ARN";
    ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    fromTokenFile = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified", {
          logger: init.logger
        });
      }
      return fromWebToken({
        ...init,
        webIdentityToken: (0, import_fs5.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })();
    };
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js
var dist_es_exports8 = {};
__export(dist_es_exports8, {
  fromTokenFile: () => fromTokenFile,
  fromWebToken: () => fromWebToken
});
var init_dist_es52 = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js"() {
    init_fromTokenFile();
    init_fromWebToken();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var isWebIdentityProfile, resolveWebIdentityCredentials;
var init_resolveWebIdentityCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js"() {
    isWebIdentityProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
    resolveWebIdentityCredentials = async (profile, options) => Promise.resolve().then(() => (init_dist_es52(), dist_es_exports8)).then(({ fromTokenFile: fromTokenFile2 }) => fromTokenFile2({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig
    })());
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var resolveProfileData;
var init_resolveProfileData = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js"() {
    init_dist_es21();
    init_resolveAssumeRoleCredentials();
    init_resolveProcessCredentials2();
    init_resolveSsoCredentials();
    init_resolveStaticCredentials();
    init_resolveWebIdentityCredentials();
    resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials2(options, profileName);
      }
      if (isSsoProfile2(data)) {
        return await resolveSsoCredentials(profileName, options);
      }
      throw new CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var fromIni;
var init_fromIni = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js"() {
    init_dist_es27();
    init_resolveProfileData();
    fromIni = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await parseKnownFiles(init);
      return resolveProfileData(getProfileName(init), profiles, init);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js
var dist_es_exports9 = {};
__export(dist_es_exports9, {
  fromIni: () => fromIni
});
var init_dist_es53 = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js"() {
    init_fromIni();
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var defaultProvider, credentialsWillNeedRefresh, credentialsTreatedAsExpired;
var init_defaultProvider = __esm({
  "node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js"() {
    init_dist_es38();
    init_dist_es21();
    init_dist_es27();
    init_remoteProvider();
    defaultProvider = (init = {}) => memoize(chain(...init.profile || process.env[ENV_PROFILE] ? [] : [
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
        return fromEnv2(init)();
      }
    ], async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        throw new CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
      }
      const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es49(), dist_es_exports5));
      return fromSSO2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
      const { fromIni: fromIni2 } = await Promise.resolve().then(() => (init_dist_es53(), dist_es_exports9));
      return fromIni2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
      const { fromProcess: fromProcess2 } = await Promise.resolve().then(() => (init_dist_es51(), dist_es_exports7));
      return fromProcess2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
      const { fromTokenFile: fromTokenFile2 } = await Promise.resolve().then(() => (init_dist_es52(), dist_es_exports8));
      return fromTokenFile2(init)();
    }, async () => {
      init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
      return (await remoteProvider(init))();
    }, async () => {
      throw new CredentialsProviderError("Could not load credentials from any providers", {
        tryNextLink: false,
        logger: init.logger
      });
    }), credentialsTreatedAsExpired, credentialsWillNeedRefresh);
    credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== void 0;
    credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5;
  }
});

// node_modules/@aws-sdk/credential-provider-node/dist-es/index.js
var init_dist_es54 = __esm({
  "node_modules/@aws-sdk/credential-provider-node/dist-es/index.js"() {
    init_defaultProvider();
  }
});

// src/config/AWS/S3/BucketS3.ts
var BucketS3_exports = {};
__export(BucketS3_exports, {
  ConfigS3: () => ConfigS3
});
module.exports = __toCommonJS(BucketS3_exports);

// node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
init_dist_es2();
function addExpectContinueMiddleware(options) {
  return (next) => async (args) => {
    const { request: request2 } = args;
    if (HttpRequest.isInstance(request2) && request2.body && options.runtime === "node") {
      if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
        request2.headers = {
          ...request2.headers,
          Expect: "100-continue"
        };
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
var addExpectContinueMiddlewareOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true
};
var getAddExpectContinuePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_dist_es3();
init_dist_es4();
init_dist_es5();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
init_dist_es2();
init_dist_es17();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
var regionRedirectEndpointMiddleware = (config2) => {
  return (next, context) => async (args) => {
    const originalRegion = await config2.region();
    const regionProviderRef = config2.region;
    if (context.__s3RegionRedirect) {
      config2.region = async () => {
        config2.region = regionProviderRef;
        return context.__s3RegionRedirect;
      };
    }
    const result = await next(args);
    if (context.__s3RegionRedirect) {
      const region = await config2.region();
      if (originalRegion !== region) {
        throw new Error("Region was not restored following S3 region redirect.");
      }
    }
    return result;
  };
};
var regionRedirectEndpointMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function regionRedirectMiddleware(clientConfig) {
  return (next, context) => async (args) => {
    try {
      return await next(args);
    } catch (err) {
      if (clientConfig.followRegionRedirects && err?.$metadata?.httpStatusCode === 301) {
        try {
          const actualRegion = err.$response.headers["x-amz-bucket-region"];
          context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
          context.__s3RegionRedirect = actualRegion;
        } catch (e5) {
          throw new Error("Region redirect failed: " + e5);
        }
        return next(args);
      } else {
        throw err;
      }
    }
  };
}
var regionRedirectMiddlewareOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true
};
var getRegionRedirectMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
init_dist_es2();
init_dist_es17();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
var S3ExpressIdentityCache = class {
  constructor(data = {}) {
    this.data = data;
    this.lastPurgeTime = Date.now();
  }
  get(key) {
    const entry = this.data[key];
    if (!entry) {
      return;
    }
    return entry;
  }
  set(key, entry) {
    this.data[key] = entry;
    return entry;
  }
  delete(key) {
    delete this.data[key];
  }
  async purgeExpired() {
    const now = Date.now();
    if (this.lastPurgeTime + S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
      return;
    }
    for (const key in this.data) {
      const entry = this.data[key];
      if (!entry.isRefreshing) {
        const credential = await entry.identity;
        if (credential.expiration) {
          if (credential.expiration.getTime() < now) {
            delete this.data[key];
          }
        }
      }
    }
  }
};
S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
var S3ExpressIdentityCacheEntry = class {
  constructor(_identity, isRefreshing = false, accessed = Date.now()) {
    this._identity = _identity;
    this.isRefreshing = isRefreshing;
    this.accessed = accessed;
  }
  get identity() {
    this.accessed = Date.now();
    return this._identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
var S3ExpressIdentityProviderImpl = class {
  constructor(createSessionFn, cache = new S3ExpressIdentityCache()) {
    this.createSessionFn = createSessionFn;
    this.cache = cache;
  }
  async getS3ExpressIdentity(awsIdentity, identityProperties) {
    const key = identityProperties.Bucket;
    const { cache } = this;
    const entry = cache.get(key);
    if (entry) {
      return entry.identity.then((identity) => {
        const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
        if (isExpired) {
          return cache.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
        }
        const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
        if (isExpiringSoon && !entry.isRefreshing) {
          entry.isRefreshing = true;
          this.getIdentity(key).then((id) => {
            cache.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
          });
        }
        return identity;
      });
    }
    return cache.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
  }
  async getIdentity(key) {
    await this.cache.purgeExpired().catch((error) => {
      console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
    });
    const session = await this.createSessionFn(key);
    if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    }
    const identity = {
      accessKeyId: session.Credentials.AccessKeyId,
      secretAccessKey: session.Credentials.SecretAccessKey,
      sessionToken: session.Credentials.SessionToken,
      expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : void 0
    };
    return identity;
  }
};
S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS = 6e4;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
init_dist_es19();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
init_dist_es20();
var S3_EXPRESS_BUCKET_TYPE = "Directory";
var S3_EXPRESS_BACKEND = "S3Express";
var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = {
  environmentVariableSelector: (env3) => booleanSelector(env3, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, SelectorType.CONFIG),
  default: false
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
  async signWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return privateAccess.signRequest(requestToSign, options ?? {});
  }
  async presignWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return this.presign(requestToSign, options);
  }
};
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration
  };
  return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = () => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
init_dist_es2();
var s3ExpressMiddleware = (options) => {
  return (next, context) => async (args) => {
    if (context.endpointV2) {
      const endpoint = context.endpointV2;
      const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
      const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
      if (isS3ExpressBucket) {
        context.isS3ExpressBucket = true;
      }
      if (isS3ExpressAuth) {
        const requestBucket = args.input.Bucket;
        if (requestBucket) {
          const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
            Bucket: requestBucket
          });
          context.s3ExpressIdentity = s3ExpressIdentity;
          if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
            args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
          }
        }
      }
    }
    return next(args);
  };
};
var s3ExpressMiddlewareOptions = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: true
};
var getS3ExpressPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
var resolveS3Config = (input, { session }) => {
  const [s3ClientProvider, CreateSessionCommandCtor] = session;
  return {
    ...input,
    forcePathStyle: input.forcePathStyle ?? false,
    useAccelerateEndpoint: input.useAccelerateEndpoint ?? false,
    disableMultiregionAccessPoints: input.disableMultiregionAccessPoints ?? false,
    followRegionRedirects: input.followRegionRedirects ?? false,
    s3ExpressIdentityProvider: input.s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
      Bucket: key,
      SessionMode: "ReadWrite"
    }))),
    bucketEndpoint: input.bucketEndpoint ?? false
  };
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
init_dist_es2();

// node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
var validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
function bucketEndpointMiddleware(options) {
  return (next, context) => async (args) => {
    if (options.bucketEndpoint) {
      const endpoint = context.endpointV2;
      if (endpoint) {
        const bucket = args.input.Bucket;
        if (typeof bucket === "string") {
          try {
            const bucketEndpointUrl = new URL(bucket);
            endpoint.url = bucketEndpointUrl;
          } catch (e5) {
            const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
            if (context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(warning);
            } else {
              context.logger?.warn?.(warning);
            }
            throw e5;
          }
        }
      }
    }
    return next(args);
  };
}
var bucketEndpointMiddlewareOptions = {
  name: "bucketEndpointMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function validateBucketNameMiddleware({ bucketEndpoint }) {
  return (next) => async (args) => {
    const { input: { Bucket } } = args;
    if (!bucketEndpoint && typeof Bucket === "string" && !validate(Bucket) && Bucket.indexOf("/") >= 0) {
      const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
      err.name = "InvalidBucketName";
      throw err;
    }
    return next({ ...args });
  };
}
var validateBucketNameMiddlewareOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true
};
var getValidateBucketNamePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js
init_dist_es21();
init_dist_es19();
init_dist_es18();
var CREDENTIAL_EXPIRE_WINDOW = 3e5;
var resolveAwsAuthConfig = (input) => {
  const normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(Object.assign({}, input, {
    parentClientConfig: input
  }));
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer;
  if (input.signer) {
    signer = normalizeProvider(input.signer);
  } else if (input.regionInfoProvider) {
    signer = () => normalizeProvider(input.region)().then(async (region) => [
      await input.regionInfoProvider(region, {
        useFipsEndpoint: await input.useFipsEndpoint(),
        useDualstackEndpoint: await input.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      input.signingRegion = input.signingRegion || signingRegion || region;
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    });
  } else {
    signer = async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: input.signingName || input.defaultSigningName,
        signingRegion: await normalizeProvider(input.region)(),
        properties: {}
      }, authScheme);
      const isSigv4a = authScheme?.name === "sigv4a";
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      let regionForSigner;
      if (isSigv4a) {
        regionForSigner = input.signingRegion || signingRegion;
      } else {
        input.signingRegion = input.signingRegion || signingRegion;
        regionForSigner = input.signingRegion;
      }
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: regionForSigner,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    };
  }
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer
  };
};
var normalizeCredentialProvider = (credentials) => {
  if (typeof credentials === "function") {
    return memoize(credentials, (credentials2) => credentials2.expiration !== void 0 && credentials2.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials2) => credentials2.expiration !== void 0);
  }
  return normalizeProvider(credentials);
};

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js
init_dist_es2();

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js
var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
};

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js
var awsAuthMiddleware = (options) => (next, context) => async function(args) {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  let authScheme;
  let signer;
  const firstAuthScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const secondAuthScheme = context.endpointV2?.properties?.authSchemes?.[1];
  const firstAuthSchemeIsSigv4a = firstAuthScheme?.name === "sigv4a";
  if (firstAuthSchemeIsSigv4a && secondAuthScheme) {
    signer = await options.signer(authScheme = firstAuthScheme);
    const uncheckedSigner = signer;
    const sigv4aAvailable = (() => {
      if (typeof uncheckedSigner?.getSigv4aSigner === "function") {
        if (uncheckedSigner?.signerOptions?.runtime !== "node") {
          return false;
        }
        try {
          uncheckedSigner.getSigv4aSigner();
          return true;
        } catch (e5) {
        }
      }
      return false;
    })();
    if (!sigv4aAvailable) {
      signer = await options.signer(authScheme = secondAuthScheme);
    }
  } else {
    signer = await options.signer(authScheme = firstAuthScheme);
  }
  let signedRequest;
  const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : void 0;
  const signingOptions = {
    signingDate: getSkewCorrectedDate(options.systemClockOffset),
    signingRegion: multiRegionOverride || context["signing_region"],
    signingService: context["signing_service"]
  };
  if (context.s3ExpressIdentity) {
    const sigV4MultiRegion = signer;
    signedRequest = await sigV4MultiRegion.signWithCredentials(args.request, context.s3ExpressIdentity, signingOptions);
    if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
      throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
    }
  } else {
    signedRequest = await signer.sign(args.request, signingOptions);
  }
  const output = await next({
    ...args,
    request: signedRequest
  }).catch((error) => {
    const serverTime = error.ServerTime ?? getDateHeader(error.$response);
    if (serverTime) {
      options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
    }
    throw error;
  });
  const dateHeader = getDateHeader(output.response);
  if (dateHeader) {
    options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
  }
  return output;
};
var getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
var awsAuthMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true
};
var getAwsAuthPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_dist_es24();
init_dist_es25();

// node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = (input) => ({
  ...input,
  eventStreamMarshaller: input.eventStreamSerdeProvider(input)
});

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_dist_es26();
init_dist_es32();
init_dist_es35();
init_dist_es17();

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
init_dist_es32();
init_dist_es31();
init_dist_es17();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return {
    ...options,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? false,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3"
  };
};
var commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
init_dist_es17();

// node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
init_dist_es17();
var S3ServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, S3ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts
    });
    this.name = "NoSuchUpload";
    this.$fault = "client";
    Object.setPrototypeOf(this, NoSuchUpload.prototype);
  }
};
var ObjectNotInActiveTierError = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts
    });
    this.name = "ObjectNotInActiveTierError";
    this.$fault = "client";
    Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
  }
};
var BucketAlreadyExists = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts
    });
    this.name = "BucketAlreadyExists";
    this.$fault = "client";
    Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
  }
};
var BucketAlreadyOwnedByYou = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts
    });
    this.name = "BucketAlreadyOwnedByYou";
    this.$fault = "client";
    Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
  }
};
var NoSuchBucket = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts
    });
    this.name = "NoSuchBucket";
    this.$fault = "client";
    Object.setPrototypeOf(this, NoSuchBucket.prototype);
  }
};
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var LifecycleRuleFilter;
(function(LifecycleRuleFilter2) {
  LifecycleRuleFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.ObjectSizeGreaterThan !== void 0)
      return visitor.ObjectSizeGreaterThan(value.ObjectSizeGreaterThan);
    if (value.ObjectSizeLessThan !== void 0)
      return visitor.ObjectSizeLessThan(value.ObjectSizeLessThan);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(LifecycleRuleFilter || (LifecycleRuleFilter = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== void 0)
      return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(MetricsFilter || (MetricsFilter = {}));
var ReplicationRuleFilter;
(function(ReplicationRuleFilter2) {
  ReplicationRuleFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(ReplicationRuleFilter || (ReplicationRuleFilter = {}));
var InvalidObjectState = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidObjectState";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
};
var NoSuchKey = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts
    });
    this.name = "NoSuchKey";
    this.$fault = "client";
    Object.setPrototypeOf(this, NoSuchKey.prototype);
  }
};
var NotFound = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts
    });
    this.name = "NotFound";
    this.$fault = "client";
    Object.setPrototypeOf(this, NotFound.prototype);
  }
};
var SessionCredentialsFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING },
  ...obj.SessionToken && { SessionToken: SENSITIVE_STRING }
});
var CreateSessionOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }
});

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
init_dist_es37();
init_dist_es36();
init_dist_es2();
init_dist_es17();

// node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
init_dist_es17();
var ObjectAlreadyInActiveTierError = class extends S3ServiceException {
  constructor(opts) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts
    });
    this.name = "ObjectAlreadyInActiveTierError";
    this.$fault = "client";
    Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
  }
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = (value, visitor) => {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
var se_CreateSessionCommand = async (input, context) => {
  const b5 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xacsm]: input[_SM]
  });
  b5.bp("/");
  b5.p("Bucket", () => input.Bucket, "{Bucket}", false);
  const query = map({
    [_s]: [, ""]
  });
  let body;
  b5.m("GET").h(headers).q(query).b(body);
  return b5.build();
};
var se_ListBucketsCommand = async (input, context) => {
  const b5 = requestBuilder(input, context);
  const headers = {};
  b5.bp("/");
  const query = map({
    [_xi]: [, "ListBuckets"]
  });
  let body;
  b5.m("GET").h(headers).q(query).b(body);
  return b5.build();
};
var de_CreateSessionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output)
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_SessionCredentials(data[_C], context);
  }
  return contents;
};
var de_ListBucketsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output)
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data.Buckets === "") {
    contents[_Bu] = [];
  } else if (data[_Bu] != null && data[_Bu][_B] != null) {
    contents[_Bu] = de_Buckets(getArrayIfSingleItem(data[_Bu][_B]), context);
  }
  if (data[_O] != null) {
    contents[_O] = de_Owner(data[_O], context);
  }
  return contents;
};
var de_CommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context)
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
};
var throwDefaultError2 = withBaseException(S3ServiceException);
var de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidObjectStateRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  if (data[_AT] != null) {
    contents[_AT] = expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchBucketRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchKeyRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchUploadRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NotFoundRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_Bucket = (output, context) => {
  const contents = {};
  if (output[_N] != null) {
    contents[_N] = expectString(output[_N]);
  }
  if (output[_CDr] != null) {
    contents[_CDr] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_CDr]));
  }
  return contents;
};
var de_Buckets = (output, context) => {
  return (output || []).filter((e5) => e5 != null).map((entry) => {
    return de_Bucket(entry, context);
  });
};
var de_Owner = (output, context) => {
  const contents = {};
  if (output[_DN] != null) {
    contents[_DN] = expectString(output[_DN]);
  }
  if (output[_ID_] != null) {
    contents[_ID_] = expectString(output[_ID_]);
  }
  return contents;
};
var de_SessionCredentials = (output, context) => {
  const contents = {};
  if (output[_AKI] != null) {
    contents[_AKI] = expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = expectString(output[_ST]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
};
var deserializeMetadata2 = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var isSerializableHeaderValue = (value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
var _AKI = "AccessKeyId";
var _AT = "AccessTier";
var _B = "Bucket";
var _Bu = "Buckets";
var _C = "Credentials";
var _CDr = "CreationDate";
var _DN = "DisplayName";
var _Exp = "Expiration";
var _ID_ = "ID";
var _N = "Name";
var _O = "Owner";
var _SAK = "SecretAccessKey";
var _SC = "StorageClass";
var _SM = "SessionMode";
var _ST = "SessionToken";
var _s = "session";
var _xacsm = "x-amz-create-session-mode";
var _xi = "x-id";

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
var CreateSessionCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" }
}).m(function(Command2, cs2, config2, o5) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(void 0, CreateSessionOutputFilterSensitiveLog).ser(se_CreateSessionCommand).de(de_CreateSessionCommand).build() {
};

// node_modules/@aws-sdk/client-s3/package.json
var package_default = {
  name: "@aws-sdk/client-s3",
  description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native",
  version: "3.614.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-s3",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
    test: "yarn test:unit",
    "test:e2e": "yarn test:e2e:node && yarn test:e2e:browser",
    "test:e2e:browser": "ts-mocha test/**/*.browser.ispec.ts && karma start karma.conf.js",
    "test:e2e:node": "jest --c jest.config.e2e.js",
    "test:unit": "ts-mocha test/unit/**/*.spec.ts"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha1-browser": "5.2.0",
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/client-sso-oidc": "3.614.0",
    "@aws-sdk/client-sts": "3.614.0",
    "@aws-sdk/core": "3.614.0",
    "@aws-sdk/credential-provider-node": "3.614.0",
    "@aws-sdk/middleware-bucket-endpoint": "3.614.0",
    "@aws-sdk/middleware-expect-continue": "3.609.0",
    "@aws-sdk/middleware-flexible-checksums": "3.614.0",
    "@aws-sdk/middleware-host-header": "3.609.0",
    "@aws-sdk/middleware-location-constraint": "3.609.0",
    "@aws-sdk/middleware-logger": "3.609.0",
    "@aws-sdk/middleware-recursion-detection": "3.609.0",
    "@aws-sdk/middleware-sdk-s3": "3.614.0",
    "@aws-sdk/middleware-signing": "3.609.0",
    "@aws-sdk/middleware-ssec": "3.609.0",
    "@aws-sdk/middleware-user-agent": "3.614.0",
    "@aws-sdk/region-config-resolver": "3.614.0",
    "@aws-sdk/signature-v4-multi-region": "3.614.0",
    "@aws-sdk/types": "3.609.0",
    "@aws-sdk/util-endpoints": "3.614.0",
    "@aws-sdk/util-user-agent-browser": "3.609.0",
    "@aws-sdk/util-user-agent-node": "3.614.0",
    "@aws-sdk/xml-builder": "3.609.0",
    "@smithy/config-resolver": "^3.0.5",
    "@smithy/core": "^2.2.6",
    "@smithy/eventstream-serde-browser": "^3.0.4",
    "@smithy/eventstream-serde-config-resolver": "^3.0.3",
    "@smithy/eventstream-serde-node": "^3.0.4",
    "@smithy/fetch-http-handler": "^3.2.1",
    "@smithy/hash-blob-browser": "^3.1.2",
    "@smithy/hash-node": "^3.0.3",
    "@smithy/hash-stream-node": "^3.1.2",
    "@smithy/invalid-dependency": "^3.0.3",
    "@smithy/md5-js": "^3.0.3",
    "@smithy/middleware-content-length": "^3.0.3",
    "@smithy/middleware-endpoint": "^3.0.5",
    "@smithy/middleware-retry": "^3.0.9",
    "@smithy/middleware-serde": "^3.0.3",
    "@smithy/middleware-stack": "^3.0.3",
    "@smithy/node-config-provider": "^3.1.4",
    "@smithy/node-http-handler": "^3.1.2",
    "@smithy/protocol-http": "^4.0.3",
    "@smithy/smithy-client": "^3.1.7",
    "@smithy/types": "^3.3.0",
    "@smithy/url-parser": "^3.0.3",
    "@smithy/util-base64": "^3.0.0",
    "@smithy/util-body-length-browser": "^3.0.0",
    "@smithy/util-body-length-node": "^3.0.0",
    "@smithy/util-defaults-mode-browser": "^3.0.9",
    "@smithy/util-defaults-mode-node": "^3.0.9",
    "@smithy/util-endpoints": "^2.0.5",
    "@smithy/util-retry": "^3.0.3",
    "@smithy/util-stream": "^3.0.6",
    "@smithy/util-utf8": "^3.0.0",
    "@smithy/util-waiter": "^3.1.2",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@aws-sdk/signature-v4-crt": "3.614.0",
    "@tsconfig/node16": "16.1.3",
    "@types/chai": "^4.2.11",
    "@types/mocha": "^8.0.4",
    "@types/node": "^16.18.96",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=16.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-s3"
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es37();
init_dist_es54();

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/NodeDisableMultiregionAccessPointConfigOptions.js
init_dist_es20();

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/NodeUseArnRegionConfigOptions.js
init_dist_es20();
var NODE_USE_ARN_REGION_ENV_NAME = "AWS_S3_USE_ARN_REGION";
var NODE_USE_ARN_REGION_INI_NAME = "s3_use_arn_region";
var NODE_USE_ARN_REGION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env3) => booleanSelector(env3, NODE_USE_ARN_REGION_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_USE_ARN_REGION_INI_NAME, SelectorType.CONFIG),
  default: false
};

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/bucketEndpointMiddleware.js
init_dist_es2();

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es41();
init_dist_es25();

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e5) {
        reject(e5);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e5) {
        reject(e5);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t5[0] & 1)
      throw t5[1];
    return t5[1];
  }, trys: [], ops: [] }, f5, y3, t5, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f5)
      throw new TypeError("Generator is already executing.");
    while (g5 && (g5 = 0, op[0] && (_2 = 0)), _2)
      try {
        if (f5 = 1, y3 && (t5 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t5 = y3["return"]) && t5.call(y3), 0) : y3.next) && !(t5 = t5.call(y3, op[1])).done)
          return t5;
        if (y3 = 0, t5)
          op = [op[0] & 2, t5.value];
        switch (op[0]) {
          case 0:
          case 1:
            t5 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y3 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t5 = _2.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t5[1]) {
              _2.label = t5[1];
              t5 = op;
              break;
            }
            if (t5 && _2.label < t5[2]) {
              _2.label = t5[2];
              _2.ops.push(op);
              break;
            }
            if (t5[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e5) {
        op = [6, e5];
        y3 = 0;
      } finally {
        f5 = t5 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o5) {
  var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
  if (m5)
    return m5.call(o5);
  if (o5 && typeof o5.length === "number")
    return {
      next: function() {
        if (o5 && i5 >= o5.length)
          o5 = void 0;
        return { value: o5 && o5[i5++], done: !o5 };
      }
    };
  throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

// node_modules/@aws-crypto/util/node_modules/@smithy/util-buffer-from/dist-es/index.js
var import_buffer4 = require("buffer");
var fromString2 = (input, encoding) => {
  if (typeof input !== "string") {
    throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
  }
  return encoding ? import_buffer4.Buffer.from(input, encoding) : import_buffer4.Buffer.from(input);
};

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf82 = (input) => {
  const buf = fromString2(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}

// node_modules/@aws-crypto/util/build/module/numToUint8.js
function numToUint8(num) {
  return new Uint8Array([
    (num & 4278190080) >> 24,
    (num & 16711680) >> 16,
    (num & 65280) >> 8,
    num & 255
  ]);
}

// node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
function uint32ArrayFrom(a_lookUpTable2) {
  if (!Uint32Array.from) {
    var return_array = new Uint32Array(a_lookUpTable2.length);
    var a_index = 0;
    while (a_index < a_lookUpTable2.length) {
      return_array[a_index] = a_lookUpTable2[a_index];
      a_index += 1;
    }
    return return_array;
  }
  return Uint32Array.from(a_lookUpTable2);
}

// node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
var AwsCrc32 = (
  /** @class */
  function() {
    function AwsCrc322() {
      this.crc32 = new Crc32();
    }
    AwsCrc322.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32.update(convertToBuffer(toHash));
    };
    AwsCrc322.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          return [2, numToUint8(this.crc32.digest())];
        });
      });
    };
    AwsCrc322.prototype.reset = function() {
      this.crc32 = new Crc32();
    };
    return AwsCrc322;
  }()
);

// node_modules/@aws-crypto/crc32/build/module/index.js
var Crc32 = (
  /** @class */
  function() {
    function Crc322() {
      this.checksum = 4294967295;
    }
    Crc322.prototype.update = function(data) {
      var e_1, _a2;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a2 = data_1.return))
            _a2.call(data_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return this;
    };
    Crc322.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc322;
  }()
);
var a_lookUpTable = [
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
];
var lookupTable = uint32ArrayFrom(a_lookUpTable);

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
init_dist_es15();

// node_modules/@smithy/eventstream-codec/dist-es/Int64.js
init_dist_es15();
var Int642 = class {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
      bytes[i5] = remaining;
    }
    if (number < 0) {
      negate2(bytes);
    }
    return new Int642(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate2(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate2(bytes) {
  for (let i5 = 0; i5 < 8; i5++) {
    bytes[i5] ^= 255;
  }
  for (let i5 = 7; i5 > -1; i5--) {
    bytes[i5]++;
    if (bytes[i5] !== 0)
      break;
  }
}

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
  constructor(toUtf82, fromUtf84) {
    this.toUtf8 = toUtf82;
    this.fromUtf8 = fromUtf84;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN2.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
};
var HEADER_VALUE_TYPE2;
(function(HEADER_VALUE_TYPE3) {
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
  constructor(toUtf82, fromUtf84) {
    this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf84);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }
  feed(message) {
    this.messageBuffer.push(this.decode(message));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return message;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessages() {
        return messages;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  encode({ headers: rawHeaders, body }) {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;
    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum = new Crc32();
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  }
  decode(message) {
    const { headers, body } = splitMessage(message);
    return { headers: this.headerMarshaller.parse(headers), body };
  }
  formatHeaders(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === void 0)
        continue;
      yield deserialized;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
};

// node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = (size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  };
  const iterator = async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  };
  return {
    [Symbol.asyncIterator]: iterator
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function getMessageUnmarshaller(deserializer, toUtf82) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error = new Error(toUtf82(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }
  deserialize(body, deserializer) {
    const inputStream = getChunkedStream(body);
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
    });
  }
  serialize(inputStream, serializer) {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true
    });
  }
};

// node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
var import_stream6 = require("stream");

// node_modules/@smithy/eventstream-serde-node/dist-es/utils.js
async function* readabletoIterable(readStream) {
  let streamEnded = false;
  let generationEnded = false;
  const records = new Array();
  readStream.on("error", (err) => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });
  readStream.on("data", (data) => {
    records.push(data);
  });
  readStream.on("end", () => {
    streamEnded = true;
  });
  while (!generationEnded) {
    const value = await new Promise((resolve) => setTimeout(() => resolve(records.shift()), 0));
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}

// node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller2 = class {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.universalMarshaller = new EventStreamMarshaller({
      utf8Decoder,
      utf8Encoder
    });
  }
  deserialize(body, deserializer) {
    const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }
  serialize(input, serializer) {
    return import_stream6.Readable.from(this.universalMarshaller.serialize(input, serializer));
  }
};

// node_modules/@smithy/eventstream-serde-node/dist-es/provider.js
var eventStreamSerdeProvider = (options) => new EventStreamMarshaller2(options);

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es42();

// node_modules/@smithy/hash-stream-node/dist-es/fileStreamHasher.js
var import_fs6 = require("fs");

// node_modules/@smithy/hash-stream-node/dist-es/HashCalculator.js
init_dist_es9();
var import_stream7 = require("stream");
var HashCalculator = class extends import_stream7.Writable {
  constructor(hash, options) {
    super(options);
    this.hash = hash;
  }
  _write(chunk, encoding, callback) {
    try {
      this.hash.update(toUint8Array(chunk));
    } catch (err) {
      return callback(err);
    }
    callback();
  }
};

// node_modules/@smithy/hash-stream-node/dist-es/readableStreamHasher.js
var readableStreamHasher = (hashCtor, readableStream) => {
  if (readableStream.readableFlowing !== null) {
    throw new Error("Unable to calculate hash for flowing readable stream");
  }
  const hash = new hashCtor();
  const hashCalculator = new HashCalculator(hash);
  readableStream.pipe(hashCalculator);
  return new Promise((resolve, reject) => {
    readableStream.on("error", (err) => {
      hashCalculator.end();
      reject(err);
    });
    hashCalculator.on("error", reject);
    hashCalculator.on("finish", () => {
      hash.digest().then(resolve).catch(reject);
    });
  });
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es35();
init_dist_es28();
init_dist_es13();
init_dist_es43();
init_dist_es34();

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
var signatureV4CrtContainer = {
  CrtSignerV4: null
};

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
  constructor(options) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async signWithCredentials(requestToSign, credentials, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().signWithCredentials(requestToSign, credentials, options);
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  async presignWithCredentials(originalRequest, credentials, options = {}) {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      let CrtSignerV4 = null;
      try {
        CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        if (typeof CrtSignerV4 !== "function")
          throw new Error();
      } catch (e5) {
        e5.message = `${e5.message}
Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`;
        throw e5;
      }
      this.sigv4aSigner = new CrtSignerV4({
        ...this.signerOptions,
        signingAlgorithm: 1
      });
    }
    return this.sigv4aSigner;
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
init_dist_es17();
init_dist_es30();
init_dist_es10();
init_dist_es16();
init_dist_es9();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
init_dist_es23();
init_dist_es22();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
var ce = "required";
var cf = "type";
var cg = "conditions";
var ch = "fn";
var ci = "argv";
var cj = "ref";
var ck = "assign";
var cl = "url";
var cm = "properties";
var cn = "backend";
var co = "authSchemes";
var cp = "disableDoubleEncoding";
var cq = "signingName";
var cr = "signingRegion";
var cs = "headers";
var ct = "signingRegionSet";
var a4 = false;
var b4 = true;
var c4 = "isSet";
var d4 = "booleanEquals";
var e4 = "error";
var f4 = "aws.partition";
var g4 = "stringEquals";
var h4 = "getAttr";
var i4 = "name";
var j4 = "substring";
var k4 = "bucketSuffix";
var l4 = "parseURL";
var m4 = "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}";
var n4 = "endpoint";
var o4 = "tree";
var p4 = "aws.isVirtualHostableS3Bucket";
var q4 = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var r4 = "not";
var s4 = "{url#scheme}://{url#authority}{url#path}";
var t4 = "hardwareType";
var u4 = "regionPrefix";
var v5 = "bucketAliasSuffix";
var w4 = "outpostId";
var x4 = "isValidHostLabel";
var y2 = "sigv4a";
var z2 = "s3-outposts";
var A2 = "s3";
var B2 = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}";
var C2 = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}";
var D2 = "https://{Bucket}.s3.{partitionResult#dnsSuffix}";
var E2 = "aws.parseArn";
var F2 = "bucketArn";
var G2 = "arnType";
var H2 = "";
var I2 = "s3-object-lambda";
var J2 = "accesspoint";
var K = "accessPointName";
var L = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}";
var M = "mrapPartition";
var N = "outpostType";
var O = "arnPrefix";
var P = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}";
var Q = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}";
var R = "https://s3.{partitionResult#dnsSuffix}";
var S = { [ce]: false, [cf]: "String" };
var T = { [ce]: true, "default": false, [cf]: "Boolean" };
var U = { [ce]: false, [cf]: "Boolean" };
var V = { [ch]: d4, [ci]: [{ [cj]: "Accelerate" }, true] };
var W = { [ch]: d4, [ci]: [{ [cj]: "UseFIPS" }, true] };
var X = { [ch]: d4, [ci]: [{ [cj]: "UseDualStack" }, true] };
var Y = { [ch]: c4, [ci]: [{ [cj]: "Endpoint" }] };
var Z = { [ch]: f4, [ci]: [{ [cj]: "Region" }], [ck]: "partitionResult" };
var aa = { [ch]: g4, [ci]: [{ [ch]: h4, [ci]: [{ [cj]: "partitionResult" }, i4] }, "aws-cn"] };
var ab = { [ch]: c4, [ci]: [{ [cj]: "Bucket" }] };
var ac = { [cj]: "Bucket" };
var ad = { [ch]: l4, [ci]: [{ [cj]: "Endpoint" }], [ck]: "url" };
var ae = { [ch]: d4, [ci]: [{ [ch]: h4, [ci]: [{ [cj]: "url" }, "isIp"] }, true] };
var af = { [cj]: "url" };
var ag = { [ch]: "uriEncode", [ci]: [ac], [ck]: "uri_encoded_bucket" };
var ah = { [cn]: "S3Express", [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: "s3express", [cr]: "{Region}" }] };
var ai = {};
var aj = { [ch]: p4, [ci]: [ac, false] };
var ak = { [e4]: "S3Express bucket name is not a valid virtual hostable name.", [cf]: e4 };
var al = { [cn]: "S3Express", [co]: [{ [cp]: true, [i4]: "sigv4-s3express", [cq]: "s3express", [cr]: "{Region}" }] };
var am = { [ch]: c4, [ci]: [{ [cj]: "UseS3ExpressControlEndpoint" }] };
var an = { [ch]: d4, [ci]: [{ [cj]: "UseS3ExpressControlEndpoint" }, true] };
var ao = { [ch]: r4, [ci]: [Y] };
var ap = { [e4]: "Unrecognized S3Express bucket name format.", [cf]: e4 };
var aq = { [ch]: r4, [ci]: [ab] };
var ar = { [cj]: t4 };
var as = { [cg]: [ao], [e4]: "Expected a endpoint to be specified but no endpoint was found", [cf]: e4 };
var at = { [co]: [{ [cp]: true, [i4]: y2, [cq]: z2, [ct]: ["*"] }, { [cp]: true, [i4]: "sigv4", [cq]: z2, [cr]: "{Region}" }] };
var au = { [ch]: d4, [ci]: [{ [cj]: "ForcePathStyle" }, false] };
var av = { [cj]: "ForcePathStyle" };
var aw = { [ch]: d4, [ci]: [{ [cj]: "Accelerate" }, false] };
var ax = { [ch]: g4, [ci]: [{ [cj]: "Region" }, "aws-global"] };
var ay = { [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: A2, [cr]: "us-east-1" }] };
var az = { [ch]: r4, [ci]: [ax] };
var aA = { [ch]: d4, [ci]: [{ [cj]: "UseGlobalEndpoint" }, true] };
var aB = { [cl]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: { [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: A2, [cr]: "{Region}" }] }, [cs]: {} };
var aC = { [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: A2, [cr]: "{Region}" }] };
var aD = { [ch]: d4, [ci]: [{ [cj]: "UseGlobalEndpoint" }, false] };
var aE = { [ch]: d4, [ci]: [{ [cj]: "UseDualStack" }, false] };
var aF = { [cl]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aG = { [ch]: d4, [ci]: [{ [cj]: "UseFIPS" }, false] };
var aH = { [cl]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aI = { [cl]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aJ = { [ch]: d4, [ci]: [{ [ch]: h4, [ci]: [af, "isIp"] }, false] };
var aK = { [cl]: B2, [cm]: aC, [cs]: {} };
var aL = { [cl]: q4, [cm]: aC, [cs]: {} };
var aM = { [n4]: aL, [cf]: n4 };
var aN = { [cl]: C2, [cm]: aC, [cs]: {} };
var aO = { [cl]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var aP = { [e4]: "Invalid region: region was not a valid DNS name.", [cf]: e4 };
var aQ = { [cj]: F2 };
var aR = { [cj]: G2 };
var aS = { [ch]: h4, [ci]: [aQ, "service"] };
var aT = { [cj]: K };
var aU = { [cg]: [X], [e4]: "S3 Object Lambda does not support Dual-stack", [cf]: e4 };
var aV = { [cg]: [V], [e4]: "S3 Object Lambda does not support S3 Accelerate", [cf]: e4 };
var aW = { [cg]: [{ [ch]: c4, [ci]: [{ [cj]: "DisableAccessPoints" }] }, { [ch]: d4, [ci]: [{ [cj]: "DisableAccessPoints" }, true] }], [e4]: "Access points are not supported for this operation", [cf]: e4 };
var aX = { [cg]: [{ [ch]: c4, [ci]: [{ [cj]: "UseArnRegion" }] }, { [ch]: d4, [ci]: [{ [cj]: "UseArnRegion" }, false] }, { [ch]: r4, [ci]: [{ [ch]: g4, [ci]: [{ [ch]: h4, [ci]: [aQ, "region"] }, "{Region}"] }] }], [e4]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [cf]: e4 };
var aY = { [ch]: h4, [ci]: [{ [cj]: "bucketPartition" }, i4] };
var aZ = { [ch]: h4, [ci]: [aQ, "accountId"] };
var ba = { [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: I2, [cr]: "{bucketArn#region}" }] };
var bb = { [e4]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [cf]: e4 };
var bc = { [e4]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [cf]: e4 };
var bd = { [e4]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [cf]: e4 };
var be = { [e4]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [cf]: e4 };
var bf = { [e4]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [cf]: e4 };
var bg = { [e4]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [cf]: e4 };
var bh = { [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: A2, [cr]: "{bucketArn#region}" }] };
var bi = { [co]: [{ [cp]: true, [i4]: y2, [cq]: z2, [ct]: ["*"] }, { [cp]: true, [i4]: "sigv4", [cq]: z2, [cr]: "{bucketArn#region}" }] };
var bj = { [ch]: E2, [ci]: [ac] };
var bk = { [cl]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bl = { [cl]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bm = { [cl]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bn = { [cl]: P, [cm]: aC, [cs]: {} };
var bo = { [cl]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: aC, [cs]: {} };
var bp = { [cj]: "UseObjectLambdaEndpoint" };
var bq = { [co]: [{ [cp]: true, [i4]: "sigv4", [cq]: I2, [cr]: "{Region}" }] };
var br = { [cl]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bs = { [cl]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bt = { [cl]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bu = { [cl]: s4, [cm]: aC, [cs]: {} };
var bv = { [cl]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [cm]: aC, [cs]: {} };
var bw = [{ [cj]: "Region" }];
var bx = [{ [cj]: "Endpoint" }];
var by = [ac];
var bz = [X];
var bA = [V];
var bB = [Y, ad];
var bC = [{ [ch]: c4, [ci]: [{ [cj]: "DisableS3ExpressSessionAuth" }] }, { [ch]: d4, [ci]: [{ [cj]: "DisableS3ExpressSessionAuth" }, true] }];
var bD = [ae];
var bE = [ag];
var bF = [aj];
var bG = [W];
var bH = [{ [ch]: j4, [ci]: [ac, 6, 14, true], [ck]: "s3expressAvailabilityZoneId" }, { [ch]: j4, [ci]: [ac, 14, 16, true], [ck]: "s3expressAvailabilityZoneDelim" }, { [ch]: g4, [ci]: [{ [cj]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bI = [{ [cg]: [W], [n4]: { [cl]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: ah, [cs]: {} }, [cf]: n4 }, { [n4]: { [cl]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: ah, [cs]: {} }, [cf]: n4 }];
var bJ = [{ [ch]: j4, [ci]: [ac, 6, 15, true], [ck]: "s3expressAvailabilityZoneId" }, { [ch]: j4, [ci]: [ac, 15, 17, true], [ck]: "s3expressAvailabilityZoneDelim" }, { [ch]: g4, [ci]: [{ [cj]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bK = [{ [cg]: [W], [n4]: { [cl]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: al, [cs]: {} }, [cf]: n4 }, { [n4]: { [cl]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cm]: al, [cs]: {} }, [cf]: n4 }];
var bL = [ab];
var bM = [{ [ch]: x4, [ci]: [{ [cj]: w4 }, false] }];
var bN = [{ [ch]: g4, [ci]: [{ [cj]: u4 }, "beta"] }];
var bO = ["*"];
var bP = [Z];
var bQ = [{ [ch]: x4, [ci]: [{ [cj]: "Region" }, false] }];
var bR = [{ [ch]: g4, [ci]: [{ [cj]: "Region" }, "us-east-1"] }];
var bS = [{ [ch]: g4, [ci]: [aR, J2] }];
var bT = [{ [ch]: h4, [ci]: [aQ, "resourceId[1]"], [ck]: K }, { [ch]: r4, [ci]: [{ [ch]: g4, [ci]: [aT, H2] }] }];
var bU = [aQ, "resourceId[1]"];
var bV = [{ [ch]: r4, [ci]: [{ [ch]: g4, [ci]: [{ [ch]: h4, [ci]: [aQ, "region"] }, H2] }] }];
var bW = [{ [ch]: r4, [ci]: [{ [ch]: c4, [ci]: [{ [ch]: h4, [ci]: [aQ, "resourceId[2]"] }] }] }];
var bX = [aQ, "resourceId[2]"];
var bY = [{ [ch]: f4, [ci]: [{ [ch]: h4, [ci]: [aQ, "region"] }], [ck]: "bucketPartition" }];
var bZ = [{ [ch]: g4, [ci]: [aY, { [ch]: h4, [ci]: [{ [cj]: "partitionResult" }, i4] }] }];
var ca = [{ [ch]: x4, [ci]: [{ [ch]: h4, [ci]: [aQ, "region"] }, true] }];
var cb = [{ [ch]: x4, [ci]: [aZ, false] }];
var cc = [{ [ch]: x4, [ci]: [aT, false] }];
var cd = [{ [ch]: x4, [ci]: [{ [cj]: "Region" }, true] }];
var _data4 = { version: "1.0", parameters: { Bucket: S, Region: S, UseFIPS: T, UseDualStack: T, Endpoint: S, ForcePathStyle: T, Accelerate: T, UseGlobalEndpoint: T, UseObjectLambdaEndpoint: U, Key: S, Prefix: S, CopySource: S, DisableAccessPoints: U, DisableMultiRegionAccessPoints: T, UseArnRegion: U, UseS3ExpressControlEndpoint: U, DisableS3ExpressSessionAuth: U }, rules: [{ [cg]: [{ [ch]: c4, [ci]: bw }], rules: [{ [cg]: [V, W], error: "Accelerate cannot be used with FIPS", [cf]: e4 }, { [cg]: [X, Y], error: "Cannot set dual-stack in combination with a custom endpoint.", [cf]: e4 }, { [cg]: [Y, W], error: "A custom endpoint cannot be combined with FIPS", [cf]: e4 }, { [cg]: [Y, V], error: "A custom endpoint cannot be combined with S3 Accelerate", [cf]: e4 }, { [cg]: [W, Z, aa], error: "Partition does not support FIPS", [cf]: e4 }, { [cg]: [ab, { [ch]: j4, [ci]: [ac, 0, 6, b4], [ck]: k4 }, { [ch]: g4, [ci]: [{ [cj]: k4 }, "--x-s3"] }], rules: [{ [cg]: bz, error: "S3Express does not support Dual-stack.", [cf]: e4 }, { [cg]: bA, error: "S3Express does not support S3 Accelerate.", [cf]: e4 }, { [cg]: bB, rules: [{ [cg]: bC, rules: [{ [cg]: bD, rules: [{ [cg]: bE, rules: [{ endpoint: { [cl]: m4, [cm]: ah, [cs]: ai }, [cf]: n4 }], [cf]: o4 }], [cf]: o4 }, { [cg]: bF, rules: [{ endpoint: { [cl]: q4, [cm]: ah, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, ak], [cf]: o4 }, { [cg]: bD, rules: [{ [cg]: bE, rules: [{ endpoint: { [cl]: m4, [cm]: al, [cs]: ai }, [cf]: n4 }], [cf]: o4 }], [cf]: o4 }, { [cg]: bF, rules: [{ endpoint: { [cl]: q4, [cm]: al, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, ak], [cf]: o4 }, { [cg]: [am, an], rules: [{ [cg]: [ag, ao], rules: [{ [cg]: bG, endpoint: { [cl]: "https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}", [cm]: ah, [cs]: ai }, [cf]: n4 }, { endpoint: { [cl]: "https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}", [cm]: ah, [cs]: ai }, [cf]: n4 }], [cf]: o4 }], [cf]: o4 }, { [cg]: bF, rules: [{ [cg]: bC, rules: [{ [cg]: bH, rules: bI, [cf]: o4 }, { [cg]: bJ, rules: bI, [cf]: o4 }, ap], [cf]: o4 }, { [cg]: bH, rules: bK, [cf]: o4 }, { [cg]: bJ, rules: bK, [cf]: o4 }, ap], [cf]: o4 }, ak], [cf]: o4 }, { [cg]: [aq, am, an], rules: [{ [cg]: bB, endpoint: { [cl]: s4, [cm]: ah, [cs]: ai }, [cf]: n4 }, { [cg]: bG, endpoint: { [cl]: "https://s3express-control-fips.{Region}.amazonaws.com", [cm]: ah, [cs]: ai }, [cf]: n4 }, { endpoint: { [cl]: "https://s3express-control.{Region}.amazonaws.com", [cm]: ah, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { [cg]: [ab, { [ch]: j4, [ci]: [ac, 49, 50, b4], [ck]: t4 }, { [ch]: j4, [ci]: [ac, 8, 12, b4], [ck]: u4 }, { [ch]: j4, [ci]: [ac, 0, 7, b4], [ck]: v5 }, { [ch]: j4, [ci]: [ac, 32, 49, b4], [ck]: w4 }, { [ch]: f4, [ci]: bw, [ck]: "regionPartition" }, { [ch]: g4, [ci]: [{ [cj]: v5 }, "--op-s3"] }], rules: [{ [cg]: bM, rules: [{ [cg]: [{ [ch]: g4, [ci]: [ar, "e"] }], rules: [{ [cg]: bN, rules: [as, { [cg]: bB, endpoint: { [cl]: "https://{Bucket}.ec2.{url#authority}", [cm]: at, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { endpoint: { [cl]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cm]: at, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { [cg]: [{ [ch]: g4, [ci]: [ar, "o"] }], rules: [{ [cg]: bN, rules: [as, { [cg]: bB, endpoint: { [cl]: "https://{Bucket}.op-{outpostId}.{url#authority}", [cm]: at, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { endpoint: { [cl]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cm]: at, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [cf]: e4 }], [cf]: o4 }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [cf]: e4 }], [cf]: o4 }, { [cg]: bL, rules: [{ [cg]: [Y, { [ch]: r4, [ci]: [{ [ch]: c4, [ci]: [{ [ch]: l4, [ci]: bx }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [cf]: e4 }, { [cg]: [au, aj], rules: [{ [cg]: bP, rules: [{ [cg]: bQ, rules: [{ [cg]: [V, aa], error: "S3 Accelerate cannot be used in this region", [cf]: e4 }, { [cg]: [X, W, aw, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [X, W, aw, ao, az, aA], rules: [{ endpoint: aB, [cf]: n4 }], [cf]: o4 }, { [cg]: [X, W, aw, ao, az, aD], endpoint: aB, [cf]: n4 }, { [cg]: [aE, W, aw, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, W, aw, ao, az, aA], rules: [{ endpoint: aF, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, W, aw, ao, az, aD], endpoint: aF, [cf]: n4 }, { [cg]: [X, aG, V, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [X, aG, V, ao, az, aA], rules: [{ endpoint: aH, [cf]: n4 }], [cf]: o4 }, { [cg]: [X, aG, V, ao, az, aD], endpoint: aH, [cf]: n4 }, { [cg]: [X, aG, aw, ao, ax], endpoint: { [cl]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [X, aG, aw, ao, az, aA], rules: [{ endpoint: aI, [cf]: n4 }], [cf]: o4 }, { [cg]: [X, aG, aw, ao, az, aD], endpoint: aI, [cf]: n4 }, { [cg]: [aE, aG, aw, Y, ad, ae, ax], endpoint: { [cl]: B2, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, aG, aw, Y, ad, aJ, ax], endpoint: { [cl]: q4, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, aG, aw, Y, ad, ae, az, aA], rules: [{ [cg]: bR, endpoint: aK, [cf]: n4 }, { endpoint: aK, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, aG, aw, Y, ad, aJ, az, aA], rules: [{ [cg]: bR, endpoint: aL, [cf]: n4 }, aM], [cf]: o4 }, { [cg]: [aE, aG, aw, Y, ad, ae, az, aD], endpoint: aK, [cf]: n4 }, { [cg]: [aE, aG, aw, Y, ad, aJ, az, aD], endpoint: aL, [cf]: n4 }, { [cg]: [aE, aG, V, ao, ax], endpoint: { [cl]: C2, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, aG, V, ao, az, aA], rules: [{ [cg]: bR, endpoint: aN, [cf]: n4 }, { endpoint: aN, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, aG, V, ao, az, aD], endpoint: aN, [cf]: n4 }, { [cg]: [aE, aG, aw, ao, ax], endpoint: { [cl]: D2, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, aG, aw, ao, az, aA], rules: [{ [cg]: bR, endpoint: { [cl]: D2, [cm]: aC, [cs]: ai }, [cf]: n4 }, { endpoint: aO, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, aG, aw, ao, az, aD], endpoint: aO, [cf]: n4 }], [cf]: o4 }, aP], [cf]: o4 }], [cf]: o4 }, { [cg]: [Y, ad, { [ch]: g4, [ci]: [{ [ch]: h4, [ci]: [af, "scheme"] }, "http"] }, { [ch]: p4, [ci]: [ac, b4] }, au, aG, aE, aw], rules: [{ [cg]: bP, rules: [{ [cg]: bQ, rules: [aM], [cf]: o4 }, aP], [cf]: o4 }], [cf]: o4 }, { [cg]: [au, { [ch]: E2, [ci]: by, [ck]: F2 }], rules: [{ [cg]: [{ [ch]: h4, [ci]: [aQ, "resourceId[0]"], [ck]: G2 }, { [ch]: r4, [ci]: [{ [ch]: g4, [ci]: [aR, H2] }] }], rules: [{ [cg]: [{ [ch]: g4, [ci]: [aS, I2] }], rules: [{ [cg]: bS, rules: [{ [cg]: bT, rules: [aU, aV, { [cg]: bV, rules: [aW, { [cg]: bW, rules: [aX, { [cg]: bY, rules: [{ [cg]: bP, rules: [{ [cg]: bZ, rules: [{ [cg]: ca, rules: [{ [cg]: [{ [ch]: g4, [ci]: [aZ, H2] }], error: "Invalid ARN: Missing account id", [cf]: e4 }, { [cg]: cb, rules: [{ [cg]: cc, rules: [{ [cg]: bB, endpoint: { [cl]: L, [cm]: ba, [cs]: ai }, [cf]: n4 }, { [cg]: bG, endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: ba, [cs]: ai }, [cf]: n4 }, { endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: ba, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, bb], [cf]: o4 }, bc], [cf]: o4 }, bd], [cf]: o4 }, be], [cf]: o4 }], [cf]: o4 }], [cf]: o4 }, bf], [cf]: o4 }, { error: "Invalid ARN: bucket ARN is missing a region", [cf]: e4 }], [cf]: o4 }, bg], [cf]: o4 }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [cf]: e4 }], [cf]: o4 }, { [cg]: bS, rules: [{ [cg]: bT, rules: [{ [cg]: bV, rules: [{ [cg]: bS, rules: [{ [cg]: bV, rules: [aW, { [cg]: bW, rules: [aX, { [cg]: bY, rules: [{ [cg]: bP, rules: [{ [cg]: [{ [ch]: g4, [ci]: [aY, "{partitionResult#name}"] }], rules: [{ [cg]: ca, rules: [{ [cg]: [{ [ch]: g4, [ci]: [aS, A2] }], rules: [{ [cg]: cb, rules: [{ [cg]: cc, rules: [{ [cg]: bA, error: "Access Points do not support S3 Accelerate", [cf]: e4 }, { [cg]: [W, X], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n4 }, { [cg]: [W, aE], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n4 }, { [cg]: [aG, X], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n4 }, { [cg]: [aG, aE, Y, ad], endpoint: { [cl]: L, [cm]: bh, [cs]: ai }, [cf]: n4 }, { [cg]: [aG, aE], endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bh, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, bb], [cf]: o4 }, bc], [cf]: o4 }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [cf]: e4 }], [cf]: o4 }, bd], [cf]: o4 }, be], [cf]: o4 }], [cf]: o4 }], [cf]: o4 }, bf], [cf]: o4 }], [cf]: o4 }], [cf]: o4 }, { [cg]: [{ [ch]: x4, [ci]: [aT, b4] }], rules: [{ [cg]: bz, error: "S3 MRAP does not support dual-stack", [cf]: e4 }, { [cg]: bG, error: "S3 MRAP does not support FIPS", [cf]: e4 }, { [cg]: bA, error: "S3 MRAP does not support S3 Accelerate", [cf]: e4 }, { [cg]: [{ [ch]: d4, [ci]: [{ [cj]: "DisableMultiRegionAccessPoints" }, b4] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [cf]: e4 }, { [cg]: [{ [ch]: f4, [ci]: bw, [ck]: M }], rules: [{ [cg]: [{ [ch]: g4, [ci]: [{ [ch]: h4, [ci]: [{ [cj]: M }, i4] }, { [ch]: h4, [ci]: [aQ, "partition"] }] }], rules: [{ endpoint: { [cl]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [cm]: { [co]: [{ [cp]: b4, name: y2, [cq]: A2, [ct]: bO }] }, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [cf]: e4 }], [cf]: o4 }], [cf]: o4 }, { error: "Invalid Access Point Name", [cf]: e4 }], [cf]: o4 }, bg], [cf]: o4 }, { [cg]: [{ [ch]: g4, [ci]: [aS, z2] }], rules: [{ [cg]: bz, error: "S3 Outposts does not support Dual-stack", [cf]: e4 }, { [cg]: bG, error: "S3 Outposts does not support FIPS", [cf]: e4 }, { [cg]: bA, error: "S3 Outposts does not support S3 Accelerate", [cf]: e4 }, { [cg]: [{ [ch]: c4, [ci]: [{ [ch]: h4, [ci]: [aQ, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [cf]: e4 }, { [cg]: [{ [ch]: h4, [ci]: bU, [ck]: w4 }], rules: [{ [cg]: bM, rules: [aX, { [cg]: bY, rules: [{ [cg]: bP, rules: [{ [cg]: bZ, rules: [{ [cg]: ca, rules: [{ [cg]: cb, rules: [{ [cg]: [{ [ch]: h4, [ci]: bX, [ck]: N }], rules: [{ [cg]: [{ [ch]: h4, [ci]: [aQ, "resourceId[3]"], [ck]: K }], rules: [{ [cg]: [{ [ch]: g4, [ci]: [{ [cj]: N }, J2] }], rules: [{ [cg]: bB, endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [cm]: bi, [cs]: ai }, [cf]: n4 }, { endpoint: { [cl]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cm]: bi, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [cf]: e4 }], [cf]: o4 }, { error: "Invalid ARN: expected an access point name", [cf]: e4 }], [cf]: o4 }, { error: "Invalid ARN: Expected a 4-component resource", [cf]: e4 }], [cf]: o4 }, bc], [cf]: o4 }, bd], [cf]: o4 }, be], [cf]: o4 }], [cf]: o4 }], [cf]: o4 }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [cf]: e4 }], [cf]: o4 }, { error: "Invalid ARN: The Outpost Id was not set", [cf]: e4 }], [cf]: o4 }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [cf]: e4 }], [cf]: o4 }, { error: "Invalid ARN: No ARN type specified", [cf]: e4 }], [cf]: o4 }, { [cg]: [{ [ch]: j4, [ci]: [ac, 0, 4, a4], [ck]: O }, { [ch]: g4, [ci]: [{ [cj]: O }, "arn:"] }, { [ch]: r4, [ci]: [{ [ch]: c4, [ci]: [bj] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [cf]: e4 }, { [cg]: [{ [ch]: d4, [ci]: [av, b4] }, bj], error: "Path-style addressing cannot be used with ARN buckets", [cf]: e4 }, { [cg]: bE, rules: [{ [cg]: bP, rules: [{ [cg]: [aw], rules: [{ [cg]: [X, ao, W, ax], endpoint: { [cl]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [X, ao, W, az, aA], rules: [{ endpoint: bk, [cf]: n4 }], [cf]: o4 }, { [cg]: [X, ao, W, az, aD], endpoint: bk, [cf]: n4 }, { [cg]: [aE, ao, W, ax], endpoint: { [cl]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, ao, W, az, aA], rules: [{ endpoint: bl, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, ao, W, az, aD], endpoint: bl, [cf]: n4 }, { [cg]: [X, ao, aG, ax], endpoint: { [cl]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [X, ao, aG, az, aA], rules: [{ endpoint: bm, [cf]: n4 }], [cf]: o4 }, { [cg]: [X, ao, aG, az, aD], endpoint: bm, [cf]: n4 }, { [cg]: [aE, Y, ad, aG, ax], endpoint: { [cl]: P, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, Y, ad, aG, az, aA], rules: [{ [cg]: bR, endpoint: bn, [cf]: n4 }, { endpoint: bn, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, Y, ad, aG, az, aD], endpoint: bn, [cf]: n4 }, { [cg]: [aE, ao, aG, ax], endpoint: { [cl]: Q, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aE, ao, aG, az, aA], rules: [{ [cg]: bR, endpoint: { [cl]: Q, [cm]: aC, [cs]: ai }, [cf]: n4 }, { endpoint: bo, [cf]: n4 }], [cf]: o4 }, { [cg]: [aE, ao, aG, az, aD], endpoint: bo, [cf]: n4 }], [cf]: o4 }, { error: "Path-style addressing cannot be used with S3 Accelerate", [cf]: e4 }], [cf]: o4 }], [cf]: o4 }], [cf]: o4 }, { [cg]: [{ [ch]: c4, [ci]: [bp] }, { [ch]: d4, [ci]: [bp, b4] }], rules: [{ [cg]: bP, rules: [{ [cg]: cd, rules: [aU, aV, { [cg]: bB, endpoint: { [cl]: s4, [cm]: bq, [cs]: ai }, [cf]: n4 }, { [cg]: bG, endpoint: { [cl]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [cm]: bq, [cs]: ai }, [cf]: n4 }, { endpoint: { [cl]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [cm]: bq, [cs]: ai }, [cf]: n4 }], [cf]: o4 }, aP], [cf]: o4 }], [cf]: o4 }, { [cg]: [aq], rules: [{ [cg]: bP, rules: [{ [cg]: cd, rules: [{ [cg]: [W, X, ao, ax], endpoint: { [cl]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [W, X, ao, az, aA], rules: [{ endpoint: br, [cf]: n4 }], [cf]: o4 }, { [cg]: [W, X, ao, az, aD], endpoint: br, [cf]: n4 }, { [cg]: [W, aE, ao, ax], endpoint: { [cl]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [W, aE, ao, az, aA], rules: [{ endpoint: bs, [cf]: n4 }], [cf]: o4 }, { [cg]: [W, aE, ao, az, aD], endpoint: bs, [cf]: n4 }, { [cg]: [aG, X, ao, ax], endpoint: { [cl]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aG, X, ao, az, aA], rules: [{ endpoint: bt, [cf]: n4 }], [cf]: o4 }, { [cg]: [aG, X, ao, az, aD], endpoint: bt, [cf]: n4 }, { [cg]: [aG, aE, Y, ad, ax], endpoint: { [cl]: s4, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aG, aE, Y, ad, az, aA], rules: [{ [cg]: bR, endpoint: bu, [cf]: n4 }, { endpoint: bu, [cf]: n4 }], [cf]: o4 }, { [cg]: [aG, aE, Y, ad, az, aD], endpoint: bu, [cf]: n4 }, { [cg]: [aG, aE, ao, ax], endpoint: { [cl]: R, [cm]: ay, [cs]: ai }, [cf]: n4 }, { [cg]: [aG, aE, ao, az, aA], rules: [{ [cg]: bR, endpoint: { [cl]: R, [cm]: aC, [cs]: ai }, [cf]: n4 }, { endpoint: bv, [cf]: n4 }], [cf]: o4 }, { [cg]: [aG, aE, ao, az, aD], endpoint: bv, [cf]: n4 }], [cf]: o4 }, aP], [cf]: o4 }], [cf]: o4 }], [cf]: o4 }, { error: "A region must be set when sending requests to S3.", [cf]: e4 }] };
var ruleSet4 = _data4;

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver4 = (endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet4, {
    endpointParams,
    logger: context.logger
  });
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
var getRuntimeConfig7 = (config2) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config2?.base64Decoder ?? fromBase64,
    base64Encoder: config2?.base64Encoder ?? toBase64,
    disableHostPrefix: config2?.disableHostPrefix ?? false,
    endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver4,
    extensions: config2?.extensions ?? [],
    getAwsChunkedEncodingStream: config2?.getAwsChunkedEncodingStream ?? getAwsChunkedEncodingStream,
    logger: config2?.logger ?? new NoOpLogger(),
    sdkStreamMixin: config2?.sdkStreamMixin ?? sdkStreamMixin2,
    serviceId: config2?.serviceId ?? "S3",
    signerConstructor: config2?.signerConstructor ?? SignatureV4MultiRegion,
    signingEscapePath: config2?.signingEscapePath ?? false,
    urlParser: config2?.urlParser ?? parseUrl,
    useArnRegion: config2?.useArnRegion ?? false,
    utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config2?.utf8Encoder ?? toUtf8
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es17();
init_dist_es44();
init_dist_es17();
var getRuntimeConfig8 = (config2) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config2);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig7(config2);
  emitWarningIfUnsupportedVersion2(process.version);
  return {
    ...clientSharedValues,
    ...config2,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config2?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    disableS3ExpressSessionAuth: config2?.disableS3ExpressSessionAuth ?? loadConfig(NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS),
    eventStreamSerdeProvider: config2?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config2?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    md5: config2?.md5 ?? Hash.bind(null, "md5"),
    region: config2?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: NodeHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
    retryMode: config2?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha1: config2?.sha1 ?? Hash.bind(null, "sha1"),
    sha256: config2?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config2?.streamCollector ?? streamCollector,
    streamHasher: config2?.streamHasher ?? readableStreamHasher,
    useArnRegion: config2?.useArnRegion ?? loadConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS),
    useDualstackEndpoint: config2?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config2?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
init_dist_es45();
init_dist_es2();
init_dist_es17();
var asPartial4 = (t5) => t5;
var resolveRuntimeExtensions4 = (runtimeConfig, extensions) => {
  const extensionConfiguration = {
    ...asPartial4(getAwsRegionExtensionConfiguration(runtimeConfig)),
    ...asPartial4(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial4(getHttpHandlerExtensionConfiguration(runtimeConfig))
  };
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return {
    ...runtimeConfig,
    ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration)
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig8(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveS3Config(_config_6, { session: [() => this, CreateSessionCommand] });
    const _config_8 = resolveUserAgentConfig(_config_7);
    const _config_9 = resolveEventStreamSerdeConfig(_config_8);
    const _config_10 = resolveRuntimeExtensions4(_config_9, configuration?.extensions || []);
    super(_config_10);
    this.config = _config_10;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
    this.middlewareStack.use(getS3ExpressPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/ListBucketsCommand.js
init_dist_es32();
init_dist_es31();
init_dist_es17();
var ListBucketsCommand = class extends Command.classBuilder().ep({
  ...commonParams
}).m(function(Command2, cs2, config2, o5) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("AmazonS3", "ListBuckets", {}).n("S3Client", "ListBucketsCommand").f(void 0, void 0).ser(se_ListBucketsCommand).de(de_ListBucketsCommand).build() {
};

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
var logger2 = (0, import_pino.default)(
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
  logger2.fatal(envZod.error.format());
  throw new Error("\u{1F6D1} Invalid environment variables !");
}
var env2 = {
  ...envZod.data
};

// src/config/AWS/S3/BucketS3.ts
var ConfigS3 = new S3Client({
  region: env2.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: env2.AWS_ACCESS_KEY_ID,
    secretAccessKey: env2.AWS_SECRET_ACCESS_KEY
  }
});
var listBuckets = async () => {
  try {
    const response = await ConfigS3.send(new ListBucketsCommand({}));
    const buckets = response.Buckets?.map((bucket) => bucket.Name);
    logger2.info(`Success connected S3: Buckets:${buckets?.length}`);
  } catch (err) {
    logger2.fatal("N\xE3o foi poss\xEDvel listar os buckets do S3. Verifique suas credenciais e a rede.", err);
  }
};
listBuckets();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConfigS3
});
