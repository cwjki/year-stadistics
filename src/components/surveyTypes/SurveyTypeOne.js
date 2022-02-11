import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import QuestionOne from '../surveys/QuestionOne'


const SurveyTypeOne = (prop) => {
  return (
    <Survey.Survey
        showCompletedPage={false}
        json={QuestionOne}
        
        onComplete ={data => prop.showCompletedPage(data.valuesHash)}
    />
  )
}

export default SurveyTypeOne;


