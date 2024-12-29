import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureExample = () => {
  const sigCanvas = useRef(null);

  // Clear signature canvas
  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  // Get the signature image in base64 format
  const saveSignature = () => {
    const signature = sigCanvas.current.toDataURL();
    console.log(signature); // Menampilkan signature dalam format base64
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold mb-4">React Signature Canvas</h1>

      {/* Signature Canvas */}
      <SignatureCanvas
        ref={sigCanvas}
        backgroundColor="white"
        penColor="black"
        canvasProps={{
          width: 220,
          height: 200,
          className: "signature-canvas border border-gray-300",
        }}
      />

      <div className="flex space-x-4 mt-4">
        {/* Tombol untuk clear signature */}
        <button
          onClick={clearSignature}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Clear
        </button>

        {/* Tombol untuk menyimpan signature */}
        <button
          onClick={saveSignature}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SignatureExample;
