import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { IGetSentsEmailsDTO } from './DTO/IGetSentsEmailsDTO';
import { GetSentsEmailsSchema } from './GetSentsEmails.Schema';

@injectable()
export class GetSentsEmailsUseCase {
  constructor(@inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails) {}

  async execute(request: IGetSentsEmailsDTO.Params) {
    const { page, pageSize, userId, filter } = ZODVerifyParse({
      schema: GetSentsEmailsSchema,
      data: request,
    });

    const { data, meta } = await this.RepositoryEmails.GetSents({ page, pageSize, userId, filter });

    const returnResponse = { data, meta };

    return returnResponse;
  }
}
