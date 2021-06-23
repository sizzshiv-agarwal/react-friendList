import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import friendListReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";

const store = createStore(friendListReducer, applyMiddleware(logger, thunk));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
