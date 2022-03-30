import React from 'react';
import toto from './Add.module.css';
import {useState} from 'react';
import {ResultCard} from './ResultCard';
const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
      e.preventDefault();

      setQuery(e.target.value);

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      ).then((res) => res.json())
      .then((data) => {
          if(!data.errors){
            setResults(data.results);
          }else {
            setResults([]);
          }
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

                {results.length > 0 && (
                    <ul className={toto.results}>
                        {results.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div> 
  );
}
export default Add;
