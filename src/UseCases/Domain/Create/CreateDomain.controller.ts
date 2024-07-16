import { Request, Response } from 'express';

import { CreateDomainUseCase } from './CreateDomain.UseCase';

export class CreateDomainController {
  constructor(private CreateDomainUseCase: CreateDomainUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { domain, token } = request.body;

    const result = await this.CreateDomainUseCase.execute({ domain, userId: token.id });
    return response.status(201).json(result);
  }
}
