import React, { useEffect, useState } from 'react'

const ExampleTable = ({ data, column }) => {
    console.log(data)
    console.log(column)

    return (
        <div className='bg-info'>
            <table className='table'>
                <thead>
                    <tr>
                        {column.map((item, index) => <TableHeadItem item={item}/>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index) => <TableRow item={item} column={column}/>)
                    }
                </tbody>
            </table>

        </div>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

const TableRow = ({ item, column }) => (
    <tr>
        {column.map((columnItem, index) => {
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
)
    


export default ExampleTable