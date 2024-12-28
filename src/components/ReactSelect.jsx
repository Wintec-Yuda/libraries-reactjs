// src/ReactSelect.js
import React, { useState } from 'react';
import Select from 'react-select';

const ReactSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Opsi untuk dropdown
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
  ];

  // Meng-handle perubahan pilihan
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">React Select Example</h2>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      <div className="mt-4">
        <p className="text-xl text-gray-600">Selected: {selectedOption ? selectedOption.label : 'None'}</p>
      </div>
    </div>
  );
};

export default ReactSelect;
