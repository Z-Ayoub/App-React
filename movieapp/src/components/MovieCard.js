import React from 'react';
import toto from './Watchlist.module.css';
const MovieCard = ({movie,type}) => {
    return(
        <div className={toto.movieCard}>
            <div className={toto.overlay}>

            </div>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={`${movie.title} Poster`} />
            ): (
                <div className={toto.fillerPoster}></div>
            )}
        </div>
    );
}
export default MovieCard;