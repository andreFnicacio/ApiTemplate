import { z } from 'zod';

import { SendEmailsSchema } from '../SendEmails.Schema';

export type SendEmailsSchemaZod = z.output<typeof SendEmailsSchema>;

export namespace ISendEmailsDTO {
  export type Params = SendEmailsSchemaZod;

  export type Result = {};
}
