import React from 'react';
import {  Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} exact/>
        <Route path='/contact' element={<Contact />} exact/>
      </Routes>
    </div>
  );
}

export default App;
