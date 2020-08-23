import { createAction } from "redux-promise-middleware-actions";
import * as actionTypes from "./action-types";

const showBotMessage = createAction(
  actionTypes.SHOW_BOT_MESSAGE,
  (botMessage) => ({
    botMessage,
  })
);

export default {
  showBotMessage,
};
