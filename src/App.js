import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Client from './pages/Client';
import Produit from './pages/Produit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/produit" element={<Produit />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
