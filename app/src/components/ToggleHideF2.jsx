
   import { useState } from "react"
   import { FilterOptions } from './Filter'

   export const ToggleHideF2 = () => {
      const [isVisible, setIsVisible] = useState(true)

      function ArrowDown() {
         setIsVisible(!isVisible)
         console.log("here")
         console.log("isVisible", isVisible)

      }

      return (
          <>
            <button className={isVisible ? 'arrow-up' :  'arrow-down'} onClick={ArrowDown}></button>
              {isVisible &&
              <>
              <div className='FilterOptionsTitle'>
                                <h4>Review style</h4>
                                <FilterOptions
                                  Field="Inperson"
                                />
                                <FilterOptions
                                  Field="Written"
                                />
                                <FilterOptions
                                  Field="Video"
                                />
                              </div>
              
                              <div className='FilterOptionsTitle'>
                                <h4>Shot Type</h4>
                                <FilterOptions
                                  Field="Wide"
                                />
                                <FilterOptions
                                  Field="Written"
                                />
                                <FilterOptions
                                  Field="Video"
                                />
              </div>
              </>

              }
               </>
      )
   }


    