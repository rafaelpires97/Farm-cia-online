import {Moment, MomentInput} from 'moment';

export interface IClient {
  id?: number;
  firsName?: string;
  lastName?: string;
  dateOfBirth?: MomentInput;
  nif?: number;
  addresses?: IAddress[];
  contacts?: IContact[];
}

export class Client implements IClient {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public dateOfBirth?: Moment,
    public nif?: number,
    public addresses?: IAddress[],
    public contacts?: IContact[]
  ) {}
}

export const enum ContactType {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  MOBILE = 'MOBILE',
}

export interface IAddress {
  id?: number;
  address?: string;
  postalCode?: string;
}

export class Address implements IAddress {
  constructor(public id?: number, public address?: string, public postalCode?: string) {}
}

export interface IContact {
  id?: number;
  contactType?: ContactType;
  contact?: string;
}

export class Contact implements IContact {
  constructor(public id?: number, public contactType?: ContactType, public contact?: string) {}
}
