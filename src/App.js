import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import WatchList from "./components/watch_list";
import Watchd from "./components/watchd";
import Add from "./components/add";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route path="/Add" component={Add} />
          <Route path="/watched" component={Watchd} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
