
import { useState } from "react"
import { FilterOptions } from "./Filter"
import films from "../data/films"

export const ToggleHideF1 = () => {
  const [isVisible, setIsVisible] = useState(true)

  function ArrowDown() {
    setIsVisible(!isVisible)
    console.log("here")
    console.log("isVisible", isVisible)

  }

  function Category({key, form, country, year, 
    themes }) {
    console.log("form", form)
    const [isSelected, setIsSelected] = useState(false);
    function handleClick() {
      setIsSelected(!isSelected);
      console.log('Am i filter?', isSelected)
    }
    return (
      <button className={isSelected ? 'FilterOptions--Selected' : 'FilterOptions'} onClick={handleClick}> <p> {form} {country} {year} {themes} </p> </button>
    );
  }

 



  return (
    <>
      <button className={isVisible ? 'arrow-up' : 'arrow-down'} onClick={ArrowDown}></button>
      {isVisible &&
        <><div className='FilterOptionsTitle'>
          <h4>Category</h4>
          {films.map((film) => (
           <Category 
             key={film.id}
           form={film.themes}/>
          ))}
         

        </div><div className='FilterOptionsTitle'>
            <h4>Genre</h4>
           {films.map((film) => (
           <Category 
             key={film.id}
           form={film.form}/>
          ))}


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


