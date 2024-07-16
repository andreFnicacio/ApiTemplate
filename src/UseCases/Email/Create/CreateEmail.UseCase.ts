import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { CreateEmailSchema } from './CreateEmail.Schema';
import { ICreateEmailDTO } from './DTO/ICreateEmailDTO';

@injectable()
export class CreateEmailUseCase {
  constructor(@inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails) {}

  async execute(request: ICreateEmailDTO.Params) {
    const { email, userId } = ZODVerifyParse({
      schema: CreateEmailSchema,
      data: request,
    });

    const { isExists } = await this.RepositoryEmails.CheckEmail({ email, userId });
    if (isExists) throw new AppError('Você já cadastrou esse email !');

    await this.RepositoryEmails.Create({ email, userId });

    const returnResponse = { message: 'Email cadastrado com sucesso !' };

    return returnResponse;
  }
}
