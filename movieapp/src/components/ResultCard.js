import React from 'react';
import toto from './Add.module.css';

const ResultCard = ({movie}) => {
  return (
    <div className={toto.resultCard}>
        <div className={toto.posterWrapper}>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={`${movie.title} Poster`} />
            ): (
                <div className={toto.fillerPoster}></div>
            )}
        </div>
        <div className={toto.info}>
            <div className={toto.header}>
                <h3 className={toto.title}>{movie.title}</h3>
                <h4 className={toto.releaseDate}>{movie.release_date.substring(0,4)}</h4>
            </div>
        </div>
    </div>
  );
}
export default ResultCard;