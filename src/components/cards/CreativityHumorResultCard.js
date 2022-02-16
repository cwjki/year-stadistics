import React from 'react'
import creativityPic from '../../assets/creativity.jpg';


const CreativityHumorResultCard = () => {
  return (
    <div className="card text-center bg-dark h-100">
        <img src={creativityPic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Resultados de los test de Creatividad y Humor</h4>
            <a href="/results/creativity-humor" className="btn btn-outline-secondary rounded-0">Ver</a>

        </div>
    </div>
  )
}

export default CreativityHumorResultCard