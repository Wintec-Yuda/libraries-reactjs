import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastify = () => {
  const notifySuccess = () =>
    toast.success('Wow! Success Notification');

  const notifyError = () =>
    toast.error('Oops! Error Notification');

  return (
      <div className="p-2 bg-white rounded shadow-lg text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">React Toastify Example</h1>
        <button
          onClick={notifySuccess}
          className="px-2 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Show Success Toast
        </button>
        <button
          onClick={notifyError}
          className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Show Error Toast
        </button>
        <ToastContainer />
      </div>
  );
};

export default ReactToastify;
