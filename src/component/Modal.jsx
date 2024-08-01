import React, { useState } from 'react'
// import CustomModal from './CustomModal';
// import CustomModal from './CustomModal';


const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
        <div className="bg-gray-200 dark:bg-white p-8">
          {/* Trigger button */}
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Open Modal
          </button>
        </div>
      );
}

export default Modal