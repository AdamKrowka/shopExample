import { combineReducers } from "redux";

import cart from "./cart.reducer.js";
import product from "./product.reducer.js";
import addressData from "./addressData.reducer.js";
import payments from "./payments.reducer.js";
import cardData from "./card.reducer.js";
import invoice from "./invoice.reducer.js";
import message from "./messageToSeller.reducer.js";

export default combineReducers({
  cart,
  product,
  addressData,
  payments,
  cardData,
  invoice,
  message,
});
