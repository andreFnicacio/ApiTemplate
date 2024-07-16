import { container } from 'tsyringe';

import { CreateDomainController } from './CreateDomain.controller';
import { CreateDomainUseCase } from './CreateDomain.UseCase';

export const CreateDomainControllerIndex = new CreateDomainController(container.resolve(CreateDomainUseCase));
