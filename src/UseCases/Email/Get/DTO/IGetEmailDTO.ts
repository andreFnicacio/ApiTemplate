import { z } from 'zod';

import { GetEmailSchema } from '../GetEmail.Schema';

export type GetEmailSchemaZod = z.output<typeof GetEmailSchema>;

export namespace IGetEmailDTO {
  export type Params = GetEmailSchemaZod;

  export type Result = {};
}
