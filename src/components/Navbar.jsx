import React from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-semibold">
            <a href="/">MyLogo</a>
          </div>

          <div className="flex space-x-6">
            <a href="/" className="text-white hover:bg-blue-700 px-4 py-2 rounded-md">Home</a>
            <a href="/about" className="text-white hover:bg-blue-700 px-4 py-2 rounded-md">About</a>
            <a href="/services" className="text-white hover:bg-blue-700 px-4 py-2 rounded-md">Services</a>
            <a href="/contact" className="text-white hover:bg-blue-700 px-4 py-2 rounded-md">Contact</a>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
