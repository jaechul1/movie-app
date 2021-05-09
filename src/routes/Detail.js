import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const {
      history,
      location: { state },
    } = this.props;
    if (state === undefined) {
      history.push("/");
    }
  }
  calcTime = (min) => {
    const hour = Math.floor(min / 60);
    const remainder = min % 60;
    return `${hour}h ${remainder}m`;
  };
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return (
        <div className="movie-detail">
          <div className="img-box">
            <img
              className="movie-detail__img"
              src={state.large_poster}
              alt={state.title}
              title={state.title}
            ></img>
          </div>
          <div className="movie-detail__text">
            <div className="movie-detail__title-box">
              <span className="movie-detail__title">
                {state.title} ({state.year})
              </span>
              <div className="movie-detail__info">
                <span className="movie-detail__rating">
                  <i className="fas fa-star"></i>
                  {state.rating}/10
                </span>
                <span className="movie-detail__runtime">
                  {this.calcTime(state.runtime)}
                </span>
              </div>
            </div>
            <span className="movie-detail__summary">{state.summary}</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
