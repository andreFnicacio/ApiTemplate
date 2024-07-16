const getUseCaseContent = (capitalizedOption, uppercaseFlowName) => {
  return `import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { ${capitalizedOption}${uppercaseFlowName}Schema } from './${capitalizedOption}${uppercaseFlowName}.Schema';
import { I${capitalizedOption}${uppercaseFlowName}DTO } from './DTO/I${capitalizedOption}${uppercaseFlowName}DTO';

@injectable()
export class ${capitalizedOption}${uppercaseFlowName}UseCase {
  constructor(@inject('Repository') private Repository: IRepository) {}

  async execute(request: I${capitalizedOption}${uppercaseFlowName}DTO.Params) {
    const {} = ZODVerifyParse({
      schema: ${capitalizedOption}${uppercaseFlowName}Schema,
      data: request,
    });

    const returnResponse = {};

    return returnResponse;
  }
}
`;
};

module.exports = { getUseCaseContent };
