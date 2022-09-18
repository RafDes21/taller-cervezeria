import React, { useState } from 'react'
import "./navBar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [mobile, setMobile] = useState(false);
 
  // function activarMenu() {//Esta función activa y desactiva el nav responsive
  //   setAlto(!alto)
  //   document.querySelector('.deploy-nav').classList.toggle('show')
  //   }
  
  return (
    <div id='navBar' className='container-fluid ' >
    <div  className='container'>
       <div className='row'>
           
           <div className='col-md-4'>
           <a className="nav-link text-white" href="#"><span className='taller'>EL TALLER</span><span className='cervezeria'> CERVEZERIA</span></a>
           </div>

          <div className='col-md-8'>
               <nav >
                  <ul className={mobile?'show' : 'deploy-nav'}
                   onClick={()=>setMobile(false)}> 
                    <li >
                       <NavLink className='nav-link' to="">HOME</NavLink>
                    </li>
                    <li >
                       <NavLink className='nav-link' to="lugar">EL LUGAR</NavLink>
                    </li>
                    <li>
                      <NavLink className='nav-link' to='menu'>EL MENÚ</NavLink>
                    </li>
                    <li>
                      <NavLink className='nav-link' to='eventos'>EVENTOS</NavLink>
                    </li>
                    <li>
                      <NavLink className='nav-link' to='reservas'>RESERVAS</NavLink>
                    </li>
                    <li>
                      <NavLink className='nav-link' to='nosotros'>NOSOTROS</NavLink>
                    </li>
                  </ul>
                </nav>
          </div>
          
          </div>
              <div onClick={()=>setMobile(!mobile)} className='menu'>
                  <GiHamburgerMenu/>
          </div> 
          </div>                 
  </div>
 
 )}

export default Navbar

       

       