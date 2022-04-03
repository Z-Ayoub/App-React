 import React from 'react';
 import toto from './MovieControls.module.css';
 import '../lib/font-awesome/css/all.min.css';
 import { useContext  } from 'react';
 import { GlobalContext } from '../context/GlobalState';
 
 const MovieControls = ({movie,type}) => {
   const {removeMovieFromWatchlist, addMovieToWatched, moveMovieFromWatched, removeMovieFromWatched} = useContext(GlobalContext);     
   return (
     <div className={toto.innerCardControls}>
         { type === "watchlist" && (
             <>
                <button className={toto.ctrlbtn}
                onClick={() => addMovieToWatched(movie)}
                >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button className={toto.ctrlbtn} 
                onClick={() => removeMovieFromWatchlist(movie.id)}>

                    <i className="fa-fw fa fa-times"></i>
                </button>
             </>
         )}

         { type === "watched" && (
            <>
                <button className={toto.ctrlbtn}
                onClick={() => moveMovieFromWatched(movie)}
                >
                    <i className="fas fa-eye-slash"></i>
                </button>
                <button className={toto.ctrlbtn}
                onClick={() => removeMovieFromWatched(movie.id)}
                >
                    <i className="fa-fw fa fa-times"></i>
                </button>            
            </>
         )}
     </div>
   );
};
export default MovieControls; 