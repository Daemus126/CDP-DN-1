import { useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import films from "./data/films.js";
import FilmCard from "./components/FilmCard.jsx";
import { FilterOptions } from './components/Filter'
import { MainQuestions } from './components/MainQuestions'
import { Footer } from './components/footer'
import RandomNumber from './data/random.js'
function App() {


  // const [count, setCount] = useState(0)
  const [selectedIds, setSelectedIds] = useState([]);

  function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  const maxFilms = 5;

  /*
    function ToggleHide() {
      const [isVisible, setIsVisible] = useState(false)
  
      function handleHide() {
        setIsVisible(!isVisible)
      }
    }
  */

  //  const selectedFilms = films.filter((film) => selectedIds.includes(film.id));

  const filmIndices = RandomNumber(5, films.length)
  console.log('film indiiciies', filmIndices)

  return (
    <>

      <Header>

        <section aria-labelledby="films-heading">
          <div class="section-heading">
            <div>

              <h2 id="films-heading">Choose from 5 selected films</h2>
            </div>
            <p>Archive total: 6,000</p>
          </div>
        </section>

      </Header>

      <div className="body">


        <div className="Filter-question-Grid">
          <div className="filter">

            <h2 className="filter-header"> Filter</h2>


            <button className="arrow-down" /*onClick={handleHide}*/></button>


            <div className='FilterOptionsTitle'>
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

            </div>

            <h2 className="filter-header"> Advanced filter</h2>
            <button className="arrow-down"></button>
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

          </div>

        </div>


        <div className="Question-Header">
          <h2>Let's Begin</h2>
        </div>

        <div className="Questions">
          <MainQuestions
            Question1="Let me Pick"
            Question2="randomize"
          />

        </div>

        <div className="Question-Header">
          <h2>Length of film</h2>
        </div>

        <div className="Questions">
          <MainQuestions
            Question1="Under 20 mins"
            Question2="Over 20 mins"
          />

        </div>


        <div className="Question-Header">
          <h2>Where from?</h2>
        </div>

        <div className="Questions">
          <MainQuestions
            Question1="New to DN"
            Question2="From the archive"
          />

        </div>



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
            <button type="button">Select 5 more</button>
          </article>

        </div>

      </div>
      <Footer />

    </>

  );

}

export default App;
