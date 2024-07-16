import { IRepositoryDomains } from 'Repositories/Domain/IRepositoryDomain';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { DeleteDomainSchema } from './DeleteDomain.Schema';
import { IDeleteDomainDTO } from './DTO/IDeleteDomainDTO';

@injectable()
export class DeleteDomainUseCase {
  constructor(@inject('RepositoryDomains') private RepositoryDomains: IRepositoryDomains) {}

  async execute(request: IDeleteDomainDTO.Params) {
    const { id, userId } = ZODVerifyParse({
      schema: DeleteDomainSchema,
      data: request,
    });

    const { data } = await this.RepositoryDomains.FindById({ id });
    if (!data || data.userId !== userId) throw new AppError('Não existe um Dominio com esse id !');

    await this.RepositoryDomains.Delete({ id });

    const returnResponse = {
      message: 'Dominio deletado com sucesso !',
    };

    return returnResponse;
  }
}
