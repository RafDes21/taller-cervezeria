import React from "react";
import { Header, Texto } from "../Header/Header";
import "./ReservasComp.css";
import {useForm} from "react-hook-form"

const ReservasComp = () => {
  const img = "./assets/reservas/reservas.png";
  const h1 = "RESERVAS";
  const h3 = "Vive experiencias únicas";


  const {register, handleSubmit, watch } = useForm()
  // const [msj, setMsj] = useState("")

  const onSubmit = (data) => {
    console.log(data);   
    const name = watch("Nombre");
    // const phone= watch("Telefono");
    const mail = watch("Mail");
    const date = watch("Fecha");
    const time = watch("Horario");

  const msj = `¡Hola! Mi nombre es ${name} y me gustaría reservar una mesa a las ${time}hs del día ${date}. ¡Muchas Gracias! Mi mail de contacto es: ${mail}`;
  window.open(`https://api.whatsapp.com/send?phone=+541136945314&text=${msj}`)
      };



  return (
    <div className="">
      <Header img={img} />
      <Texto texto1={h1} texto2={h3} />

      <section className="Reservas-content">
        <p className="Reservas-text text-center">
          Haz tu reserva en línea y nosotros nos pondremos en contacto.
          <br /> Nuestro horario es de 9:00 am a 23:00 pm
        </p>
        <div className="Reservas-form">
          <h2 className="Reservas-h2">Reserva tu mesa</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="inputContainer">
              <input
                type="text"
                id="nombre"
                name="nombre"
                {...register('Nombre')}
                className=""
                placeholder="Nombre y apellido"
              />
              <label for="nombre" class="label">
                Nombre
              </label>
            </div>
            <div className="inputContainer">
              <input
                type="number"
                id="tel"
                name="telefono"
                {...register('Telefono')}
                className=""
                placeholder="Número de celular"
              />
              <label for="tel" class="label">
                Teléfono
              </label>
            </div>
            <div className="inputContainer">
              <input
                type="mail"
                id="mail"
                name="mail"
                {...register('Mail')}
                className=""
                placeholder="Dirección de correo electrónico"
              />
              <label for="mail" class="label">
                E-mail
              </label>
            </div>
            <div className="inputContainer">
              <input type="date" id="fecha" className="" name="fecha" placeholder="fecha"
              {...register('Fecha')} />
              <label for="fecha" class="label">
                Fecha
              </label>
            </div>
            <div className="inputContainer">
              <label for="cant" class="label">
                Horario
              </label>
              <select
                type=""
                id="time"
                className=""
                {...register('Horario')}
                name="horario"
                placeholder="Selecciona un horario"
              >
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
                <option value="23">23:00</option>
              </select>
            </div>
            <div className="inputContainer Button-wrapper">
              
                <button type="submit" >Reservar</button>

            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReservasComp;
