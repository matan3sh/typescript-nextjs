import fetchApi from '../utils/fetch-api';

import getAllProductsQuery from '../utils/queries/get-all-products';
import { normalizeProduct } from '../utils/normalize';
import { Product } from '../../common/types/product';

import { ProductConnection } from '../schema';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];
  return products;
};

export default getAllProducts;
