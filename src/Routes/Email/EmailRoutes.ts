import { Router } from 'express';

import { CreateEmailControllerIndex } from 'UseCases/Email/Create';
import { DeleteEmailControllerIndex } from 'UseCases/Email/Delete';
import { GetEmailControllerIndex } from 'UseCases/Email/Get';
import { GetSentsEmailsControllerIndex } from 'UseCases/Email/GetSents';
import { SendEmailControllerIndex } from 'UseCases/Email/Send';
import { SendEmailsControllerIndex } from 'UseCases/Email/SendEmails';
import { UpdateEmailsControllerIndex } from 'UseCases/Email/Update';

export const RoutesEmail = Router();

RoutesEmail.post('/email/create', (req, res) => CreateEmailControllerIndex.handle(req, res)); //CREATE
RoutesEmail.get('/email/get', (req, res) => GetEmailControllerIndex.handle(req, res)); // GET ALL
RoutesEmail.put('/email/update/:id', (req, res) => UpdateEmailsControllerIndex.handle(req, res)); // UPDATED
RoutesEmail.delete('/email/delete/:id', (req, res) => DeleteEmailControllerIndex.handle(req, res)); //DELETE
RoutesEmail.post('/email/send-email', (req, res) => SendEmailControllerIndex.handle(req, res)); // SEND EMAIL
RoutesEmail.get('/email/sended-emails', (req, res) => GetSentsEmailsControllerIndex.handle(req, res)); // GET EMAILS SENDED
RoutesEmail.post('/email/send-emails', (req, res) => SendEmailsControllerIndex.handle(req, res));
