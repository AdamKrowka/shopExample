const card = (
  state = { cardNumber: "", expirationDate: "", securityCode: "" },
  { type, data }
) => {
  switch (type) {
    case "changeCardData":
      return data;

    default:
      return state;
  }
};

export default card;
