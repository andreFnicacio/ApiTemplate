"use strict";

// src/shared/features/handleGenerateUuid/handleGenerateUuid.spec.ts
var import_vitest = require("vitest");
var import_zod = require("zod");

// src/shared/features/handleGenerateUuid/handleGenerateUuid.ts
var import_uuid = require("uuid");
var handleGenerateUuid = () => {
  const resultUuid = (0, import_uuid.v4)();
  return resultUuid;
};

// src/shared/features/handleGenerateUuid/handleGenerateUuid.spec.ts
(0, import_vitest.describe)("Test AppError", () => {
  (0, import_vitest.it)("Should return uuid", async () => {
    const resultUuid = handleGenerateUuid();
    (0, import_vitest.expect)(resultUuid).toBeTruthy();
  });
  (0, import_vitest.it)("Should return error if uuid formart invalid", () => {
    const uuid = import_zod.z.string().uuid();
    const resultUuid = handleGenerateUuid();
    (0, import_vitest.expect)(() => uuid.parse(resultUuid)).not.toThrow();
  });
});
