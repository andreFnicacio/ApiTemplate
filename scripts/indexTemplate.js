const getIndexContent = (capitalizedOption, uppercaseFlowName) => {
  return `import { container } from 'tsyringe';

import { ${capitalizedOption}${uppercaseFlowName}Controller } from './${capitalizedOption}${uppercaseFlowName}.Controller';
import { ${capitalizedOption}${uppercaseFlowName}UseCase } from './${capitalizedOption}${uppercaseFlowName}.UseCase';

export const ${capitalizedOption}${uppercaseFlowName}ControllerIndex = new ${capitalizedOption}${uppercaseFlowName}Controller(container.resolve(${capitalizedOption}${uppercaseFlowName}UseCase));
`;
};

module.exports = { getIndexContent };
