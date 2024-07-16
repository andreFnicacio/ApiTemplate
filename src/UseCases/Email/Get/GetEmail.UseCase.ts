import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { IGetEmailDTO } from './DTO/IGetEmailDTO';
import { GetEmailSchema } from './GetEmail.Schema';

@injectable()
export class GetEmailUseCase {
  constructor(@inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails) {}

  async execute(request: IGetEmailDTO.Params) {
    const { page, pageSize, userId, filter } = ZODVerifyParse({
      schema: GetEmailSchema,
      data: request,
    });

    const { data, meta } = await this.RepositoryEmails.Get({ page, pageSize, userId, filter });

    const returnResponse = { data, meta };

    return returnResponse;
  }
}
