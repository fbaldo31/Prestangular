import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { IShopConfig } from '../config/shop-config.interface';
import { SHOP } from '../config/shop.config';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class ShopModule {
  static forRoot(config: IShopConfig): ModuleWithProviders {
    SHOP.API_KEY = config.API_KEY;
    SHOP.COOKIE_KEY = config.COOKIE_KEY;
    SHOP.DEFAULT_LANG = config.DEFAULT_LANG ? config.DEFAULT_LANG : '1';
    SHOP.DOMAIN = config.DOMAIN;
    SHOP.PATH = config.PATH;
    SHOP.IMG_KEY = config.IMG_KEY ? config.IMG_KEY : config.API_KEY;

    return {
      ngModule: ShopModule,
      providers: [
        ApiService
      ],
    };
  }
}
