import { container } from 'tsyringe';

import { CreateUrsulaController } from './CreateUrsula.Controller';
import { CreateUrsulaUseCase } from './CreateUrsula.UseCase';

export const CreateUrsulaControllerIndex = new CreateUrsulaController(container.resolve(CreateUrsulaUseCase));
