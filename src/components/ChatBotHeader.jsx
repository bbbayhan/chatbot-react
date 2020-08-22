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
          src: "https://1millionbot.com/wp-content/uploads/2019/05/Pau.gif",
        }}
        extra={<ChatBotMenu key="more" />}
      ></PageHeader>
    );
  }
}

export default ChatBotHeader;
