import { container } from 'tsyringe';

import { CreateEmailController } from './CreateEmail.Controller';
import { CreateEmailUseCase } from './CreateEmail.UseCase';

export const CreateEmailControllerIndex = new CreateEmailController(container.resolve(CreateEmailUseCase));
