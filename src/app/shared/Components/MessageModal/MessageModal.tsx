// components/MessageModal.tsx
"use client";
import React, { useState } from "react";

interface MessageModalProps {
  phoneNumber: string;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({
  phoneNumber,
  onClose,
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const formattedNumber = phoneNumber.replace(/\s/g, "");
    const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Enter your message</h2>
        <textarea
          className="w-full h-32 resize-none border border-gray-300 rounded-md p-2 mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
