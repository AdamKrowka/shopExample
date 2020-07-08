import { combineReducers } from "redux";

import cart from "./cart.reducer.js";
import product from "./product.reducer.js";

export default combineReducers({
  cart,
  product,
});
