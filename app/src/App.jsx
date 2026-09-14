import { useEffect, useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import films from "./data/films.js";
import FilmCard from "./components/FilmCard.jsx";
import MainQuestions from './components/MainQuestions.jsx';
import { Footer } from './components/footer'
import RandomNumber from './data/random.js'
import { ToggleHideF1 } from './components/ToggleHideF1.jsx'
import { ToggleHideF2 } from './components/ToggleHideF2.jsx'
import {Redraw} from './components/Redraw.jsx';



const selectedFilmsKey = "programme-builder-selected-films";

function getIntitialSelectedFilms() {
  const saveSelectedIds = localStorage.getItem(selectedFilmsKey);
  if (saveSelectedIds) {
    return JSON.parse(saveSelectedIds);
  }
  return [];
}


 const filmIndices = RandomNumber(5, films.length)
  console.log('film indiiciies', filmIndices)


function App() {


  // const [count, setCount] = useState(0)
  const [selectedIds, setSelectedIds] = useState(getIntitialSelectedFilms());

  
  useEffect(() => {
    localStorage.setItem(selectedFilmsKey, JSON.stringify(selectedIds));
  }, [selectedIds]);
  


  function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  const maxFilms = 5;


  //  const selectedFilms = films.filter((film) => selectedIds.includes(film.id));

 

  return (
    <>

      <Header>

        

      </Header>

      <section aria-labelledby="films-heading">
          <div className="section-heading">
            <div>
              <h2 id="films-heading">Choose from 5 selected films</h2>
            </div>
            <p>Archive total: 6,000</p>
          </div>
        </section>

      <div className="body">


        <div className="Filter-question-Grid">
          <div className="filter">

            <h2 className="filter-header"> Filter</h2>

            <ToggleHideF1 />


            <h2 className="filter-header"> Advanced filter</h2>

            <ToggleHideF2 />

          </div>


        </div>


        <div className="Question-Header">
          <h2>Let's Begin</h2>
        </div>
        
        <MainQuestions/>
        



        <h2 className="film-grid-title"> Our Picks</h2>

        <div className="film-grid">



          {filmIndices && filmIndices.map((filmIndex) => {
            const film = films[filmIndex]
            return (
              <FilmCard
                key={film.id}
                id={film.id}
                title={film.title}
                synopsis={film.synopsis}
                form={film.form}
                country={film.country}
                year={film.year}
                runtimeMinutes={film.runtimeMinutes}
                themes={film.themes}
                poster={film.poster}
                posterAlt={film.posterAlt}
                isSelected={selectedIds.includes(film.id)}
                onToggleSelect={handleToggleSelect}
              />
            )
          })
          }

          <article className="retake">
            <h3>RETAKE</h3>
            <p>Already watched these, or looking for somthing a bit different? </p>
            <p>Let's do a Retake</p>
            <button type="button" onClick={Redraw}>Select 5 more</button>
          </article>

        </div>

      </div>
      <Footer />

    </>

  );

}

export default App;
