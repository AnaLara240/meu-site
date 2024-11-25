jsx
import React from 'react';
import './App.css';
import Home from './components/Home';
import AreasDoSaber from './components/AreasDoSaber';
import IOT from './components/IOT';
import Pessoal from './components/Pessoal';

function App() {
  return (
<div className="App">
<nav>
<ul>
<li><a href="/">Página Inicial</a></li>
<li><a href="/areas-do-saber">Áreas do Saber</a></li>
<li><a href="/iot">IOT</a></li>
<li><a href="/pessoal">Página Pessoal</a></li>
</ul>
</nav>
<Home />
<AreasDoSaber />
<IOT />
<Pessoal />
</div>
  );
}

export default App;
