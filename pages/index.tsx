import { InferGetServerSidePropsType } from 'next';

import getAllProducts from '@framework/product/get-all-products';

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <div>{JSON.stringify(products)}</div>;
};

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default Home;
