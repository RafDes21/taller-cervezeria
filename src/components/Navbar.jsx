import React from 'react'
import "./styles/navBar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-color">
    <div className="container-fluid">
      <a className="navbar-brand" href="www.google.com">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="www.google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">Pricing</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar