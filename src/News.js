import React, { Component } from "react";
import NewsDiv from './NewsDiv';
import newsapikey from './newsapikey';

class News extends Component {
  constructor() {
    super();
    this.state = {
      headlines: {},
      showNews: false
    };
  }

  onClick() {
    newsapikey.v2.topHeadlines({
      sources: 'bbc-news',
      language: 'en',
    }).then(response => {
      this.setState({
        headlines: response.articles,
        showNews: true
      });
    });
  }

  render() {
    return (
      <div className="newsTabStyle">
        <h2>NEWS OF THE DAY</h2>
        <br />
        <br />
        <button className="newsButton" onClick={() => {this.onClick()}}>
          Click here to get the latest news with NewsAPI
        </button>
        {
          this.state.showNews &&
            <NewsDiv props={this.state.headlines}/>
        }
      </div>
    );
  }
}

export default News;
