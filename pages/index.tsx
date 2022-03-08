import { InferGetServerSidePropsType } from "next";
import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/get-all-products";

import { ProductCard } from "@components/product";
import { Layout } from "@components/common";
import { Grid, Hero } from "@components/ui";

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
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Carrot cake pastry marshmallow lemon drops shortbread ice cream chocolate bar chocolate bar. Cookie muffin chocolate bonbon shortbread. Chocolate cake tart tootsie roll soufflé lemon drops. Dessert fruitcake brownie muffin chocolate cake toffee candy. Toffee soufflé oat cake topping jelly bonbon. Gummies liquorice shortbread sesame snaps cake fruitcake fruitcake icing tootsie roll. Pudding candy pie cookie pie marshmallow dessert jujubes."
      />
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
