/**
 * Created by Frederick BALDO on 03/06/2017.
 */
import { ProductDetails } from '.';

export class Product {
  public id: number;
  public shortDescription: string;
  public quantity: number;
  public price: number;
  public categories: any[];
  public mainImage: number;
  public combinations: any[];
  public isVisible: boolean;
  public details?: ProductDetails;
}

// {
//   "id": 1,
//   "id_manufacturer": "1",
//   "id_supplier": "1",
//   "id_category_default": "5",
//   "new": null,
//   "cache_default_attribute": "1",
//   "id_default_image": "1",
//   "id_default_combination": "1",
//   "id_tax_rules_group": "1",
//   "position_in_category": "0",
//   "manufacturer_name": "Fashion Manufacturer",
//   "quantity": "0",
//   "type": "simple",
//   "id_shop_default": "1",
//   "reference": "demo_1",
//   "supplier_reference": "",
//   "location": "",
//   "width": "0.000000",
//   "height": "0.000000",
//   "depth": "0.000000",
//   "weight": "0.000000",
//   "quantity_discount": "0",
//   "ean13": "0",
//   "isbn": "",
//   "upc": "",
//   "cache_is_pack": "0",
//   "cache_has_attachments": "0",
//   "is_virtual": "0",
//   "state": "1",
//   "on_sale": "0",
//   "online_only": "0",
//   "ecotax": "0.000000",
//   "minimal_quantity": "1",
//   "price": "16.510000",
//   "wholesale_price": "4.950000",
//   "unity": "",
//   "unit_price_ratio": "0.000000",
//   "additional_shipping_cost": "0.00",
//   "customizable": "0",
//   "text_fields": "0",
//   "uploadable_files": "0",
//   "active": "1",
//   "redirect_type": "404",
//   "id_type_redirected": "0",
//   "available_for_order": "1",
//   "available_date": "0000-00-00",
//   "show_condition": "0",
//   "condition": "new",
//   "show_price": "1",
//   "indexed": "1",
//   "visibility": "both",
//   "advanced_stock_management": "0",
//   "date_add": "2018-07-17 08:23:48",
//   "date_upd": "2018-07-17 08:23:48",
//   "pack_stock_type": "3",
//   "meta_description": "",
//   "meta_keywords": "",
//   "meta_title": "",
//   "link_rewrite": "t-shirt-delave-manches-courtes",
//   "name": "T-shirt délavé à manches courtes",
//   "description": "<p>Fashion propose des vêtements de qualité depuis 2010. La marque propose une gamme féminine composée d'élégants vêtements à coordonner et de robes originales et offre désormais une collection complète de prêt-à-porter, regroupant toutes les pièces qu'une femme doit avoir dans sa garde-robe. Fashion se distingue avec des looks à la fois cool, simples et rafraîchissants, alliant élégance et chic, pour un style reconnaissable entre mille. Chacune des magnifiques pièces de la collection est fabriquée avec le plus grand soin en Italie. Fashion enrichit son offre avec une gamme d'accessoires incluant chaussures, chapeaux, ceintures et bien plus encore !</p>",
//   "description_short": "<p>T-shirt délavé à manches courtes et col rond. Matière douce et extensible pour un confort inégalé. Pour un look estival, portez-le avec un chapeau de paille !</p>",
//   "available_now": "En stock",
//   "available_later": "",
//   "associations": {
//     "categories": [
//       {
//         "id": "2"
//       },
//       {
//         "id": "3"
//       },
//       {
//         "id": "4"
//       },
//       {
//         "id": "5"
//       }
//     ],
//     "images": [
//       {
//         "id": "1"
//       },
//       {
//         "id": "2"
//       },
//       {
//         "id": "3"
//       },
//       {
//         "id": "4"
//       }
//     ],
//     "combinations": [
//       {
//         "id": "1"
//       },
//       {
//         "id": "2"
//       },
//       {
//         "id": "3"
//       },
//       {
//         "id": "4"
//       },
//       {
//         "id": "5"
//       },
//       {
//         "id": "6"
//       }
//     ],
//     "product_option_values": [
//       {
//         "id": "1"
//       },
//       {
//         "id": "14"
//       },
//       {
//         "id": "2"
//       },
//       {
//         "id": "13"
//       },
//       {
//         "id": "3"
//       }
//     ],
//     "product_features": [
//       {
//         "id": "5",
//         "id_feature_value": "5"
//       },
//       {
//         "id": "6",
//         "id_feature_value": "11"
//       },
//       {
//         "id": "7",
//         "id_feature_value": "17"
//       }
//     ],
//     "stock_availables": [
//       {
//         "id": "1",
//         "id_product_attribute": "0"
//       },
//       {
//         "id": "8",
//         "id_product_attribute": "1"
//       },
//       {
//         "id": "9",
//         "id_product_attribute": "2"
//       },
//       {
//         "id": "10",
//         "id_product_attribute": "3"
//       },
//       {
//         "id": "11",
//         "id_product_attribute": "4"
//       },
//       {
//         "id": "12",
//         "id_product_attribute": "5"
//       },
//       {
//         "id": "13",
//         "id_product_attribute": "6"
//       }
//     ]
//   }
// }