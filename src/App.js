import React from 'react';

import Navbar from './components/Navbar.jsx';
import CallToAction from './components/CallToAction.jsx';
import Projects from './components/projects/Projects.jsx';

import './css/index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <Projects />
    </div>
  );
}

export default App;
