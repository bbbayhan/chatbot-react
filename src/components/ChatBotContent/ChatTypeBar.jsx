import React from "react";
import { Input } from "antd";

import { SendOutlined } from "@ant-design/icons";

export const ChatTypeBar = () => {
  return (
    <Input
      size="large"
      placeholder="Escribe tu pregunta"
      suffix={<SendOutlined />}
    />
  );
};
