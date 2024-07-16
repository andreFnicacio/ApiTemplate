import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { GetUrsulaSchema } from './GetUrsula.Schema';
import { IGetUrsulaDTO } from './DTO/IGetUrsulaDTO';

@injectable()
export class GetUrsulaUseCase {
  constructor(@inject('Repository') private Repository: IRepository) {}

  async execute(request: IGetUrsulaDTO.Params) {
    const {} = ZODVerifyParse({
      schema: GetUrsulaSchema,
      data: request,
    });

    const returnResponse = {};

    return returnResponse;
  }
}
