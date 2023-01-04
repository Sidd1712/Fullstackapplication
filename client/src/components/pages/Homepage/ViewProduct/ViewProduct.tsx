import React, { useEffect } from "react";

import { Grid, Image, Flexcontainer, Container } from "./ViewProduct.styles";
import sneakerimage from "../../../../Assets/sneakerimage.jpeg";
import { RootState, useAppDispatch } from "../../../../store/Store";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../../../../store/Productsapi";
import { useSelector } from "react-redux";

const ViewProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const params = useParams<{ id: string }>();
  useEffect(() => {
    if (params.id) {
      dispatch(getProductById(params.id));
    }
  }, [params.id]);

  const product = useSelector((state: RootState) => state.products.product);

  const user = useSelector((state: RootState) => state.user);

  const handleDelete =() => {

    dispatch(deleteProduct(product.id))
    navigate("/")
  }

  return (
    <Container>
      <Grid>
        <Image src={product.image} alt="" />
        <Flexcontainer>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <p>{product.price}</p>
        </Flexcontainer>
        {product.seller === user.userInfo.username ? (
          <Flexcontainer>
            <button onClick={handleDelete}>Delete</button>
            <Link to={"/products/" + product.id + "/edit"}>Update</Link>
          </Flexcontainer>
        ) : null}
      </Grid>
    </Container>
  );
};
export default ViewProduct;
