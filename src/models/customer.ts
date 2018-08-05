import { PrestashopEntity, IForeignKey } from './prestashop.entity';
/**
 * Created by Frederick BALDO on 17/06/2017.
 */
export class Customer extends PrestashopEntity {
  id_default_group: string;
  id_lang: string;
  newsletter_date_add: string; // 2013-12-13 08:19:15,
  ip_registration_newsletter: string;
  last_passwd_gen: string; // 2018-07-17 02:23:53,
  secure_key: string; // 03006fd36241af163f4c6b5bdf6ac5b1,
  deleted: string;
  passwd: string; // f651f677604daf8457f21c4718dfc4a3,
  lastname: string;
  firstname: string;
  email: string; // pub@prestashop.com,
  id_gender: string;
  birthday: string; // 1970-01-15,
  newsletter: string;
  optin: string;
  website: string;
  company: string;
  siret: string;
  ape: string;
  outstanding_allow_amount: string; // 0.000000,
  show_public_prices: string;
  id_risk: string;
  max_payment_days: string;
  active: string;
  note: string;
  is_guest: string;
  id_shop: string;
  id_shop_group: string;
  reset_password_token: string;
  reset_password_validity: string; // 0000-00-00 00:00:00,
  associations: {
    groups: IForeignKey[]
  }

  constructor(
    passwd: string,
    lastname: string,
    firstname: string,
    email: string,

  ) {
    super();
    this.passwd = passwd;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
  }
}
