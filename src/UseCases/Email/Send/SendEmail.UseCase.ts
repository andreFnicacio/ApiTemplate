import { IRepositoryEmails } from 'Repositories/Email/IRepositoryEmail';
import { inject, injectable } from 'tsyringe';

import { sendEmail } from '@shared/providers/Ses';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { ISendEmailDTO } from './DTO/ISendEmailDTO';
import { SendEmailSchema } from './SendEmail.Schema';

@injectable()
export class SendEmailUseCase {
  constructor(@inject('RepositoryEmails') private RepositoryEmails: IRepositoryEmails) {}

  async execute(request: ISendEmailDTO.Params) {
    const { subject, to, userId, text } = ZODVerifyParse({
      schema: SendEmailSchema,
      data: request,
    });

    const response = await sendEmail(to, subject, text);

    await this.RepositoryEmails.SaveEmailSended({ subject, text, to, userId });

    const returnResponse = {
      message: 'Email disparado com sucesso !',
      response,
    };

    return returnResponse;
  }
}
