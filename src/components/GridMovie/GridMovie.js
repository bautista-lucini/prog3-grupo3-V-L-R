import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class GridMovie extends Component{
    constructor(props) {
        super(props)
        this.state = {
            arrayMovies: [], 
            cargando: true,
        }
}

componentDidMount(){
    let endpoint = ''

    if (this.props.tipo === "Peliculas Populares") {
        endpoint = "https://api.themoviedb.org/3/movie/popular?api_key=8dea26e2efdb41e19def66c4e41362a9&language=en-US&page=1"

    }
    else if (this.props.tipo === "Peliculas Top Rated") {
        endpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=8dea26e2efdb41e19def66c4e41362a9"

    }
    else {
        console.log("Error. No existe la página ver todas de " + this.props.tipo)
    }

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