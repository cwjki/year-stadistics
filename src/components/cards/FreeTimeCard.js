import React from 'react'
import freeTimePic from '../../assets/freetime.jpg';


const FreeTimeCard = () => {
  return (
    <div className="card text-center bg-dark h-100">
        <img src={freeTimePic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Test de Tiempo Libre</h4>
            <p className="card-text">
              Tener tiempo libre es indispensable para la calidad de vida de laspersonas. Contribuye a renovar la
              fuerza y la energía, tanto mental como física. Las elecciones que realices para ocupar estos ratos 
              deben reportarte felicidad, satisfacción y relajación. ¿Cuáles suelen ser tus elecciones?

            </p>
            <a href="/survey/FreeTime" className="btn btn-outline-secondary  rounded-0">Empezar</a>
        </div>
    </div>
  )
}

export default FreeTimeCard