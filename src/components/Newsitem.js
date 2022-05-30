import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let {title , description ,imageUrl, newsUrl }=this.props;

    return (
      <div className="card">
      <img src={!imageUrl?"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn-sm btn-primary">Learn More</a>
      </div>
    </div>
    )
  }
}

export default Newsitem
