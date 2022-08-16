import styled from "styled-components";

export const Input = styled.input`
  padding: 0.7rem 1rem;
  margin: 0.5rem auto;
  border: 1px solid gray;
  border-radius: 7px;
  display: block;
  width: 100%;

  ::placeholder {
    color: hsl(0, 0%, 73%);
    font-size: 1.2em;
  }
`;
