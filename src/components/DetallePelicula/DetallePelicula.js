import React, {Component} from 'react';
import './DetallePelicula.css'
import Favoritos from "../Favoritos/Favoritos"


class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movie: [], 
            loading: true,
            generos: []
        }
    }
    componentDidMount (){
        const idPelicula = Number(this.props.id);

        fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=8dea26e2efdb41e19def66c4e41362a9`)
        .then(res => res.json())
        .then(movie => {
            this.setState(
                {movie: movie, 
                loading: false,
                generos: movie.genres
            })
        })
        .catch(e => console.log(e))
    }
    
    render() {
        const { movie, loading, generos } = this.state;

        if (loading) {
            return <p>Loading...</p>; // VICKYYY reemplazar esto con nuestro loader
        }

        if (!movie) {
            return <p>No se encontró la película.</p>; 
        }

        return (
            <section className="detallePelicula">
                <div className="detalleContenido">
                    <div className="detalleImagenCcontainer">
                        <img className="detalleImagen" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className="infoContainer">
                        <h3 className="detalleTitulo">{movie.title}</h3>
                        <p className="detalleInfo"><strong>Rating:</strong> {movie.popularity}</p>
                        <p className="detalleInfo"><strong>Estreno:</strong> {movie.release_date}</p>
                        <p className="detalleInfo"><strong>Duración:</strong> {movie.runtime} minutos</p>
                        <p className="detalleInfo"><strong>Sinopsis:</strong> {movie.overview}</p>
                        <p className="detalleInfo"><strong>Géneros:</strong> {generos.map(genre => genre.name).join(', ')}</p>
                        <Favoritos movie={movie} />
                    </div>
                </div>
            </section>
        );
        
        
    }

}

export default DetallePelicula;