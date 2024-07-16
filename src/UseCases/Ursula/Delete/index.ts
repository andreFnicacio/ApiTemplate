import { container } from 'tsyringe';

import { DeleteUrsulaController } from './DeleteUrsula.Controller';
import { DeleteUrsulaUseCase } from './DeleteUrsula.UseCase';

export const DeleteUrsulaControllerIndex = new DeleteUrsulaController(container.resolve(DeleteUrsulaUseCase));
