import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import HumorQuestions from '../surveys/HumorQuestions';

const HumorSurvey = (prop) => {
    console.log(prop)
    return (
        <Survey.Survey
            json={HumorQuestions}
            showCompletedPage={false}
            onComplete={data => prop.showCompletedPage(data.valuesHash)}
        />
    )
}

export default HumorSurvey