import React from 'react';
import { motion } from 'framer-motion';
import { ReactToastify, ReactModalComponent, ReactDropzoneComponent, ReactImageComponent, CookieComponent, SkeletonLoader, CopyToClipboardWithLibrary, IconExample, LazyImageExample, TailwindColorPicker, SignatureExample, StickyWithAdditionalFeatures } from '../components';

// Data fitur untuk komponen
const FEATURES = [
  { id: 1, component: <ReactToastify /> },
  { id: 2, component: <ReactModalComponent /> },
  { id: 3, component: <ReactDropzoneComponent /> },
  { id: 4, component: <ReactImageComponent /> },
  { id: 5, component: <CookieComponent /> },
  { id: 6, component: <SkeletonLoader /> },
  { id: 7, component: <CopyToClipboardWithLibrary /> },
  { id: 8, component: <IconExample /> },
  { id: 9, component: <LazyImageExample /> },
  { id: 10, component: <TailwindColorPicker /> },
  { id: 11, component: <SignatureExample /> },
  { id: 12, component: <StickyWithAdditionalFeatures /> },
];

// Variabel animasi untuk efek animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ThirdLibraries = () => {
  return (
    <motion.div
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {FEATURES.map((feature) => (
        <motion.div
          key={feature.id}
          className="bg-white p-6 border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          variants={cardVariants}
        >
          <div className="text-gray-800 text-center">
            {feature.component}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ThirdLibraries;
