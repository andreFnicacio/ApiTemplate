import { Request, Response } from 'express';

import { DeleteEmailUseCase } from './DeleteEmail.UseCase';

export class DeleteEmailController {
  constructor(private DeleteEmailUseCase: DeleteEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const { id } = request.params;

    const result = await this.DeleteEmailUseCase.execute({ id, userId: token.id });

    return response.status(200).json(result);
  }
}
