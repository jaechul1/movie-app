import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
  id,
  year,
  title,
  summary,
  poster,
  large_poster,
  rating,
  runtime,
}) {
  return (
    <div className="movie">
      <Link
        className="movie-container"
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            large_poster,
            rating,
            runtime,
          },
        }}
      >
        <img src={poster} alt={title} title={title}></img>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  large_poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default Movie;
