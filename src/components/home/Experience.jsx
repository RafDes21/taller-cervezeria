import React from 'react'
import "./stylesHome/home.css"

const Experience = () => {
  return (
    <div className='Experiencia'>
      <div className='line-wrapper'>
        <img src="./img/pathComplete.svg" alt='img-experiencia' className="Experiencia-line"/>
      </div>
      <div className="Experiencia-wrapper container-fluid">
        <h2 className="Section-title">LA EXPERIENCIA</h2>
          <div className="Experiencia-content">
            <img src="./logos/logo.png" alt="logo-eltaller"className="Experiencia-logo" />
            <p className="Experiencia-text">Un lugar que combina la amistad, rica comida y la pasión por los carros</p>
            <img src="./img/experiencias1.png" alt="logo-eltaller"className="Experiencia-img-desk" />
            
          </div>
      </div>
    </div>
  )
}

export default Experience