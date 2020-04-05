import React from "react";
import './styles.scss'
const Direccion = ({
  dealer = "Ford",
  address = "New York",
  city = "mangatan",
  province = "la costa",
  postal_code = "5001"
}) => {
  return (

      
    <div className="Dir" >
      <p><small>
        <span>{dealer}</span>
        <span>|</span>
        <span>{address},</span> 
        <span>{city},</span> 
        <span>{province}</span>
        <span>{postal_code}</span>
        </small>
      </p>
    </div>
  );
};

export default Direccion;
