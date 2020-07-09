const cart = (state = [], { type, product, amount, index }) => {
  switch (type) {
    case "add_to_cart":
      return [...state, { product, amount }];

    case "change_amount":
      state[index].amount = amount;
      return state;
    case "remove_from_cart":
      state.splice(index, 1);
      return state.map((e) => e);
    default:
      return state;
  }
};

export default cart;
