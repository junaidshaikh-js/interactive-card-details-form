import { BackgroundImage } from "./BackgroundImage";
import {
  StyledCardDetails,
  StyledHeroSection,
  StyledImageContainerBack,
  StyledImageContainerFront,
} from "./styled/HeroSection.styled";
import CardLogo from "../assets/card-logo.svg";
import { Flex } from "./styled/Flex";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <BackgroundImage />

      <StyledImageContainerBack>
        <img src="./images/bg-card-back.png" alt="" />
        <span>000</span>
      </StyledImageContainerBack>

      <StyledImageContainerFront>
        <img src="./images/bg-card-front.png" alt="" />

        <StyledCardDetails>
          <img src={CardLogo} alt="" />

          <span>0000 0000 0000 0000</span>

          <Flex>
            <span>JANE APPLESEED</span>
            <span>00/00</span>
          </Flex>
        </StyledCardDetails>
      </StyledImageContainerFront>
    </StyledHeroSection>
  );
};
