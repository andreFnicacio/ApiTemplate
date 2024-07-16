import { container } from 'tsyringe';

import { UpdateDomainController } from './UpdateDomain.Controller';
import { UpdateDomainUseCase } from './UpdateDomain.UseCase';

export const UpdateDomainControllerIndex = new UpdateDomainController(container.resolve(UpdateDomainUseCase));
