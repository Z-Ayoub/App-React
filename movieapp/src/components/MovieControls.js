 import React from 'react';
 import toto from './MovieControls.module.css';
 import '../lib/font-awesome/css/all.min.css';
 
 const MovieControls = () => {
   return (
     <div className={toto.innerCardControls}>
         { type === "watchlist" && (
             <>
                <Button className={toto.ctrlbtn}>
                    <i className="fa-fw far fa-eye">

                    </i>
                    <i className="fa-fw fa fa-times">

                    </i>
                </Button>

             </>
         )}
     </div>
   )
}
export default MovieControls; 