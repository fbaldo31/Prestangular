/**
 * @author Frederick BALDO
 * @since 03/06/2017
 */
export class ProductDetails {
 
  private _productId: number = null;
 
  private _options: object = {};

  private _features: object = {};

  private _optionsValues: any[] = [];

  private _featuresValues: any[] = [];

  get options(): Object {
    return this._options;
  }

  set options(value: Object) {
    this._options = value;
  }

  get features(): Object {
    return this._features;
  }

  set features(value: Object) {
    this._features = value;
  }

  get productId(): number {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get optionsValues(): Array<any> {
    return this._optionsValues;
  }

  set optionsValues(value: Array<any>) {
    this._optionsValues = value;
  }

  get featuresValues(): Array<any> {
    return this._featuresValues;
  }

  set featuresValues(value: Array<any>) {
    this._featuresValues = value;
  }
}
