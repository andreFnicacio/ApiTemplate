import { Request, Response } from 'express';

import { GetUrsulaUseCase } from './GetUrsula.UseCase';

export class GetUrsulaController {
  constructor(private GetUrsulaUseCase: GetUrsulaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const result = await this.GetUrsulaUseCase.execute({});

    return response.status(200).json(result);
  }
}
