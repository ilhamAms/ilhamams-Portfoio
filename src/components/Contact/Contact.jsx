import React from "react";
import "./contact.scss";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="contact-container">
        <h4 className="title">CONTACT</h4>
        <span className="des">Don't be shy! Hit me Up!</span>

        <div className="contact">
          <div className="icon flex">
            <div className="section-icon">
              <BiCurrentLocation className="i" />
            </div>
            <div className="section-text">
              <h5>location</h5>
              <span>Raman Yala South Thailand</span>
            </div>
          </div>
          <div className="icon flex">
            <div className="section-icon">
              <MdEmail className="i" />
            </div>
            <div className="section-text">
              <h5>email</h5>
              <span>ilhamams1999@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
