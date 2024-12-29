import React from 'react';
import { motion } from 'framer-motion';
import { ReactTableComponent, Chart, ReactSpring, ThreeJS, ReactSelect, InfiniteScrollComponent, LanguageSwitcherComponent, Rechart, ReactToastify } from '../components';

// Data fitur (misal ada komponen untuk AntDesign)
const FEATURES = [
  { id: 1, component: <ReactTableComponent /> },
  { id: 2, component: <Chart /> },
  { id: 3, component: <ReactSpring /> },
  { id: 4, component: <ThreeJS /> },
  { id: 5, component: <ReactSelect /> },
  { id: 6, component: <InfiniteScrollComponent /> },
  { id: 7, component: <LanguageSwitcherComponent /> },
  { id: 8, component: <Rechart /> },
];

const SecondLibraries = () => {
  // Variabel animasi untuk efek animasi fade-in dan bounce
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6 bg-gradient-to-r from-green-400 via-blue-500 to-teal-600'>
      {FEATURES.map((feature) => (
        <motion.div
          key={feature.id}
          className='bg-white p-6 border border-gray-300 rounded-xl shadow-xl hover:bg-green-500 active:bg-green-600 transition-all duration-200 transform hover:scale-105'
          whileHover={{ scale: 1.05 }}  // Efek zoom saat hover
          whileTap={{ scale: 0.95 }}    // Efek zoom-out saat tap
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='text-black text-center'>
            {feature.component}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SecondLibraries;
