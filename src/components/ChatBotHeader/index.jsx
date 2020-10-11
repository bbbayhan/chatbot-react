import React from "react";
import { PageHeader } from "antd";
import { ChatBotMenu } from "./ChatBotMenu";
import "antd/dist/antd.css";
import "./index.css";

class ChatBotHeader extends React.Component {
  render() {
    return (
      <PageHeader
        title="BotName"
        className="site-page-header"
        avatar={{
          src:
            "https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif",
        }}
        extra={<ChatBotMenu key="more" />}
      ></PageHeader>
    );
  }
}

export default ChatBotHeader;
