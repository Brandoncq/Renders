import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Exterior from './rf.jsx'
import Interior from './ri.jsx'
import Portafolio from './rp.jsx'
import './index.css'
import './gallery.css'
import Portada from './portada.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<div className="row m-0 p-0">
      <App ubicacion="Izquierda" imagen="https://i.imgur.com/5F2UEjI.jpg" propietario="Mancera Ernst & Young/Oficinas Corporativas" area="16000" nombre="Antara" lugar="CDMX" anio="2006" />
      <App ubicacion="Derecha" imagen="https://i.imgur.com/tnXwXGr.jpg" propietario="Tip & Toe/Clinica de Belleza" area="100" nombre="Metec" lugar="Mex" anio="2014" />
    </div>*/}
    <Portada />
    <div className="row m-0 p-0" style={{ backgroundColor: '#ffffff'}}> <hr style={{ color: '#ffffff'}}></hr><hr style={{ color: '#ffffff'}}></hr></div>
    <Exterior />
    <div className="row m-0 p-0" style={{ backgroundColor: '#ffffff'}}> <hr style={{ color: '#ffffff'}}></hr><hr style={{ color: '#ffffff'}}></hr></div>
    <Interior />
    <div className="row m-0 p-0" style={{ backgroundColor: '#ffffff'}}> <hr style={{ color: '#ffffff'}}></hr><hr style={{ color: '#ffffff'}}></hr></div>
    <Portafolio />

  </React.StrictMode>,
)

window.addEventListener('click', e => {
  console.log(e.target);
});
