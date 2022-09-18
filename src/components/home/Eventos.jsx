import React from 'react'
import "./stylesHome/home.css"

const Eventos = () => {
  return (
    <div className='Eventos'>
            <div className='line-wrapper'>
        <img src="./img/path2.svg" className="Eventos-line"></img>
      </div>
      <div className="Eventos-wrapper container-fluid">
        <div className="Section-header">
          <h2 className="Section-title">EVENTOS</h2> 
          <a href="#" className="Section-link">Ver Más</a>
        </div>
        <h3 className="Section-subtitle">Puesta a punto de sabores</h3>
        
        <div className='Eventos-content'>
          <div className='Eventos-card'>
            <div className='Eventos-card-text'>
              <h4>Karaoke</h4>
              <p>Jueves 21 horas</p>
            </div>
            <img src="./img/eventos/eventos1.png" alt="imagen eventos"className='Eventos-card-img1' />
          </div>
          <div className='Eventos-card'>
            <img src="./img/eventos/eventos2.png" alt="imagen eventos"className='Eventos-card-img2' />
            <div className='Eventos-card-text'>
              <h4>Bandas <br/>en vivo</h4>
              <p>Viernes 21 horas</p>
            </div>
          </div>
        </div>
        <div className="Section-button-wrapper">
          <a href="#"><button className='Section-button'>Arma tu evento</button></a>
        </div>
    </div>
    </div>
  )
}

export default Eventos