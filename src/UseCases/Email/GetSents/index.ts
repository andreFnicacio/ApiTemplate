import { container } from 'tsyringe';

import { GetSentsEmailsController } from './GetSentsEmails.Controller';
import { GetSentsEmailsUseCase } from './GetSentsEmails.UseCase';

export const GetSentsEmailsControllerIndex = new GetSentsEmailsController(container.resolve(GetSentsEmailsUseCase));
