import React from "react";
import { Menu, Dropdown, Button, Modal } from "antd";
import {
  MenuOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export class ChatBotMenu extends React.Component {
  state = { visible: false, languageVisible: false };
  showModalPrivacy = () => {
    this.setState({
      visible: true,
    });
  };
  showModalLanguage = () => {
    this.setState({
      languageVisible: true,
    });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  handleLanguageCancel = (e) => {
    this.setState({
      languageVisible: false,
    });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad"
          >
            Política de privacidad
          </a>
        </Menu.Item>
        <Menu.Item onClick={this.showModalLanguage}>
          Seleccionar Idioma
        </Menu.Item>
        <Modal
          title="Idiomas"
          visible={this.state.languageVisible}
          onCancel={this.handleLanguageCancel}
          footer={[
            <Button type="primary" onClick={this.handleLanguageCancel}>
              Inglés
            </Button>,
            <Button type="primary" onClick={this.handleLanguageCancel}>
              Español
            </Button>,
          ]}
        ></Modal>
        <Menu.Item onClick={this.showModalPrivacy}>Olvidar mis datos</Menu.Item>
        <Modal
          title="Este procedimiento es irreversible, si continuas voy a olvidar sobre ti"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="back"
              type="primary"
              onClick={this.handleCancel}
              icon={<CheckCircleOutlined />}
            >
              Sí
            </Button>,
            <Button
              key="submit"
              type="primary"
              danger
              onClick={this.handleCancel}
              icon={<CloseCircleOutlined />}
            >
              No
            </Button>,
          ]}
        ></Modal>
      </Menu>
    );
    return (
      <Dropdown key="more" overlay={menu}>
        <Button
          style={{
            border: "none",
            padding: 0,
          }}
        >
          <MenuOutlined
            style={{
              fontSize: 20,
              verticalAlign: "top",
            }}
          />
        </Button>
      </Dropdown>
    );
  }
}
