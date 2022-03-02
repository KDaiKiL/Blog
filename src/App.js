import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom'
import Postv from './pages/post-v';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:id" element={<Postv />}></Route>
      </Routes>

    </div>
  );
}

export default App;
