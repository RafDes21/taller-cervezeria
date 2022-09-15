import React from 'react';
import Booking from './components/Booking';
import Eventos from './components/Eventos';
import Experience from './components/Experience';
import Lugar from './components/Lugar';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Booking/>
      <Experience/>
      <Lugar/>
      <Menu/>
      <Eventos/>
    </div>
  );
}

export default App;
