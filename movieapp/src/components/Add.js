import React from 'react';
import toto from './Add.module.css';
const Add = () => {
  return (
    <div className={toto.addpage}>
        <div className={toto.container}>
            <div className={toto.addContent}>
                <div className={toto.inputWrapper}>
                    <input type="text" placeholder="Search for a movie ..." />
                    
                </div>
            </div>
        </div>
    </div> 
  );
}
export default Add;
