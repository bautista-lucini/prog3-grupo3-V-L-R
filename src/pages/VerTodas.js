import React from "react";
import {Component} from "react";
import FormFiltro from "../components/FormFiltro/FormFiltro";
import MovieCard from "../components/MovieCard/MovieCard";

class VerTodas extends Component{
constructor(props){
    super(props)
    this.state={
        peliculas: [],
        peliculasFiltradas: [],
        nextPage: "" ,
        urlPelis: this.props.urlPelis,
        cargando: true,
    }
}

componentDidMount(){
    fetch(this.state.urlPelis) 
    .then(res=>res.json())
    .then(data => this.setState({
        peliculas: data.results,
        peliculasFiltradas: data.results,
        nextPage: data.page,
        cargando: false,
    })
    ) 
    .catch()
}

cargarMasPeliculas(){
    let urlCargadas = `${this.state.urlPelis.split("&page=")[0]}&page=${this.state.nextPage + 1}`;

    fetch(urlCargadas)
    .then(res => res.json())
    .then(data => this.setState({
        peliculas: this.state.peliculas.concat(data.results),
        peliculasFiltradas: this.state.peliculasFiltradas.concat(data.results),
        nextPage: data.page + 1
    })).catch()

}

filtrado(palabra){
    let filtradoArray = this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(palabra.toLowerCase()) )

    this.setState({
        peliculasFiltradas: filtradoArray
    })


}


render (){
    return(
        <>
        <h2>Peliculas</h2>
        
            <FormFiltro filtrado={(palabra)=> this.filtrado(palabra)}/>

            <div className='containerPopulares'>
                {
                     this.state.peliculasFiltradas.length === 0 && this.state.cargando ? 
                        <p>Cargando...</p> : 
                        this.state.peliculasFiltradas.length === 0  && !this.state.cargando? 
                            <p>No se encontraron películas</p> : 
                            this.state.peliculasFiltradas.map((unapelicula, idx)=> <MovieCard key={unapelicula.name + idx} datos={unapelicula} className='movieCard'/>)
                }
           </div>
           
                <button className="btn" onClick={() => this.cargarMasPeliculas()}>Cargar más películas</button>
            
        
        </>
    )

}
}

export default VerTodas;