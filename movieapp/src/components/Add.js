import React from 'react';
import toto from './Add.module.css';
import{useState} from 'react';
const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
      e.preventDefault();

      setQuery(e.target.value);
  };
  return (
    <div className={toto.addpage}>
        <div className={toto.container}>
            <div className={toto.addContent}>
                <div className={toto.inputWrapper}>
                    <input type="text" placeholder="Search for a movie ..." 
                    value={query}
                    onChange={onChange}
                    />
                    
                </div>
            </div>
        </div>
    </div> 
  );
}
export default Add;
