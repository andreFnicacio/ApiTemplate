const getDtoContent = (capitalizedOption, uppercaseFlowName) => {
  return `import { z } from 'zod';

import { ${capitalizedOption}${uppercaseFlowName}Schema } from '../${capitalizedOption}${uppercaseFlowName}.Schema';

export type ${capitalizedOption}${uppercaseFlowName}SchemaZod = z.output<typeof ${capitalizedOption}${uppercaseFlowName}Schema>;

export namespace I${capitalizedOption}${uppercaseFlowName}DTO {
  export type Params = ${capitalizedOption}${uppercaseFlowName}SchemaZod;

  export type Result = {};
}
`;
};

module.exports = { getDtoContent };
