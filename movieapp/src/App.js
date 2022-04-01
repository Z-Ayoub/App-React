import React from 'react';
/*
permettra d'utiliser l'API "History" de HTML5 afin de manipuler l'historique du navigateur
et ainsi changer les URL de navigation sans changer de page.
*/
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import './lib/font-awesome/css/all.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
   <GlobalProvider>
    <Router>
      {/* Appeler Header element en haut pour s'apparaître sur chaque page que nous voulons*/}
      <Header/>
      
      {/* permet essentiellement de nous déplacer dans notre App pour parcourir notre demande
        On peut utiliser aussi :
        <BrowserRouter>
          <Routes>
            <Route / >
          </Routes
        </BrowserRouter>
      */}
      <Switch>
        <Route exact path="/">
          <Watchlist/>
        </Route>
        <Route path="/watched">
          <Watched/>
        </Route>
        <Route path="/Add">
          <Add/>
        </Route>
      </Switch>
    </Router>
   </GlobalProvider>
  );
}
export default App;