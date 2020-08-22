import React from "react";
import { List } from "antd";
import "antd/dist/antd.css";
import { BackTop } from "antd";

const dataUser = [
  {
    title: "User 1",
  },
  {
    title: "User 2",
  },
  {
    title: "User 3",
  },
];

export const ChatUserMessages = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataUser}
      renderItem={(item) => (
        <List.Item className="user">
          <List.Item.Meta title={item.title} extra={<BackTop />} />
        </List.Item>
      )}
    />
  );
};
