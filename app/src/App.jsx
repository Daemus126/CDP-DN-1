import { useEffect, useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import films from "./data/films.js";
import FilmCard from "./components/FilmCard.jsx";
import { Footer } from './components/footer'
import RandomNumber from './data/random.js'
import { ToggleHideF1 } from './components/ToggleHideF1.jsx'
import { ToggleHideF2 } from './components/ToggleHideF2.jsx'



const selectedFilmsKey = "programme-builder-selected-films";

function getIntitialSelectedFilms() {
  const saveSelectedIds = localStorage.getItem(selectedFilmsKey);
  if (saveSelectedIds) {
    return JSON.parse(saveSelectedIds);
  }
  return [];
}




function App() {
  // const [count, setCount] = useState(0)
  const [selectedIds, setSelectedIds] = useState(getIntitialSelectedFilms());
  const [isSelectedLetMePick, setIsSelectedLetMePick] = useState(false);
  const [isSelectedRandomize, setIsSelectedRandomize] = useState(false);
  const [isSelectedShortFilm, setIsSelectedShortFilm] = useState(false);
  const [isSelectedLongFilm, setIsSelectedLongFilm] = useState(false);
  const [isSelectedNew, setIsSelectedNew] = useState(false);
  const [isSelectedArchive, setIsSelectedArchive] = useState(false);
  const [isTimeVisible, setIsTimeVisible] = useState(false)
  const [isArchiveVisible, setIsArchiveVisible] = useState(false)
  const [visibleFilmstoggle, setvisibleFilmstoggle] = useState(false)


  const Redraw = () => {
    const filmIndices = RandomNumber(5, films.length)
    console.log('Redraw', filmIndices)
    showFilms()
    scrollPick()
  }

  function scrollPick() {
    document.getElementById('scrollPick').scrollIntoView({
      behavior: 'smooth'
    });
  };

  function scrollTime() {
    document.getElementById('scrollTime').scrollIntoView({
      behavior: 'smooth'
    });
  };

  function scrollArch() {
    document.getElementById('scrollArch').scrollIntoView({
      behavior: 'smooth'
    });
  };


  const handleLetMePick = () => {
    setIsTimeVisible(true)
    scrollTime()
    console.log("isVisible", isTimeVisible)
  }

  const handleTime = () => {
    setIsArchiveVisible(true)
    scrollArch()
    console.log("isVisible", isTimeVisible)
  }

  const showFilms = () => {
    console.log("films??", visibleFilmstoggle)
    setvisibleFilmstoggle(true)
  }


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


  const [selectedTheme, setSelectedTheme] = useState("All themes");


  const visibleFilms = RandomNumber(5, films.length)
    .map((index) => films[index])
    .filter((film) => {
      const matchesTheme = selectedTheme === "All themes"
        || film?.themes?.includes(selectedTheme);
      return matchesTheme;
    });


  const archiveTotal = films.length;


  return (
    <>

      <Header>



      </Header>

      <section aria-labelledby="films-heading">
        <div className="section-heading">
          <div>
            <h2 id="films-heading">Choose from 5 selected films</h2>
          </div>
          <p>Archive total: {archiveTotal}</p>
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

        <>

          <div className="Questions" >
            <div className='Questions'>
              <div onClick={handleLetMePick}>
                <div
                  type="button"
                  className={isSelectedLetMePick ? 'MainQuestions--Selected' : 'MainQuestions'}
                  onClick={() => {
                    setIsSelectedLetMePick(!isSelectedLetMePick);
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
                  scrollPick()
                }}
              >
                Randomize
              </div>
            </div>

          </div>

          <div id="scrollTime">
          </div>
          {
            isTimeVisible &&

            <>
              <div className='playOne'>
              </div>
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
              <div id="scrollArch">
              </div>
            </>

          }

          {isArchiveVisible && <>
            <div className='playTwo'></div>
            <div className="Questions" >
              <div className='Questions'>
                <div
                  type="button"
                  className={isSelectedNew ? 'MainQuestions--Selected' : 'MainQuestions'}
                  onClick={() => {
                    setIsSelectedNew(!isSelectedNew);
                    showFilms()
                  }}
                >
                  New To Directors Notes
                </div>
                <div
                  type="button" className={isSelectedArchive ? 'MainQuestions--Selected' : 'MainQuestions'}

                  onClick={() => {
                    setIsSelectedArchive(!isSelectedArchive);
                    showFilms()
                    scrollPick()
                  }}
                >
                  From the Archive
                </div>
              </div>

            </div>



          </>}


        </>




        <h2 className="film-grid-title" id="scrollPick"> Our Picks</h2>

        <div className="film-grid">

          {visibleFilmstoggle &&

            <>
              {visibleFilms.map((film) => {
                return (
                  <FilmCard
                     key={film}
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

            </>}

          <article className="retake">
            <h3>RETAKE</h3>
            <p>Already watched these, or looking for somthing a bit different? </p>
            <p>Let's do a Retake</p>
            <button type="button" onClick={() => {
              Redraw()
            }}

            >Select 5 more</button>
          </article>

        </div>

      </div>
      <Footer />

    </>

  );

}

export default App;
