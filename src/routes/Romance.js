import axios from "axios";
import Genre from "../components/Genre";

class Romance extends Genre {
  async getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=download_count&minimum_rating=7&genre=romance&limit=50"
    );
    this.setState({ movies, isLoading: false });
  }
}

export default Romance;
