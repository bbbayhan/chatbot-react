import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import * as reducers from "./reducers/index";
import promiseMiddleware from "redux-promise-middleware";

const initialState = window.__INITIAL_STATE__;

const store = createStore(
  combineReducers({ ...reducers }),
  initialState,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store;
