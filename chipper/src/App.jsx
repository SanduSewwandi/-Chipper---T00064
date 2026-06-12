import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import AboutUs from './components/AboutUs';

export default function App() {
  return (
    // Changed overflow-hidden to overflow-visible to prevent cropping
    <div className="w-full overflow-visible">
      <Navbar />
      
      {/* STITCHING LOGIC:
         We use negative margins to pull sections up.
         We use descending z-indices (z-50, z-40, etc.) so that 
         the top sections sit ON TOP of the sections below them, 
         preventing the 'crop' issue.
      */}

      {/* Home: Top layer */}
      <div className="relative z-40">
        <Home />
      </div>

      {/* AboutUs: Pulls up behind Home */}
      <div className="relative -mt-30 z-40">
        <AboutUs />
      </div>

      {/* Roadmap: Pulls up behind AboutUs */}
      <div className="relative -mt-2 z-30">
        <Roadmap />
      </div>

      {/* HowToBuy: Pulls up behind Roadmap */}
      <div className="relative -mt-1 z-50">
        <HowToBuy />
      </div>

      {/* Tokenomics: Bottom layer */}
      <div className="relative -mt-1 z-70">
        <Tokenomics />
      </div>
    </div>
  );
}