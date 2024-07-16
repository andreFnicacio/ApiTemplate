import { prisma } from '@config/DataBase/Prisma/Index';

import {
  ICreateDomainDTO,
  IDeleteDomainDTO,
  IFindDomainByEmailDTO,
  IFindDomainByIdDTO,
  IGetDTO,
  IRepositoryDomains,
  IUpdateDomainDTO,
} from '../IRepositoryDomain';

export class RepositoryDomains implements IRepositoryDomains {
  async Get({ page, pageSize, userId, filter }: IGetDTO.Params) {
    const data = await prisma.domains.findMany({
      where: {
        userId,
        ...(filter && { domain: { contains: filter, mode: 'insensitive' } }),
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const total = await prisma.domains.count({
      where: {
        userId,
        ...(filter && { domain: { contains: filter, mode: 'insensitive' } }),
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
  async Delete({ id }: IDeleteDomainDTO.Params) {
    await prisma.domains.delete({
      where: {
        id,
      },
    });
  }

  async GetCount() {
    const domainCount = await prisma.users.count({});

    return { count: domainCount };
  }

  async Update({ domain, id }: IUpdateDomainDTO.Params) {
    await prisma.domains.update({
      where: {
        id,
      },
      data: {
        domain,
      },
    });
  }

  async FindById({ id }: IFindDomainByIdDTO.Params) {
    const dataDomain = await prisma.domains.findUnique({ where: { id } });

    return {
      isExists: !!dataDomain,
      data: dataDomain,
    };
  }

  async FindByDomain({ domain }: IFindDomainByEmailDTO.Params) {
    const dataDomain = await prisma.domains.findUnique({ where: { domain } });

    return {
      isExists: !!dataDomain,
      data: dataDomain,
    };
  }

  async Create({ domain, id, userId }: ICreateDomainDTO.Params) {
    await prisma.domains.create({
      data: {
        domain,
        userId,
        id,
      },
    });
  }
}
