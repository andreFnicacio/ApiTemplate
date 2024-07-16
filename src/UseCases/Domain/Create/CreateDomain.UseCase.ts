import { IRepositoryDomains } from 'Repositories/Domain/IRepositoryDomain';
import { inject, injectable } from 'tsyringe';

import { verifyDomainIdentity } from '@shared/providers/Ses';
import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { ICreateDomainUseCaseDTO } from './DTO/ICreateDomainDTO';
import { SchemaCreateDomain } from './SchemaCreateDomain';

@injectable()
export class CreateDomainUseCase {
  constructor(@inject('RepositoryDomains') private repositoryDomains: IRepositoryDomains) {}

  async execute(request: ICreateDomainUseCaseDTO.Params): Promise<ICreateDomainUseCaseDTO.Result> {
    try {
      const data = ZODVerifyParse({
        schema: SchemaCreateDomain,
        data: request,
      }) as ICreateDomainUseCaseDTO.Params;

      const { isExists: isExistsUsers } = await this.repositoryDomains.FindByDomain({ domain: data.domain });
      if (isExistsUsers) throw new AppError('Dominio já cadastrado');

      const domainWithSes = await verifyDomainIdentity(data.domain);

      console.log({ domainWithSes });

      await this.repositoryDomains.Create({
        domain: data.domain,
        userId: data.userId,
      });

      const returnResponse = {
        message: 'Dominio criado !',
      };

      return returnResponse;
    } catch (error) {
      console.log({ error });
      const returnResponse = {
        message: 'Error!',
      };
      return returnResponse;
    }
  }
}
