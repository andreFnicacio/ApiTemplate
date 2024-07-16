import { Request, Response } from 'express';

import { GetSentsEmailsUseCase } from './GetSentsEmails.UseCase';

export class GetSentsEmailsController {
  constructor(private GetSentsEmailsUseCase: GetSentsEmailsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const { page, pageSize, filter } = request.query;

    const result = await this.GetSentsEmailsUseCase.execute({ page, pageSize, userId: token.id, filter });

    return response.status(200).json(result);
  }
}
