import { Component } from 'react';
import MovieCard from '../components/MovieCard/MovieCard'; 
import "../components/ComponenteHome/ComponenteHome.css"


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
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8dea26e2efdb41e19def66c4e41362a9&language=en-US
`) 
            .then(response => response.json())
        )
      )
      .then((movies) => {
        console.log(movies); 
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
      <div className='containerPeliculas'>
        {!this.state.isLoading ? (
          <section className="gridFavoritos">
            {this.state.movies.length > 0 ? (
              this.state.movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  datos={movie} // Cambié title, desc, img e id por datos
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
