import { IRepositoryDomains } from 'Repositories/Domain/IRepositoryDomain';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { IUpdateDomainDTO } from './DTO/IUpdateDomainDTO';
import { UpdateDomainSchema } from './UpdateDomain.Schema';

@injectable()
export class UpdateDomainUseCase {
  constructor(@inject('RepositoryDomains') private RepositoryDomains: IRepositoryDomains) {}

  async execute(request: IUpdateDomainDTO.Params) {
    const { domain, userId, id } = ZODVerifyParse({
      schema: UpdateDomainSchema,
      data: request,
    });

    const { data } = await this.RepositoryDomains.FindById({ id });
    console.log({ data });
    if (!data || data.userId !== userId) throw new AppError('Não existe um Dominio com esse id  !');

    await this.RepositoryDomains.Update({
      domain,
      id,
    });

    const returnResponse = {
      message: 'Dominio atualizado com sucesso !',
    };

    return returnResponse;
  }
}
