import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"
import Favoritos from "../Favoritos/Favoritos"

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oculta: true,
        }
    }

    render() {
        return (
            <article className="pelicula">

                <h3>{this.props.datos.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.datos.poster_path}`} alt="" />
                {
                    this.state.oculta ?
                    null : 
                    <p>{this.props.datos.overview}</p>
                }
                <div className="botones">
                    <button className="btn" onClick={() => {this.setState({oculta : !this.state.oculta})}}> 
                        {this.state.oculta ? 'Ver descripción' : 'Ocultar descripción'}
                    </button>
                    <Link to={`DetallePelicula/id/${this.props.datos.id}`}>  
                        <button className="btn"> Ir al detalle </button>
                    </Link>
                    <Favoritos  movie={this.props.datos} />
                </div>
            </article>
        )
    }

}
export default MovieCard; 