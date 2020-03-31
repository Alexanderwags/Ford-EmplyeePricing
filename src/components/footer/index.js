import React from "react";
import Direccion from "../Direccion";
import Logo from "../Logo";
import './styles.scss'
const footer = () => {
  return (
    <div className="footer">
      <Logo />
      <Direccion />
      <p>
        <small>
          Redeemable only at exclusive dealer – One per customer – No cash value
          – Voucher must be presented on arrival to be considered valid. Cannot
          be combined with any other offer – Any trade-ins must be formally
          appraised by a sales manager of the participating dealer. This offer
          can end without notice. By submitting this information you consent to
          us communicating with you digitally. All Rights Reserved.
        </small>
      </p>
    </div>
  );
};

export default footer;
