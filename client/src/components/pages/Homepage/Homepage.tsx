import React from "react";
import { HomepageProps } from "./Homepage.types";
import { SingleProductProps } from "../../SingleProduct/SingleProduct.types";

import SingleProduct from "../../SingleProduct/SingleProduct";

const Homepage = (props: HomepageProps) => {
  const { products } = props;
  return (
    <>
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
    </>
  );
};
export default Homepage;
