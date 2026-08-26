import { useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import { FilmCard } from "./components/FilmCard";
import { FilterOptions } from './components/Filter'
import { MainQuestions } from './components/MainQuestions'
import { Footer } from './components/footer'

function App() {


  const [count, setCount] = useState(0)


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

          <button className="arrow-down"></button>


          <div className='FilterOptionsTitle'>
            <h4>Category</h4>
            <FilterOptions
              Field="Drama"
            />
            <FilterOptions
              Field="Comedy"
            />

          </div>


          <div className='FilterOptionsTitle'>
            <h4>Genre</h4>
            <FilterOptions
              Field="Drama"
            />
            <FilterOptions
              Field="Comedy"
            />
            <FilterOptions
              Field="Action"
            />
            <FilterOptions
              Field="Horror"
            />

          </div>

          <div className='FilterOptionsTitle'>
            <h4>Year</h4>
            <FilterOptions
              Field="Before 2000"
            />
            <FilterOptions
              Field="2000-2005"
            />
            <FilterOptions
              Field="2005-2010"
            />
            <FilterOptions
              Field="2010-2015"
            /><FilterOptions
              Field="2015-2020"
            />
            <FilterOptions
              Field="2025-2026"
            />
            <FilterOptions
              Field="After 2025"
            />

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
        <FilmCard
          title="The Quiet Cartographer"
          synopsis="A mapmaker records disappearing paths..."
          form="Documentary"
          country="Ireland"
          year={2023} />

        <FilmCard
          title="The Orange Lady"
          synopsis="A Citrus women takes on a bg endevor."
          form="Cartoon"
          country="France"
          year={2018} />



      </div>

  </div>
      <Footer />

</>
    
  );

}

export default App;
