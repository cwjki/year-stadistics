import React, { useEffect, useState } from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import CreativityQuestions from '../questions/CreativityQuestions';


const CreativitySurvey = (prop) => {

    // const [loading, setLoading] = useState(true)

    // useEffect (() => {
    //     Survey.StylesManager.applyTheme("bootstrap")
    //     setLoading(false)
    // }, [])

    // if (loading) return <Spinner />

    return (
        <Survey.Survey
            json={CreativityQuestions}
            showCompletedPage={false}
            onComplete={data => prop.showCompletedPage(data.valuesHash)}
        />
    )
}

export default CreativitySurvey