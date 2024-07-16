import { container } from 'tsyringe';

import { GetUrsulaController } from './GetUrsula.Controller';
import { GetUrsulaUseCase } from './GetUrsula.UseCase';

export const GetUrsulaControllerIndex = new GetUrsulaController(container.resolve(GetUrsulaUseCase));
