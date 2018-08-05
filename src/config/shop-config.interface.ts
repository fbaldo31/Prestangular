/**
 * @description Prestashop configuration
 */
export interface IShopConfig {
  API_KEY: string;
  IMG_KEY?: string;
  COOKIE_KEY: string;
  DOMAIN:  string;
  PORT?: string;
  PATH?: string;
  OUTPUT?:  string;
  ENV?:     string;
  RESOURCES?: object;
  LANGUAGES?: any;
  DEFAULT_LANG?: string;
  XML_HEADER?: string;
}
