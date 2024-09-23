import React, { Component } from "react";
import { Link } from "react-router-dom";
import Populares from "../Populares/Populares";
import Cartelera from "../Cartelera/Cartelera";
import MovieCard from "../MovieCard/MovieCard";
import "./ComponenteHome.css"

class ComponenteHome extends Component {
    constructor(){
        super()
        this.state = {
            arrayPopulares: [],
            arrayCartelera: []
        }
    }


    componentDidMount() {
        fetch(popularesUrl)
        .then(res => res.json())
        .then(data => this.setState({
            arrayPopulares: data.results.slice(0,5)
        })).catch()

        fetch(carteleraUrl)
        .then(res => res.json())
        .then(data => this.setState({
            arrayCartelera: data.results.slice(0,5)
        })).catch()

    }


render(){
    return(
        <>
        <h2 className="titulo">Peliculas Populares</h2>
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