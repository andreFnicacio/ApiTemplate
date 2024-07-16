import { z } from 'zod';

import { UpdateEmailsSchema } from '../UpdateEmails.Schema';

export type UpdateEmailsSchemaZod = z.output<typeof UpdateEmailsSchema>;

export namespace IUpdateEmailsDTO {
  export type Params = UpdateEmailsSchemaZod;

  export type Result = {};
}
