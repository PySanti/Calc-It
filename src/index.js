import React                from 'react';
import ReactDOM             from 'react-dom/client';
import {Calc}                 from "./Calc/Calc"
import {buttonEventSetter}    from './ButtonsEventSetter';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Calc/>
  </React.StrictMode>
);

// recordar que el codigo se estaria ejecutando antes del render, si aplicamos una web api, estariamos encolando el codigo en la cola de tareas, para que se ejecute despues del render
setTimeout(() => {
  buttonEventSetter()
}, 0)