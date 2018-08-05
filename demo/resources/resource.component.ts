import { Component } from '@angular/core';

import { ApiService } from '../../src/shop/api.service';
import { CustomerService } from '../../src/customer/customer.service';
import { CategoryService } from '../../src/catalog/category.service';
import { CartService } from '../../src/cart/cart.service';
import { OrderService } from '../../src/order/order.service';
import { ProductService } from '../../src/catalog/product.service';

@Component({
  selector: 'get-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourcesComponent {
  title = 'app';
  errorMessage;
  data: any = {
    products: [],
    productsFeatures: [],
    categories: [],
    productsOptions: [],
    carts: [],
    schema: '',
    countries: [],
    orders: []
  };

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private api: ApiService,
    private cart: CartService,
    private order: OrderService,
    private users: CustomerService
  ) {}

  ngOnInit() {
    this.fetchAllCategories();
    this.fetchProductsAttributes();
    this.fetchCountries();
    this.fetchProducts();
    this.getSchema();
    this.getCarts();
  }

  fetchAllCategories() {
    this.categoryService.getCategories().subscribe(
      data => this.saveInConfig(data),
      error => this.errorMessage = <any>error
    );
  }

  fetchProductsAttributes() {
    this.productService.getAllProductsOptions().subscribe(
      data => {
        this.productService.setInCache('productsOptions', data);
        this.data.productsOptions = data.json().product_options;
      },
      error => this.errorMessage = <any>error
    );
    this.productService.getAllProductsFeatures().subscribe(
      data => {
        this.productService.setInCache('productsFeatures', data );
        this.data.productsFeatures = data.json().product_features;
    },
      error => this.errorMessage = <any>error
    );
  }

  fetchCountries() {
    this.api.getCountries().then(data => {
      this.api.setInCache('countries', data);
      // this.data.countries = data.json().countries
      this.data.countries = this.api.getFromCache('countries');
    })
    .catch(error => this.errorMessage = <any>error);
  }

  fetchProducts() {
    this.productService.getProducts()
      .toPromise().then(data => {
        console.log(data.json());
        this.data.products = data.json().products;
      })
      .catch(console.error);
  }

  getCarts() {
    this.cart.getCarts().subscribe(data => this.data.carts = data.json().carts);
  }

  getOrders() {
    this.order.getOrders().subscribe(data => this.data.orders = data.json().orders);
  }

  getSchema() {
    let schema = this.api.getSchema();
    console.log(schema);
  }

  private saveInConfig(data: any) {
    this.data.categories = data.json().categories;
  }
}
