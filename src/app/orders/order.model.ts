import { User } from './../users/user.model';
import { Product } from "../products/product.model";
import { BaseModel } from '../base.model';

export interface Order extends BaseModel {
    products: Product[];
    user: User;
}