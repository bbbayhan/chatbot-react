import { createReducer } from "redux-promise-middleware-actions";
import userActions from "../actions/user-actions.js";

const initialState = {
  buttonMessage: "I am button message",
};

export default createReducer({ data: initialState }, (handleAction) => [
  handleAction(userActions.sendMessage),
  handleAction(userActions.showButtonMessage, state => ({
    data: {
      ...state.data,
    }
  })),
]);
