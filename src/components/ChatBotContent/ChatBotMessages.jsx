import React from "react";
import { List, Avatar } from "antd";
import "antd/dist/antd.css";
import { BackTop } from "antd";

const dataBot = [
  {
    title: "Message 1",
  },
  {
    title: "Message 2",
  },
  {
    title: "Message 3",
  },
];

export const ChatBotMessages = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataBot}
      renderItem={(item) => (
        <List.Item className="bot">
          <List.Item.Meta
            avatar={
              <Avatar src="https://1millionbot.com/wp-content/uploads/2019/05/Pau.gif" />
            }
            title={item.title}
            extra={<BackTop />}
          />
        </List.Item>
      )}
    />
  );
};
