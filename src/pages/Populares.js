import React from 'react';
import {Component} from "react";
import MovieCard from '../components/MovieCard/MovieCard';

class Populares extends Component{
  constructor(props){
    super(props)
    this.state={
        peliculas: [],
        cargando: true,
    }
}

componentDidMount(){
  //fetch
  fetch ("https://api.themoviedb.org/3/movie/popular?api_key=8dea26e2efdb41e19def66c4e41362a9&language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => this.setState({peliculas: data.results, cargando: false}))
      .catch((error) => console.log(error))
}

render(){

  return(
    <>

    <div className="movie-card">
      {
        this.state.peliculas.length === 0 && this.state.cargando ?
          <p>Cargando...</p> : 
                this.state.peliculas.length === 0 && !this.state.cargando ?
                <p> No se encontraron resultados </p> :
                this.state.peliculas.map((unaPeli, idx) => <MovieCard key={unaPeli.name + idx} datos={unaPeli}/>)
      }
    </div>
  </>
)
}
}

export default Populares
