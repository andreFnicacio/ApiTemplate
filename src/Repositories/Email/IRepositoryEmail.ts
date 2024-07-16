import { Emails, EmailsSendeds } from '@prisma/client';

export namespace ICreateDTO {
  export type Params = {
    userId: string;
    email: string;
  };
}

export namespace IUpdateDTO {
  export type Params = {
    id: string;
    email: string;
  };
}

export namespace SaveEmailSended {
  export type Params = {
    userId: string;
    to: string;
    subject: string;
    text: string;
  };
}

export namespace ICheckEmailDTO {
  export type Params = {
    userId: string;
    email: string;
  };

  export type Result = {
    isExists: boolean;
    data: Emails | null;
  };
}

export namespace IFindByIdDTO {
  export type Params = {
    id: string;
    userId: string;
  };

  export type Result = {
    isExists: boolean;
    data: Emails | null;
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
    data: Emails[];
    meta: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
}

export namespace IGetSentsDTO {
  export type Params = {
    userId: string;
    page: number;
    filter?: string;
    pageSize: number;
  };

  export type Result = {
    data: EmailsSendeds[];
    meta: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface IRepositoryEmails {
  Create(data: ICreateDTO.Params): Promise<void>;

  Update(data: IUpdateDTO.Params): Promise<void>;

  CheckEmail(data: ICheckEmailDTO.Params): Promise<ICheckEmailDTO.Result>;

  FindById(data: IFindByIdDTO.Params): Promise<IFindByIdDTO.Result>;

  Get(data: IGetDTO.Params): Promise<IGetDTO.Result>;

  GetSents(data: IGetSentsDTO.Params): Promise<IGetSentsDTO.Result>;

  SaveEmailSended(data: SaveEmailSended.Params): Promise<void>;
}
