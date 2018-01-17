import React, { Component } from "react";
import NewsList from "./NewsList";
import "isomorphic-fetch";
import { Link } from "react-router-dom";

class News extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (__isBrowser__) {
      initialData = window.__initialData__;
      delete window.__initialData__;
    } else {
      initialData = props.staticContext.initialData;
    }

    this.state = { news: initialData };
  }

  componentDidMount() {
    if (!this.state.news) {
      News.requestInitialData().then(data => this.setState({ news: data }));
    }
  }

  static requestInitialData() {
    return fetch("http://127.0.0.1:3000/api/news")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { news } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
         <NewsList news={news} />
      </div>
      )
  }
}

export default News;
