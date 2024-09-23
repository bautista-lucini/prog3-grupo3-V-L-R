import React from "react";
import {Component} from "react";
import GridMovie from "../components/GridMovie/GridMovie";
import FormFiltro from "../components/FormFiltro/FormFiltro";
import MovieCard from "../components/MovieCard/MovieCard";

class VerTodas extends Component{
constructor(props){
    super(props)
    this.state={
        peliculas: [],
        peliculasFiltradas: [],
        nextPage: "" ,
        urlPelis: this.props.location.state.urlPelis
    }
}

componentDidMount(){
    fetch(this.state.urlPelis) 
    .then(res=>res.json())
    .then(data => this.setState({
        peliculas: data.results,
        peliculasFiltradas: data.results,
        nextPage: data.page
    })) .catch()
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

        <FormFiltro filtrado={(palabra)=> this.filtrado(palabra)}/>

        <div>
            {
                this.state.peliculasFiltradas.map((unapelicula, idx)=> <MovieCard key={unapelicula.name + idx} datos={unapelicula}/>  )
            }
        </div>

            <button onClick={() => this.cargarMasPeliculas()}>Cargar más películas</button>

        
        </>
    )

}
}

export default VerTodas;