import styled from "styled-components";

export const Input = styled.input<{
  error?: boolean;
}>`
  padding: 0.7rem 1rem;
  border: 1px solid ${({ error, theme }) => (error ? theme.colors.red : "gray")};
  border-radius: 7px;
  display: block;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
    border-color: transparent;
  }

  ::placeholder {
    color: hsl(0, 0%, 73%);
    font-size: 1.2em;
  }
`;

export const InputWrapper = styled.span<{
  focus: boolean;
}>`
    display: block;
    width: 100%;
    padding: 1px;
    background: transparent;
    margin: 0.5rem auto;
    border-radius: 7px;

    ${({ focus, theme }) => {
      return (
        focus &&
        `background: linear-gradient(45deg, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`
      );
    }}  
}`;
