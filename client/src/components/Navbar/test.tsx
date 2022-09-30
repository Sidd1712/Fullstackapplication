import React from "react";
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

const Navbar = () => {
  return (
    <>
      {/* header */}
      <StyledHeader>
        <StyledLogo>
          <a href="landingpage.html">
            <img
              src="./sneakerimage.jpeg"
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
              <StyledAnchor href="#menu1">menu1</StyledAnchor>
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
      {/* hero */}
      <StyledHero>
        <StyledHeroHeading>Heading</StyledHeroHeading>
        <StyledHeroHeading4>Subheading</StyledHeroHeading4>
        <StyledHeroButton>Call to action</StyledHeroButton>
      </StyledHero>
      {/* /card row */}
      <CardRow>
        <StyledCard>
          <StyledHeroHeading>Heading</StyledHeroHeading>
          <StyledHeroHeading4>Subheading</StyledHeroHeading4>
          <StyledHeroButton>Call to action</StyledHeroButton>
        </StyledCard>
        <StyledCard>
          <StyledHeroHeading>Heading</StyledHeroHeading>
          <StyledHeroHeading4>Subheading</StyledHeroHeading4>
          <StyledHeroButton>Call to action</StyledHeroButton>
        </StyledCard>
        <StyledCard>
          <StyledHeroHeading>Heading</StyledHeroHeading>
          <StyledHeroHeading4>Subheading</StyledHeroHeading4>
          <StyledHeroButton>Call to action</StyledHeroButton>
        </StyledCard>
        <StyledCard>
          <StyledHeroHeading>Heading</StyledHeroHeading>
          <StyledHeroHeading4>Subheading</StyledHeroHeading4>
          <StyledHeroButton>Call to action</StyledHeroButton>
        </StyledCard>
      </CardRow>
    </>
  );
};
export default Navbar;
