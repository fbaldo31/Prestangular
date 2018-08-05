export class Order {
    id?: number;
    id_address_delivery: string;
    id_address_invoice: string;
    id_cart: string;
    id_currency: string;
    id_lang: string;
    id_customer: string;
    id_carrier: string;
    current_state: string;
    module: string; // ps_checkpayment,
    invoice_number: string;
    invoice_date: string;// 0000-00-00 00:00:00,
    delivery_number: string;
    delivery_date: string;//0000-00-00 00:00:00,
    valid: string;
    date_add: string; //2018-07-17 08:23:54,
    date_upd: string; //2018-07-17 08:23:56,
    shipping_number: string;
    id_shop_group: string;
    id_shop: string;
    secure_key: string; // b44a6d9efd7a0076a0fbce6b15eaf3b1,
    payment: string; // Payment by check,
    recyclable: string;
    gift: string;
    gift_message: string;
    mobile_theme: string;
    total_discounts: number; // 0.000000,
    total_discounts_tax_incl: number; // 0.000000,
    total_discounts_tax_excl: number; // 0.000000,
    total_paid: number; // 55.000000,
    total_paid_tax_incl: number; // 55.000000,
    total_paid_tax_excl: number; // 55.000000,
    total_paid_real: number; // 0.000000,
    total_products: number; // 53.000000,
    total_products_wt: number; // 53.000000,
    total_shipping: number; // 2.000000,
    total_shipping_tax_incl: number; // 2.000000,
    total_shipping_tax_excl: number; // 2.000000,
    carrier_tax_rate: number; // 0.000,
    total_wrapping: number; // 0.000000,
    total_wrapping_tax_incl: number; // 0.000000,
    total_wrapping_tax_excl: number; // 0.000000,
    round_mode: string;
    round_type: string;
    conversion_rate: number; // 1.000000,
    reference: number; // XKBKNABJK,
    // associations?: {
    //     order_rows: { order_row: OrderRow }[]
    // }

    constructor(
        address: string,
        cart: string,
        currency: string,
        lang: string,
        customer: string,
        carrier: string,
        payModule: string,
        payment: string,
        total: number,
        products: number,
        weight: number,
        convertion: number,
        totalReal?: number,
        invoiceAddress?: string,
    ) {
        this.id_address_delivery = address;
        this.id_cart = cart;
        this.id_currency = currency;
        this.id_lang = lang;
        this.id_customer = customer;
        this.id_carrier = carrier;
        this.payment = payment;
        this.module = payModule;
        this.total_paid = total;
        this.total_products = products;
        this.total_products_wt = weight;
        this.conversion_rate = convertion;
        this.total_paid_real = totalReal ? totalReal : total;
        this.id_address_invoice = invoiceAddress ? invoiceAddress : address;
    }
};

// export class OrderRow {
//     id: string;
//     product_id: string;
//     product_attribute_id: string;
//     product_quantity: string;
//     product_name: string;
//     product_reference: string;
//     product_ean13: string;
//     product_isbn: string;
//     product_upc: string;
//     product_price: string;
//     unit_price_tax_incl: string;
//     unit_price_tax_excl: string;

//     constructor(
//         product: string, attribute: string, qty: string
//     ) {
//         this.product_id = product;
//         this.product_attribute_id = attribute;
//         this.product_quantity = qty;
//     }
// };
