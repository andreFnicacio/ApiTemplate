import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { IUpdateEmailsDTO } from './DTO/IUpdateEmailsDTO';
import { UpdateEmailsSchema } from './UpdateEmails.Schema';

@injectable()
export class UpdateEmailsUseCase {
  constructor(@inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails) {}

  async execute(request: IUpdateEmailsDTO.Params) {
    const { email, id, userId } = ZODVerifyParse({
      schema: UpdateEmailsSchema,
      data: request,
    });

    const { isExists } = await this.RepositoryEmails.FindById({ id, userId });
    if (!isExists) throw new AppError('Não existe um email cadastrado com esse id !');

    await this.RepositoryEmails.Update({ email, id });

    const returnResponse = { message: 'Email atualizado com sucesso !' };

    return returnResponse;
  }
}
