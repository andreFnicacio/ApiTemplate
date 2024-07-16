import { container } from 'tsyringe';

import { SendEmailsController } from './SendEmails.Controller';
import { SendEmailsUseCase } from './SendEmails.UseCase';

export const SendEmailsControllerIndex = new SendEmailsController(container.resolve(SendEmailsUseCase));
