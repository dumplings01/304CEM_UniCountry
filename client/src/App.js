import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import SavedList from "./components/SavedList";

import NavBar from './components/NavBar';

import './App.css';
import './styles/components/NavBar.module.css'

const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/savedList' element={<SavedList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App