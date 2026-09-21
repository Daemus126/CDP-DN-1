

function FilmCard({ id, title, synopsis, form, country, year, runtimeMinutes,
    themes, poster, posterAlt, isSelected, onToggleSelect }) {
    const cardClass = isSelected
        ? "film-card film-card--selected"
        : "film-card";



    return (




       
        <div className="film-grid">


            <article className="film-card">
                {/* One film in the archive has no artwork, so the card has to cope. */}
                {poster ? (
                    <img className="film-card__poster" src={poster} alt={posterAlt} />
                ) : (
                    <div className="film-card__poster film-card__poster--missing">
                        No artwork
                    </div>
                )}

                <p className="film-meta">
                    {form} · {country} · {year} · {runtimeMinutes} min
                </p>
                <h3>{title}</h3>
                <p>{synopsis}</p>



                {/* The arrow function matters. Writing onToggleSelect(id) here would
                {/* The arrow function matters. Writing onToggleSelect(id) here would
          call it immediately, while the page is being drawn, instead of
          waiting for a click. */}
                <button type="button"
                    className={isSelected ? 'film-Card--Select' : 'film-card-Nselect'}
                    onClick={() => onToggleSelect(id)}
                >
                    {isSelected ? "Replay?" : "Watch Now"}
                </button>



            </article>
        </div>
           



    );

}

export default FilmCard;