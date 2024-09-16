import React from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";
import Footer from "./components/Footer/Footer"
import { Switch, Route} from 'react-router-dom';
import ResultadosBuscador from './pages/ResultadosBuscador';


function App() {
  
  return (
    <>
        <Header/>
        <main>
          <Switch>
            <Route exact path= "/" component={ Home }/>
            <Route path= "/favoritos" component={ Favoritos }/>
            <Route path= "/search" component={ ResultadosBuscador }/>
          </Switch>
        </main>
        
        
        
        <Footer />
      
    </>
  );
}

export default App;

