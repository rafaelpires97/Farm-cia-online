import {Moment} from 'moment';
import {IProduct} from "@/layouts/product/product.model";
import {IClient} from "@/layouts/client/client.model";


export interface ISoldList {
  id?: number;
  brand?: string;
  productName?: string;
  productCode?: string;
  userName?: string;
  dateOfPurchase?: Moment;
}

export class SoldList implements ISoldList {
  constructor(
    public id?: number,
    public dateOfPurchase?: Moment,
    public productInfo?: IProduct[],
    public clientInfo?: IClient[],
  ) {}






}
