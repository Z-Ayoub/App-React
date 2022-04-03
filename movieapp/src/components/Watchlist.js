import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import toto from './Watchlist.module.css';
const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div className={toto.moviePage}>
            <div className={toto.container}>
                <div className={toto.header}>
                    <h1 className={toto.heading}>My Watchlist</h1>

                    <span className={toto.countPill}>
                        {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
                    </span>
                </div>

                {watchlist.length > 0 ? (
                    <div className={toto.movieGrid}>
                        {watchlist.map(movie => (
                        <MovieCard movie={movie} type="watchlist"/>
                        ))}
                    </div>
                ) : (
                    <h2 className={toto.noMovies}>
                        Sorry!! No movies found, Go add some ...
                        <h1>:(</h1>
                    </h2>
                )}

            </div>
        </div>
    );
}
export default Watchlist;