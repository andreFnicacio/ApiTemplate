import { Request, Response } from 'express';

import { UpdateUrsulaUseCase } from './UpdateUrsula.UseCase';

export class UpdateUrsulaController {
  constructor(private UpdateUrsulaUseCase: UpdateUrsulaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const result = await this.UpdateUrsulaUseCase.execute({});

    return response.status(200).json(result);
  }
}
