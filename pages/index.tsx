import { InferGetServerSidePropsType } from 'next';
import { getConfig } from '@framework/api/config';
import getAllProducts from '@framework/product/get-all-products';

import { ProductCard } from '@components/product';
import { Layout } from '@components/common';
import { Grid } from '@components/ui';

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id.toString()} product={product} />
        ))}
      </Grid>
    </>
  );
};

Home.Layout = Layout;

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
