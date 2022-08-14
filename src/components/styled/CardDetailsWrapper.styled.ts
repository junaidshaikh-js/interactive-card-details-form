import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    > * {
      flex-basis: 100%;
    }
  }
`;
