import React from "react";
import { SingleProductProps } from "./SingleProduct.types";
import { Image, Flexcontainer } from "./SingleProduct.styles";
import { Link } from "react-router-dom";
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
  const { name, price, image, desc, productHref,id } = props;
  return (
    <Flexcontainer>
      <a href={productHref}>
        <Image src={image} alt={`${name} shoe`}></Image>
      </a>
      <h3>{name} </h3>
      <p>{desc} </p>
      <p>{price}</p>
      <Link to ={`/products/${id}`} type = "button">View more</Link>
    </Flexcontainer>
  );
};
export default SingleProduct;
