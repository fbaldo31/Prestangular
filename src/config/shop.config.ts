import { IShopConfig } from './shop-config.interface';

export const SHOP: IShopConfig = {
    /* Provide your Prestashop site settings here
     * Visit http://doc.prestashop.com/display/PS17/Webservice for more informations
     * You need to set API_KEY, IMG_KEY, DEFAULT_LANG, DOMAIN and LANGUAGES
     */
    API_KEY: '', //'UG9WIW8NFNQ1S6RLXVTJG2QGD756W7MV',
    // We strongly recommend to setup a special key for images with only reading rights
    IMG_KEY: '', // 'UG9WIW8NFNQ1S6RLXVTJG2QGD756W7MV',
    COOKIE_KEY: '', // '0YR2YLMOWz4hq9q1EiZCvnr4u2irr3sLcseqstzUFcTJLDKZo3BXaXJw',
    DEFAULT_LANG: '', // '1',
    DOMAIN: '', // 'http://localhost/prestashop',
    PATH: '/', // /prestashop/
    PORT: '',
    LANGUAGES: [],
    // Bellow you should not modify
    OUTPUT:  'JSON', // xml by default, so don't change it !
    XML_HEADER: '<?xml version="1.0" encoding="UTF-8"?><prestashop xmlns:xlink="http://www.w3.org/1999/xlink">',
    RESOURCES: {
      // General
      search: '/search',
      generalImg: '/images/general',
      addresses: '/addresses',
      countries: '/countries',
      //Products
      allProducts: '/products',
      productOptions: '/product_options',
      productOptValues: '/product_option_values',
      productFeatures: '/product_features',
      productFeatValues: '/product_feature_values',
      combinations: '/combinations',
      productsImg: '/images/products',          // /:productId/:imgageId  # as url param
      // Categories
      allCategories: '/categories',
      categoriesImg: 'images/categories',       // /:categoryId/:imgageId  # as url param
      // Images
      manufacturersImg: 'images/manufacturers', // /:manufacturerId/:imgageId  # as url param
      suppliersImg: 'images/suppliers',         // /:supplierId/:imgageId  # as url param
      storesImg: 'images/stores',               // /:storeId/:imgageId  # as url param
      // Customers
      customers: '/customers',
      loginEmail: '&filter[email]=',
      loginPass: '&filter[passwd]=',
      // Orders
      carts: '/carts',
      orders: '/orders',
      orderStates: '/order_states',
      orderPay: '/order_payments',
      orderSlips: '/order_slips',
      orderInvoices: '/order_invoices',
      orderHistories: '/order_histories'
    }
  };
  