import React, { useState } from "react";
import { validateCardDetails } from "../utils/utils";
import { Button } from "./styled/Button.styled";
import { StyledCardForm } from "./styled/CardForm.styled";
import { CardFormRow, RowError } from "./styled/CardFormRow.style";
import { Grid } from "./styled/Grid";
import { Input } from "./styled/Input";
import { SuccessMessage } from "./SuccessMessage";

const initialState = {
  cardHolderName: "",
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: "",
};

export const CardDetailsForm = () => {
  const [cardDetails, setCardDetails] = useState(initialState);
  const [cardDetailsError, setCardDetailsError] = useState({
    ...initialState,
    expiryDate: "",
  });

  const { cardHolderName, cardNumber, expiryMonth, expiryYear, cvc } =
    cardDetails;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;

    setCardDetails((c) => ({ ...c, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateCardDetails(cardDetails);

    setCardDetailsError(error);
  };

  return (
    <StyledCardForm onSubmit={handleSubmit}>
      <Grid gridColumn="1fr 1fr">
        <CardFormRow gridColumn="1/-1">
          <label>
            CARDHOLDER NAME
            <Input
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={cardHolderName}
              name="cardHolderName"
              onChange={(e) => handleChange(e)}
              error={!!cardDetailsError.cardHolderName}
            />
          </label>
          <RowError>{cardDetailsError.cardHolderName}</RowError>
        </CardFormRow>

        <CardFormRow gridColumn="1/-1">
          <label>
            CARD NUMBER
            <Input
              type="number"
              placeholder="e.g. 1234 5678 9764 0000"
              value={cardNumber}
              name="cardNumber"
              onChange={(e) => handleChange(e)}
              error={!!cardDetailsError.cardNumber}
            />
          </label>
          <RowError>{cardDetailsError.cardNumber}</RowError>
        </CardFormRow>

        <CardFormRow gridColumn="1/2">
          <span aria-hidden="true">EXP. Date (MM/YY)</span>
          <Grid gridColumn="1fr 1fr">
            <Input
              type="number"
              placeholder="MM"
              aria-label="Expiry Month"
              min={1}
              max={12}
              value={expiryMonth}
              name="expiryMonth"
              onChange={(e) => handleChange(e)}
              error={!!cardDetailsError.expiryMonth}
            />
            <Input
              type="number"
              placeholder="YY"
              aria-label="Expiry Year"
              value={expiryYear}
              name="expiryYear"
              onChange={(e) => handleChange(e)}
              error={!!cardDetailsError.expiryYear}
            />
          </Grid>
          <RowError>{cardDetailsError.expiryDate}</RowError>
        </CardFormRow>

        <CardFormRow gridColumn="2/-1">
          <label>
            CVC
            <Input
              type="number"
              placeholder="e.g. 123"
              min={0}
              value={cvc}
              name="cvc"
              onChange={(e) => handleChange(e)}
              error={!!cardDetailsError.cvc}
            />
          </label>
          <RowError>{cardDetailsError.cvc}</RowError>
        </CardFormRow>

        <CardFormRow gridColumn="1/-1">
          <Button>Confirm</Button>
        </CardFormRow>
      </Grid>

      <SuccessMessage />
    </StyledCardForm>
  );
};
