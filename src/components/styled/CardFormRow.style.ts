import styled from "styled-components";

export const CardFormRow = styled.div<{
  gridColumn: string;
}>`
  margin: 1rem auto;
  width: 100%;
  grid-column: ${({ gridColumn }) => gridColumn};
`;
