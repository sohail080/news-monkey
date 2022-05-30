import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  
  constructor() {
    super();
    console.log("i am a constructur from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=31419b63dfe147d8948d8381b0e71ac8&page=1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
  }
  prevClick = async () => {
    console.log("i am previous function")
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=31419b63dfe147d8948d8381b0e71ac8&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      {articles:parsedData.articles,
        page: this.state.page-1
      })
  }
  
 nextClick = async ()  => {
    console.log("i am next function")
    if (this.state.page+1 > Math.ceil(this.state.totalResults/20)) {
      
    }
    else
    {
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=31419b63dfe147d8948d8381b0e71ac8&page=${this.state.page+1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      {articles:parsedData.articles,
        page: this.state.page+1
      })
    }
  }
  render() {
    return (
      <div className="container mt-5">
        <h1>News Monkey -Top Headlines</h1>
        
        <div className="row">
            {this.state.articles.map((element)=>{
             return <div className="col-md-4 my-3" key={element.url}>
              <Newsitem
                title={element.title?element.title:""}
                description={element.description?element.description.slice(0,85):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
            />
            </div>
            })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-info" onClick={this.prevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-info" onClick={this.nextClick}>Next	&rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
