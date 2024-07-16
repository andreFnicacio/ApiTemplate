import { Request, Response } from 'express';

import { DeleteDomainUseCase } from './DeleteDomain.UseCase';

export class DeleteDomainController {
  constructor(private DeleteDomainUseCase: DeleteDomainUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const { id } = request.params;

    const result = await this.DeleteDomainUseCase.execute({ id, userId: token.id });

    return response.status(200).json(result);
  }
}
