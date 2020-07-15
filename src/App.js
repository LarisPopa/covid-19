import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
