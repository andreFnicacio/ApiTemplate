import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { DeleteEmailSchema } from './DeleteEmail.Schema';
import { IDeleteEmailDTO } from './DTO/IDeleteEmailDTO';

@injectable()
export class DeleteEmailUseCase {
  constructor(@inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails) {}

  async execute(request: IDeleteEmailDTO.Params) {
    const { id, userId } = ZODVerifyParse({
      schema: DeleteEmailSchema,
      data: request,
    });

    const { isExists } = await this.RepositoryEmails.FindById({ id, userId });
    if (!isExists) throw new AppError('Não existe um email com esse id !');

    const returnResponse = { message: 'Email deletado com sucesso !' };

    return returnResponse;
  }
}
