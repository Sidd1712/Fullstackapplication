import React from "react";
import { SingleProductProps } from "./SingleProduct.types";
import { Image, Flexcontainer } from "./SingleProduct.styles";
/*import {
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledUnorderedList,
  StyledLoginNav,
  StyledAnchor,
  StyledHero,
  StyledHeroHeading,
  StyledHeroHeading4,
  StyledHeroButton,
  StyledCard,
  CardRow,
} from "./SingleProduct.styles";*/

const SingleProduct = (props: SingleProductProps) => {
  const { name, price, image, desc, productHref } = props;
  return (
    <Flexcontainer>
      <a href={productHref}>
        <Image src={image} alt={`${name} shoe`}></Image>
      </a>
      <h3>{name} </h3>
      <p>{desc} </p>
      <p>{price}</p>
    </Flexcontainer>
  );
};
export default SingleProduct;
