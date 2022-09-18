import React from "react";
import "./stylesHome/booking.css";

const Booking = () => {
  return (
    <div className="container-fluid bg-black">
      <div className="container">
        <div className="row">
          <div className="col-0 col-md-4 col-lg-6"></div>
          <div className="col-12 col-md-8 col-lg-6 contain-2">
            <span className="booking-message">¡No te quedes sin lugar!</span>
            <a className="booking" href="#">
              Realizar Reserva
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
