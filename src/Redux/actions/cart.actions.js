export const addToCart = (product, amount) => ({
  type: "add_to_cart",
  product,
  amount,
});

export const changeAmount = (index, amount) => ({
  type: "change_amount",
  index,
  amount,
});

export const removeProduct = (index) => ({
  type: "remove_from_cart",
  index,
});
