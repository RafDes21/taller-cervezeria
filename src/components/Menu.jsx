import React from 'react'
import "./styles/home.css"

const Menu = () => {
  return (
    <div className='Menu'>
            <div className='line-wrapper'>
        <img src="./img/path2.svg" className="Menu-line"></img>
      </div>
      <div className="Menu-wrapper container-fluid">
        <div className="Section-header">
          <h2 className="Section-title">EL MENÚ</h2> 
          <a href="#" className="Section-link">Ver Más</a>
        </div>
        <h3 className="Section-subtitle">Puesta a punto de sabores</h3>
        
        <div className='Menu-content'>
          <div className='Menu-card menu1'>
            <div className='Menu-card-text'>
              <h4>Tacos veloces</h4>
              <p>Sabrosa carne vacuna, palta y cebolla</p>
            </div>
            <img src="./img/menu/menu1.png" alt="imagen menu"className='Menu-card-img' />
          </div>
          <div className='Menu-card menu2'>
            <img src="./img/menu/menu2.png" alt="imagen menu"className='Menu-card-img' />
            <div className='Menu-card-text'>
              <h4>Burritos Mecánicos</h4>
              <p>Sabrosa carne vacuna, palta y cebolla</p>
            </div>
          </div>
          <div className='Menu-card menu3'>
            <img src="./img/menu/menu3.png" alt="imagen menu"className='Menu-card-img' />
            <div className='Menu-card-text'>
              <h4>Burritos Mecánicos</h4>
              <p>Sabrosa carne vacuna, palta y cebolla</p>
            </div>
          </div>

          
        </div>
        <div className="Section-button-wrapper">
          <a href="#"><button className='Section-button'>Ver Menú Completo</button></a>
        </div>
    </div>
    </div>
  )
}

export default Menu