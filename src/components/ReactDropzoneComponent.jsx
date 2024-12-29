import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ReactDropzoneComponent = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Files dropped:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".jpg,.jpeg,.png,.gif,.pdf,.docx", 
  });

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">React Dropzone Example</h1>
      <div
        {...getRootProps()}
        className={`w-80 h-40 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-all ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-400 bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the files here...</p>
        ) : (
          <p className="text-gray-500">Drag and drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default ReactDropzoneComponent;
