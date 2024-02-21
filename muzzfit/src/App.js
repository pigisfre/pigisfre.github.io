import React from 'react';
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Coach from './Components/Coach/Coach';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contatti from './Components/Contatti/Contatti';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Coach />
      <Contatti />
      <Footer />
      
    </div>
  );
}

export default App;
