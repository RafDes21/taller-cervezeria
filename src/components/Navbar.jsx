import React, { useState } from 'react'
import "./styles/navBar.css"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {

  const [alto, setAlto] = useState(false);
 
  function activarMenu() {//Esta función activa y desactiva el nav responsive
    setAlto(!alto)
    document.querySelector('.deploy-nav').classList.toggle('show')
    }
  
  return (
    <div style={{backgroundColor:"black"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-color">
    <div className="container-fluid" >
      <a className="navbar-brand text-white" href="#"><span className='title'>EL TALLER</span><span className='fs-6'>CERVEZERIA</span></a>
      <button className="navbar-toggler" onClick={activarMenu} >
        <span className='text-white fs-1'><GiHamburgerMenu/></span>
      </button>
      
      <div className='secondary-navBar container'>
      <div className='row'>
      <div className='col-md-3'>
        <ul className="navbar-nav d-flex justify-content-evenly">
        <li className="nav-item">
            <a className="nav-link text-white" href="#">EL LUGAR</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href="#">EL MENU</a>
          </li>
        </ul>
      </div>
      <div className='col-md-4 position-relative'>
        <img className='logo' src='./logos/logo.png'></img>
      </div>
      <div className='col-md-5'>
      <ul className="navbar-nav d-flex justify-content-evenly">
      <li className="nav-item">
            <a className="nav-link text-white"  href="#">EVENTOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white"  href="#">RESERVAS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">NOSOTROS</a>
          </li>
        </ul>
      </div>
      </div>
       </div>
    </div>
  </nav>
  <div className='nuevo' style={{marginBottom:alto? "320px" : "0px", transition:"0.5s", backgroundColor:"blue"}}></div>
 <div className="deploy-nav" >
        <ul className="navbar-nav" >
          <li className="nav-item">
            <a className="nav-link text-white title" onClick={activarMenu}  href="#"><span>EL LUGAR</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white title" onClick={activarMenu} href="#"><span>EL MENU</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white title" onClick={activarMenu}  href="#"><span>EVENTOS</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white title" onClick={activarMenu}  href="#"><span>RESERVAS</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white title" onClick={activarMenu}  href="#"><span>NOSOTROS</span></a>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default Navbar
       

       