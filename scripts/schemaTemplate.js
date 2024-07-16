const getSchemaContent = (capitalizedOption, uppercaseFlowName) => {
  return `import { z } from 'zod';

export const ${capitalizedOption}${uppercaseFlowName}Schema = z.object({});
`;
};

module.exports = { getSchemaContent };
