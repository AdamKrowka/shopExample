import { combineReducers } from "redux";

import cart from "./cart.reducer.js";
import product from "./product.reducer.js";
import addressData from "./addressData.reducer.js";
import payments from "./payments.reducer.js";
import card from "./card.reducer.js";

export default combineReducers({
  cart,
  product,
  addressData,
  payments,
  card,
});
