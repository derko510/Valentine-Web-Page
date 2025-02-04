// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import HomePage from './components/HomePage';
import Letter from './components/Letter';
import Collage from './components/Collage';
import Valentine from './components/Valentine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/collage" element={<Collage />} />
        <Route path="/valentine" element={<Valentine />} />
      </Routes>
    </Router>
  );
}

export default App;
