import React from 'react'
import subjectsPic from '../../assets/subjects.jpg';


const SubjectsCard = () => {
  return (
    <div className="card text-center bg-dark">
        <img src={subjectsPic} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">Test de Asignaturas</h4>
            <p className="card-text"></p>
            <a href="/survey/Subjects" className="btn btn-outline-secondary rounded-0">Empezar</a>
        </div>
    </div>
  )
}

export default SubjectsCard