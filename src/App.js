import React from "react";
import ChatBotHeader from "./components/ChatBotHeader/index";
import ChatBotContent from "./components/ChatBotContent/index";
import "antd/dist/antd.css";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ChatBotHeader />
        <ChatBotContent />
      </div>
    );
  }
}

export default App;
