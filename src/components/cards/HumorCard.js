import React from 'react'
import humorPic from '../../assets/humor.jpg';


const HumorCard = () => {
  return (
    <div className="card text-center bg-dark h-100">
        <img src={humorPic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Test de Humor</h4>
            <p className="card-text">
              Responda este cuestionario para averiguar cómo califica su "sentido del humor".
              Las personas experimentan y expresan el humor de muchas maneras diferentes.
              Responda con la mayor honestidad y objetividad posible.
            </p>
            <a href="/survey/Humor" className="btn btn-outline-secondary rounded-0">Empezar</a>
        </div>
    </div>
  )
}

export default HumorCard