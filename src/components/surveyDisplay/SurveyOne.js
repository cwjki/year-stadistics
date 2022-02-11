import React, {useState, useCallback} from 'react'
import SurveyTypeOne from '../surveyTypes/SurveyTypeOne'

const SurveyOne = () => {
    const [showPage, setShowPage] = useState(true)

    const onCompletePage = useCallback((data) => {
        console.log(data)
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return(
            <main>
                <h1>Gracias por completar el formulario Uno</h1>
            </main>
        )
    }

  return (
      <div>
          {
            showPage? <SurveyTypeOne showCompletedPage={data => onCompletePage(data)} />
                    : setFinalPage()
          }
      </div>
  )
}

export default SurveyOne