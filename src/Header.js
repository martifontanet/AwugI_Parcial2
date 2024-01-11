import React from 'react';
import logo from './images/escudo.png';
import {
  Link
} from 'react-router-dom';
import Search from './Search';


function Header() {
  return (
    <header className="App-header">
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Link className="linkHeader" to="/">
                <h1>Eventos De La Junta</h1>
            </Link>
        </div>
        <div>
            <Search />
        </div>

    </header>
  );
}

export default Header;