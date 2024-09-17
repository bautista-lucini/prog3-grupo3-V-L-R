import { Component } from 'react';
import Movie from '../components/MovieCard/MovieCard';

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos');
    
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);

      Promise.all(
        parsedArray.map((id) => 
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`) 
            .then(response => response.json())
        )
      )
      .then((movies) => {
        this.setState({
          movies: movies, 
          isLoading: false 
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false }); 
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <section className="gridFavortios">
          
            {this.state.movies.length > 0 ? (
              this.state.movies.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.original_title}
                  desc={movie.overview}
                  img={movie.poster_path}
                  id={movie.id}
                />
              ))
            ) : (
              <div className="textoFavoritos">
                <p>No hay favoritos</p>
              </div>
            )}
          </section>
        ) : (
          <div className="textoFavoritos">
            <p>Cargando...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Favoritos;