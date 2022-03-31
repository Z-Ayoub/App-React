import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import toto from './Watchlist.module.css';
const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className={toto.moviePage}>
      <div className={toto.container}>
        <div className={toto.header}>
          <h1 className={toto.heading}>Watched Movies</h1>
          <span className={toto.countPill}>
                        {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
                    </span>
        </div>
        {watched.length > 0 ? (
          <div className={toto.movieGrid}>
            {watched.map(movie => (
              <MovieCard movie={movie} type="watched"/>
            ))}
          </div>
        ) : (
          <h2 className={toto.noMovies}>
            Sorry :( No movies found, Go add some ...
          </h2>
        )}

      </div>
    </div>
  );
}
export default Watched;
