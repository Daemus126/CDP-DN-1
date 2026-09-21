import { useState } from "react"
import { useRef } from 'react';

/*

function MainQuestions() {

    const [ButtonClass, SetButtonClass] = useState("MainQuestions");
    const [isSelectedLetMePick, setIsSelectedLetMePick] = useState(false);
    const [isSelectedRandomize, setIsSelectedRandomize] = useState(false);
    const [isSelectedShortFilm, setIsSelectedShortFilm] = useState(false);
    const [isSelectedLongFilm, setIsSelectedLongFilm] = useState(false);
    const [isSelectedNew, setIsSelectedNew] = useState(false);
    const [isSelectedArchive, setIsSelectedArchive] = useState(false);
    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [isArchiveVisible, setIsArchiveVisible] = useState(false)
    const [visibleFilmstoggle, setvisibleFilmstoggle] = useState(false)
   

     const myRef = useRef<HTMLElement | null>(null);

    const handleLetMePick = () => {
        setIsTimeVisible(true)
        console.log("isVisible", isTimeVisible)
    }

     const handleTime = () => {
        setIsArchiveVisible(true)
        console.log("isVisible", isTimeVisible)
    }

     const showFilms = () => {
    console.log("films??",visibleFilmstoggle)
   setvisibleFilmstoggle(true)
 }



   
    return (
        <>

            <div className="Questions" >
                <div className='Questions'>
                    <div onClick={handleLetMePick}>
                    <div
                        type="button" 
                        className={isSelectedLetMePick ? 'MainQuestions--Selected' : 'MainQuestions'}
                        onClick={() => {
                            setIsSelectedLetMePick(!isSelectedLetMePick);
                             myRef.current?.scrollIntoView()
                             console.log("scroll")

                        }}
                    >
                        Let Me Pick 
                    </div>
                    </div>
                    <div
                        type="button" 
                        className={isSelectedRandomize ? 'MainQuestions--Selected' : 'MainQuestions'}

                        onClick={() => {
                            setIsSelectedRandomize(!isSelectedRandomize);
                            showFilms()
                        }}
                    >
                        Randomize
                    </div>
                </div>

            </div>

            {
                isTimeVisible &&

                <>
                    <div className="Questions" onClick={handleTime}> 
                        <div className='Questions'  >
                            <div
                                type="button" 
                                className={isSelectedShortFilm ? 'MainQuestions--Selected' : 'MainQuestions'}
                                onClick={() => {
                                    setIsSelectedShortFilm(!isSelectedShortFilm);
                                }}
                            >
                                Under 20 Mins
                            </div>
                            <div
                                type="button" className={isSelectedLongFilm ? 'MainQuestions--Selected' : 'MainQuestions'}

                                onClick={() => {
                                    setIsSelectedLongFilm(!isSelectedLongFilm);
                                }}
                            >
                                Over 20 Mins
                            </div>
                        </div>

                    </div>

                </>
            }

            {isArchiveVisible && <>
                <div className="Questions" >
                        <div className='Questions'>
                            <div
                                type="button"
                                className={isSelectedNew ? 'MainQuestions--Selected' : 'MainQuestions'}
                                onClick={() => {
                                    setIsSelectedNew(!isSelectedNew);
                                }}
                            >
                                New To Directors Notes
                            </div>
                            <div
                                type="button" className={isSelectedArchive ? 'MainQuestions--Selected' : 'MainQuestions'}

                                onClick={() => {
                                    setIsSelectedArchive(!isSelectedArchive);
                                    showFilms()
                                }}
                            >
                               From the Archive
                            </div>
                        </div>

                    </div>
                
                
                
                </>}


        </>



    )
}

export default MainQuestions;

*/