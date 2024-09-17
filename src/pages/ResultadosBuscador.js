import React, { Component } from 'react'
import MovieCard from "../components/MovieCard/MovieCard";

export class ResultadosBuscador extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            resultado : [],
        }
        
    }
    componentDidMount(){
        //fetch
        fetch (`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=8dea26e2efdb41e19def66c4e41362a9&include_adult=false&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => this.setState({resultado: data.results, cargando: false}))
            .catch((error) => console.log(error))
    }
  
    render() {
        return (
            <>
               <h2> Resultados de Busqueda: {this.props.location.state.query}</h2>
               {
                    this.state.resultado.length === 0 ?
                        <p> No se encontraron resultados </p> :
                        this.state.resultado.map((unaPeli, idx) => <MovieCard key={unaPeli.name + idx} datos={unaPeli}/>)
                }
            </>
    )
  }
}

export default ResultadosBuscador;
