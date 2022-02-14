import React from 'react'
import { Link } from 'react-router-dom';


const AllSurveysPage = () => {

  return (
    <div>
      <div><Link to={`/survey/Creativity`}>Test de Creatividad</Link></div>
      <div><Link to={`/survey/Humor`}>Test de Humor</Link></div>
      <div><Link to={`/survey/Subject`}>Test de Asignaturas</Link></div>
      <div><Link to={`/survey/FreeTime`}>Test de Tiempo Libre</Link></div>
    </div>
  )
}

export default AllSurveysPage