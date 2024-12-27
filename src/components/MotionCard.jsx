import React from "react";
import { motion } from "framer-motion";

const MotionCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Framer Motion Card</h2>
        <p className="text-gray-600">
          Hover over or click the card to see the animation effects powered by Framer Motion.
        </p>
      </div>
    </motion.div>
  );
};

export default MotionCard;
