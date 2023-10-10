import { useState } from 'react'
import React, { useEffect } from 'react';
import './gallery.css'
import I_1 from'./img/RI/I-1.jpg';
import I_2 from'./img/RI/I-2.jpg';
import I_3 from'./img/RI/I-3.jpg';
import I_4 from'./img/RI/I-4.jpg';
import I_5 from'./img/RI/I-5.jpg';
import I_6 from'./img/RI/I-6.jpg';
import I_7 from'./img/RI/I-7.jpg';

function Interior(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row m-0 p-0" style={{ backgroundColor: '#18191b'}}>
        <div className="row m-0 px-1 py-2">
          <div className="col-6 p-2 m-0">
            <div className="image-card p-3 my-2 text-center project" style={{ border: '0.5px solid #6a6969' , color: '#ffffff'}}>
              <h1>RI</h1>
            </div>
            <div className="image-card p-3 my-3 text-center bg-secondary">
              
            </div>
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_1} className="img-fluid ocultar"/>
            </div>
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_3} className="img-fluid ocultar"/>
            </div>
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_5} className="img-fluid ocultar"/>
            </div>
            <div className="image-card p-3 my-3 text-center bg-secondary">
              
            </div>
          </div>
          <div className="col-6 p-2 m-0">
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_2} className="img-fluid ocultar"/>
            </div>
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_4} className="img-fluid ocultar"/>
            </div>
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_6} className="img-fluid ocultar"/>
            </div>
            <div className="image-card py-1 mx-0 my-2">
              <img src={I_7} className="img-fluid ocultar"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Interior

