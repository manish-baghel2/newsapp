import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source,category} = this.props;
    let color = category;
    if(color === "general"){
      color = "primary";
    }else if(color === "entertainment"){
      color = "secondary";
    }else if(color === "health"){
      color = "danger";
    }else if(color === "sports"){
      color = "warning";
    }else if(color === "business"){
      color = "success"
    }else if(color === "science"){
      color = "info";
    }else if(color === "technology"){
      color = "dark";
    }
    return (
      <div className="card my-3">
        <img className="card-img-top" src={imageUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}...
            <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{left:"50%",zIndex:"1"}}>
              {source}
            </span></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By <strong>{author ? author : "Unknown"}</strong> on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem