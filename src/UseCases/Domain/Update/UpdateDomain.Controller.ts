import { Request, Response } from 'express';

import { UpdateDomainUseCase } from './UpdateDomain.UseCase';

export class UpdateDomainController {
  constructor(private UpdateDomainUseCase: UpdateDomainUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, domain } = request.body;
    const { id } = request.params;

    const result = await this.UpdateDomainUseCase.execute({ id, domain, userId: token.id });

    return response.status(200).json(result);
  }
}
