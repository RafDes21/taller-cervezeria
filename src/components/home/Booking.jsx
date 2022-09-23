import React from "react";
import { Link } from "react-router-dom";
import "./stylesHome/booking.css";

const Booking = () => {
  return (
    <div id="booKing">
      <span className="booking-message">¡No te quedes sin lugar!</span>
      <Link className="booking" to="/lugar">
        Realizar Reserva
      </Link>
    </div>
  );
};

export default Booking;
