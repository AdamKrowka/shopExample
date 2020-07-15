const payments = (state = {}, { type, data }) => {
  switch (type) {
    case "changePaymentMethod":
      return data;

    default:
      return state;
  }
};

export default payments;
