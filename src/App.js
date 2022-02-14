import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Nothing from './components/Nothing'
import AllSurveysPage from './components/pages/AllSurveysPage'


import SurveyOne from './components/surveyDisplay/SurveyOne'
import SurveyTwo from './components/surveyDisplay/SurveyTwo'

function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path='/' element={ <AllSurveysPage />} />
        {/* <Route path='/survey/:id' element={} /> */}
        <Route path="*" element={ <Nothing /> } />

      </Routes>
    

    </div>
  );
}

export default App;
