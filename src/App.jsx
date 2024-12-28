import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstLibraries, SecondLibraries } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<FirstLibraries />} />
          <Route path="/second" element={<SecondLibraries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App