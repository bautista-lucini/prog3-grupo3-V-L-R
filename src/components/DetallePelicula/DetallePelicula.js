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
                return (
                    <div className="loader">
                        <p>Cargando...</p>
                    </div>
            );
        }
        if (!movie) {
            return (
                <div className="no_result">
                    <p>No se encontró la película.</p>
                </div>
            );
        }
        return (
            <section className="detalle_pelicula">
                <div className="detalle_contenido">
                    <div className="detalle_imagen_container">
                        <img className="detalle_imagen" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className="info_container">
                        <h3 className="detalle_titulo">{movie.title}</h3>
                        <p className="detalle_info"><strong>Rating:</strong> {movie.popularity}</p>
                        <p className="detalle_info"><strong>Estreno:</strong> {movie.release_date}</p>
                        <p className="detalle_info"><strong>Duración:</strong> {movie.runtime} minutos</p>
                        <p className="detalle_info"><strong>Sinopsis:</strong> {movie.overview}</p>
                        <p className="detalle_info"><strong>Géneros:</strong> {generos.map(genre => genre.name).join(', ')}</p>
                        <Favoritos movie={movie} />
                    </div>
                </div>
            </section>
        );  
    }
}

export default DetallePelicula;