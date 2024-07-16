import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { CreateUrsulaSchema } from './CreateUrsula.Schema';
import { ICreateUrsulaDTO } from './DTO/ICreateUrsulaDTO';

@injectable()
export class CreateUrsulaUseCase {
  constructor(@inject('Repository') private Repository: IRepository) {}

  async execute(request: ICreateUrsulaDTO.Params) {
    const {} = ZODVerifyParse({
      schema: CreateUrsulaSchema,
      data: request,
    });

    const returnResponse = {};

    return returnResponse;
  }
}
