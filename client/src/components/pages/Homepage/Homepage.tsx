import { useEffect } from "react";
import { HomepageProps } from "./Homepage.types";
import { SingleProductProps } from "../../SingleProduct/SingleProduct.types";
import { Grid, Container } from "./Homepage.styles";
import { useAppDispatch, RootState } from "../../../store/Store";
import { useSelector } from "react-redux";
import { getProducts } from "../../../store/Productsapi";

import SingleProduct from "../../SingleProduct/SingleProduct";

const Homepage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);
  return (
    <Container>
      <Grid>
        {products.map((product: SingleProductProps) => (
          <div key={product.id}>
            <SingleProduct
              name={product.name}
              price={product.price}
              image={product.image}
              desc={product.desc}
              productHref={product.productHref}
              id = {product.id}
            ></SingleProduct>
          </div>
        ))}
      </Grid>
    </Container>
  );
};
export default Homepage;
