import React from 'react';
import toto from './Add.module.css';
import{useState} from 'react';
const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
      e.preventDefault();

      setQuery(e.target.value);

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      ).then((res) => res.json())
      .then((data) => {
          console.log(data);
      });
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
