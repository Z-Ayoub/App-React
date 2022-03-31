 import React from 'react';
 import toto from './MovieControls.module.css';
 import '../lib/font-awesome/css/all.min.css';
 import { useContext  } from 'react';
 import { GlobalContext } from '../context/GlobalState';
 
 const MovieControls = () => {
   const {removeMovieFromWatchlist, addMovieToWatched, moveMovieFromWatched, removeMovieFromWatched} = useContext(GlobalContext);     
   return (
     <div className={toto.innerCardControls}>
         { type === "watchlist" && (
             <>
                <Button className={toto.ctrlbtn}
                onClick={() => addMovieToWatched(movie)}
                >
                    <i className="fa-fw far fa-eye"></i>
                </Button>
                <Button className={toto.ctrlbtn} 
                onClick={() => removeMovieFromWatchlist(movie.id)}>

                    <i className="fa-fw fa fa-times"></i>
                </Button>
             </>
         )}

         { type === "watched" && (
            <>
                <button className={toto.ctrbtn}
                onClick={() => moveMovieFromWatched(movie)}
                >
                    <i className="fa-fw far-eye-slash"></i>
                </button>
                <button className={toto.ctrbtn}
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