import { useState } from "react"



const ToggleNextQ = () => {
    console.log("TNQ")
    const [isSelected, setIsSelected] = useState(false);
    setIsSelected(!isSelected);
    console.log("iselect")
}

const Randomize = () => {
    console.log("Randomize")
}

const PickUnder20 = () => {
    console.log("PickUnder20")
}

const PickOver20 = () => {
    console.log("PickOver20")
}

const NewFilm = () => {
    console.log("NewFilm")
}

const OldFilm = () => {
    console.log("OldFilm")
}



const MQuestionData = [
    [
        {

            title: 'Let Me Pick',
            function: ToggleNextQ,
        },
        {
            title: 'Randomize',
            function: Randomize,
        },
    
    
        {
            title: 'Under 20 Mins',
            function: PickUnder20,
        },
        {
            title: 'Over 20 mins',
            function: PickOver20,
        },
    ],
    [
        {
            title: 'New to Directors Notes',
            function: NewFilm,
        },
        {
            title: 'From The Archive',
            function: OldFilm,
        },
    ],
]

function MainQuestions() {

    const [ButtonClass, SetButtonClass] = useState("MainQuestions");
    const [count, setCount] = useState(0)

  




    const handleOn = () => {
        const thisCount = count + 1

        if (thisCount < MQuestionData.length) {
            setCount(thisCount)
        }


    }

    const myButtons = []
    for (let i = 0; i <= count; i++) {
        myButtons.push(MQuestionData[i])
    }

    return (
        <>
        <div className="Questions">
            
            {myButtons.map((buttonData, index) => {
                return (
                    <div key={index}>
                        <div className='Questions'>
                            <div
                                type="button" className={ButtonClass}
                                onClick={() => {
                                    handleOn()
                                    buttonData[0].function()
                                    ToggleButtonClass

                                }}
                            >
                                {buttonData[0].title}
                            </div>
                            <div
                                type="button" className='MainQuestions'

                                onClick={() => {
                                    handleOn()
                                    buttonData[1].function()
                                }}
                            >
                                {buttonData[1].title}
                            </div>
                        </div>
                    </div>
                  
                )
            })}
           
              </div>
        </>
    )
}

export default MainQuestions

/*
<button type="radio"
 

*/


