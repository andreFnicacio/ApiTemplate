import { container } from 'tsyringe';

import { DeleteEmailController } from './DeleteEmail.Controller';
import { DeleteEmailUseCase } from './DeleteEmail.UseCase';

export const DeleteEmailControllerIndex = new DeleteEmailController(container.resolve(DeleteEmailUseCase));
