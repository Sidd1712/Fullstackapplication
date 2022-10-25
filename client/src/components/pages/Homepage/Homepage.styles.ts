import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
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
