"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Page: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current!);

    // Append each attachment to the FormData
    attachments.forEach((file, index) => {
      formData.append(`attachment${index + 1}`, file);
    });

    try {
      const result = await emailjs.sendForm(
        "service_xj952nh",
        "template_n8fk4ze",
        form.current!,
        "zawJOYsZrm9H5-IQ8"
      );
      alert(result.text);
      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setAttachments([]);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block font-bold mb-2 text-red-500"
            >
              Name *
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-bold mb-2 text-red-500"
            >
              Email *
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block font-bold text-red-500 mb-2"
            >
              Phone Number *
            </label>
            <input
              placeholder="Enter your phone number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-bold mb-2 text-red-500"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="attachments" className="block font-bold mb-2">
              Attachments
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              multiple
              onChange={handleAttachmentChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
