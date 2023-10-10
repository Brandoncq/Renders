import { useState } from 'react'
import React, { useEffect } from 'react';
import './gallery.css'
import P_I from'./img/RP/P-I.jpg';
import P_1 from'./img/RP/P-1.jpg';
import P_1_1 from'./img/RP/P-1-1.jpg';
import P_1_2 from'./img/RP/P-1-2.jpg';
import P_2 from'./img/RP/P-2.jpg';
import P_2_1 from'./img/RP/P-2-1.jpg';
import P_2_2 from'./img/RP/P-2-2.jpg';
import P_3 from'./img/RP/P-3.jpg';
import P_3_1 from'./img/RP/P-3-1.jpg';
import P_3_2 from'./img/RP/P-3-2.jpg';
function Portafolio(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // Función para manejar el evento click en todo el documento
    function handleClick(event) {
      if (event.target.classList.contains('img-fluid')) {
        aparecerImagen(event.target.getAttribute('src'));
      }else{
        const imageneslight= document.querySelector('.agregar-imagen')
        const contenedorlight= document.querySelector('.imagen-light')
        console.log("1")
        if(event.target !== imageneslight && (event.target.classList.contains('show') || event.target.classList.contains('close'))){
          console.log("2")
          contenedorlight.classList.toggle('show')
          imageneslight.classList.toggle('showimage')
        }
      }
    }

    // Agregar el evento click al documento
    document.addEventListener('click', handleClick);

    // Retirar el evento al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const aparecerImagen = (imagen) => {
    const imageneslight = document.querySelector('.agregar-imagen');
    const contenedorlight = document.querySelector('.imagen-light');

    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show');
    imageneslight.classList.toggle('showimage');
  };
  

  return (
    <>
      <div className="row m-0 p-0" style={{ backgroundColor: '#18191b'}}>
        <div className="row m-0 p-1">
          <div className="col-6 p-2 m-0">
            <div className="image-card p-3 my-2 text-center project" style={{ border: '0.5px solid #6a6969' , color: '#ffffff'}}>
              <h1>PR</h1>
            </div>
            <div className="image-card p-3 my-3 text-center bg-secondary">
              
            </div>
            <div className="image-card">
              <img src={P_I} className="img-fluid"/>
            </div>
            <div className="image-card p-3 my-3 text-center bg-secondary">
              
            </div>
          </div>
          <div className="col-6 p-1 m-0">
            <div className="row m-0 py-1">
              <div className="col-lg-5 col-6 m-0">
                <div className="row m-0 px-0 py-2">
                  <div className="image-card p-0 m-0">
                    <img src={P_1} className="img-fluid ocultar"/>
                  </div>
                </div>
                <div className="row m-0 px-0 py-2">
                  <div className="image-card p-0 m-0">
                    <img src={P_1_1} className="img-fluid ocultar"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-6 p-2 m-0">
                <div className="image-card imagen-container">
                  <img src={P_1_2} className="imagen img-fluid ocultar"/>
                </div>
              </div>
            </div>

            <div className="row m-0 py-1">
              <div className="col-lg-7 col-6 p-2 m-0">
                <div className="image-card imagen-container">
                  <img src={P_2_2} className="imagen img-fluid ocultar"/>
                </div>
              </div>
              <div className="col-lg-5 col-6 m-0">
                <div className="row m-0 px-0 py-2">
                  <div className="image-card p-0 m-0">
                    <img src={P_2} className="img-fluid ocultar"/>
                  </div>
                </div>
                <div className="row m-0 px-0 py-2">
                  <div className="image-card p-0 m-0">
                    <img src={P_2_1} className="img-fluid ocultar"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="row m-0 py-1">
              <div className="col-lg-5 col-6 m-0">
                <div className="row m-0 px-0 py-2">
                  <div className="image-card p-0 m-0">
                    <img src={P_3} className="img-fluid ocultar"/>
                  </div>
                </div>
                <div className="row m-0 px-0 py-2">
                  <div className="image-card p-0 m-0">
                    <img src={P_3_1} className="img-fluid ocultar"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-6 p-2 m-0">
                <div className="image-card imagen-container">
                  <img src={P_3_2} className="imagen img-fluid ocultar"/>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="imagen-light">
            <i className="close" style={{ color: '#ffffff' }}>&#x2716;</i>
            <img src={P_3} alt="" className="agregar-imagen"/>
        </div>
        
      </div>
    </>
  )
}

export default Portafolio

