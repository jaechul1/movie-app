import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  async getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=download_count&minimum_rating=7&genre=fantasy"
    );
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  truncate = (str, last) =>
    str.length < last
      ? str
      : `${str.substr(0, str.substr(0, last).lastIndexOf(" "))}...`;
  renderMovies(movies) {
    return movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={this.truncate(movie.summary, 200)}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      );
    });
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading</span>
          </div>
        ) : (
          <div className="movies">{this.renderMovies(movies)}</div>
        )}
      </section>
    );
  }
}

// defined function or class should be exported
export default App;
