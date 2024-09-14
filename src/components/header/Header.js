import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link to = "/"><img src="/img/" alt= "logo"></img></Link>
      <Link to = "/">Home</Link>
      <Link to = "/favoritos">Favoritos</Link>
      <Link to = "/populares">Populares</Link>
      <Link to = "/cartelera">Cartelera</Link>
    </div>
  )
}

export default Header
