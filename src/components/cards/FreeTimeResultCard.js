import React from 'react'
import freeTimePic from '../../assets/freetimeResult.jpg';


const FreeTimeResultCard = () => {
  return (
    <div className="card text-center bg-dark h-100">
        <img src={freeTimePic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Resultados de los test de Tiempo Libre</h4>
            <a href="/results/free-time" className="btn btn-outline-secondary rounded-0">Ver</a>

        </div>
    </div>
  )
}

export default FreeTimeResultCard