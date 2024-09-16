
import React from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import Populares from "./pages/Populares/Populares";
import Cartelera from "./pages/Cartelera/Cartelera";
import Footer from "./components/Footer/Footer"
import { Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    <>
        <Header/>
        <main>
          <Switch>
            <Route exact path= "/" component={ Home }/>
            <Route exact path= "/favoritos" component={ Favoritos }/>        
          </Switch>
        </main>
        
        
        
        <Footer />
      
    </>
  );
}

export default App;

