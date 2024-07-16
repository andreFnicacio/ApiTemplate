import { IRepositoryDomains } from 'Repositories/Domain/IRepositoryDomain';
import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { IGetDomainDTO } from './DTO/IGetDomainDTO';
import { GetDomainSchema } from './GetDomain.Schema';

@injectable()
export class GetDomainUseCase {
  constructor(@inject('RepositoryDomains') private RepositoryDomains: IRepositoryDomains) {}

  async execute(request: IGetDomainDTO.Params) {
    const { userId, page, pageSize, filter } = ZODVerifyParse({
      schema: GetDomainSchema,
      data: request,
    });

    const { data, meta } = await this.RepositoryDomains.Get({ userId, page, pageSize, filter });

    const returnResponse = {
      data,
      meta,
    };

    return returnResponse;
  }
}
