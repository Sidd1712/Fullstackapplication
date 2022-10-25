import React from "react";
import { HomepageProps } from "./Homepage.types";
import { SingleProductProps } from "../../SingleProduct/SingleProduct.types";
import { Grid, Container } from "./Homepage.styles";

import SingleProduct from "../../SingleProduct/SingleProduct";

const Homepage = (props: HomepageProps) => {
  const { products } = props;
  return (
    <Container>
      <Grid>
        {products.map((product: SingleProductProps) => (
          <div key={product.productId}>
            <SingleProduct
              name={product.name}
              price={product.price}
              image={product.image}
              desc={product.desc}
              productHref={product.productHref}
            ></SingleProduct>
          </div>
        ))}
      </Grid>
    </Container>
  );
};
export default Homepage;
