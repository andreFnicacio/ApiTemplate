import { z } from 'zod';

import { DeleteUrsulaSchema } from '../DeleteUrsula.Schema';

export type DeleteUrsulaSchemaZod = z.output<typeof DeleteUrsulaSchema>;

export namespace IDeleteUrsulaDTO {
  export type Params = DeleteUrsulaSchemaZod;

  export type Result = {};
}
