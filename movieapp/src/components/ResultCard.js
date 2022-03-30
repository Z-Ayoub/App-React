import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import toto from './Add.module.css';

const ResultCard = ({movie}) => {
    const {
       addMovieToWatchlist 
    } = useContext(GlobalContext);
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
                <h4 className={toto.releaseDate}>
                    {movie.release_date ? movie.release_date.substring(0,4) : "-"}
                </h4>
            </div>

            <div className={toto.controls}>
                <button className={toto.btn}
                onClick={() => addMovieToWatchlist(movie)}
                >
                    Add to WatchList
                </button>

            </div>
        </div>
    </div>
  );
}
export default ResultCard;