import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

import { CaretRightOutlined } from "@ant-design/icons";

const buttonResponses = [
  {
    title: "Qué es un chatbot",
  },
  {
    title: "Para qué sirve",
  },
  {
    title: "Button 3",
  },
];

function ButtonList(props) {
  return props.responses.map((buttonResponse) => {
    return (
      <Button type="primary" shape="round" size="large">
        {buttonResponse.title}
      </Button>
    );
  });
}

export const ChatButtonsResponses = () => {
  return (
    <div className="chatbot-responses">
      <span>{"Estas son algunas de las cosas que me puedes preguntar:"}</span>
      <br></br>
      <ButtonList responses={buttonResponses} />
      <CaretRightOutlined />
    </div>
  );
};
