import styled from "styled-components";

export const StyledHeroSection = styled.section`
  position: relative;
  flex-basis: 50%;
  color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  position: absolute;
  width: min(70%, 350px);
  font-size: 1em;

  @media screen and (min-width: 48em) {
    font-size: 1.2em;
`;

export const StyledImageContainerBack = styled(ImageContainer)`
  top: 20%;
  right: 5%;

  span {
    position: absolute;
    top: 41%;
    right: 10%;
  }

  @media screen and (min-width: 48em) {
    top: 52%;
    left: 31%;
  }
`;

export const StyledImageContainerFront = styled(ImageContainer)`
  top: 58%;
  left: 7%;

  @media screen and (min-width: 48em) {
    top: 22%;
    left: 20%;
  }
`;

export const StyledCardDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  img {
    width: 20%;
  }

  > span {
    margin-top: auto;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }
`;
