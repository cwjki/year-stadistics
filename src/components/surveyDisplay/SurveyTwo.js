import React, {useState, useCallback} from 'react'
import SurveyTypeTwo from '../surveyTypes/SurveyTypeTwo'

const SurveyTwo = () => {
    const [showPage, setShowPage] = useState(true)

    const onCompletePage = useCallback((data) => {
        console.log(data)
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return(
            <main>
                <h1>Gracias por completar el formulario Dos</h1>
            </main>
        )
    }

  return (
      <div>
          {
            showPage? <SurveyTypeTwo showCompletedPage={data => onCompletePage(data)} />
                    : setFinalPage()
          }
      </div>
  )
}

export default SurveyTwo