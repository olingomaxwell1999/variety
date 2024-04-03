// utils/woocommerce.ts
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: "https://variety.co.ke/" || "", // Your WordPress site URL
  consumerKey: 'ck_bacd2a3d505aad4203727d279eeacb384e199aba' || "", // Your WooCommerce Consumer Key
  consumerSecret: 'cs_e520d5173291fdf6ef29b423cbb762d6ef081c48' || "", // Your WooCommerce Consumer Secret
  version: "wc/v3", // WooCommerce API version
});

export default WooCommerce;