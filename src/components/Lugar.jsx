import React from 'react'
import "./styles/home.css"

const Lugar = () => {
  return (
    <div className='Lugar'>
        <div className='line-wrapper container-fluid'>
          <img src="./img/path2.svg" className="Lugar-line"></img>
        </div>
      <div className="Lugar-wrapper container-fluid">
        <div>
        <div className="Section-header">
          <h2 className="Section-title">EL LUGAR</h2> 
          <a href="#" className="Section-link">Ver Más</a>
        </div>
        <h3 className="Section-subtitle">Unos boxes muy chingones</h3>
        </div>

        <div className='Lugar-images container-fluid'>
          <div className='Lugar-img lugar1'>
          {/* <img src="./img/lugar/lugar1.png" alt="imagen-eltaller" className="Lugar-img"/> */}
          </div>
          <div className='Lugar-img lugar2'>
          {/* <img src="./img/lugar/lugar2.png" alt="imagen-eltaller" className="Lugar-img" /> */}
          </div>
          <div className='Lugar-img lugar3'>
          {/* <img src="./img/lugar/lugar3.png" alt="imagen-eltaller"className="Lugar-img" /> */}
          </div>
          <div className='Lugar-img lugar4'>
          {/* <img src="./img/lugar/lugar3.png" alt="imagen-eltaller"className="Lugar-img" /> */}
          </div>
        </div>
        <div className="Section-button-wrapper">
          <a href="#"><button className='Section-button'>Ver Ubicación</button></a>
        </div>
    </div>
    </div>
  )
}

export default Lugar