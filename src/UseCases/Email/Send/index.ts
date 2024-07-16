import { container } from 'tsyringe';

import { SendEmailController } from './SendEmail.Controller';
import { SendEmailUseCase } from './SendEmail.UseCase';

export const SendEmailControllerIndex = new SendEmailController(container.resolve(SendEmailUseCase));
