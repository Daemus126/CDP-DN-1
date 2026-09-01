import { useState } from "react"

export const MainQuestions = (props) => {

    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);

    function handleClick1() {

        console.log('Am i MQ?')
        setIsSelected1(!isSelected1);

    }
 

    function handleClick2() {

        console.log('Am i SQ?')
        setIsSelected2(!isSelected2);
        
    }



    return (


            

            <>
            
            
            <button className={isSelected1 ? 'MainQuestions--Selected' : isSelected2 ? 'MainQuestions--Disabled' : 'MainQuestions'} 
            onClick={handleClick1}>
            <h2> {props?.Question1} </h2>
        </button>
        
        <button className={isSelected2 ? 'MainQuestions--Selected' : isSelected1 ? 'MainQuestions--Disabled' : 'MainQuestions'}  
        onClick={handleClick2}>  
                <h2> {props?.Question2} </h2>
            </button></>


    );

}

