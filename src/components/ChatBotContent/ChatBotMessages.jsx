import React from "react";
import { List, Avatar, BackTop, Card } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

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
    <div>
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
      <Card
        style={{ width: 120 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Bot" description="bot.com" />
      </Card>
    </div>
  );
};
