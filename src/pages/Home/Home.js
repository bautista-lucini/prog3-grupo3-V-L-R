import React from 'react'
import "./Home.css"
import FormularioBusqueda from '../../components/FormularioBusqueda/FormularioBusqueda'

const Home = () => {
  return (
    <>
      <h1> Películas </h1>
      <main>
        <FormularioBusqueda/>
      </main>
    </>
  )
}

export default Home;
