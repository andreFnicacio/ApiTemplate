import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { GetbyidUrsulaSchema } from './GetbyidUrsula.Schema';
import { IGetbyidUrsulaDTO } from './DTO/IGetbyidUrsulaDTO';

@injectable()
export class GetbyidUrsulaUseCase {
  constructor(@inject('Repository') private Repository: IRepository) {}

  async execute(request: IGetbyidUrsulaDTO.Params) {
    const {} = ZODVerifyParse({
      schema: GetbyidUrsulaSchema,
      data: request,
    });

    const returnResponse = {};

    return returnResponse;
  }
}
