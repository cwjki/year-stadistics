import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import CreativityQuestions from '../surveys/CreativityQuestions';

const CreativitySurvey = (prop) => {
    console.log(prop)
    return (
        <Survey.Survey
            json={CreativityQuestions}
            showCompletedPage={false}
            onComplete={data => prop.showCompletedPage(data.valuesHash)}
        />
    )
}

export default CreativitySurvey