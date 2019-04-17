import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Categories from "./Categories";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>REACT SINGLE PAGE APPLICATION</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/categories" component={Categories} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
