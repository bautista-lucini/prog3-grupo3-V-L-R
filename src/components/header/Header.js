import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <li><Link to = "/"><img src="/img/logo.webp" alt= "logo" className='logo'></img></Link></li>
      </div>
      <ul className='main-header'>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/favoritos">Favoritos</Link></li>
        <li><Link to = "/populares">Populares</Link></li>
        <li><Link to = "/cartelera">Cartelera</Link></li>
      </ul>
        
    </nav>
  )
}

export default Header
