import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import FreeTimeQuestions from '../surveys/FreeTimeQuestions';

const FreeTimeSurvey = (prop) => {
    console.log(prop)
    return (
        <Survey.Survey
            json={FreeTimeQuestions}
            showCompletedPage={false}
            onComplete={data => prop.showCompletedPage(data.valuesHash)}
        />
    )
}

export default FreeTimeSurvey