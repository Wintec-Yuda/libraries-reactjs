import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstLibraries, SecondLibraries, ThirdLibraries } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<FirstLibraries />} />
          <Route path="/second" element={<SecondLibraries />} />
          <Route path="/third" element={<ThirdLibraries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App