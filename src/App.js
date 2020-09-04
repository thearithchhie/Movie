import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Componets
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/signUp" exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
