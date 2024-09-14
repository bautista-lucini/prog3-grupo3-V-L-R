
import React from 'react';
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import Populares from "./pages/Populares/Populares";
import Cartelera from "./pages/Cartelera/Cartelera";
import Footer from "./components/footer/Footer"
import { Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    <>
        <Header/>
        <main>
          <Switch>
            <Route exact path= "/" component={ Home }/>
            <Route exact path= "/favoritos" component={ Favoritos }/>
            <Route exact path= "/populares" component={ Populares }/>
            <Route exact path= "/cartelera" component={ Cartelera }/>
        
          </Switch>
        </main>
        <Footer />
      
    </>
  );
}

export default App;

