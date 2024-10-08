import React, { Component } from 'react'
import MovieCard from "../components/MovieCard/MovieCard";
import "../index.css"
export class ResultadosBuscador extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            resultado : [],
            cargando : true,
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
               <div className='container_populares'>
               
               {
                    this.state.resultado.length === 0 && this.state.cargando ?
                    <p>Cargando...</p> : 
                        this.state.resultado.length === 0 && !this.state.cargando ?
                        <p> No se encontraron resultados </p> :
                        this.state.resultado.map((unaPeli, idx) => <MovieCard key={unaPeli.name + idx} datos={unaPeli} className='movie_card'/>)
                }
                </div>
            </>
    )
  }
}

export default ResultadosBuscador;
