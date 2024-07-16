import { container } from 'tsyringe';

import { DeleteDomainController } from './DeleteDomain.Controller';
import { DeleteDomainUseCase } from './DeleteDomain.UseCase';

export const DeleteDomainControllerIndex = new DeleteDomainController(container.resolve(DeleteDomainUseCase));
