import styled from "styled-components";

export const Grid = styled.div<{
  gridColumn: string;
}>`
  display: grid;
  gap: 10px;
  grid-template-columns: ${({ gridColumn }) => gridColumn};
  width: 100%;
`;
