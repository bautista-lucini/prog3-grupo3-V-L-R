import React from 'react';
import VerTodas from './VerTodas';
import "../index.css"

const Cartelera = () => {
  return (
    <>
      <VerTodas urlPelis="https://api.themoviedb.org/3/movie/popular?api_key=8dea26e2efdb41e19def66c4e41362a9&language=en-US&page=1"></VerTodas>
    </>
  )
}

export default Cartelera;