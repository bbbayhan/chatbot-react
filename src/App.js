import React from "react";
import ChatBotHeader from "./components/ChatBotHeader";
import "antd/dist/antd.css";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ChatBotHeader />
      </div>
    );
  }
}

export default App;
