import MobileMainBg from "../assets/bg-main-mobile.png";
import DesktopMainBg from "../assets/bg-main-desktop.png";
import styled from "styled-components";

const MobileImage = styled.img`
  @media screen and (min-width: 64em) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  display: none;

  @media screen and (min-width: 64em) {
    display: block;
    height: 100vh;
    width: 50%;
  }
`;

export const BackgroundImage = () => {
  return (
    <div>
      <MobileImage src={MobileMainBg} alt="" />
      <DesktopImage src={DesktopMainBg} alt="" />
    </div>
  );
};
