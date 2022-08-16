import { StyledCardForm } from "./styled/CardForm.styled";
import { CardFormRow } from "./styled/CardFormRow.style";
import { Grid } from "./styled/Grid";
import { Input } from "./styled/Input";

export const CardDetailsForm = () => {
  return (
    <StyledCardForm>
      <Grid gridColumn="1fr 1fr">
        <CardFormRow gridColumn="1/-1">
          <label>
            CARDHOLDER NAME
            <Input type="text" placeholder="e.g. Jane Appleseed" />
          </label>
        </CardFormRow>

        <CardFormRow gridColumn="1/-1">
          <label>
            CARD NUMBER
            <Input type="number" placeholder="e.g. 1234 5678 9764 0000" />
          </label>
        </CardFormRow>

        <CardFormRow gridColumn="1/2">
          <span aria-hidden="true">EXP. Date (MM/YY)</span>
          <Grid gridColumn="1fr 1fr">
            <Input type="number" placeholder="MM" aria-label="Expiry Month" />
            <Input type="number" placeholder="YY" aria-label="Expiry Year" />
          </Grid>
        </CardFormRow>

        <CardFormRow gridColumn="2/-1">
          <label>
            CVC
            <Input type="number" placeholder="e.g. 123" />
          </label>
        </CardFormRow>

        <CardFormRow gridColumn="1/-1">
          <button>Confirm</button>
        </CardFormRow>
      </Grid>
    </StyledCardForm>
  );
};
