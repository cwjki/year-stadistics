import React, { useState, useCallback } from 'react'
import CreativitySurvey from '../surveys/CreativitySurvey';

const CreativityPage = () => {
    const [showPage, setShowPage] = useState(true)

    const onCompletePage = useCallback((data) =>{
        console.log(data)
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return(
            
            <main>
                <h1>Gracias por completar la encuesta de Creatividad.</h1>
            </main>
        )
    }


    return (
        <div>
            {
                showPage? <CreativitySurvey showCompletedPage={data => onCompletePage(data)} />
                        : setFinalPage()
            } 
        </div>
    )
}

export default CreativityPage