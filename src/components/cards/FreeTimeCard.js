import React from 'react'
import freeTimePic from '../../assets/freetime.jpg';


const FreeTimeCard = () => {
  return (
    <div className="card text-center bg-dark h-100">
        <img src={freeTimePic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Test de Tiempo Libre</h4>
            <p className="card-text">
              Tener tiempo libre es indispensable para la calidad de vida de las personas. Contribuye a renovar la fuerza 
              y la energía mental y física. Realiza 
              este test teniendo en cuenta las elecciones que sueles hacer para disfrutar de tus tiempos de ocio.

            </p>
            <a href="/survey/FreeTime" className="btn btn-outline-secondary  rounded-0">Empezar</a>
        </div>
    </div>
  )
}

export default FreeTimeCard