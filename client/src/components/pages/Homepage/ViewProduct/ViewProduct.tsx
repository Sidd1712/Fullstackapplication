import React, { useEffect } from "react";

import { Grid, Image, Flexcontainer, Container } from "./ViewProduct.styles";
import sneakerimage from "../../../../Assets/sneakerimage.jpeg";
import { RootState, useAppDispatch } from "../../../../store/Store";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../../../../store/Productsapi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { send } from "process";

const ViewProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const customId = "custom-toast-id";
  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const result = await dispatch(getProductById(params.id));
        if (getProductById.rejected.match(result)) {
          toast.error(
            "Sorry, something went wrong with finding this product.",
            {
              position: "top-center",
              toastId: customId,
            }
          );
        }
      }
    };

    fetchData();
  }, [params.id]);

  const product = useSelector((state: RootState) => state.products.product);

  const user = useSelector((state: RootState) => state.user);
  const sendDelete = async (id: string) => {
    const result = await dispatch(deleteProduct(id));
    if (deleteProduct.rejected.match(result)) {
      toast.error("Sorry, something went wrong deleting this product.", {
        toastId: customId,
        position: "top-center",
      });
    } else {
      navigate("/");
    }
  };

  const handleDelete = () => {
    sendDelete(product.id);
  };

  return (
    <Container>
      <ToastContainer />
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
