import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oculta: true,
        }
    }

    render() {
        return (
            <article>
                <h2>{this.props.datos.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.datos.poster_path}`} alt="" />
                {
                    this.state.oculta ?
                    null : 
                    <p>{this.props.datos.overview}</p>
                }
                <button onClick={() => {this.setState({oculta : !this.state.oculta})}}>
                    Ver descripción
                </button>
                <Link to={`/peliculas/detallePelicula/id/${this.props.datos.id}`}>
                    Ir al detalle
                </Link>
            </article>
        )
    }

}
export default MovieCard; 