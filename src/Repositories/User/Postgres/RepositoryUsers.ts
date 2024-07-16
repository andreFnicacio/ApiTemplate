import { prisma } from '@config/DataBase/Prisma/Index';

import { ICreateUserDTO, IRepositoryUsers, IFindUserByIdDTO, IFindUserByEmailDTO, IUpdatePasswordDTO } from '../IRepositoryUser';

export class RepositoryUsers implements IRepositoryUsers {
  async GetCount() {
    const userCount = await prisma.users.count({});

    return { count: userCount };
  }

  async UpdatePassword(data: IUpdatePasswordDTO.Params) {
    await prisma.users.update({
      where: {
        id: data.id,
      },
      data: {
        password: data.password,
      },
    });
  }

  async FindUserById({ id }: IFindUserByIdDTO.Params) {
    const dataUser = await prisma.users.findUnique({ where: { id } });

    return {
      isExists: !!dataUser,
      data: dataUser,
    };
  }

  async FindUserByEmail({ email }: IFindUserByEmailDTO.Params) {
    const dataUser = await prisma.users.findUnique({ where: { email } });

    return {
      isExists: !!dataUser,
      data: dataUser,
    };
  }

  async Create({ email, id, name, password, role }: ICreateUserDTO.Params) {
    await prisma.users.upsert({
      where: { email },
      update: {},
      create: { email, name, password, id, role },
    });
  }
}
