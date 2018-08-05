import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { PrestashopApi } from '../models/prestashop.api';
import { SHOP } from '../config/shop.config';
import * as bcrypt from 'bcryptjs';
/**
 * Created by Frederick BALDO on 20/05/2017.
 * This class provides acces to your Prestashop Webservice. See /tools/env/base.ts to setup the domain and api Key.
 */
@Injectable()
export class ApiService extends PrestashopApi {
  constructor(public http: HttpClient) {
    super();
  }
  public getImagesById(productId: number, id: number): Promise<any> {
    return this.http.get(this._url + this._routes.productsImg + '/' + productId + '/' + id + this.trustMe() + '&display=url')
      .toPromise().then((res: HttpResponse<any>) => this.debug(res))
      .catch(this.handleError);
  }

  /**
   * Provide the search results
   * @param query
   * @returns The Promise for the HTTP request.
   */
  public search(query: string): Promise<any> {
    return this.http.get(
      this._url + this._routes.search + this._apiParams  + '&display=full&query=' + query + '&language=' + SHOP.DEFAULT_LANG
    ).toPromise().then((res: HttpResponse<any>) => res)
      .catch(this.handleError);
  }

  /**
   * Returns a Promise for the HTTP GET request for the JSON resource.
   * @returns The Promise for the HTTP request.
   */
  public connectUser(userName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this._url + '/customers' + this._apiParams + '&display=full&filter[email]=' + userName)
        .toPromise().then((res: any) => {
          let customers = res.customers;
          if (customers.length) {
            resolve(customers[0]);
          } else {
            reject(new Error("No user for tis username."));
          }
        })
        .catch(this.handleError);
    });
  }

  public checkPassword(encrypted: string, clear: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Uncomment to debug
      // let salt = bcrypt.getSalt(encrypted);
      // let check = bcrypt.hashSync(clear, salt);

      bcrypt.compare(clear, encrypted, (err, res) => {
        if (err) reject(err);
        // console.log('Password match ? ', res);
        resolve(res);
      });
    });    
  }

  /**
   * Returns a Promise for the HTTP GET request for the JSON resource.
   * @returns The Promise for the HTTP request.
   */
  public getCountries(): Promise<any> {
    return this.http.get(
      this._url + this._routes.countries + this._apiParams + '&display=full')
        .toPromise().then((res: any) => { return res.countries })
        .catch(this.handleError);
  }

}
