import { z } from 'zod';

import { SchemaCreateDomain } from '../SchemaCreateDomain';

export type SchemaCreateDomainZod = z.output<typeof SchemaCreateDomain>;

export namespace ICreateDomainUseCaseDTO {
  export type Params = SchemaCreateDomainZod;

  export type Result = {
    message: string;
  };
}
