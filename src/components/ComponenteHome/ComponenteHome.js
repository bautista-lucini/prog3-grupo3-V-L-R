import React, { Component } from "react";
import { Link } from "react-router-dom";
import Populares from "../Populares/Populares";
import Cartelera from "../Cartelera/Cartelera";
import MovieCard from "../MovieCard/MovieCard";
import "./ComponenteHome.css"

// Grid para cartelera 
//Css

let popularesUrl =  "https://api.themoviedb.org/3/movie/popular?api_key=8dea26e2efdb41e19def66c4e41362a9&language=en-US&page=1"
let carteleraUrl =  "https://api.themoviedb.org/3/movie/now_playing?api_key=8dea26e2efdb41e19def66c4e41362a9"

class ComponenteHome extends Component {
    constructor(){
        super()
        this.state = {
            arrayPopulares: [],
            arrayCartelera: []
        }
    }

    //Vamos a buscar la informacion con el fetch

    componentDidMount() {
        fetch(popularesUrl)
        .then(res => res.json())
        .then(data => this.setState({
            arrayPopulares: data.results
        })).catch()

        fetch(carteleraUrl)
        .then(res => res.json())
        .then(data => this.setState({
            arrayCartelera: data.results
        })).catch()

    }

//Vamos a renderizar la informacion

render(){
    return(
        <>
        <h1 className="titulo">Peliculas Populares</h1>
        <section className="containerPeliculas">
        {
            this.state.arrayPopulares.map((unaPeli, idx)=> <MovieCard key={unaPeli.name + idx} datos={unaPeli}/>)
        }
        </section>
         <h2 className="">Peliculas en cartelera</h2>
         <section  className="containerPeliculas">
            {
                this.state.arrayCartelera.map((unaPeliCarte, idx)=> <MovieCard key={unaPeliCarte.name + idx} datos={unaPeliCarte}/>)
            }
         </section>
        </>

    )
}

}

export default ComponenteHome;