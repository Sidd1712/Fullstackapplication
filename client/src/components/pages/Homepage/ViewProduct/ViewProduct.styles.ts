import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;
  margin-top: 2rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5%, 2.5rem);
  width: 100%;
  box-sizing: border-box;
`;
export const Image = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;
export const Flexcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex-wrap: wrap;
`;
