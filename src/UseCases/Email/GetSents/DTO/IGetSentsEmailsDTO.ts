import { z } from 'zod';

import { GetSentsEmailsSchema } from '../GetSentsEmails.Schema';

export type GetSentsEmailsSchemaZod = z.output<typeof GetSentsEmailsSchema>;

export namespace IGetSentsEmailsDTO {
  export type Params = GetSentsEmailsSchemaZod;

  export type Result = {};
}
