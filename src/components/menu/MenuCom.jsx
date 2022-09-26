import React from 'react'
import Header from '../Header/Header'
import "./MenuCom.css"

const MenuCom = () => {

  const img = "./assets/menu/menu.png"
  return (
<div className='Menu-wrapper'> 
 <Header img={img}/>
  <section className="Menu-content">
    <div className="Menu-titulo">
      <h2 className='Menu-h2'>
        EL MENU
      </h2>
      <h3>
        La comida de los maestros
      </h3>
    </div>
    <div className="Menu-comida">
      <div className="Menu-comida-card">
        <img src="#" alt="imagen menu" />
        <h5>Lorem ipsum dolor sit amet consectetur </h5> 
        <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
      </div>
      <div className="Menu-comida-card">
        <img src="#" alt="imagen menu" />
        <h5>Lorem ipsum dolor sit amet consectetur </h5> 
        <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
      </div>
      <div className="Menu-comida-card">
        <img src="#" alt="imagen menu" />
        <h5>Lorem ipsum dolor sit amet consectetur </h5> 
        <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
      </div>
      <div className="Menu-comida-card">
        <img src="#" alt="imagen menu" />
        <h5>Lorem ipsum dolor sit amet consectetur </h5> 
        <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
      </div>
      <div className="Menu-comida-card">
        <img src="#" alt="imagen menu" />
        <h5>Lorem ipsum dolor sit amet consectetur </h5> 
        <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
      </div>
    </div>
    <div className="Menu-bebidas">
      <h4>Nuestras Bebidas</h4>
      <div className="Menu-bebidas-slider">
        <img src="#" alt="img bebidas" />
        <img src="#" alt="img bebidas" />
        <img src="#" alt="img bebidas" />
      </div>
    </div>
    <div className="Menu-carta">
      <h4>Nuestras cartas</h4>
      <a href="">
        <button>Ver Menú Completo</button>
      </a>
    </div>
  </section>

  
</div>

    )
}

export default MenuCom