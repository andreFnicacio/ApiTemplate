import { z } from 'zod';

import { GetUrsulaSchema } from '../GetUrsula.Schema';

export type GetUrsulaSchemaZod = z.output<typeof GetUrsulaSchema>;

export namespace IGetUrsulaDTO {
  export type Params = GetUrsulaSchemaZod;

  export type Result = {};
}
