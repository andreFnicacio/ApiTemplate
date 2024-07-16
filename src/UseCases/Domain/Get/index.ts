import { container } from 'tsyringe';

import { GetDomainController } from './GetDomain.Controller';
import { GetDomainUseCase } from './GetDomain.UseCase';

export const GetDomainControllerIndex = new GetDomainController(container.resolve(GetDomainUseCase));
