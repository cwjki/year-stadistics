import React from 'react'
import freeTimePic from '../../assets/freetime.jpg';


const FreeTimeCard = () => {
  return (
    <div className="card text-center bg-dark">
        <img src={freeTimePic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Test de Tiempo Libre</h4>
            <p className="card-text"></p>
            <a href="/survey/FreeTime" className="btn btn-outline-secondary rounded-0">Empezar</a>
        </div>
    </div>
  )
}

export default FreeTimeCard