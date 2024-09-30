
import React from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";
import Footer from "./components/Footer/Footer"
import { Switch, Route } from 'react-router-dom';
import ResultadosBuscador from './pages/ResultadosBuscador';
import NotFound from './pages/NotFound';
import DetallePeliculaPage from './pages/DetallePelicula';



function App() {
  
  return (
    <>
        <Header/>
        
        <main>
          <Switch>

            <Route exact path= "/" component={ Home }/>
            <Route path= "/favoritos" component={ Favoritos }/>
            <Route path= "/populares" component={ Populares }/>
            <Route path="/cartelera" component={Cartelera} />
            <Route path= "/search" component={ ResultadosBuscador }/>
            <Route path="/DetallePelicula/id/:id" component={DetallePeliculaPage} />
            <Route component= {NotFound}/>

          </Switch>
        </main>
        
        <Footer />
      
    </>
  );
}

export default App;

