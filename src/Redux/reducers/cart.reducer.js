const cart = (state = [], { type, product, amount }) => {
  switch (type) {
    case "add_to_cart":
      return [...state, { product, amount }];
    default:
      return state;
  }
};

export default cart;
