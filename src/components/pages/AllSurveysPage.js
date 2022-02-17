import React from 'react'

import CreativityCard from '../cards/CreativityCard'
import FreeTimeCard from '../cards/FreeTimeCard'
import HumorCard from '../cards/HumorCard'
import SubjectsCard from '../cards/SubjectsCard'

const AllSurveysPage = () => {

  return (
    <div className='container'>

      <div>
        <nav className="navbar navbar-light p-3 mb-3">
          <form className="container-fluid justify-content-end">
            <a href='/results' className="btn btn-md btn-outline-success" type="button">Resultados</a>
          </form>
        </nav>
      </div>
      

      <div className="d-flex flex-column">
          <div className="row">
              <div className="col-md-3">
                  <CreativityCard />
              </div>
              <div className="col-md-3">
                  <HumorCard />
              </div>
              <div className="col-md-3">
                  <FreeTimeCard />
              </div>
              <div className="col-md-3">
                  <SubjectsCard />
              </div>
          </div>
      </div>

       <nav className="navbar navbar-light bg-dark mt-4 p-4 d-flex justify-content-center" >
         <span className="border border-secondary text-success text-center p-1">
            <p className="mt-2"> Las tests se realizarán de forma anónima, y por tanto, la información que de ellos
                se extraiga NO será usada en su contra :) 
            </p>
        </span>
        
      </nav>

      

    </div>

     
  )
}

export default AllSurveysPage