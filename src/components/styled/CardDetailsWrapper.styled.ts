import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media screen and (min-width: 64em) {
    display: flex;
    flex-direction: row;
  }
`;
