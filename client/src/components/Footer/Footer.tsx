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
} from "./Footer.styles";

const Footer = () => {
  return (
    <>
      {/* header */}
      <StyledHeader>
        <StyledNav>
          <StyledUnorderedList>
            <li>
              <StyledAnchor href="#Contact us">Contact us</StyledAnchor>
            </li>
          </StyledUnorderedList>
        </StyledNav>
      </StyledHeader>
    </>
  );
};
export default Footer;
