import { z } from 'zod';

import { CreateEmailSchema } from '../CreateEmail.Schema';

export type CreateEmailSchemaZod = z.output<typeof CreateEmailSchema>;

export namespace ICreateEmailDTO {
  export type Params = CreateEmailSchemaZod;

  export type Result = {};
}
