import { useState } from "react"

export const FilmCard = (props) =>{

const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    
        console.log('Am i FC?')
    setIsSelected(!isSelected);
  }
    
    

            return (
        <article className="film-card">
            <p className="film-meta">
                {props?.form} · {props?.country} · {props?.year}
            </p>
            <h3>{props?.title}</h3>
            <p>{props?.synopsis}</p>

            <button onClick={handleClick} ></button>
        </article>
    

            );

}

