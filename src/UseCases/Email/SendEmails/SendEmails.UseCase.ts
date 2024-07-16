import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { IRepositoryUsers } from 'Repositories/User/IRepositoryUser';
import { inject, injectable } from 'tsyringe';

import { sendEmail } from '@shared/providers/Ses';
import { AppError } from '@shared/Util/AppError/AppError';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { ISendEmailsDTO } from './DTO/ISendEmailsDTO';
import { SendEmailsSchema } from './SendEmails.Schema';

@injectable()
export class SendEmailsUseCase {
  constructor(
    @inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails,
    @inject('RepositoryUsers') private RepositoryUsers: IRepositoryUsers,
  ) {}

  async execute(request: ISendEmailsDTO.Params) {
    const { subject, text, to, userId } = ZODVerifyParse({
      schema: SendEmailsSchema,
      data: request,
    });

    const { isExists } = await this.RepositoryUsers.FindUserById({ id: userId });
    if (!isExists) throw new AppError('Dados do usuario nao encontrado !');

    // alterar para um metodo de disparado para varios emails do ses
    to.forEach(async (receiver) => {
      await sendEmail(receiver, subject, text);

      await this.RepositoryEmails.SaveEmailSended({ subject, text, to: receiver, userId });
    });

    const returnResponse = {
      message: 'Emails disparados !',
    };

    return returnResponse;
  }
}
