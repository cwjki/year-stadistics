import React, { useState, useEffect } from 'react'
import ExampleTable from '../tables/ExampleTable'
import SubjectTable from '../tables/SubjectsTable'
import axios from 'axios'


const ExamplePage = () => {
    const [dataTable, setDataTable] = useState([])
    // console.log(dataTable)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
    }, [])

    const column = [
        { heading: 'Name', value: 'name'},
        { heading: 'Email', value: 'email'},
        { heading: 'Phone', value: 'phone'},
    ]

    return (
        <div>
            <ExampleTable data={dataTable} column={column} />
        </div>
  )
}

export default ExamplePage