import { Request, Response } from 'express';

import { SendEmailUseCase } from './SendEmail.UseCase';

export class SendEmailController {
  constructor(private SendEmailUseCase: SendEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, from, subject, to, text } = request.body;

    const result = await this.SendEmailUseCase.execute({ from, subject, to, userId: token.id, text });

    return response.status(200).json(result);
  }
}
