import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>{/* <Route path="/" component={} exact /> */}</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
