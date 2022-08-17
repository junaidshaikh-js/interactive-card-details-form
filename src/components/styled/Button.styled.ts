import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.veryDarkVoilet};
  border-radius: 7px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.1em;
  padding: 12px 8px;
  width: 100%;
  letter-spacing: 1px;
`;
