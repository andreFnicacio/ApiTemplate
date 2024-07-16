import { RepositoryDomains } from 'Repositories/Domain/Postgres/RepositoryDomains';
import { RepositoryEmails } from 'Repositories/Email/Postgres/RepositoryEmail';
import { RepositoryRecoverPassword } from 'Repositories/RecoverPassword/Postgres/RepositoryRecoverPassword';
import { RepositoryUsers } from 'Repositories/User/Postgres/RepositoryUsers';
import { container } from 'tsyringe';

container.registerSingleton<RepositoryUsers>('RepositoryUsers', RepositoryUsers);
container.registerSingleton<RepositoryRecoverPassword>('RepositoryRecoverPassword', RepositoryRecoverPassword);
container.registerSingleton<RepositoryDomains>('RepositoryDomains', RepositoryDomains);
container.registerSingleton<RepositoryEmails>('RepositoryEmails', RepositoryEmails);
