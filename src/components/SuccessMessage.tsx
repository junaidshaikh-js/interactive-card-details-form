import { Button } from "./styled/Button.styled";
import { StyledSuccessMessage } from "./styled/CardForm.styled";

export const SuccessMessage = ({
  setIsFormSubmitted,
}: {
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <StyledSuccessMessage>
      <img src="./images/icon-complete.svg" alt="" />
      <span>THANK YOU!</span>
      <span>We've added your card details</span>
      <Button onClick={() => setIsFormSubmitted(false)}>Continue</Button>
    </StyledSuccessMessage>
  );
};
