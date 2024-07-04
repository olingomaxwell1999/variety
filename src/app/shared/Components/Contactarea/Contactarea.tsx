"use client";
import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import emailjs from "@emailjs/browser";

const Contactarea = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xj952nh",
        "template_n8fk4ze",
        e.currentTarget,
        "zawJOYsZrm9H5-IQ8"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
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
          <div className="icon-box-contact">
            <div className="icon-area mb-2">
              <FaMapLocationDot />
              <span>Address</span>
            </div>
            <div className="text-area-contact">
              <h3>HeadQuarter</h3>
              <p>Opposite JKIA</p>
              <p>Heading Towards Nairobi</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="icon-box-contact">
            <div className="icon-area mb-2">
              <BiSolidPhoneCall />
              <span>Call Us</span>
            </div>
            <div className="text-area-contact">
              <h3>
                Call/WhatsApp:
                <br /> 0798071535
              </h3>
            </div>
          </div>
          <div className="icon-box-contact">
            <div className="icon-area mb-2">
              <FaMapLocationDot />
              <span>Address</span>
            </div>
            <div className="text-area-contact">
              <h3>Mombasa Office</h3>
              <p>Leisure Stage, Bombolulu,</p>
              <p>Heading Towards Malindi</p>
              <p>Mombasa, Kenya</p>
            </div>
          </div>

          <div className="icon-box-contact">
            <div className="icon-area mb-2">
              <BiSolidPhoneCall />
              <span>Call Us</span>
            </div>
            <div className="text-area-contact">
              <h3>
                Call/WhatsApp:
                <br /> 0742839572
              </h3>
            </div>
          </div>

          <div className="icon-box-contact">
            <div className="icon-area mb-2">
              <GoClock />
              <span>Opening</span>
            </div>
            <div className="text-area-contact">
              <p>Mon - Friday</p>
              <p>8am - 5pm</p>
              <p>Satarday</p>
              <p>8am - 2pm</p>
            </div>
          </div>

          <div className="icon-box-contact">
            <div className="icon-area mb-2">
              <FaMapLocationDot />
              <span>Email</span>
            </div>
            <div className="text-area-contact">
              <p>info@variety.co.ke</p>
            </div>
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
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="input-carrier">
              <label htmlFor="firstName">Name</label>
              <input type="text" name="firstName" required />
            </div>

            <div className="input-carrier">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="input-carrier">
              <label htmlFor="message">Message</label>

              <textarea className="message" name="message"></textarea>
            </div>

            <div className="btn-area">
              <button className="button-brown">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactarea;
