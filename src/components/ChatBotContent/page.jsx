import React from "react";
import { ChatTypeBar } from "./ChatTypeBar";
import { ChatBotMessages } from "./ChatBotMessages";
import { ChatUserMessages } from "./ChatUserMessages";
import { ChatButtonsResponses } from "./ChatButtonsResponses";
import "antd/dist/antd.css";
import "./index.css";

class ChatBotContent extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return (
      <div>
        <ChatBotMessages />
        <ChatUserMessages />
        <ChatButtonsResponses />
        <ChatTypeBar />
      </div>
    );
  }
}

export default ChatBotContent;
