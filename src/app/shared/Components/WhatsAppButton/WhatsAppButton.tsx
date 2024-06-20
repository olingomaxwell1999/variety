// components/WhatsAppButton.tsx
"use client";
import React, { useState } from "react";
import MessageModal from "../MessageModal/MessageModal";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M16.75 16.412l2.476-5.109.003-.008c.16-.413.242-.852.242-1.309 0-2.489-2.109-4.514-4.707-4.514-1.284 0-2.473.514-3.346 1.423L7.827 10.01c-.888.86-.823 2.446-.156 3.367l.997.997c.156.157.423.157.579 0l.95-.95c.157-.157.157-.423 0-.579l-.051-.051c-.158-.158-.235-.369-.235-.606 0-.237.098-.472.256-.629l2.063-2.064 2.063 2.063c.158.157.393.256.628.256.237 0 .472-.097.629-.256l.51-.51c.157-.157.157-.423 0-.579l-.96-.96c-.157-.157-.423-.157-.579 0l-.615.615c-.158.157-.423.157-.579 0-.157-.157-.157-.423 0-.579l.946-.947c.907-.906 2.403-.904 3.335.027 1.017 1.017 1.017 2.673 0 3.69l-2.619 2.62c-.157.157-.157.423 0 .579l.946.947c.158.157.423.157.579 0l.614-.615c.157-.157.423-.157.579 0 .157.157.157.423 0 .579l-.96.96c-.157.157-.423.157-.579 0l-.51-.51c-.157-.157-.392-.256-.629-.256-.236 0-.47.098-.628.256l-2.063 2.063-2.063-2.063c-.158-.158-.393-.256-.629-.256-.236 0-.47.098-.628.256l-.51.51c-.157.157-.157.423 0 .579l.96.96c.157.157.423.157.579 0l.615-.615c.157-.157.423-.157.579 0 .157.157.157.423 0 .579l-.946.947c-.907.906-2.403.904-3.335-.027-1.017-1.017-1.017-2.673 0-3.69l3.591-3.591c.872-.91 2.063-1.423 3.346-1.423 2.598 0 4.707 2.025 4.707 4.514 0 .457-.082.896-.242 1.309l-.005.011-2.474 5.108c-.16.413-.516.678-.938.678-.422-.001-.778-.266-.938-.679z" />
        </svg>
        WhatsApp
      </button>
      {showModal && (
        <MessageModal phoneNumber={phoneNumber} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default WhatsAppButton;
