import React from 'react'
import "../App.css"

import Buscador from '../components/buscador/Buscador'
import ComponenteHome from "../components/ComponenteHome/ComponenteHome"

const Home = (props) => {
  return (
    <>
      <h1> Películas </h1>
      <main>
        <Buscador history={props.history}/>
        <ComponenteHome/>
      </main>
    </>
  )
}

export default Home;
