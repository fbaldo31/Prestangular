import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PrestashopApi } from '../models/prestashop.api';
import { Address } from '../models';

/**
 * Created by Frederick BALDO on 17/06/2017.
 * This class provides access to your Prestashop Webservice cutomers methods
 */
@Injectable()
export class CustomerService extends PrestashopApi {
  constructor(public http: HttpClient) {
    super();
  }
  /**
   * @desc Register a customer
   * @param form
   */
  public register(form: any): Observable<any> { // (name: string, userName: string, secret: string, image: string) {
    let xmlData = this.xmlStart + '<customers>' + this.converter.js2xml(form) + '</customers></prestashop>';
    // console.log(xmlData);
    return this.http.post(this._url + this.getRoutes().customers + this.getParams(), xmlData);
  }

  /**
   * @desc Register an address
   * @param address
   */
  public addAddress(address: Address): Observable<any> {
    let xmlData = this.xmlStart + '<address>' + this.converter.js2xml(address) + '</address></prestashop>';
    // console.log(xmlData);
    return this.http.post(this._url + this.getRoutes().addresses + this.getParams(), xmlData);
  }

  getCustomers() {
    return this.http.get(this._url + this.getRoutes().customers + this.getParams() + '&display=full');
  }
}
