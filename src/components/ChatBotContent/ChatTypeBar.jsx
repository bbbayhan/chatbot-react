import React from "react";
import { Input, Button } from "antd";

import { SendOutlined } from "@ant-design/icons";
import moment from "moment";

export class ChatTypeBar extends React.Component {
  state = {
    messages: [],
    userInput: "",
    submitted: false,
  };

  onClick = () => {
    if (!this.state.userInput) {
      return;
    }
    this.setState({
      submitted: true,
    });
    setTimeout(() => {
      this.setState({
        submitted: false,
        userInput: "",
        messages: [
          {
            datetime: moment().fromNow(),
          },
          ...this.state.messages,
        ],
      });
    }, 1000);
  };

  render() {
    //const { messages, submitted, userInput } = this.state;

    return (
      <Input
        size="large"
        placeholder="Escribe tu pregunta"
        suffix={<Button icon={<SendOutlined />} onClick={this.onClick} />}
      />
    );
  }
}
