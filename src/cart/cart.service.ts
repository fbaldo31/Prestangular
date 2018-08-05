import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiService } from '../shop/api.service';
import { Observable } from 'rxjs';
import * as X2JS from 'x2js';
import { PrestashopApi } from '../models/prestashop.api';

import { Cart } from '../models';

/**
 * Created by Frederick BALDO on 16/06/2017.
 * This Class  get saves carts or creates new ones
 */

@Injectable()
export class CartService extends PrestashopApi {
  constructor(private http: HttpClient) {
    super();
  }
  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   */
  public getCarts(): Observable<any> {
    return this.http.get(this._url + this.getRoutes().carts + this.getParams() + '&display=full');
  }

  public getCartByUser(userId: number): Observable<any> {
    let filter = '&filter[id_customer]=' + userId + '&display=full';
    return this.http.get(this._url + this.getRoutes().carts + this.getParams() + filter);
  }

  public getCartById(cartId: number): Observable<any> {
    let filter = '&filter[id]=' + cartId + '&display=full';
    return this.http.get(this._url + this.getRoutes().carts + this.getParams() + filter);
  }

  /**
   * @desc Register a cart
   * @param cart
   */
  public addCart(cart: Cart): Observable<any> { // (name: string, userName: string, secret: string, image: string) {
    let xmlData = this.xmlStart + '<carts>' + this.converter.js2xml(cart) + '</carts></prestashop>';
    // console.log(xmlData);
    return this.http.post(this._url + this.getRoutes().carts + this.getParams(), xmlData);
  }

  /**
   * @desc Update a cart
   * @param art
   */
  public updateCart(cart: Cart): Observable<any> { // (name: string, userName: string, secret: string, image: string) {
    let xmlData = this.xmlStart + '<cart>' + this.converter.js2xml(cart) + '</cart></prestashop>';
    // console.log(xmlData);
    return this.http.put(this._url + this.getRoutes().carts + this.getParams(), xmlData);
  }
}
