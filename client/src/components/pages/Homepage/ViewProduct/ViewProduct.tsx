import React, { useEffect } from "react";

import { Grid, Image, Flexcontainer, Container } from "./ViewProduct.styles";
import sneakerimage from "../../../../Assets/sneakerimage.jpeg";
import { RootState, useAppDispatch } from "../../../../store/Store";
import { useSelector } from "react-redux";
import { getProductById } from "../../../../store/Productsapi";
import { Link, useParams } from "react-router-dom";

const ViewProduct = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();

  console.log("params", params);

  useEffect(() => {
    if (params.id) {
      dispatch(getProductById(params.id));
    }
  }, []);

  const product = useSelector((state: RootState) => state.products.product);
  const user = useSelector((state: RootState) => state.user);
  console.log("productß", product);
  console.log("user", user);

  const handleDelete = () => {};

  // const editButton =
  //   authenticated && username === author ? <EditPost postId={postId} /> : null;
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
            <Link to={"/browse/" + product.id + "/edit"} type="button">
              Edit
            </Link>
            <button onClick={handleDelete} type="button">
              Delete
            </button>{" "}
          </Flexcontainer>
        ) : null}
      </Grid>
    </Container>
  );
};
export default ViewProduct;
