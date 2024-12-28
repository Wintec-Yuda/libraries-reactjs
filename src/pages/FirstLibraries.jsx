import React from 'react';
import { motion } from 'framer-motion';
import { 
  Axios, 
  StyledButton, 
  MuiCard, 
  CounterRedux, 
  MotionCard, 
  FormicExample, 
  ReactQueryExample, 
  CounterRecoil, 
  ReactHookForm, 
  ReactHelmet,
  AntDesign,
  ReactDnD
} from '../components';

const FEATURES = [
  {id: 1, component: <Axios />},
  {id: 2, component: <StyledButton />},
  {id: 3, component: <MuiCard />},
  {id: 4, component: <CounterRedux />},
  {id: 5, component: <MotionCard />},
  {id: 6, component: <FormicExample />},
  {id: 7, component: <ReactQueryExample />},
  {id: 8, component: <CounterRecoil />},
  {id: 9, component: <ReactHookForm />},
  {id: 10, component: <ReactHelmet />},
  {id: 11, component: <AntDesign />},
  {id: 12, component: <ReactDnD />}
];

const FirstLibraries = () => {
  return (
    <div className='grid grid-cols-4 p-6 gap-6 bg-gray-900'>
      {FEATURES.map((feature) => (
        <motion.div
          key={feature.id}
          className='bg-gray-800 p-6 border border-blue-500 rounded-lg shadow-lg hover:bg-blue-600 active:bg-blue-700'
          whileHover={{ scale: 1.05 }}  // Efek zoom saat hover
          whileTap={{ scale: 0.95 }}    // Efek zoom-out saat tap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}  // Transisi fade-in halus
        >
          {/* Menyesuaikan warna teks */}
          <div className='text-white text-center'>
            {feature.component}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FirstLibraries;
