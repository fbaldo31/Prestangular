// import { Observable } from 'rxjs';
import { SHOP } from '../config/shop.config';
import * as X2JS from 'x2js';

export abstract class PrestashopApi {
    readonly _routes: any = SHOP.RESOURCES;
    readonly _url = SHOP.DOMAIN + SHOP.PATH + 'api';
    readonly _allowImgs = '?ws_key=' + SHOP.IMG_KEY;
    readonly _apiParams = '?ws_key=' + SHOP.API_KEY + '&output_format=' + SHOP.OUTPUT;
    readonly xmlStart = SHOP.XML_HEADER;
    public converter: X2JS;

    constructor() {
        this.converter = new X2JS();
    }

    /**
     * Only use this method to see the root of Api with all nodes and data structure
     * @returns Promise<R|T>
     */
    public getSchema(): void { // Promise<any> {
        // return this.http.get(this._url + '/product_options' + this._apiParams + '&schema=synopsis')
        // .toPromise().then((res) => this.debug(res)).catch(this.handleError);
    }

    /**
     * @desc Return the root url of api
     */
    public getApiUrl() {
        return this._url;
    }

    /**
     * @desc Provide params to others services
     */
    public getParams(): string {
        return this._apiParams;
    }

    /**
     * @desc Used for products images
     */
    public trustMe(): string {
        return this._allowImgs;
    }

    /**
     * @desc Return all Resources
     */
    public getRoutes(): any {
        return this._routes;
    }

    /**
     * @desc Save data in cache
     * @param item
     * @param itemName
     */
    public setInCache(itemName: string, item: any): void {
        return localStorage.setItem(itemName, JSON.stringify(item));
    }

    /**
     * Get data from cache
     * @param itemName
     */
    public getFromCache(itemName: string): any {
        return JSON.parse(localStorage.getItem(itemName));
    }

    /**
     * Handle HTTP error
     */
    public handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.statusText) ? error.statusText : ""; // JSON.stringify(error);
        // error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(error); // log to console instead
        return errMsg;
    }

    public debug(data: any) {
        if (String('<%= BUILD_TYPE %>') === 'dev') {
        console.log('Api debug:', data);
        }
    }
}