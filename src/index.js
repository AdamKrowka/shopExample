import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductPage from "./Components/ProductPageComponents/ProductPage";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/reducers/index.js";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/productPage">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
