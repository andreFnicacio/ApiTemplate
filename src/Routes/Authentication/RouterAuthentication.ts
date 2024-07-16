import { Router } from 'express';

import { LoginControllerIndex } from 'UseCases/Authentication/Login';
import { SessionControllerIndex } from 'UseCases/Authentication/Sessions';
import { RecoverPasswordIndex } from 'UseCases/Users/RecoverPassword';
import { SendEmailRecoverPasswordIndex } from 'UseCases/Users/SendEmailRecoverPassword';
import { ValidateForgotPasswordIndex } from 'UseCases/Users/ValidateRecoverPasswordId';

import { verifyToken } from '../../shared/middlewares/verifyToken';

export const routerAuthentication = Router();

routerAuthentication.post('/login', (req, res) => LoginControllerIndex.handle(req, res));

routerAuthentication.post('/sessions', verifyToken, (req, res) => SessionControllerIndex.handle(req, res));

routerAuthentication.post('/forgotPassword', (req, res) => SendEmailRecoverPasswordIndex.handle(req, res));

routerAuthentication.post('/validateForgotPassword/:id', (req, res) => ValidateForgotPasswordIndex.handle(req, res));

routerAuthentication.post('/redefine-password', (req, res) => RecoverPasswordIndex.handle(req, res));