import { Request, Response } from 'express';

import { CreateAccountUseCase } from './CreateAccount.UseCase';

export class CreateAccountController {
  constructor(private CreateAccountUseCase: CreateAccountUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, role } = request.body;

    const result = await this.CreateAccountUseCase.execute({ name, email, password, role });

    return response.status(201).json(result);
  }
}
