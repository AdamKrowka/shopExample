const products = (state = [], { type, products, id }) => {
  switch (type) {
    case "set_products":
      return products;
    case "get_product":
      return state.find((product) => product.id === id);
    default:
      return state;
  }
};

export default products;
