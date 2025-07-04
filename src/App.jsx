import React from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx'; // ajuste o caminho conforme sua estrutura

function App() {
  return (
    <div className="w-screen grid grid-cols-1">
      <div className="row-auto">
        <NavBar />
      </div>
      <div className="row-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
