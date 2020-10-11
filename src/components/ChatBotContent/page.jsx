import React from "react";
import { ChatMessages } from "./ChatMessages";
import { ChatButtonsResponses } from "./ChatButtonsResponses";
import "antd/dist/antd.css";
import "./index.css";

const mockButtonData = [
  {
    title: "Qué es un chatbot",
    answer: "A",
  },
  {
    title: "Para qué sirve",
    answer: "B",
  },
  {
    title: "Button 3",
    answer: "C",
  },
];

class ChatBotContent extends React.Component {
  state = {
    buttonMessages: mockButtonData,
  };
  render() {
    return (
      <div>
        <ChatMessages />
        <ChatButtonsResponses buttonMessages={this.state.buttonMessages} />
      </div>
    );
  }
}

export default ChatBotContent;
