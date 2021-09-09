import { InferGetServerSidePropsType } from 'next';

import { getConfig } from '@framework/api/config';
import getAllProducts from '@framework/product/get-all-products';

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <div>{JSON.stringify(products)}</div>;
};

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default Home;
