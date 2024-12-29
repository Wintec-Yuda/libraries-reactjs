import React, { useState } from "react";
import Modal from "react-modal";

// Style untuk Modal
Modal.setAppElement("#root"); // Ini untuk menghindari warning tentang accessibility

const ReactModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">React Modal Example</h1>
      <button
        onClick={openModal}
        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600"
      >
        Open Modal
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Modal Title</h2>
        <p className="text-gray-600 mb-6">
          This is a modal window. You can add any content here.
        </p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default ReactModalComponent;
