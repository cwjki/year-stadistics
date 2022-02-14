import React, { useState, useCallback } from 'react'
import FreeTimeSurvey from '../surveyTypes/FreeTimeSurvey';

const FreeTimePage = () => {
    const [showPage, setShowPage] = useState(true)

    const onCompletePage = useCallback((data) =>{
        console.log(data)
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return(
            <main>
                <h1>Gracias por completar la encuesta del Tiempo Libre.</h1>
            </main>
        )
    }


    return (
        <div>
            {
                showPage? <FreeTimeSurvey showCompletedPage={data => onCompletePage(data)} />
                        : setFinalPage()
            } 
        </div>
    )
}

export default FreeTimePage