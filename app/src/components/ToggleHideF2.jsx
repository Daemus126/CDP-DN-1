
   import { useState } from "react"
 import { FilterOptions } from "./depricated/Filter"
 import films from "../data/films"
 

   export const ToggleHideF2 = () => {
      const [isVisible, setIsVisible] = useState(false)

      function ArrowDown() {
         setIsVisible(!isVisible)
         console.log("here")
         console.log("isVisible", isVisible)

      }

 const uniqueeditorialType = [...new Set(films.flatMap(films => films.editorialType))];
  console.log("UNF", uniqueeditorialType)


  function UNeditorialType() {
    const [isselectededitorialType, setSelectededitorialType] = useState(null);
 console.log("uniqueeditorialType", isselectededitorialType)
    return uniqueeditorialType.map((editorialType) => (
      <button
        key={editorialType}
        onClick={() => setSelectededitorialType(editorialType)}
        className={isselectededitorialType === editorialType ? "FilterOptions--Selected" : "FilterOptions"}
      >
        <p>{editorialType}</p>
      </button>
    ));
  }


   const uniquetechniques = [...new Set(films.flatMap(films => films.techniques))];
  console.log("uniquetechniques", uniquetechniques)


  function UNtechniques() {
    const [isselectedtechniques, setSelectedtechniques] = useState(null);
 console.log("uniquetechniques", isselectedtechniques)
    return uniquetechniques.map((techniques) => (
      <button
        key={techniques}
        onClick={() => setSelectedtechniques(techniques)}
        className={isselectedtechniques === techniques ? "FilterOptions--Selected" : "FilterOptions"}
      >
        <p>{techniques}</p>
      </button>
    ));
  }

      return (
          <>
            <button className={isVisible ? 'arrow-up' :  'arrow-down'} onClick={ArrowDown}></button>
              {isVisible &&
              <>
              <div className='FilterOptionsTitle'>
                                <h4>Editorial Type</h4>
                                <UNeditorialType/>
                              </div>
              
                              <div className='FilterOptionsTitle'>
                                <h4> Techniques </h4>
                                <UNtechniques/>
              </div>
              </>

              }
               </>
      )
   }


    