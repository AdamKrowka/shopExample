import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductPage from "./Components/ProductPageComponents/ProductPage";
import CartPage from "./Components/CartPageComponents/CartPage";
import * as serviceWorker from "./serviceWorker";

import { HashRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/reducers/index.js";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route
          path="/productPage/:productID"
          render={(props) => <ProductPage {...props} />}
        />
        <Route exact path="/cartPage">
          <CartPage />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
