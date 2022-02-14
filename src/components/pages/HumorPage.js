import React, { useState, useCallback } from 'react'
import HumorSurvey from '../surveys/HumorSurvey';

const HumorPage = () => {
    const [showPage, setShowPage] = useState(true)

    const onCompletePage = useCallback((data) =>{
        console.log(data)
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return(
            <main>
                <h1>Gracias por completar la encuesta del Humor.</h1>
            </main>
        )
    }


    return (
        <div>
            {
                showPage? <HumorSurvey showCompletedPage={data => onCompletePage(data)} />
                        : setFinalPage()
            } 
        </div>
    )
}

export default HumorPage