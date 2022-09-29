import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Following from './pages/Following';
import Home from './pages/Home';
import Live from './pages/Live';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/following' element={<Following />}></Route>
        <Route path='/live' element={<Live />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
