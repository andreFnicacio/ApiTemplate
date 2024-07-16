import { z } from 'zod';

import { UpdateDomainSchema } from '../UpdateDomain.Schema';

export type UpdateDomainSchemaZod = z.output<typeof UpdateDomainSchema>;

export namespace IUpdateDomainDTO {
  export type Params = UpdateDomainSchemaZod;

  export type Result = {};
}
