import React from 'react'
import "../index.css"
import VerTodas from './VerTodas';

const Cartelera = () => {
  return (
    <>
      <VerTodas urlPelis="https://api.themoviedb.org/3/movie/now_playing?api_key=8dea26e2efdb41e19def66c4e41362a9"></VerTodas>
    </>
  )
}

export default Cartelera


