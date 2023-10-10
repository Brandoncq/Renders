import { useState } from 'react'
import React, { useEffect } from 'react';
import './gallery.css'
import F_1 from'./img/RF/F-1.jpg';
import F_2 from'./img/RF/F-2.jpg';
import F_3 from'./img/RF/F-3.jpg';
import F_4 from'./img/RF/F-4.jpg';

function Exterior(props) {
  const [elementosVisibles, setElementosVisibles] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !elementosVisibles.includes(entry.target)) {
          entry.target.classList.add('mostrar');
          setElementosVisibles([...elementosVisibles, entry.target]);
        }
      });
    });

    var elementosOcultos = document.querySelectorAll('.ocultar');
    elementosOcultos.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [elementosVisibles]);
  return (
    <> 
      <div className="row m-0 p-0" style={{ backgroundColor: '#18191b'}}>
        <div className="row m-0 p-1">
          <div className="col-lg-6 col-12 p-2 m-0">
            <div className="row m-0 p-1">
              <div className="image-card p-3 my-2 text-center project" style={{ border: '0.5px solid #6a6969' , color: '#ffffff'}}>
                <h1>RF</h1>
              </div>
            </div>
            <div className="row m-0 p-1">
              <div className="col-6 p-2 m-0">
                <div className="image-card">
                    <img src={F_1} className="img-fluid ocultar"/>
                </div>
              </div>
              <div className="col-6 p-2 m-0">
                <div className="image-card">
                    <img src={F_2} className="img-fluid ocultar"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2 m-0">
            <div className="row m-0 p-1">
              <div className="image-card p-3 my-3 text-center bg-secondary">
              </div>
            </div>
            <div className="row m-0 p-1">
              <div className="col-6 p-2 m-0">
                <div className="image-card">
                    <img src={F_3} className="img-fluid ocultar"/>
                </div>
              </div>
              <div className="col-6 p-2 m-0">
                <div className="image-card">
                    <img src={F_4} className="img-fluid ocultar"/>
                </div>
              </div>
            </div>
            <div className="row m-0 p-1">
              <div className="image-card p-3 my-3 text-center bg-secondary">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exterior

