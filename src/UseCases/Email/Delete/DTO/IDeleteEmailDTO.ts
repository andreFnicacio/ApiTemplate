import { z } from 'zod';

import { DeleteEmailSchema } from '../DeleteEmail.Schema';

export type DeleteEmailSchemaZod = z.output<typeof DeleteEmailSchema>;

export namespace IDeleteEmailDTO {
  export type Params = DeleteEmailSchemaZod;

  export type Result = {};
}
