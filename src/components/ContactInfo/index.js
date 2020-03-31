import React from "react";
import "./styles.scss";
const ContactInfo = () => {
  return (
    <div>
      <h3 className="title">Contact Information</h3>
      <p className="styles_description__1_Obh">
        Please take a moment to verify your contact information.
      </p>
      <div className="styles_stepsContainer__isWtJ">
        <div className="styles_stepLabel__3f9GG">
          <span className="on"></span>
        </div>
        <div className="styles_stepLabel__3f9GG">
          <span className="off"></span>
        </div>
        <div className="styles_stepLabel__3f9GG">
          <span className="off"></span>
        </div>
      </div>
      <form className="contact">
        <div className="flex">
          <div className="form-e m-50">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="form-e m-50">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-e m-100">
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div className="flex">
          <div className="form-e m-50">
            <label>DayTime Phone </label>
            <input type="text" />
          </div>
          <div className="form-e m-50">
            <label>Evening Phone </label>
            <input type="text" />
          </div>
        </div>
        <button type="submit" className="btn-form">
          enviar
        </button>
      </form>
    </div>
  );
};
export default ContactInfo;
