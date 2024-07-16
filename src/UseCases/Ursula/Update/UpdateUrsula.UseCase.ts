import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { UpdateUrsulaSchema } from './UpdateUrsula.Schema';
import { IUpdateUrsulaDTO } from './DTO/IUpdateUrsulaDTO';

@injectable()
export class UpdateUrsulaUseCase {
  constructor(@inject('Repository') private Repository: IRepository) {}

  async execute(request: IUpdateUrsulaDTO.Params) {
    const {} = ZODVerifyParse({
      schema: UpdateUrsulaSchema,
      data: request,
    });

    const returnResponse = {};

    return returnResponse;
  }
}
