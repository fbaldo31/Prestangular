import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestashopApi } from '../models/prestashop.api';
/**
 * Created by Frederick BALDO on 04/06/2017.
 */
@Injectable()
export class CategoryService extends PrestashopApi {

  public categories: any = [];
  /**
   * @desc CategoryService Init
   * @param http
   * @param _api
   */
  constructor(public http: HttpClient) {
    super();
  }

  /**
   * @desc Public method to get categories from cache
   */
  getAllCategories() {
    return this.categories;
  }

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   */
  public getCategories(): Observable<any> {
    return this.categories = this.http.get(this._url + this.getRoutes().allCategories + this.getParams() + '&display=full');
  }

  /**
   * @desc Clear categories Array
   */
  public clearCache() {
    this.categories = [];
  }

  /**
   * @desc Handle cache data in LocalStorage
   * @param key
   * @param value
   * @param refresh
   */
  public saveInCache(key: string, value: any, refresh: boolean = false) {
    //
  }
}
