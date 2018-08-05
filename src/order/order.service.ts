import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestashopApi } from '../models/prestashop.api';
import { Order } from '../models';

/**
 * Created by Frederick BALDO on 16/06/2017.
 * This Class  get saves Orders or creates new ones
 */

@Injectable()
export class OrderService extends PrestashopApi {
  constructor(public http: HttpClient) {
    super();
  }
  /********* ORDERS *************/

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   */
  public getOrders(): Observable<any> {
    return this.http.get(this._url + this.getRoutes().orders + this.getParams() + '&display=full');
  }

  public getOrderByUser(userId: number): Observable<any> {
    let filter = '&filter[id_customer]=' + userId + '&display=full';
    return this.http.get(this._url + this.getRoutes().orders + this.getParams() + filter);
  }

  public getOrderById(orderId: number): Observable<any> {
    let filter = '&filter[id]=' + orderId + '&display=full';
    return this.http.get(this._url + this.getRoutes().orders + this.getParams() + filter);
  }

  /**
   * @desc Register an Order
   * @param order
   */
  public addOrder(order: Order): Observable<any> { // (name: string, userName: string, secret: string, image: string) {
    let xmlData = this.xmlStart + '<orders>' + this.converter.js2xml(order) + '</orders></prestashop>';
    console.log(xmlData);
    return this.http.post(this._url + this.getRoutes().orders + this.getParams(), xmlData);
  }

  /**
   * @desc Update a Order
   * @param order
   */
  public updateOrder(order: Order): Observable<any> { // (name: string, userName: string, secret: string, image: string) {
    let xmlData = this.xmlStart + '<order>' + this.converter.js2xml(order) + '</order></prestashop>';
    // console.log(xmlData);
    return this.http.put(this._url + this.getRoutes().orders + this.getParams(), xmlData);
  }

  /********* ORDERS INVOICES *************/

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   */
  public getInvoices(): Observable<any> {
    return this.http.get(this._url + this.getRoutes().orderInvoices + this.getParams() + '&display=full');
  }
}
