import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  
  constructor() {
    super();
    // console.log("hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    // console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0cb0994a6753490699a14dca55b1fd35&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults
    })
  }

  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0cb0994a6753490699a14dca55b1fd35&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page-1,
      articles: parsedata.articles
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){
      
    }
    else
    {let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0cb0994a6753490699a14dca55b1fd35&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page+1,
      articles: parsedata.articles
    })}
  }

  render() {
    // console.log(this.render);
    // console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey</h2>
        <div className="row">
          {this.state.articles.map((elements) => {
            return <div className="col-md-4 my-3" key={elements.url}>
              <NewsItem title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0,80):""} imageUrl={elements.urlToImage} newsUrl={elements.url}></NewsItem>
            </div>
          })}
        </div>
        <div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}


export default News