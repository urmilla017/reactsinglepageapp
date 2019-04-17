import React, { Component } from "react";
import NewsDiv from './NewsDiv';
import newsapikey from './newsapikey';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      technology: {},
      showTechNews: false,
      entertainment: {},
      showEntertainmentNews: false,
      science: {},
      showScienceNews: false
    };
  }

  onTechClick() {
    newsapikey.v2.topHeadlines({
      category: 'technology',
      language: 'en',
      country: 'us',
    }).then(response => {
      this.setState({
        technology: response.articles,
        showTechNews: true,
        showEntertainmentNews: false,
        showScienceNews: false
      });
    });
  }

  onEntertainmentClick() {
    newsapikey.v2.topHeadlines({
      category: 'entertainment',
      language: 'en',
      country: 'us',
    }).then(response => {
      this.setState({
        entertainment: response.articles,
        showTechNews: false,
        showEntertainmentNews: true,
        showScienceNews: false
      });
    });
  }

  onScienceClick() {
    newsapikey.v2.topHeadlines({
      category: 'science',
      language: 'en',
      country: 'us',
    }).then(response => {
      this.setState({
        science: response.articles,
        showTechNews: false,
        showEntertainmentNews: false,
        showScienceNews: true
      });
    });
  }

  render() {
    return (
      <div>
        <h2>More News</h2>
        <button className="categoryButtonStyle" onClick={() => {this.onTechClick()}}>
          Technology
        </button>

        <button className="categoryButtonStyle" onClick={() => {this.onEntertainmentClick()}}>
          Entertainment
        </button>

        <button className="categoryButtonStyle" onClick={() => {this.onScienceClick()}}>
          Science
        </button>
        {
          !this.state.showTechNews && this.state.showEntertainmentNews && !this.state.showScienceNews &&
            <NewsDiv props={this.state.entertainment} />
        }
        {
          this.state.showTechNews && !this.state.showEntertainmentNews && !this.state.showScienceNews &&
            <NewsDiv props={this.state.technology} />
        }
        {
          !this.state.showTechNews && !this.state.showEntertainmentNews && this.state.showScienceNews &&
            <NewsDiv props={this.state.science} />
        }
      </div>
    );
  }
}

export default Categories;
