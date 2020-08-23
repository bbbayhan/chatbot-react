import { createReducer } from "redux-promise-middleware-actions";
import showBotMessage from "../actions/bot-actions";

const initialState = {
  botMessage: "Hello, I am bot",
};

export default createReducer({ data: initialState }, (handleAction) => [
  handleAction(showBotMessage),
]);
