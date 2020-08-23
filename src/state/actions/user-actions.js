import { createAction } from "redux-promise-middleware-actions";
import * as actionTypes from "./action-types";

const sendMessage = createAction(actionTypes.SEND_MESSAGE, (message) => ({
  message,
}));

const showButtonMessage = createAction(
  actionTypes.SHOW_BUTTON_MESSAGE,
  (buttonMessage) => ({ buttonMessage })
);

export default {
  sendMessage,
  showButtonMessage,
};
