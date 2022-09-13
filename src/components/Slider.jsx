import React from 'react'
import "./styles/slider.css"

const Slider = () => {
  return (
    <div className='carrusel'>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className='texto'>
        <p>
            Amigos,<br/> Comidas y<br/> Carros
        </p>
    </div>
    
    <img className='logo2' src='./logos/logo-carousel.png' alt='logo2'></img>
    
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./imgSlider/img6.png" className="d-block " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="./imgSlider/img2.png" className="d-block " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="./imgSlider/img3.png" className="d-block " alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Slider