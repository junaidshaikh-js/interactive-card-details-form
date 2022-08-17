export const validateCardDetails = (cardDetails) => {
  const errors = {
    expiryDate: "",
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  };
  const cardNumberRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;

  const { cardHolderName, cardNumber, expiryMonth, expiryYear, cvc } =
    cardDetails;

  if (!cardHolderName) {
    errors.cardHolderName = "Can't be blank";
  }

  if (!cardNumber) {
    errors.cardNumber = "Can't be blank";
  } else if (!cardNumberRegex.test(cardNumber)) {
    errors.cardNumber = "Wrong Format";
  }

  if (!expiryMonth || !expiryYear) {
    errors.expiryDate = "Can't be blank";
  }

  if (!expiryMonth) {
    errors.expiryMonth = "Can't be empty";
  }

  if (!expiryYear) {
    errors.expiryYear = "Can't be empty";
  }

  if (!cvc) {
    errors.cvc = "Can't be blank";
  } else if (cvc.length !== 3) {
    errors.cvc = "Wrong Format";
  }

  return errors;
};
