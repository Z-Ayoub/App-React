 import React from 'react';
 import toto from './MovieControls.module.css';
 import '../lib/font-awesome/css/all.min.css';
 import { useContext  } from 'react';
 import { GlobalContext } from '../context/GlobalState';
 
 const MovieControls = () => {
   const {removeMovieFromWatchlist} = useContext(GlobalContext);     
   return (
     <div className={toto.innerCardControls}>
         { type === "watchlist" && (
             <>
                <Button className={toto.ctrlbtn}>
                    <i className="fa-fw far fa-eye"></i>
                </Button>
                <Button className={toto.ctrlbtn} 
                onClick={() => removeMovieFromWatchlist(movie.id)}>

                    <i className="fa-fw fa fa-times"></i>
                </Button>
             </>
         )}
     </div>
   )
}
export default MovieControls; 