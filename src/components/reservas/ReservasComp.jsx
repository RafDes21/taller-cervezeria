import React from "react";
import { Header, Texto } from "../Header/Header";
import "./ReservasComp.css"

const ReservasComp = () => {
  const img = "./assets/reservas/reservas.png";
  const h1="RESERVAS"
  const h3 = "Vivi la experiencia a toda marcha"

  return (
    <>

      <div>
        <Header img={img} />
      </div>
    <section className="Reservas-content">
      <Texto texto1={h1} texto2={h3} />

    <p className="Reservas-text">
    Haz tu reserva en linea y asegurate tu lugar en EL TALLER. <br />
    Ten en cuenta que nuestro horario de atención es de        
    </p>
    <div className="Reservas-form">
      <h2 className="Reservas-h2">Reserva tu mesa</h2>
          <form action="">
            <div className="inputContainer">
              <input type="text" id="nombre" className="" placeholder="Nombre y apellido"/>
              <label for="nombre" class="label">Nombre</label>
            </div>
            <div className="inputContainer">
              <input type="number" id="tel" className="" placeholder="Número de celular"/>
              <label for="tel" class="label">Teléfono</label>
            </div>
            <div className="inputContainer">
              <input type="mail" id="mail" className="" placeholder="Dirección de correo electrónico"/>
              <label for="mail" class="label">E-mail</label>
            </div>
            <div className="inputContainer">
              <input type="date" id="fecha" className="" placeholder="fecha"/>
              <label for="fecha" class="label">Fecha</label>
            </div>
            <div className="inputContainer">
              <label for="cant" class="label">Horario</label>
              <select type="" id="cant" className="" placeholder="Selecciona un horario">
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
              </select>
            </div>
            <div className="inputContainer Button-wrapper">
              <a href=""className="Form-button">
                <button >Reserva</button>
              </a>
            </div>
          </form>
        </div>
    </section>
    </>
  );
};

export default ReservasComp;
