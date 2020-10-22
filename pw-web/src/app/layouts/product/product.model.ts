import {Moment} from 'moment';

export interface IProduct {
  id?: number;
  productName?: string;
  productCode?: string;
  description?: string;
  expireDate?: Moment;
  brand?: string;
  stock?: number;
  preco?: number;
  productPrecautions?: IProductPrecautions[];
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public productName?: string,
    public productCode?: string,
    public description?: string,
    public expireDate?: Moment,
    public brand?: string,
    public stock?: number,
    public preco?: number,
    public productPrecautions?: IProductPrecautions[],
  ) {}
}

export const enum PrecautionType {
  HAZARD = 'HAZARD',
  DANGER = 'DANGER',
  TOXIC = 'TOXIC',
}

export interface IProductPrecautions {
  id?: number;
  description?: string;
  precautionType?: PrecautionType;
}

export class ProductPrecautions implements IProductPrecautions {
  constructor(public id?: number, public description?: string, public precautionType?: PrecautionType) {}
}
