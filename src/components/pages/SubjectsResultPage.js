import React, { useState, useEffect } from 'react'
import SubjectTable from '../tables/SubjectsTable'
import axios from 'axios'


const SubjectsResultPage = () => {
    const [dataTable, setDataTable] = useState([])
    // console.log(dataTable)

    useEffect(() => {
        axios("http://localhost:8000/subjects")
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, [])

    const column = [
        { heading: 'Asignatura', value: 'name'},
        { heading: 'Me gusta', value: 'likes'},
        { heading: 'No me gusta', value: 'dislikes'},
        { heading: 'Meh', value: 'dontcare'},

    ]

    return (
        <div>

            <div>
                <nav className="navbar navbar-light p-3 mb-3">
                    <form className="container-fluid justify-content-start">
                    <a href='/results' className="btn btn-md btn-outline-success" type="button">Resultados</a>
                    </form>
                </nav>
            </div>

            <SubjectTable data={dataTable} column={column} />
        </div>
  )
}

export default SubjectsResultPage