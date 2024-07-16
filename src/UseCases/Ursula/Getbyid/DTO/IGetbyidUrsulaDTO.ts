import { z } from 'zod';

import { GetbyidUrsulaSchema } from '../GetbyidUrsula.Schema';

export type GetbyidUrsulaSchemaZod = z.output<typeof GetbyidUrsulaSchema>;

export namespace IGetbyidUrsulaDTO {
  export type Params = GetbyidUrsulaSchemaZod;

  export type Result = {};
}
