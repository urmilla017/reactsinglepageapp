import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>React and API</h2>
        <br />
        <p className="homeContent">
          This SPA is built with React and NewsAPI.
          <br />
          NewsAPI allows worldwide searches from over 30000 news sources and blogs.
          <br />
          NEWS gives the latest headlines.
          <br />
          CATEGORIES gives news about technology, science and entertainment.
        </p>
        <a href="https://newsapi.org/" className="homeALink">NewsAPI Documentation</a>
      </div>
    );
  }
}

export default Home;
