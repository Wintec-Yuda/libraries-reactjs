import React from "react";
import { Img } from "react-image";

const ReactImageComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">React Image Component</h1>
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <Img
          src="https://via.placeholder.com/600x400"
          alt="Placeholder"
          className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
          loader={<div className="w-full h-40 bg-gray-300 rounded-lg">Loading...</div>} // Loader placeholder
          unloader={<div className="w-full h-40 bg-red-500 text-white text-center flex items-center justify-center rounded-lg">Failed to load image</div>} // Fallback error message
          loading="lazy" // Lazy load the image
        />
      </div>
    </div>
  );
};

export default ReactImageComponent;
