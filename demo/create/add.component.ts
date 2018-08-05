import { Component } from '@angular/core';

// import { ApiService } from '../../src/shop/api.service';
import { CustomerService } from '../../src/customer/customer.service';
// import { CategoryService } from '../../src/catalog/category.service';
import { CartService } from '../../src/cart/cart.service';
import { OrderService } from '../../src/order/order.service';
import { Cart, CartRow, Customer, Order, Address } from '../../src/models';

// import { SHOP } from '../../src/config/env.config'
@Component({
  selector: 'add-resource',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AddComponent {
  title = 'app';
  errorMessage;
  data: any = {
    products: [],
    productsFeatures: [],
    categories: [],
    productsOptions: [],
    carts: [],
    schema: '',
    countries: []
  };

  constructor(
    // private api: ApiService,
    private cart: CartService,
    private users: CustomerService,
    private order: OrderService,
  ) {}

  ngOnInit() {
  }

  addCart() {
    let cart = new Cart("1", "1");
    this.cart.addCart(cart)
      .subscribe(res => {
        console.log('New cart added:',cart = res.cart);
          this.addCartRow();
        });
    }

  addCartRow() {
    let cart: Cart;
    let cartRow = new CartRow(1, 1, 1, 1);
    console.log('cart-row', cartRow);
    this.cart.getCartById(10).subscribe(res => {
      cart = res.carts[0];
      if (cart.id_customer == '0') {
        cart.id_customer = "1";
      }
      console.log(cart);
      cart.associations = { cart_rows: [] };
      cart.associations.cart_rows.push({ cart_row: cartRow });
      this.cart.updateCart(cart)
        .subscribe(res => console.log('Cart updated:', res));
    });
  }

  addCustomer() {
    let user = new Customer('1234', 'Ricard', 'Bob', 'bob@mail.com');
    this.users.register(user).subscribe(res => console.log(res));
  }

  addAddress() {
    let address = new Address('Ricard', 'Bob', '4', 'My home', 'At home', 'MyCity');
    this.users.addAddress(address).subscribe(res => console.log(res));
  }

  addOrder() {
    let order = new Order(
      "1", "10", "1", "1", "1", "1", "ps_checkpayment", "Payment by check", 1.00, 1, 1.2, 1
    );
    this.order.addOrder(order)
      .subscribe(res => {
        if (typeof(res) === 'string') {
          console.error(res);
        }
        console.log('New order added:', order = res.order);
      });
  }
/*
  addOrderRow() {
    let order: Order;
    let orderRow = new OrderRow('1', '1', '1');
    this.order.getOrderById(10).subscribe(res => {
      order = res.orders[0];
      console.log(order);
      order.associations = { order_rows: [] };
      order.associations.order_rows.push(orderRow);
      this.order.updateOrder(order)
        .subscribe(res => console.log('Order updated:', res.order));
    });
  }*/
}
