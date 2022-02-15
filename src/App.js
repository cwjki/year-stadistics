import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Nothing from './components/Nothing'
import HumorPage from './components/pages/HumorPage'
import AllSurveysPage from './components/pages/AllSurveysPage'
import CreativityPage from './components/pages/CreativityPage'
import FreeTimePage from './components/pages/FreeTimePage'
import SubjectsPage from './components/pages/SubjectsPage'

function App() {
  return (
    <div className="App bg-dark">
      <div>
        <Routes>
          <Route path='/' element={ <AllSurveysPage />} />
          <Route path='/survey/Creativity' element={<CreativityPage />} />
          <Route path='/survey/Humor' element={<HumorPage />} />
          <Route path='/survey/FreeTime' element={<FreeTimePage />} />
          <Route path='/survey/Subjects' element={<SubjectsPage />} />
          <Route path="*" element={ <Nothing /> } />
        </Routes>
      </div>
    
    </div>
    
  );
}

export default App;
