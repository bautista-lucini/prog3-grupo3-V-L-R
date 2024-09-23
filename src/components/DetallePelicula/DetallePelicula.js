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
            <section className="">
                <div className="DetallePoster">
                    <h3>{movie.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <p>Rating: {movie.popularity}</p>
                    <p>Estreno: {movie.release_date}</p>
                    <p>Duracion: {movie.runtime}</p>
                    <p>Sinopsis: {movie.overview}</p>
                    <p>Géneros: {generos.map(genre => genre.name).join(', ')}</p>
                    {/* <Favoritos  movie={this.props.datos} />*/}

                </div>          
            </section>
        )
    }

}

export default DetallePelicula;