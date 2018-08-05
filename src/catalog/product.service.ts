import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestashopApi } from '../models/prestashop.api';
/**
 * Created by Frederick BALDO on 04/06/2017.
 * This class provides acces to your Prestashop Webservice with methods to read names and add names.
 * See /tools/env/base.ts to setup the domain and api Key.
 */
@Injectable()
export class ProductService extends PrestashopApi {
  constructor(public http: HttpClient) {
    super();
  }
  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   */
  public getProducts(): Observable<any> {
    return this.http.get(this._url + this.getRoutes().allProducts + this.getParams() + '&display=full');
  }

  public getAllProductsOptions(): Observable<any> {
    return this.http.get(this._url + this.getRoutes().productOptions + this.getParams() + '&display=full');
  }

  public getAllProductsFeatures(): Observable<any> {
    return this.http.get(this._url + this.getRoutes().productFeatures + this.getParams() + '&display=full');
  }

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   * api/product_options/:optionId
   * @param optionId
   */
  public getProductOptionById(optionId: number): Observable<any> {
    return this.http.get(this._url + this.getRoutes().productOptions + '/' + optionId + this.getParams());
  }

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.R
   * @param optionValueId
   */
  public getProductOptionValueById(optionValueId: number): Observable<object> {
    return this.http.get(this._url + this.getRoutes().productOptValues + '/' + optionValueId + this.getParams());
  }

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   * @param featureId
   */
  public getProductFeatureById(featureId: number): Observable<any> {
    return this.http.get(this._url + this.getRoutes().productFeatures + '/' + featureId + this.getParams());
  }
  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   * @param featureId
   */
  public getProductFeatureValueById(featureId: number): Observable<any> {
    return this.http.get(this._url + this.getRoutes().productFeatValues + '/' + featureId + this.getParams());
  }

  /**
   * @desc Returns an Observable for the HTTP GET request for the JSON resource.
   * @param comboId
   */
  public getCombinations(comboId: number): Observable<any> {
    return this.http.get(this._url + this.getRoutes().combinations + '/' + comboId + this.getParams());
  }

  /**
   * @desc Save product in cache
   * @param item
   */
  public cacheCurrentProduct(item: any) {
    return this.setInCache('currentProduct', item);
  }

  /**
   * @desc Get data from cache. Usefull to retrive product data on product details page.
   */
  public getCurrentProduct() {
    return JSON.parse(localStorage.getItem('currentProduct'));
  }
}
