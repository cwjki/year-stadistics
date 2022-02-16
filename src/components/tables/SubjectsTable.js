import React from 'react'

const SubjectsTable = () => {
  return (
    <div>
        <table className="table bg-light">
            <thead>
                <tr>
                    <th scope='col'>Asignatura</th>
                    <th scope='col'>Me gusta</th>
                    <th scope='col'>Meh</th>
                    <th scope='col'>No me gusta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'></th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>MBlahark</td>
                </tr>
                <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>MBlahark</td>
                </tr>
                <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>MBlahark</td>
                </tr>
                
            </tbody>
        </table>  

    </div>
  )
}

export default SubjectsTable