import { Request, Response } from 'express';

import { SendEmailsUseCase } from './SendEmails.UseCase';

export class SendEmailsController {
  constructor(private SendEmailsUseCase: SendEmailsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, subject, text, to, from } = request.body;

    const result = await this.SendEmailsUseCase.execute({ subject, text, to, userId: token.id, from });

    return response.status(200).json(result);
  }
}
