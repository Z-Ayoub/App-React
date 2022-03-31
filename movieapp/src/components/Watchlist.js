import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import toto from './Watchlist.module.css';
const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div className={toto.movieApp}>
            <div className={toto.container}>
                <div className={toto.header}>
                    <h1 className={toto.heading}>My Watchlist</h1>
                </div>

                <div className={toto.movieGrid}>
                   {watchlist.map(movie => (
                       <MovieCard movie={movie} type="watchlist"/>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Watchlist;