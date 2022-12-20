import React, { useEffect } from "react";

import { Grid, Image, Flexcontainer, Container } from "./ViewProduct.styles";
import sneakerimage from "../../../../Assets/sneakerimage.jpeg";
import { RootState, useAppDispatch } from "../../../../store/Store";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../../store/Productsapi";
import { useSelector } from "react-redux";



const ViewProduct = () => {
const dispatch = useAppDispatch()
const params = useParams<{id: string}>()
useEffect(()=>{


  if (params.id) {

    dispatch(getProductById(params.id))
  }
},[params.id])

const product = useSelector((state:RootState)=>state.products.product)


const user = useSelector((state:RootState)=>state.user)



  return (
    <Container>
      <Grid>
        <Image src={product.image} alt="" />
        <Flexcontainer>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <p>{product.price}</p>
        </Flexcontainer>
      </Grid>
    </Container>
  );
};
export default ViewProduct;
