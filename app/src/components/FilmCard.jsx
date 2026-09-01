

function FilmCard({ id, title, synopsis, form, country, year, runtimeMinutes,
    themes, poster, posterAlt, isSelected, onToggleSelect }) {
    const cardClass = isSelected
        ? "film-card film-card--selected"
        : "film-card";



    return (

    

                    <div className="film-grid">


                        <article className="film-card">

                            <p className="film-meta">
                                {form} · {country} · {year} · {runtimeMinutes} min
                            </p>
                            <h3>{title}</h3>
                            <p>{synopsis}</p>

                            <ul className="theme-list">
                                {themes.map((theme) => (
                                    <li key={theme}>{theme}</li>
                                ))}
                            </ul>

                            {/* The arrow function matters. Writing onToggleSelect(id) here would
          call it immediately, while the page is being drawn, instead of
          waiting for a click. */}
                            <button type="button" onClick={() => onToggleSelect(id)}
                            >
                                {isSelected ? "Replay?" : "Wacth Now"}
                            </button>



                        </article>
                    </div>

               

    );

}

export default FilmCard;