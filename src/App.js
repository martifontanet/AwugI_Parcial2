import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EventosList from './EventosList';
import EventDetail from './EventDetail';
import SearchResults from './SearchList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Importem el Header i Footer aquí per a que siguin consistents a totes les pàgines*/}

        <Switch>
          <Route exact path="/" component={EventosList} /> {/* Definim les rutes per cada component i que al fer Link apareguin els que ens interessen*/}
          <Route path="/event/:event_Id" component = {EventDetail}/>
          <Route path="/search/events/:searchTerm" component={SearchResults}/>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
