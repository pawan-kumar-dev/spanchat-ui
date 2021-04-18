import React from "react";
import "./App.css";
import Webcapture from "./Webcapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/preview" component={Preview} />
          <Route exact path="/chats" component={Chats} />
          <Route exact path="/" component={Webcapture} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
