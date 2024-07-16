import { Request, Response } from 'express';

import { CreateEmailUseCase } from './CreateEmail.UseCase';

export class CreateEmailController {
  constructor(private CreateEmailUseCase: CreateEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, email } = request.body;

    const result = await this.CreateEmailUseCase.execute({ email, userId: token.id });

    return response.status(200).json(result);
  }
}
