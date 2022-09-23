import React from 'react'
import "./LugarMas.css"

const LugarCom = () => {
  return (
    <div className="Lugar-wrapper container-fluid">
    <div className="Header">
      <img
        src="./img/LugarMas/imgHeader.png"
        alt="Lugar-header-img"
        className="Lugar-header-img img-fluid"
      />
      <div className="Header-text">
        <h2 className="Lugar-h2">EL LUGAR</h2>
        <h3 className="Lugar-h3">Unos boxes muy chingones</h3>
      </div>
    </div>

    <section className="content">
      <div className="wrapper">
        <p className="Lugar-header-text">
          Gracias a nuestra ambientación podras trasnsportante y sentir la
          calidez de aquellos <span>talleres mecánicos</span> que son nuestra
          inspiración.
        </p>
        <p className="Lugar-header-text">
          Hacemos tributo a los valores de amistad y compañerismo que alli se
          vivian, a la tradición, la buena comida y la pasión por los autos.
        </p>
        <p className="Lugar-header-text">
          En cada rincón podrás crear momentos e historias innolvidables, como
          se hacía antes.{" "}
        </p>

        <div className="Lugar-container">
          <h4 className="Lugar-h4">DENTRO DE BOXES</h4>
          <p>
            Disfruta y relajate dentro de nuestro salon principal. Podras
            disfrutar de nuestra increible ambientación y la climatización más
            confortable.
          </p>
          <div className="Lugar-img-wrapper ">
            <img
              className="Lugar-img col-12 mb-3"
              alt="imagen"
              src="./img/LugarMas/dentro1.png"
            />
            <div className="row">
              <div className="col-4 col-md-4 col-lg-4">
                <img
                  className="Lugar-img-dsk "
                  src="./img/LugarMas/dentro2.png"
                  alt="Foto de interior"
                ></img>
              </div>
              <div className="col-4 col-md-4 col-lg-4">
                <img
                  className="Lugar-img-dsk "
                  src="./img/LugarMas/dentro3.png"
                  alt="Foto de interior"
                ></img>
              </div>
              <div className="col-4 col-md-4 col-lg-4">
                <img
                  className="Lugar-img-dsk "
                  src="./img/LugarMas/dentro4.png"
                  alt="Foto de interior"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="Lugar-container">
          <h4 className="Lugar-h4 txt-right">FUERA DE BOXES</h4>
          <p className="txt-right">
            Tenemos una amplia terraza, espacio muy codiciado entre nuestros
            clientes. Aprovecha y disfruta de este espacio único en la ciudad.
          </p>
          <div className="Lugar-img-wrapper ">
            <div className="row">
              <img
                alt="imagen"
                className="Lugar-img col-12 mb-3"
                src="./img/LugarMas/fuera1.png"
              />
            </div>
            <div className="row">
              <img
                className="Lugar-img-dsk col-4"
                src="./img/LugarMas/fuera2.png"
                alt="Foto de exterior"
              ></img>
              <img
                className="Lugar-img-dsk col-4"
                src="./img/LugarMas/fuera3.png"
                alt="Foto de exterior"
              ></img>
              <img
                className="Lugar-img-dsk col-4"
                src="./img/LugarMas/fuera4.png"
                alt="Foto de exterior"
              ></img>
            </div>
          </div>
        </div>
        <div className="Lugar-container">
          <h4 className="Lugar-h4 txt-center">DONDE ENCONTRARNOS</h4>
          <img
            alt="imagen"
            className="Lugar-img p-3 mb-3 mx-auto"
            src="./img/LugarMas/donde.png"
          />
        </div>
      </div>
    </section>
  </div>
  )
}

export default LugarCom