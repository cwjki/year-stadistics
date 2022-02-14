import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Nothing from './components/Nothing'

import HumorPage from './components/pages/HumorPage'
import AllSurveysPage from './components/pages/AllSurveysPage'
import CreativityPage from './components/pages/CreativityPage'
import FreeTimePage from './components/pages/FreeTimePage'



function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path='/' element={ <AllSurveysPage />} />
        <Route path='/survey/Creativity' element={<CreativityPage />} />
        <Route path='/survey/Humor' element={<HumorPage />} />
        <Route path='/survey/FreeTime' element={<FreeTimePage />} />
        <Route path='/survey/Creativity' element={<CreativityPage />} />

        <Route path="*" element={ <Nothing /> } />

      </Routes>
    

    </div>
  );
}

export default App;
