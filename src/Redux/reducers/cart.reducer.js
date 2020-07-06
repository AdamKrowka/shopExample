const cart = (state = [], action) => {
  switch (action.type) {
    case "add_to_cart":
      return [];
    default:
      return state;
  }
};

export default cart;
