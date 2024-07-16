import { Request, Response } from 'express';

import { GetDomainUseCase } from './GetDomain.UseCase';

export class GetDomainController {
  constructor(private GetDomainUseCase: GetDomainUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const { page, pageSize, filter } = request.query;

    const result = await this.GetDomainUseCase.execute({ userId: token.id, page, pageSize, filter });

    return response.status(200).json(result);
  }
}
