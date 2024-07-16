"use strict";

// src/shared/Util/AppError/AppError.spec.ts
var import_vitest = require("vitest");

// src/shared/Util/AppError/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/shared/Util/AppError/AppError.spec.ts
(0, import_vitest.describe)("Test AppError", () => {
  (0, import_vitest.it)("Should return an error message and status Error default 400", async () => {
    await (0, import_vitest.expect)(async () => {
      throw new AppError("test AppError");
    }).rejects.toEqual({ message: "test AppError", statusCode: 400 });
  });
  (0, import_vitest.it)("Should return an error message and status Error send", async () => {
    await (0, import_vitest.expect)(async () => {
      throw new AppError("test AppError", 422);
    }).rejects.toEqual({ message: "test AppError", statusCode: 422 });
  });
});
