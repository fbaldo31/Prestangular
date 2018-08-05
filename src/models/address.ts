/**
 * Created by Frederick BALDO on 17/06/2017.
 */
export class Address {
  id_customer?: number;
  firstname?: string;
  lastname: string;
  alias = '';
  address1 = '';
  city = '';
  id_country = '';
  postcode = '';
  isBilling = true;
  isDelivery = true;

  constructor(
    lastname: string,
    firstname: string,
    country: string,
    alias: string,
    address1: string,
    city: string
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.id_country = country;
    this.alias = alias;
    this.address1 = address1;
    this.city = city
  }
}
