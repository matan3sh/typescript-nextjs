export interface ProductImage {
  url: String;
  alt?: String;
}

export interface ProductPrice {
  value: number;
  currencyCode: "USD" | "EUR" | string;
}

export interface Product {
  id: String;
  name: String;
  description: String;
  slug: String;
  path: String;
  images: ProductImage[];
  price: ProductPrice;
}
