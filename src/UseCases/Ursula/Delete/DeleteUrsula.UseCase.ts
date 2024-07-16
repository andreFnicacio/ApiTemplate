import { inject, injectable } from 'tsyringe';

import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { DeleteUrsulaSchema } from './DeleteUrsula.Schema';
import { IDeleteUrsulaDTO } from './DTO/IDeleteUrsulaDTO';

@injectable()
export class DeleteUrsulaUseCase {
  constructor(@inject('Repository') private Repository: IRepository) {}

  async execute(request: IDeleteUrsulaDTO.Params) {
    const {} = ZODVerifyParse({
      schema: DeleteUrsulaSchema,
      data: request,
    });

    const returnResponse = {};

    return returnResponse;
  }
}
