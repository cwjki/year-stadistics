import React from 'react'

import CreativityCard from '../cards/CreativityCard'
import FreeTimeCard from '../cards/FreeTimeCard'
import HumorCard from '../cards/HumorCard'
import SubjectsCard from '../cards/SubjectsCard'

const AllSurveysPage = () => {

  return (
      <div>
        <div className="container">
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

      </div>
  )
}

export default AllSurveysPage