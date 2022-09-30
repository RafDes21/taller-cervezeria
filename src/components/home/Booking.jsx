import React from "react";
import { Link } from "react-router-dom";
import "./homeCss/booking.css";

const Booking = () => {
  return (
    <div id="booKing">
      <span className="booking-message">¡Ven a visitarnos!</span>
      <Link className="booking" to="/lugar">
        Realizar Reserva
      </Link>
    </div>
  );
};

export default Booking;
