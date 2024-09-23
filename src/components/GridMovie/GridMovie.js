import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import {Link} from "react-router-dom";

class GridMovie extends Component{
    constructor(props) {
        super(props)
        this.state = {
            arrayMovies: [], 
            cargando: true,
            urlPelis: ""
        }
}

componentDidMount(){
    let endpoint = ''

    fetch (endpoint)
    .then(res => res.json())
            .then(data => this.setState({
                arrayMovies: data.results.slice(0,5),
                cargando: false
            })).catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <h2>{this.props.tipo}</h2>
                <Link to={{pathname: this.props.link, state:{urlPelis: this.props.url}}}> <button>Ver todas </button> </Link>
                {
                    this.state.arrayMovies.length === 0 && this.state.cargando ?
                    <p>Cargando...</p> : 
                        this.state.arrayMovies.length === 0 && !this.state.cargando ?
                        <p> No se encontraron resultados </p> :
                        this.state.arrayMovies.map((unaPeli, idx) => <MovieCard key={unaPeli.name + idx} datos={unaPeli}/>)
                }
            </>
        )
    }
}


export default GridMovie;