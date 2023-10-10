import { useState } from 'react'

import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="col-lg-6 col-12 p-0 m-0">
        <div className="image-card">
          <img src={props.imagen} className="img-fluid"/>
          <div className="row p-5 m-0" style={{ color: '#4e544b' }}>
            <hr style={{ border: '2px solid #000' }}/>
            <p>{props.ubicacion}</p>
            <strong>{props.propietario}</strong>
            <p>{props.area} m<sup>2</sup></p>
            <p>{props.nombre}, {props.lugar}, {props.anio}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
