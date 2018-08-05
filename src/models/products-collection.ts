import { Product } from './product';
/**
 * Created by Frederick BALDO on 03/06/2017.
 */
export class ProductsCollection {
  productList: Product[] = [];

  constructor(products: Product[] = []) {
    this.productList = products;
  }
}
