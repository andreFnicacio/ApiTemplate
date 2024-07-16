import { container } from 'tsyringe';

import { GetbyidUrsulaController } from './GetbyidUrsula.Controller';
import { GetbyidUrsulaUseCase } from './GetbyidUrsula.UseCase';

export const GetbyidUrsulaControllerIndex = new GetbyidUrsulaController(container.resolve(GetbyidUrsulaUseCase));
