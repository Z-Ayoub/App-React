import React from 'react';
import toto from './Watchlist.module.css';
import MovieControls  from './MovieControls';
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

            <MovieControls type={type} movie={movie}/>
        </div>
    );
}
export default MovieCard;