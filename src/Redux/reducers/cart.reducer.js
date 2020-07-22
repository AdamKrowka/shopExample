const cart = (
  state = JSON.parse(localStorage.getItem("shopCart")) || [],
  { type, product, amount, index }
) => {
  switch (type) {
    case "add_to_cart":
      const productIndex = state.findIndex(
        (prod) => prod.product.id === product.id
      );
      if (productIndex === -1) {
        localStorage.setItem(
          "shopCart",
          JSON.stringify([...state, { product, amount }])
        );
        return [...state, { product, amount }];
      } else {
        state[productIndex].amount += amount;
        localStorage.setItem("shopCart", JSON.stringify([...state]));
        return [...state];
      }

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
