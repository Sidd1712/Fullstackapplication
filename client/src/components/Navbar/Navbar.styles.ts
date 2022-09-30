import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: blanchedalmond;
  min-height: 100px;
`;

export const StyledNav = styled.nav`
  align-self: center;
`;

export const StyledLoginNav = styled.nav`
  position: absolute;
  right: 10px;
  padding-top: 20px;
`;
export const StyledLogo = styled.div`
  position: absolute;
  left: 10px;
`;

export const StyledUnorderedList = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledAnchor = styled.a`
  padding: 1rem;
`;

export const StyledHeroHeading = styled.h1`
  margin-bottom: 3rem;
`;

export const StyledHero = styled.div`
  padding: 5rem;
  text-align: center;
  background-color: #6666;
`;
export const StyledHeroHeading4 = styled.h4`
  margin-bottom: 3rem;
`;
export const StyledHeroButton = styled.a`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
export const StyledCard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #6666;
  border: 1px solid #6777;
  box-shadow: #6777 0 2px 3px 0;
`;
export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
