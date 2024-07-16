import { z } from 'zod';

import { DeleteDomainSchema } from '../DeleteDomain.Schema';

export type DeleteDomainSchemaZod = z.output<typeof DeleteDomainSchema>;

export namespace IDeleteDomainDTO {
  export type Params = DeleteDomainSchemaZod;

  export type Result = {};
}
