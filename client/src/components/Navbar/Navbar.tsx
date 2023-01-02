import React from "react";
import { navbarTypes } from "./Navbar.types";
import { useAppDispatch, RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import {
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledUnorderedList,
  StyledLoginNav,
  StyledAnchor,
} from "./Navbar.styles";
import { logoutUser } from "../../store/usersapi";

const Navbar = ({ link, ImgSrc }: navbarTypes) => {
  const dispatch = useAppDispatch();
  const authenticated = useSelector(
    (state: RootState) => state.user.authenticated
  );
  console.log("authenticated", authenticated);
  const handleLogout = () => {
    console.log("logout");
    dispatch(logoutUser());
  };
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
              <StyledAnchor href="/">Home</StyledAnchor>
            </li>
            <li>
              <StyledAnchor href="/about">About</StyledAnchor>
            </li>
            {authenticated && (
              <li>
                <StyledAnchor href="/createProduct">Sell</StyledAnchor>
              </li>
            )}
          </StyledUnorderedList>
        </StyledNav>
        <StyledLoginNav>
          <StyledUnorderedList>
            {!authenticated && (
              <li>
                <StyledAnchor href="/signup">Signup</StyledAnchor>
              </li>
            )}

            <li>
              {authenticated ? (
                <button onClick={() => handleLogout()}>Logout</button>
              ) : (
                <StyledAnchor href="/login">Login</StyledAnchor>
              )}
            </li>
          </StyledUnorderedList>
        </StyledLoginNav>
      </StyledHeader>
    </>
  );
};
export default Navbar;
