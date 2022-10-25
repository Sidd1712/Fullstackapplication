import React from "react";

import { Grid, Image, Flexcontainer, Container } from "./ViewProduct.styles";
import sneakerimage from "../../../../Assets/sneakerimage.jpeg";

const ViewProduct = () => {
  return (
    <Container>
      <Grid>
        <Image src={sneakerimage} alt="" />
        <Flexcontainer>
          <h3>Nike Air 2000 Series</h3>
          <p>Shoe description</p>
          <p>$225.00</p>
        </Flexcontainer>
      </Grid>
    </Container>
  );
};
export default ViewProduct;
