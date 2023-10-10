import { useState } from 'react'
import React, { useEffect } from 'react';
import './gallery.css'

import p_1_1 from'./portada/portada-1.jpg';

import p_1_4 from'./portada/portada-4.jpg';

function Portada(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row m-0 p-0" style={{ backgroundColor: '#18191b' , color: '#ffffff' }}>
        <div className="row m-0 px-0 py-3 text-center">
          <h1>RENDERIZACIÓN</h1>
        </div>
        <div className="row m-0 px-1 py-2">
          <div className="col-4 p-2 m-0">
            <div className="image-card px-0 py-1 mx-0 my-2 text-center tipos">
              <div className="ocultar">
                <h1>RF</h1>
                <i className='bx bxs-objects-vertical-bottom icono'></i>
              </div>
            </div>
          </div>
          <div className="col-4 p-2 m-0">
            <div className="image-card px-0 py-1 mx-0 my-2 text-center tipos">
              <div className="ocultar">
                <h1>RI</h1>
                <i className='bx bxs-circle-three-quarter icono'></i>
              </div>
            </div>
          </div>
          <div className="col-4 p-2 m-0">
            <div className="image-card px-0 py-1 mx-0 my-2 text-center tipos">
              <div className="ocultar">
                <h1>RP</h1>
                <i className='bx bxs-circle-half icono'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 px-1 py-2">
          <div className="col-lg-6 col-12 p-2 m-0">
            <div className="image-card py-1 mx-0 my-2">
              <img src={p_1_1} className="img-fluid ocultar"/>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2 m-0">
            <div className="image-card py-1 mx-0 my-2">
              <img src={p_1_4} className="img-fluid ocultar"/>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Portada

