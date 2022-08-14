import styled from "styled-components";

export const StyledHeroSection = styled.section`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledImageContainerBack = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 60%;

  span {
    position: absolute;
    top: 41%;
    right: 10%;
  }
`;

export const StyledImageContainerFront = styled.div`
  position: absolute;
  width: 60%;
  top: 58%;
  left: 7%;
`;

export const StyledCardDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
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
    font-size: 1.2rem;
    letter-spacing: 2px;
  }
`;
