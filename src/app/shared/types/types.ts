// types/types.ts

export interface Product {
  id: number;
  name: string;
  permalink: string;
  slug: string;
  valuebefore: string;
  valueafter: string;
  image: {
    id: number;
    src: string;
    alt: string;
  }[];
  category: string;
}

export interface WooCommerceProduct {
  id: number;
  name: string;
  permalink: string;
  slug: string;
  price: string;
  sale_price: string | null;
  images: {
    id: number;
    src: string;
    alt: string | null;
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
}

export interface WooCommerceResponse {
  data: WooCommerceProduct[];
  headers: {
    "X-WP-Total": string;
    "X-WP-TotalPages": string;
  };
}

export interface FilterOption {
  value: string;
  label: string;
}