import React from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';
import MojaPrvaKomponenta from './MojaPrvaKomponenta';
import UspijesniBotun from './components/common/UspijesniBotun';
import './App.css';

function App() {
  let mojeIme = "Antun Nakić"

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/nasaKomponenta">Link na drugi page (ispravan SPA način)</Link>
        <a href="/nasaKomponenta">Link na drugi page (na krivi nacin)</a>
        <MojaPrvaKomponenta />
        <UspijesniBotun text="Potvrdi registraciju" velicinaFonta="24px" />
        <UspijesniBotun text="Next" />
        <UspijesniBotun text="Finish" />
        <UspijesniBotun text="Finished yesterday" xyz='dghjksdgj'/>
        <UspijesniBotun text="Finished yesterday" xyz='dghjksdgj' zzz={{a:84}}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. žžbjkfdbghjfbgf
        </p>
        <p>Dobar dan svima. Podržava vas Vaš profesor {mojeIme}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
