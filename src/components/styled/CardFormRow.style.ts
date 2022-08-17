import styled from "styled-components";

export const CardFormRow = styled.div<{
  gridColumn: string;
}>`
  margin: 0 auto 5px auto;
  width: 100%;
  grid-column: ${({ gridColumn }) => gridColumn};
`;

export const RowError = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: inline-block;
  height: 10px;
`;
