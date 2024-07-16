import { z } from 'zod';

import { GetDomainSchema } from '../GetDomain.Schema';

export type GetDomainSchemaZod = z.output<typeof GetDomainSchema>;

export namespace IGetDomainDTO {
  export type Params = GetDomainSchemaZod;

  export type Result = {};
}
