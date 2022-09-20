import React from 'react';
import { StyledHeader, StyledLogo, StyledNav, StyledUnorderedList, StyledLoginNav,StyledAnchor} from './Navbar.styles';

const Navbar = () => {
 return (<StyledHeader><StyledLogo>
 
   <a href="landingpage.html"><img src="./sneakerimage.jpeg"
       alt="logo"
       id="header-img"
       width="60px"
       height="60px"
   /></a>
 

 <StyledNav>
   <StyledUnorderedList>
     <li><StyledAnchor href="#menu1">menu1</StyledAnchor></li>
     <li><StyledAnchor href="#menu2">menu2</StyledAnchor></li>
     <li><StyledAnchor href="#menu3">menu3</StyledAnchor></li>
   </StyledUnorderedList>
 </StyledNav>
 <StyledLoginNav>
   <StyledUnorderedList>
     <li><StyledAnchor href="#menu1">menu1</StyledAnchor></li>
     <li><StyledAnchor href="#menu2">menu2</StyledAnchor></li>
   </StyledUnorderedList>
 </StyledLoginNav>
</StyledLogo></StyledHeader>)

  } 
  export default Navbar;

