export interface Product {
  id: number;
  name: string;
  permalink: string;
  slug: string;
  valuebefore: string;
  valueafter: string;
  image: { id: string; src: string; alt: string }[];
  category: string;
}

export interface FilterOption {
  value: string;
  label: string;
}