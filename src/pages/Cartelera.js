import React from 'react'
import {Component} from "react";
import MovieCard from '../components/MovieCard/MovieCard';
import "../index.css"

class Cartelera extends Component{
  constructor(props){
    super(props)
    this.state={
        peliculas: [],
        cargando: true,
    }
}

componentDidMount(){
  //fetch
  fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=8dea26e2efdb41e19def66c4e41362a9")
      .then((response) => response.json())
      .then((data) => this.setState({peliculas: data.results, cargando: false}))
      .catch((error) => console.log(error))
}

render(){

  return(
    <>
     <h2 className="tituloPopulares">Cartelera</h2>  
    <div className='containerPopulares'>
      {
        this.state.peliculas.length === 0 && this.state.cargando ?
          <p>Cargando...</p> : 
                this.state.peliculas.length === 0 && !this.state.cargando ?
                <p> No se encontraron resultados </p> :
                this.state.peliculas.map((unaPeli, idx) => <MovieCard key={unaPeli.name + idx} datos={unaPeli} className="movieCard"/>)
      }
    </div>
  </>
)
}
}

export default Cartelera
