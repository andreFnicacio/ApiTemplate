import { Request, Response } from 'express';

import { CreateUrsulaUseCase } from './CreateUrsula.UseCase';

export class CreateUrsulaController {
  constructor(private CreateUrsulaUseCase: CreateUrsulaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const result = await this.CreateUrsulaUseCase.execute({});

    return response.status(200).json(result);
  }
}
