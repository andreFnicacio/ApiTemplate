import { prisma } from '@config/DataBase/Prisma/Index';

import { ICreateDTO, ICheckEmailDTO, IRepositoryEmails, IFindByIdDTO, IUpdateDTO, IGetDTO, SaveEmailSended, IGetSentsDTO } from '../IRepositoryEmail';

export class RepositoryEmails implements IRepositoryEmails {
  async GetSents({ page, pageSize, userId, filter }: IGetSentsDTO.Params): Promise<IGetSentsDTO.Result> {
    const data = await prisma.emailsSendeds.findMany({
      where: {
        userId,
        ...(filter && {
          OR: [
            { to: { contains: filter, mode: 'insensitive' } },
            { text: { contains: filter, mode: 'insensitive' } },
            { subject: { contains: filter, mode: 'insensitive' } },
          ],
        }),
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const total = await prisma.emailsSendeds.count({
      where: {
        userId,
        ...(filter && {
          OR: [
            { to: { contains: filter, mode: 'insensitive' } },
            { text: { contains: filter, mode: 'insensitive' } },
            { subject: { contains: filter, mode: 'insensitive' } },
          ],
        }),
      },
    });

    return {
      data,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }
  async SaveEmailSended({ subject, text, to, userId }: SaveEmailSended.Params): Promise<void> {
    await prisma.emailsSendeds.create({
      data: {
        to,
        text,
        userId,
        subject,
      },
    });
  }
  async Get({ page, pageSize, userId, filter }: IGetDTO.Params): Promise<IGetDTO.Result> {
    const data = await prisma.emails.findMany({
      where: {
        userId,
        ...(filter && {
          email: { contains: filter, mode: 'insensitive' },
        }),
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const total = await prisma.emails.count({
      where: {
        userId,
        ...(filter && {
          email: { contains: filter, mode: 'insensitive' },
        }),
      },
    });

    return {
      data,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }
  async Update({ email, id }: IUpdateDTO.Params): Promise<void> {
    await prisma.emails.update({
      where: {
        id,
      },
      data: {
        email,
      },
    });
  }

  async FindById({ id, userId }: IFindByIdDTO.Params): Promise<IFindByIdDTO.Result> {
    const data = await prisma.emails.findFirst({
      where: {
        id,
        userId,
      },
    });

    return {
      isExists: !!data,
      data,
    };
  }

  async CheckEmail({ email, userId }: ICheckEmailDTO.Params) {
    const data = await prisma.emails.findFirst({
      where: {
        email,
        userId,
      },
    });

    return {
      isExists: !!data,
      data,
    };
  }
  async Create(data: ICreateDTO.Params) {
    await prisma.emails.create({
      data: {
        email: data.email,
        userId: data.userId,
      },
    });
  }
}
