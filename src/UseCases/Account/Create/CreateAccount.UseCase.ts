import { IRepositoryUsers } from 'Repositories/User/IRepositoryUser';
import { inject, injectable } from 'tsyringe';

import { handleGenerateUuid } from '@shared/features/handleGenerateUuid/handleGenerateUuid';
import { AppError } from '@shared/Util/AppError/AppError';
import { handleCreateHash } from '@shared/Util/configHashPassword/handleCreatehash';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { ICreateAccountUseCaseDTO } from './DTO/ICreateAccountDTO';
import { SchemaCreateAccount } from './SchemaCreateAccount';

@injectable()
export class CreateAccountUseCase {
  constructor(@inject('RepositoryUsers') private repositoryUser: IRepositoryUsers) {}

  async execute(request: ICreateAccountUseCaseDTO.Params): Promise<ICreateAccountUseCaseDTO.Result> {
    try {
      const data = ZODVerifyParse({
        schema: SchemaCreateAccount,
        data: request,
      }) as ICreateAccountUseCaseDTO.Params;

      const { isExists: isExistsUsers } = await this.repositoryUser.FindUserByEmail({ email: data.email });
      if (isExistsUsers) throw new AppError('Usuário com este email já existe');

      await this.repositoryUser.Create({
        name: data.name,
        email: data.email,
        id: handleGenerateUuid(),
        password: handleCreateHash(data.password),
        role: data.role,
      });

      const returnResponse = {
        message: 'Usuário criado !',
      };

      return returnResponse;
    } catch (error) {
      console.log(error);
      const returnResponse = {
        message: 'Error!',
      };
      return returnResponse;
    }
  }
}
