import React from "react";
import ChatBotHeader from "./components/ChatBotHeader/index";
import ChatBotContent from "./components/ChatBotContent/page";
import store from "./state/store";
import "antd/dist/antd.css";
import { Provider } from "react-redux";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ChatBotHeader />
          <ChatBotContent />
        </div>
      </Provider>
    );
  }
}

export default App;
