import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import config from "./config";

const composeEnhancers =
  config.env === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
    : compose;

const middlewares = [thunk];

const store = createStore(composeEnhancers(applyMiddleware(...middlewares)));

export default store;
