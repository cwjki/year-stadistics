import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import QuestionTwo from '../surveys/QuestionTwo'


const SurveyTypeTwo = (prop) => {
  return (
    <Survey.Survey
        json={QuestionTwo}
        showCompletedPage={false}
        onComplete ={data => prop.showCompletedPage(data.valueHash)}
    />
  )
}

export default SurveyTypeTwo;


