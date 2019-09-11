import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {

  state = {
    isLoaded: true,
    movies: []
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=download_count")
    this.setState({ movies, isLoaded: false })
    //console.log(this.state.movies)
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoaded, movies } = this.state
    return (
      <section className="container">{isLoaded ?
        (<div className="loader">
          <span className="loader__text">Loading...</span>
        </div>) :
        (<div className="movies">
          {movies.map(movie =>
            (<Movie key={movie.id} id={movie.id} title={movie.title} genres={movie.genres.join(", ")} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} />)
          )}
        </div>)}
      </section>
    )
  }
}
export default App;
