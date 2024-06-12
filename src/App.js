import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainbanner from './components/Mainbanner';
import Subbaner from './components/Subbaner';
import Main from './components/main';
import Navbar from './components/navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar/><Subbaner/><Mainbanner/><Main/> </div>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
