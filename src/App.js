import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
          <div style={{ height: "100vh" }}></div>
        </div>
      </Router>
    );
  }
}

export default App;
