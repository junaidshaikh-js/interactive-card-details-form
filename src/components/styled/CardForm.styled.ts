import styled from "styled-components";

export const StyledCardForm = styled.form`
  margin: 5rem auto;
  width: min(90vw, 400px);

  @media screen and (min-width: 48em) {
    flex-basis: 30%;
    margin: auto 0;
  }
`;

export const StyledSuccessMessage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  img {
    width: 100px;
    height: 100px;
    margin: 1rem 0;
  }

  span {
    margin: 10px 0;
  }

  span:first-of-type {
    font-size: 2em;
  }

  span:nth-of-type(2) {
    color: gray;
  }
`;
