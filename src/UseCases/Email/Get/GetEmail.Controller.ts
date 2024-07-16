import { Request, Response } from 'express';

import { GetEmailUseCase } from './GetEmail.UseCase';

export class GetEmailController {
  constructor(private GetEmailUseCase: GetEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const { filter, page, pageSize } = request.query;

    const result = await this.GetEmailUseCase.execute({ page, pageSize, userId: token.id, filter });

    return response.status(200).json(result);
  }
}
