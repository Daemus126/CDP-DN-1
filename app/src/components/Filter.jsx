import { useState } from "react"

export const FilterOptions = (props) => {

     const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
        console.log('Am i filter?', isSelected)


  }


    
    return (



    

            <button className={isSelected ? 'FilterOptions--Selected' :  'FilterOptions'} onClick={handleClick}> <p> {props?.Field} </p> </button>

       



    );

}

