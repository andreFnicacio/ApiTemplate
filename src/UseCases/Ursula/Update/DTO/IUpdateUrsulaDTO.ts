import { z } from 'zod';

import { UpdateUrsulaSchema } from '../UpdateUrsula.Schema';

export type UpdateUrsulaSchemaZod = z.output<typeof UpdateUrsulaSchema>;

export namespace IUpdateUrsulaDTO {
  export type Params = UpdateUrsulaSchemaZod;

  export type Result = {};
}
