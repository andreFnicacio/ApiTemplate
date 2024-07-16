import { z } from 'zod';

import { SendEmailSchema } from '../SendEmail.Schema';

export type SendEmailSchemaZod = z.output<typeof SendEmailSchema>;

export namespace ISendEmailDTO {
  export type Params = SendEmailSchemaZod;

  export type Result = {};
}
