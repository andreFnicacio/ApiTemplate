import { Request, Response } from 'express';

import { UpdateEmailsUseCase } from './UpdateEmails.UseCase';

export class UpdateEmailsController {
  constructor(private UpdateEmailsUseCase: UpdateEmailsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, email } = request.body;
    const { id } = request.params;

    const result = await this.UpdateEmailsUseCase.execute({ userId: token.id, email, id });

    return response.status(200).json(result);
  }
}
