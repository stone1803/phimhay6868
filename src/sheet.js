import React, { Component } from "react";
import FimlItem from "./Fiml";
const Tabletop = require("tabletop");

const googleSheetURL ="https://docs.google.com/spreadsheets/d/1LB6LXfHEBrZfIX4vlY539Bvy8o1l9uOUJbAbccB9Gi8/pubhtml";
const fetcher = () => {
  return new Promise(res => {
    Tabletop.init({
      key: googleSheetURL,
      callback: function(data, tabletop) {
        return res(data);
      },
      simpleSheet: true
    });
  });
};
export default class Phuc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      fetched: false
    };
  }
  componentDidMount() {
    fetcher().then(results =>
      this.setState({ movies: results, fetched: true })
    );
  }
  displayLoading() {
    return <p>Loading movies...</p>;
  }
  displayResults() {
    return this.state.movies.map(movie => {
      return (
        <div className="movie" key={movie.name}>
          <p>
            <b>{movie.tenPhim}</b>
          </p>
          <p>{movie.Link}</p>
          <img width="150" src={movie.hinhAnh} />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.displayResults()}.
      </div>
    );
  }
}
