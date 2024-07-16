import { Router } from 'express';

import { verifyToken } from '@shared/middlewares/verifyToken';

import { RoutesAccount } from './Account/RoutesAccount';
import { routerAuthentication } from './Authentication/RouterAuthentication';
import { RoutesDomain } from './Domain/DomainRoutes';
import { RoutesEmail } from './Email/EmailRoutes'; // Importar a nova rota

const routerIndex = Router();

const routerTeste = Router();
routerTeste.get('/', (req, res) => res.send('Hello World!'));

routerIndex.use(routerTeste);
routerIndex.use(RoutesAccount);
routerIndex.use(routerAuthentication);
routerIndex.use(verifyToken);
routerIndex.use(RoutesEmail); // rotas relacionadas ao emails
routerIndex.use(RoutesDomain); // rotas relacionadas ao dominio

export { routerIndex };
