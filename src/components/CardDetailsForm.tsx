import React, { useState } from "react";
import { validateCardDetails } from "../utils/utils";
import { Button } from "./styled/Button.styled";
import { StyledCardForm } from "./styled/CardForm.styled";
import { CardFormRow, RowError } from "./styled/CardFormRow.style";
import { Grid } from "./styled/Grid";
import { Input, InputWrapper } from "./styled/Input";
import { SuccessMessage } from "./SuccessMessage";

export const initialState = {
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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(initialState);

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

    for (let value of Object.values(error)) {
      if (value) return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      setCardDetails(initialState);
    }, 1000);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus((f) => ({ ...f, [e.target.name]: "false" }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setFocus((f) => ({ ...f, [e.target.name]: "" }));

  return (
    <StyledCardForm onSubmit={handleSubmit}>
      {isFormSubmitted ? (
        <SuccessMessage setIsFormSubmitted={setIsFormSubmitted} />
      ) : (
        <Grid gridColumn="1fr 1fr">
          <CardFormRow gridColumn="1/-1">
            <label>
              CARDHOLDER NAME
              <InputWrapper focus={!!focus.cardHolderName}>
                <Input
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  value={cardHolderName}
                  name="cardHolderName"
                  onChange={(e) => handleChange(e)}
                  error={!!cardDetailsError.cardHolderName}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputWrapper>
            </label>
            <RowError>{cardDetailsError.cardHolderName}</RowError>
          </CardFormRow>

          <CardFormRow gridColumn="1/-1">
            <label>
              CARD NUMBER
              <InputWrapper focus={!!focus.cardNumber}>
                <Input
                  type="text"
                  placeholder="e.g. 1234 5678 9764 0000"
                  value={cardNumber}
                  name="cardNumber"
                  onChange={(e) => handleChange(e)}
                  error={!!cardDetailsError.cardNumber}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputWrapper>
            </label>
            <RowError>{cardDetailsError.cardNumber}</RowError>
          </CardFormRow>

          <CardFormRow gridColumn="1/2">
            <span aria-hidden="true">EXP. Date (MM/YY)</span>
            <Grid gridColumn="1fr 1fr">
              <InputWrapper focus={!!focus.expiryMonth}>
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputWrapper>
              <InputWrapper focus={!!focus.expiryYear}>
                <Input
                  type="number"
                  placeholder="YY"
                  aria-label="Expiry Year"
                  value={expiryYear}
                  name="expiryYear"
                  onChange={(e) => handleChange(e)}
                  error={!!cardDetailsError.expiryYear}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputWrapper>
            </Grid>
            <RowError>{cardDetailsError.expiryDate}</RowError>
          </CardFormRow>

          <CardFormRow gridColumn="2/-1">
            <label>
              CVC
              <InputWrapper focus={!!focus.cvc}>
                <Input
                  type="number"
                  placeholder="e.g. 123"
                  min={0}
                  value={cvc}
                  name="cvc"
                  onChange={(e) => handleChange(e)}
                  error={!!cardDetailsError.cvc}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </InputWrapper>
            </label>
            <RowError>{cardDetailsError.cvc}</RowError>
          </CardFormRow>

          <CardFormRow gridColumn="1/-1">
            <Button disabled={loading}>
              {loading ? "Adding..." : "Confirm"}
            </Button>
          </CardFormRow>
        </Grid>
      )}
    </StyledCardForm>
  );
};
