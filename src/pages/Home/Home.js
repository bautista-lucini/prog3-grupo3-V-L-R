import React from 'react'
import "./Home.css"
import Buscador from '../../components/buscador/Buscador'
import ComponenteHome from "../../components/ComponenteHome/ComponenteHome"

const Home = () => {
  return (
    <>
      <h1> Películas </h1>
      <main>
        <Buscador/>
        <ComponenteHome/>
      </main>
    </>
  )
}

export default Home;
