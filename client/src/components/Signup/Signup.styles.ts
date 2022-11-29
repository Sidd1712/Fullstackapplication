import styled from "styled-components";
import sneakerimage from "../../Assets/sneakerimage.jpeg";

export const Container = styled.div`
  position: relative;
  width: 350px;

  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  margin: 3rem auto;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;
export const BrandLogo = styled.div`
  height: 150px;
  width: 150px;
  background: url(${sneakerimage});
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
`;

export const BrandTitle = styled.div`
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #1da1f2;
  letter-spacing: 1px;
`;
export const Inputs = styled.div`
  text-align: left;
  margin-top: 30px;

  label,
  input,
  button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
`;

export const StyledLabels = styled.label`
  margin-bottom: 10px;

  @supports selector(:nth-of-type(2)) {
    margin-top: 12px;
  }
`;

export const StyledInput = styled.input`
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
`;

export const StyledButton = styled.button`
  color: white;
  margin-top: 20px;
  background: #1da1f2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;

  :hover {
    box-shadow: none;
  }
`;