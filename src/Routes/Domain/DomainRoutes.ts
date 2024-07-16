import { Router } from 'express';

// import { DeleteIdentityControllerIndex } from 'UseCases/Email/Delete';
// import { GetIdentityDetailsControllerIndex } from 'UseCases/Email/GetDetails';
// import { SendEmailControllerIndex } from 'UseCases/Email/Trigger';
// import { VerifyDomainIdentityControllerIndex } from 'UseCases/Email/VerifyDomain';
import { CreateDomainControllerIndex } from 'UseCases/Domain/Create';
import { DeleteDomainControllerIndex } from 'UseCases/Domain/Delete';
import { GetDomainControllerIndex } from 'UseCases/Domain/Get';
import { UpdateDomainControllerIndex } from 'UseCases/Domain/Update';

export const RoutesDomain = Router();

RoutesDomain.post('/domain/create', (req, res) => CreateDomainControllerIndex.handle(req, res)); //CREATE
RoutesDomain.get('/domain/get', (req, res) => GetDomainControllerIndex.handle(req, res)); // GET ALL
RoutesDomain.put('/domain/update/:id', (req, res) => UpdateDomainControllerIndex.handle(req, res)); // UPDATED
RoutesDomain.delete('/domain/delete/:id', (req, res) => DeleteDomainControllerIndex.handle(req, res)); //DELETE
