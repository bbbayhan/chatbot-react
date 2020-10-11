import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

import { CaretRightOutlined } from "@ant-design/icons";

const ButtonList = (buttonMessages) => {
  const onClick = (buttonMessage) => {
    return buttonMessage.answer;
  };
  return buttonMessages.responses.map((buttonMessage) => {
    return (
      <Button
        id={buttonMessage.title}
        type="primary"
        shape="round"
        size="large"
        onClick={() => onClick(buttonMessage)}
      >
        {buttonMessage.title}
      </Button>
    );
  });
};

export class ChatButtonsResponses extends React.Component {
  render() {
    return (
      <div className="chatbot-responses">
        <span>{"Estas son algunas de las cosas que me puedes preguntar:"}</span>
        <br></br>
        <ButtonList responses={this.props.buttonMessages} />
        <CaretRightOutlined />
      </div>
    );
  }
}
