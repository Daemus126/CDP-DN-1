import { useEffect, useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import films from "./data/films.js";
import FilmCard from "./components/FilmCard.jsx";
import { Footer } from './components/footer'
import { FilterOptions } from './components/depricated/Filter.jsx';
import RandomNumber from './data/random.js'
import { ToggleHideF2 } from './components/ToggleHideF2.jsx';



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
  const [visibleFilmstoggleTwo, setvisibleFilmstoggleTwo] = useState(false)
  const [isVisible, setIsVisible] = useState(true)


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

  function ArrowDown() {
    setIsVisible(!isVisible)
    console.log("here")
    console.log("isVisible", isVisible)

  }



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

    const hideFilms = () => {
    console.log("films??", visibleFilmstoggle)
    setvisibleFilmstoggle(false)
  }

    const showFilmstwo = () => {
    console.log("films??", visibleFilmstoggleTwo)
    setvisibleFilmstoggleTwo(true)
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


 const uniqueThemes = [...new Set(films.flatMap(films => films.themes))];
  console.log("UNT", uniqueThemes)
  const uniqueForms = [...new Set(films.flatMap(films => films.form))];
  console.log("UNF", uniqueForms)
  const [selectedTheme, setSelectedTheme] = useState("All themes");
  const [selectedForm, setSelectedForm] = useState("All forms");


  function UNForms() {
    const [isselectedForm, setSelectedForm] = useState(null);
    console.log("form", isselectedForm)
    return uniqueForms.map((form) => (
      <button
        key={form}
        onClick={() => setSelectedForm(form)}
        className={isselectedForm === form ? "FilterOptions--Selected" : "FilterOptions"}
      >
        <p>{form}</p>
      </button>
    ));
  }

  function UNThemes() {
    const [isSelectedThemes, setIsSelectedThemes] = useState(false);
    console.log("Themes", isSelectedThemes)
    return uniqueThemes.map((themes) => (
      <button
        key={themes}
        onClick={() => setIsSelectedThemes(themes)}
        className={isSelectedThemes === themes ? "FilterOptions--Selected" : "FilterOptions"}
      >
        <p>{themes}</p>
      </button>
    ));
  }



  // const visibleFilms = films.filter((film) => {
   const visibleFilms = RandomNumber(5, films.length)
    .map((index) => films[index])
    .filter((film) => {
      const matchesForm = selectedForm === "All forms"
        || film.form === selectedForm;
      const matchesTheme = selectedTheme === "All themes"
        || film?.themes?.includes(selectedTheme);
      return matchesTheme && matchesForm;
    });

  


     function handleClearFilters() {
    setSelectedForm("All forms");
    setSelectedTheme("All themes");
  }



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
            <button className={isVisible ? 'arrow-up' : 'arrow-down'} onClick={ArrowDown}></button>
            {isVisible &&
              <><div className='FilterOptionsTitle'>
                <h4>Category</h4>
                <UNThemes />
              </div><div className='FilterOptionsTitle'>
                  <h4>Genre</h4>
                  <UNForms />

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



            <h2 className="filter-header"> Advanced filter</h2>
          <ToggleHideF2/>  
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
                    console.log("letmepick")

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

            {visibleFilmstoggleTwo &&

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
              showFilmstwo()
              hideFilms()
              handleClearFilters()
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
