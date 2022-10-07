import React from "react";
import { navbarTypes } from "./Navbar.types";
import {
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
} from "./Navbar.styles";

const Navbar = ({link,ImgSrc}:navbarTypes) => {
  return (
    <>
      {/* header */}
      <StyledHeader>
        <StyledLogo>
          <a href="landingpage.html">
            <img
              src={ImgSrc}
              alt="logo"
              id="header-img"
              width="60px"
              height="60px"
            />
          </a>
        </StyledLogo>
        <StyledNav>
          <StyledUnorderedList>
            <li>
              <StyledAnchor href={link}>menu1</StyledAnchor>
            </li>
            <li>
              <StyledAnchor href="#menu2">menu2</StyledAnchor>
            </li>
            <li>
              <StyledAnchor href="#menu3">menu3</StyledAnchor>
            </li>
          </StyledUnorderedList>
        </StyledNav>
        <StyledLoginNav>
          <StyledUnorderedList>
            <li>
              <StyledAnchor href="#menu1">menu1</StyledAnchor>
            </li>
            <li>
              <StyledAnchor href="#menu2">menu2</StyledAnchor>
            </li>
          </StyledUnorderedList>
        </StyledLoginNav>
      </StyledHeader>
    </>
  );
};
export default Navbar;
