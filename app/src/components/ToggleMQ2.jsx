
import { useState } from "react"
import MainQuestions from "./MainQuestions"


export const ToggleMQ2 = () => {
  const [isVisible, setIsVisible] = useState(false)

  function ArrowDown() {
    setIsVisible(!isVisible)
    console.log("here")
    console.log("isVisible", isVisible)

  }

  function ArrowDown2() {
    setIsVisible(!isVisible)
    console.log("here")
    console.log("isVisible", isVisible)

  }

  return (
    <>
      <div className="Questions" onClick={ArrowDown}>
        <MainQuestions 
          Question1="Let me Pick"
          Question2="randomize"
        />
      </div>

      {isVisible &&
        <>
          <div className="Question-Header">
            <h2>Length of film</h2>
          </div>

          <div className="Questions" onClick={ArrowDown2}>
            <MainQuestions
              Question1="Under 20 mins"
              Question2="Over 20 mins"
            />
          </div>

        

        </>


      }
        {isVisible &&
            <> <div className="Question-Header">
              <h2>Where from?</h2>
            </div>

              <div className="Questions">
                <MainQuestions
                  Question1="New to DN"
                  Question2="From the archive"
                />

              </div>

            </>
          }





    </>
  )
}


