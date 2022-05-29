import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div>
        <p>this is news component</p>
        <Newsitem/>
      </div>
    )
  }
}

export default News
