import { container } from 'tsyringe';

import { UpdateUrsulaController } from './UpdateUrsula.Controller';
import { UpdateUrsulaUseCase } from './UpdateUrsula.UseCase';

export const UpdateUrsulaControllerIndex = new UpdateUrsulaController(container.resolve(UpdateUrsulaUseCase));
