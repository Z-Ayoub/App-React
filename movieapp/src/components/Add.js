import React from 'react';
import toto from './Add.module.css';
/*
importer useState: permet essentiellement de créer un état
à l'intérieur d'un composant fonctionnel 
*/
import {useState} from 'react';
import ResultCard from './ResultCard';

const Add = () => {

  /* créer une nouvelle variable s'appelle notre état Query et un autre paramètre setQuery qui nous permet de
     changer notre état et ensuite nous allons la fonction useState qui prend l'état initial pour commencer */
  const [query,setQuery] = useState("");
  const [results, setResults] = useState([]);

  /* Créer une fonction Const onChange ça va avoir l'ensemble d'événements défini puis tout d'abord nous allons
  empêcher les défauts */
  const onChange = (e) => {
      e.preventDefault();
      setQuery(e.target.value);

      /* la méthode fetch() prend l’URL des ressources à récupérer comme argument. 
         fetch() retourne la réponse (si tout se passe bien) avec res.json(). */
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6453b53f4533c3e763c494b766ff3cf3&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      ).then((res) => res.json())
      .then((data) => {
          if(!data.errors){
            setResults(data.results);
          }else {
            setResults([]);
          }
      });
  }
  return (
    <div className={toto.addPage}>
      <div className={toto.container}>
        <div className={toto.addContent}>
          <div className={toto.inputWrapper}>
            <input type="text" 
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
            />

        {results.length > 0 && (
                    <ul className={toto.results}>
                        {results.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie}/>
                            </li>
                        ))}
                    </ul>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;