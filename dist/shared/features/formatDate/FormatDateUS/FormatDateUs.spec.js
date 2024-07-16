"use strict";

// src/shared/features/formatDate/FormatDateUS/FormatDateUs.spec.ts
var import_vitest = require("vitest");

// src/shared/features/formatDate/FormatDateUS/FormatDateUs.ts
var FormatDateUS = (value) => {
  const [day, month, year] = value.split("/");
  const resultDate = `${year}-${month}-${day}`;
  return resultDate;
};

// src/shared/features/formatDate/FormatDateUS/FormatDateUs.spec.ts
(0, import_vitest.describe)("FormatDateUS", () => {
  (0, import_vitest.it)("Should format BR data to US", async () => {
    const dateBR = "03/08/2022";
    const resultDateUS = FormatDateUS(dateBR);
    (0, import_vitest.expect)(resultDateUS).toBe("2022-08-03");
  });
});
