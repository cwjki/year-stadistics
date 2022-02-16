import React from 'react'
import CreativityChart from '../charts/CreativityChart'
import HumorChart from '../charts/HumorChart'

const ResultPage = () => {
  return (
    <div>

        <div>
          <nav className="navbar navbar-light p-3 mb-3">
            <form className="container-fluid justify-content-start">
              <a href='/results' className="btn btn-md btn-outline-success" type="button">Resultados</a>
            </form>
          </nav>
        </div>

        <div className="p-3">
            <HumorChart />
        </div>
        <div className="p-3">
            <CreativityChart />
        </div>
    </div>
  )
}

export default ResultPage