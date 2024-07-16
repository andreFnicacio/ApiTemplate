import { Domains } from '@prisma/client';

export namespace IFindDomainByEmailDTO {
  export type Params = {
    domain: string;
  };
  export type Result = {
    isExists: boolean;
    data: Domains | null;
  };
}

export namespace IFindDomainByIdDTO {
  export type Params = {
    id: string;
  };

  export type Result = {
    isExists: boolean;
    data: Domains | null;
  };
}

export namespace ICreateDomainDTO {
  export type Params = {
    domain: string;
    id?: string;
    userId: string;
  };
}

export namespace IUpdateDomainDTO {
  export type Params = {
    id: string;
    domain: string;
  };
}

export namespace IDeleteDomainDTO {
  export type Params = {
    id: string;
  };
}
export namespace IGetDTO {
  export type Params = {
    userId: string;
    page: number;
    filter?: string;
    pageSize: number;
  };

  export type Result = {
    data: Domains[];
    meta: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface IRepositoryDomains {
  FindByDomain(data: IFindDomainByEmailDTO.Params): Promise<IFindDomainByEmailDTO.Result>;

  FindById(data: IFindDomainByIdDTO.Params): Promise<IFindDomainByIdDTO.Result>;

  Create(data: ICreateDomainDTO.Params): Promise<void>;

  Update(data: IUpdateDomainDTO.Params): Promise<void>;

  Delete(data: IDeleteDomainDTO.Params): Promise<void>;

  Get(data: IGetDTO.Params): Promise<IGetDTO.Result>;
}
