import styled from "styled-components";

export const StyledCardForm = styled.form`
  margin: 5rem auto;
  width: min(90vw, 400px);

  @media screen and (min-width: 48em) {
    flex-basis: 30%;
    margin: auto 0;
  }
`;
