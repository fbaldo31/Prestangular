import { PrestashopEntity } from './prestashop.entity';

export class Cart extends PrestashopEntity {
    id?: number;
    id_address_delivery: string;
    id_address_invoice: string;
    id_currency: string;
    id_customer: string;
    id_guest: string;
    id_lang: string;
    id_shop_group: string;
    id_shop: string;
    id_carrier: string;
    recyclable: string;
    gift: string;
    gift_message: string;
    mobile_theme: string;
    delivery_option?: any; //a:1:{i:3;s:2:\2,\;},
    readonly secure_key?: string;
    allow_seperated_package?: string;
    date_add: string; // 2018-07-17 08:23:53,
    date_upd: string; // 2018-07-17 08:23:53,
    associations: {
        cart_rows: { cart_row: CartRow }[]
    }

    constructor(currency: string, lang: string) {
        super();
        this.id_currency = currency;
        this.associations = { cart_rows: [] };
        this.id_lang = lang;
        this.setDate('date_add');
    }

    /**
     * @desc Must be called each time we update a cart
     */
    public update() {
        this.setDate('date_upd');
    }
};

export class CartRow {
    id_product: string;
    id_product_attribute: string;
    id_address_delivery: string;
    quantity: string;

    constructor(product: any, attribute: any, address: any, quantity: any) {
        this.id_product = product as string;
        this.id_product_attribute = attribute as string;
        this.id_address_delivery = address as string;
        this.quantity = quantity as string;
    }
};
