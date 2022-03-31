import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import toto from './ResultCard.module.css';

const ResultCard = ({movie}) => {
    const {
       addMovieToWatchlist, watchlist,
       addMovieToWatched,watched
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.id === movie.id);

    let storedMovieWatched = watched.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie 
    ? true 
    : storedMovieWatched
    ? true
    : false;

    const watchDisabled = storedMovieWatched ? true : false;

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
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}
                >
                    Ajouter à WatchList
                </button>

                <button className={toto.btn}
                    disabled={watchDisabled}
                    onClick={() => addMovieToWatched(movie)}
                >
                    Ajouter à Watched
                </button> 
            </div>
        </div>
    </div>
  );
}
export default ResultCard;