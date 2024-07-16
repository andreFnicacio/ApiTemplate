import { z } from 'zod';

import { CreateUrsulaSchema } from '../CreateUrsula.Schema';

export type CreateUrsulaSchemaZod = z.output<typeof CreateUrsulaSchema>;

export namespace ICreateUrsulaDTO {
  export type Params = CreateUrsulaSchemaZod;

  export type Result = {};
}
