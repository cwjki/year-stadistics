import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import QuestionOne from '../surveys/QuestionOne'


const SurveyTypeOne = (prop) => {
  return (
    <Survey.Survey
        json={QuestionOne}
        showCompletedPage={false}
        
        onComplete ={data => prop.showCompletedPage(data.valuesHash)}
    />
  )
}

export default SurveyTypeOne;


