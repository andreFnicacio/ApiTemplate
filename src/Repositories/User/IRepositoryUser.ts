import { Users } from '@prisma/client';

export namespace IFindUserByEmailDTO {
  export type Params = {
    email: string;
  };

  export type Result = {
    isExists: boolean;
    data: Users | null;
  };
}

export namespace IFindUserByIdDTO {
  export type Params = {
    id: string;
  };

  export type Result = {
    isExists: boolean;
    data: Users | null;
  };
}

export namespace ICreateUserDTO {
  export type Params = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'USER';
  };
}

export namespace IUpdatePasswordDTO {
  export type Params = {
    id: string;
    password: string;
  };
}

export interface IRepositoryUsers {
  FindUserByEmail(data: IFindUserByEmailDTO.Params): Promise<IFindUserByEmailDTO.Result>;

  FindUserById(data: IFindUserByIdDTO.Params): Promise<IFindUserByIdDTO.Result>;

  Create(data: ICreateUserDTO.Params): Promise<void>;

  UpdatePassword(data: IUpdatePasswordDTO.Params): Promise<void>;
}
