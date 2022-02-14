import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({ survey }) => {
  return (
    <Link to={`/survey/${survey.id}`}>
         <div>{survey.name}</div>
    </Link>
   
  )
}

export default ListItem