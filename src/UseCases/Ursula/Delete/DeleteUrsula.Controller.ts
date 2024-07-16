import { Request, Response } from 'express';

import { DeleteUrsulaUseCase } from './DeleteUrsula.UseCase';

export class DeleteUrsulaController {
  constructor(private DeleteUrsulaUseCase: DeleteUrsulaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const result = await this.DeleteUrsulaUseCase.execute({});

    return response.status(200).json(result);
  }
}
