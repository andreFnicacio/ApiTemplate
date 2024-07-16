import { Request, Response } from 'express';

import { GetbyidUrsulaUseCase } from './GetbyidUrsula.UseCase';

export class GetbyidUrsulaController {
  constructor(private GetbyidUrsulaUseCase: GetbyidUrsulaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const result = await this.GetbyidUrsulaUseCase.execute({});

    return response.status(200).json(result);
  }
}
