import React, { Component} from "react"

import { Link } from "react-router-dom"

class Cartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            claseDescripcion: "Ocultar",
            textoPersona: "Ver descripcion"
        }
    }





descripcion(){
    if( this.state.claseDescripcion === "Ocultar") {
        this.setState({
            claseDescripcion: "Mostrar", textoPersona: "Ocultar la descripcion"
        })
    } else { this.setState({
        claseDescripcion: "Ocultar", textoPersona: "Ver la descripcion"
    })
}
}


//Favoritos 


render(){
    return(
        <>
        <article>
            <h2>{this.props.datosCartelera.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosCartelera.poster_path}`}/>
            <p onClick={() => this.descripcion()}>{this.state.textoPersona}</p>
            <p className={this.state.claseDescripcion}>{this.props.datosCartelera.overview}</p>
            <Link> </Link>
            <Link to={`/peliculas/detallePelicula/id/${this.props.datosCartelera.id}`}> 
            <button>Ir al detalle de la pelicula</button>
            </Link>
        </article>
        </>
    )
}

}

export default Cartelera