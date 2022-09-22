import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="card my-3" style={{width: "18rem"}}>
        <img className="card-img-top" src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2021/09/dollar-758x435.jpg"} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
      </div>
    )
  }
}

export default NewsItem