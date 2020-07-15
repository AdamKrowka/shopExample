const invoice = (state = false, { type, data }) => {
  switch (type) {
    case "invoice":
      return data;

    default:
      return state;
  }
};

export default invoice;
