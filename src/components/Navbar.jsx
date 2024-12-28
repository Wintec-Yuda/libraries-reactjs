import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Daftar link navbar
  const navLinks = [
    { name: 'first', to: '/' },
    { name: 'second', to: '/second' },
    // Anda bisa menambah link lainnya di sini
  ];

  // Animasi untuk tombol navbar dan menu saat dimuat
  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            {/* Render link-link navbar secara dinamis */}
            {navLinks.map((link) => (
              <motion.div 
                key={link.name}
                initial="hidden" 
                animate="visible" 
                variants={buttonVariants}
              >
                <Link 
                  to={link.to} 
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Menampilkan konten halaman yang terhubung dengan routing */}
      <main className="bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
