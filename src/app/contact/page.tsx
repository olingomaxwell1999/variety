"use client";
import React, { useState, useRef } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import emailjs from "@emailjs/browser";

const Contactarea = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="contact-area">
      <div className="contact-info">
        <h2 className="mb-4">Contact Information</h2>

        <p className="mb-4">
          Hi we are always open for cooperation & Suggestions. Contact
          <br /> us via any means below.
        </p>

        <div className="contact-box-contact">
          <div className="contact-box-contact">
            {" "}
            <div className="icon-box-contact">
              {" "}
              <div className="icon-area mb-2">
                {" "}
                <FaMapLocationDot /> <span>Address</span>{" "}
              </div>{" "}
              <div className="text-area-contact">
                {" "}
                <h3>HeadQuarter</h3> <p>Opposite JKIA</p>{" "}
                <p>Heading Towards Nairobi</p> <p>Nairobi, Kenya</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="icon-box-contact">
              {" "}
              <div className="icon-area mb-2">
                {" "}
                <BiSolidPhoneCall /> <span>Call Us</span>{" "}
              </div>{" "}
              <div className="text-area-contact">
                {" "}
                <h3>
                  {" "}
                  Call/WhatsApp: <br /> +254798071435{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="icon-box-contact">
              {" "}
              <div className="icon-area mb-2">
                {" "}
                <FaMapLocationDot /> <span>Address</span>{" "}
              </div>{" "}
              <div className="text-area-contact">
                {" "}
                <h3>Mombasa Office</h3> <p>Leisure Stage, Bombolulu,</p>{" "}
                <p>Heading Towards Malindi</p> <p>Mombasa, Kenya</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="icon-box-contact">
              {" "}
              <div className="icon-area mb-2">
                {" "}
                <BiSolidPhoneCall /> <span>Call Us</span>{" "}
              </div>{" "}
              <div className="text-area-contact">
                {" "}
                <h3>
                  {" "}
                  Call/WhatsApp: <br /> +254742839572{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="icon-box-contact">
              {" "}
              <div className="icon-area mb-2">
                {" "}
                <GoClock /> <span>Opening</span>{" "}
              </div>{" "}
              <div className="text-area-contact">
                {" "}
                <p>Mon - Friday</p> <p>8am - 5pm</p> <p>Satarday</p>{" "}
                <p>8am - 2pm</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="icon-box-contact">
              {" "}
              <div className="icon-area mb-2">
                {" "}
                <FaMapLocationDot /> <span>Email</span>{" "}
              </div>{" "}
              <div className="text-area-contact">
                {" "}
                <p>info@variety.co.ke</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div>

      <div className="contact-info">
        <h2 className="mb-4">Got Any Questions?</h2>

        <p className="mb-4">
          Use the contact form below to get in touch with the sales team.
        </p>

        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="input-carrier">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-carrier">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-carrier">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Enter your message"
                className="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="btn-area">
              <button type="submit" className="button-brown">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactarea;
