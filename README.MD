# prestangular

Access to Prestashop API for building modern frontend app to interact with your Prestashop webservice.

<img src="https://assets.prestashop2.com/en/system/files/filedepot/15/media_1_prestashop-vertical.png" width="160" style="margin-left:150px">
<img src="https://angular.io/assets/images/logos/angular/angular.svg" width="180" style="margin-left:40px">

## Prerequisites

- Prestashop 1.7.x (not tested with previous version but should work)
- Angular 4.x +

## Install

`npm i -s prestangular` or `yarn add prestangular`

## Setup

```ts
// app.module.ts
import {
    ShopModule,
    CustomerModule,
    CartModule,
    OrderModule,
    CatalogModule
} from 'prestangular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ShopModule.forRoot({
            // You must create one in the backoffice (webservice part)
            API_KEY: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            // We strongly recommend to setup a special key for images with only reading rights
            IMG_KEY: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            // You will find it in app/config/paramters.php
            COOKIE_KEY: 'X0ynVX0ynVX0ynVX0ynVX0ynVX0ynVX0ynVX0ynVX0ynVX0ynVX0ynVX',
            DEFAULT_LANG: '1', // Optional: 1 used as default
            DOMAIN:  'http://localhost', // Url of the shop
            PATH: '/prestashop/', // Optional: / used as default
        }),
        CatalogModule.forRoot(),
        CustomerModule.forRoot(),
        CartModule.forRoot(),
        OrderModule.forRoot()
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
```

## Api usage

To see how to use the api, look at examples in the demo folder:

- `resources` folder to see how to get data,
- `create` folder show how to create new resources (customer, carts ...).

## Tips

- Allow CORS (local developppement) :

Add the followin lines at the top of `app/webservice/dispatcher.php`

```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, HEAD, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Request-With');
```