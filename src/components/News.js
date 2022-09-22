import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.props.category.toUpperCase()} - NewsMonkey`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3698dc196cd54a5594c4e66869be4b4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    })
  }

  // async updateNews() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3698dc196cd54a5594c4e66869be4b4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   this.setState({
  //     articles: parsedata.articles,
  //     totalResults: parsedata.totalResults,
  //     loading: false
  //   })
  // }
  // handlePreviousClick = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3698dc196cd54a5594c4e66869be4b4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    console.log(this.state.articles.length);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults
    })
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '35px' }}>
          <strong>{this.props.category.toUpperCase()}</strong>
        </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles && this.state.articles.map((elements) => {
                return <div className="col-md-3 my-2" key={elements.url}>
                  <NewsItem title={elements.title ? elements.title.slice(0, 45) : ""} description={elements.description ? elements.description.slice(0, 80) : ""} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name} category={this.props.category}></NewsItem>
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}


export default News