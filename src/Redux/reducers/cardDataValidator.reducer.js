const cardDataValidator = (
  state = { cardNumber: false, expirationDate: false, securityCode: false },
  { type, element, value }
) => {
  switch (type) {
    case "validate":
      return { ...state, [element]: value };

    default:
      return state;
  }
};

export default cardDataValidator;
