import { container } from 'tsyringe';

import { UpdateEmailsController } from './UpdateEmails.Controller';
import { UpdateEmailsUseCase } from './UpdateEmails.UseCase';

export const UpdateEmailsControllerIndex = new UpdateEmailsController(container.resolve(UpdateEmailsUseCase));
