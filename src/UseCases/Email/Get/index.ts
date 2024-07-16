import { container } from 'tsyringe';

import { GetEmailController } from './GetEmail.Controller';
import { GetEmailUseCase } from './GetEmail.UseCase';

export const GetEmailControllerIndex = new GetEmailController(container.resolve(GetEmailUseCase));
