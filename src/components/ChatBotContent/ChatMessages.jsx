import React from "react";
import { Avatar, Input, Button, Layout } from "antd";
import { UserOutlined, SendOutlined } from "@ant-design/icons";

const { Content } = Layout;

export class ChatMessages extends React.Component {
  state = {
    botMessages: ["Hola, como te llamas?"],
    userMessages: [],
    submitted: false,
    clicked: false,
  };

  onChange = (message) => {
    this.setState({
      submitted: true,
      userMessages: [message.target.value],
    });
  };

  onClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      userMessages: [this.state.userMessages],
    });
  };

  render() {
    const { botMessages, userMessages, clicked } = this.state;
    return (
      <Content>
        <div className="bot">
          <Avatar src="https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif" />
          {botMessages}
        </div>
        {userMessages && clicked ? (
          <div className="user">
            <Avatar icon={<UserOutlined />} />
            {userMessages}
          </div>
        ) : (
          ""
        )}
        <Input
          size="large"
          placeholder="Escribe tu pregunta"
          suffix={<Button icon={<SendOutlined />} onClick={this.onClick} />}
          value={clicked ? "" : userMessages}
          onChange={this.onChange}
        />
      </Content>
    );
  }
}
