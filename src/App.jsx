import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Engage from './components/Engage';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0E0F16] font-sans text-white">
      <Hero />
      <About />
      <Highlights />
      <Engage />
    </div>
  );
}

export default App;
