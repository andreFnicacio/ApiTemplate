const getControllerContent = (capitalizedOption, uppercaseFlowName) => {
  return `import { Request, Response } from 'express';

import { ${capitalizedOption}${uppercaseFlowName}UseCase } from './${capitalizedOption}${uppercaseFlowName}.UseCase';

export class ${capitalizedOption}${uppercaseFlowName}Controller {
  constructor(private ${capitalizedOption}${uppercaseFlowName}UseCase: ${capitalizedOption}${uppercaseFlowName}UseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const result = await this.${capitalizedOption}${uppercaseFlowName}UseCase.execute({});

    return response.status(200).json(result);
  }
}
`;
};

module.exports = { getControllerContent };
