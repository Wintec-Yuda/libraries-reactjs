import React, { useState } from "react";
import { ChromePicker } from "react-color";

const TailwindColorPicker = () => {
  const [color, setColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Tailwind Color Picker</h1>
      <div className="flex items-center space-x-4">
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        <div
          style={{ backgroundColor: color }}
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        ></div>
      </div>
      <p className="mt-4">Selected Color: <span style={{ color: color }}>{color}</span></p>
    </div>
  );
};

export default TailwindColorPicker;
