import React from 'react'
import "../App.css"

import Buscador from '../components/buscador/Buscador'
import GridMovie from '../components/GridMovie/GridMovie'


const Home = (props) => {
  return (
    <>
      <h1> Películas </h1>
      <main>
        <Buscador history={props.history}/>
        <GridMovie link={"/verTodas"} tipo={"Peliculas Populares"} url={"https://api.themoviedb.org/3/movie/popular?api_key=8dea26e2efdb41e19def66c4e41362a9&language=en-US&page=1"}/>
        <GridMovie link={"/verTodas"} tipo={"Peliculas Top Rated"} url={"https://api.themoviedb.org/3/movie/now_playing?api_key=8dea26e2efdb41e19def66c4e41362a9"}/>
      </main>
    </>
  )
}

export default Home;
