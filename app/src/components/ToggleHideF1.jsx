
   import { useState } from "react"
   import { FilterOptions } from './Filter'

   export const ToggleHideF1 = () => {
      const [isVisible, setIsVisible] = useState(true)

      function ArrowDown() {
         setIsVisible(!isVisible)
         console.log("here")
         console.log("isVisible", isVisible)

      }

      return (
          <>
            <button  className={isVisible ? 'arrow-up' :  'arrow-down'} onClick={ArrowDown}></button>
              {isVisible &&
              <><div className='FilterOptionsTitle'>
                  <h4>Category</h4>
                  <FilterOptions
                    Field="Drama" />
                  <FilterOptions
                    Field="Comedy" />

                </div><div className='FilterOptionsTitle'>
                    <h4>Genre</h4>
                    <FilterOptions
                      Field="Drama" />
                    <FilterOptions
                      Field="Comedy" />
                    <FilterOptions
                      Field="Action" />
                    <FilterOptions
                      Field="Horror" />

                  </div><div className='FilterOptionsTitle'>
                    <h4>Year</h4>
                    <FilterOptions
                      Field="Before 2000" />
                    <FilterOptions
                      Field="2000-2005" />
                    <FilterOptions
                      Field="2005-2010" />
                    <FilterOptions
                      Field="2010-2015" /><FilterOptions
                      Field="2015-2020" />
                    <FilterOptions
                      Field="2025-2026" />
                    <FilterOptions
                      Field="After 2025" />
                  </div></>

              }
               </>
      )
   }


    