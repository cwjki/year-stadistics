import React from 'react'
import CreativityHumorResultCard from '../cards/CreativityHumorResultCard'
import FreeTimeResultCard from '../cards/FreeTimeResultCard'
import SubjectsResultCard from '../cards/SubjectsResultCard'



const ResultPage = () => {

  return (
    <div>

      <div>
        <nav className="navbar navbar-light p-3 mb-3">
          <form className="container-fluid justify-content-start">
            <a href='/' className="btn btn-md btn-outline-success" type="button">Página Principal</a>
          </form>
        </nav>
      </div>
      

      <div className="d-flex flex-column">
          <div className="row">
              <div className="col-md-4">
                  <CreativityHumorResultCard />
              </div>
              <div className="col-md-4">
                  <FreeTimeResultCard />
              </div>
              <div className="col-md-4">
                  <SubjectsResultCard />
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

export default ResultPage