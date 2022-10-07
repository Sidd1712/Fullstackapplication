import React from "react";
import { SingleProductProps } from "./SingleProduct.types";
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
    <>
      <a href={productHref}>
        <img src={image} alt={`${name} shoe`}></img>
      </a>
      <h3>{name} </h3>
      <p>{desc} </p>
      <p>{price}</p>
    </>
  );
};
export default SingleProduct;
