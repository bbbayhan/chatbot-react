import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import botActions from "./state/actions/bot-actions.js";
import userActions from "./state/actions/user-actions.js";
import ChatBotContent from "./page";

const mapStateToProps = (state) => ({
  botMessage: state.botMessage,
  buttonMessage: state.buttonMessage,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators(botActions, dispatch),
    ...bindActionCreators(userActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotContent);
