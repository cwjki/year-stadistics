import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import QuestionOne from '../surveys/QuestionOne'


const SurveyTypeOne = () => {
  return (
    <Survey.Survey
        json={QuestionOne} 
    />
  )
}

export default SurveyTypeOne;


