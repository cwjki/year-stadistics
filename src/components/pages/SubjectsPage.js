import React, { useState, useCallback } from 'react'
import SubjectsSurvey from '../surveys/SubjectsSurvey';

const SubjectsPage = () => {
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
                showPage? <SubjectsSurvey showCompletedPage={data => onCompletePage(data)} />
                        : setFinalPage()
            } 
        </div>
    )
}

export default SubjectsPage