export interface ProductImage {
  url: String;
  alt?: String;
}

export interface Product {
  id: String;
  name: String;
  description: String;
  slug: String;
  path: String;
  images: ProductImage[];
}
