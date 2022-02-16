import React from 'react'
import subjectsResultPic from '../../assets/subjectsResult.jpg';


const SubjectsResultCard = () => {
  return (
    <div className="card text-center bg-dark h-100">
        <img src={subjectsResultPic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Resultados del test de Asignaturas</h4>
            <a href="/results/subjects" className="btn btn-outline-secondary rounded-0">Ver</a>

        </div>
    </div>
  )
}

export default SubjectsResultCard