const message = (state = "", { type, data }) => {
  switch (type) {
    case "message":
      return data;

    default:
      return state;
  }
};

export default message;
