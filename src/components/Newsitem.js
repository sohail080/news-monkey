import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="card">
         <span  className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1' }}>
              {source}</span>
        <img src={!imageUrl ? "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{title}</h5>
          <p className="card-text">{description}...</p>
          <p  className="card-text"><small  className="text-muted"><b>By</b> {!author ? "Unknown" : author} <b>ON</b> {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-sm btn-primary">Learn More</a>
        </div>
      </div>
    )
  }
}

export default Newsitem
