const cart = (
  state = JSON.parse(localStorage.getItem("shopCart")) || [],
  { type, product, amount, index }
) => {
  switch (type) {
    case "add_to_cart":
      localStorage.setItem(
        "shopCart",
        JSON.stringify([...state, { product, amount }])
      );
      return [...state, { product, amount }];

    case "change_amount":
      state[index].amount = amount;
      localStorage.setItem("shopCart", JSON.stringify(state.map((e) => e)));
      return state.map((e) => e);
    case "remove_from_cart":
      state.splice(index, 1);

      localStorage.setItem("shopCart", JSON.stringify(state.map((e) => e)));
      return state.map((e) => e);
    default:
      localStorage.setItem("shopCart", JSON.stringify(state));
      return state;
  }
};

export default cart;
