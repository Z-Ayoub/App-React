Nom : ZINOU 
Prénom : Ayoub


# React-movie

React Movies Watchlist App With API implementing React Hooks, Context API, storing data in localStorage and fetching data from an external API (The Movie Database).

# Prerequisites

Things you need to get started:

- A recent version of Node running on your machine (8.0 or higher), check this [link](https://nodejs.org/en/) to download it.
- A cool text editor ( VS Code for example ).

# Installing 

To run the project, follow these steps:

- Create a folder & enter into that folder
```
cd <folder-name> 
```
- Clone this repository:
```
https://github.com/Z-Ayoub/App-React.git
```
- Install all the project's dependencies:
```
npm install
```
- Once that's done, run the project:
```
start
```
# Ressources 

- Google font: https://fonts.google.com/
- API: https://www.themoviedb.org/

# Features

- Add movies to Watchlist
- Add movies to Watchedlist 
- Search movies by title
- Remove movies from Watchlist
- Remove film from Watched
- Move movies to Watchlist

# Partie Personnelle 

Tout d'abord, React est une bibliothèque JavaScript qui permet de réaliser des applications web cross platform.C’est une syntaxe, basée sur la norme ECMAScript 6,
qui permet de créer des composants JS pour structurer notre application à notre convenance, et designer la manière dont nous allons développer. La structure de projet
est libre et nous permet de laisser libre court à notre imagination pour mettre en place le système le plus adapté à nos besoins. React est présent sur les principales 
plateformes de gestionnaires de paquets comme Npm.

Router React est un outil génial qui permet de donner l'illusion qu'on a plusieurs pages dans nos applications react alors qu'on est  juste en train de changer les 
composants qui ont déjà chargé vu qu'on est sur une seule page applications alors que sur un site classique à chaque fois qu'on veut aller sur les différentes pages 
ça va faire un nouvel appel aux serveurs alors qui sait pas du tout on va vraiment juste donner l'illusion qu'on a plusieurs pages mais on a déjà tout chargé on change
juste les composants sous les yeux de nos visiteurs. Pour ajouter React Router dans notre application, exécutez-le dans le terminal à partir du répertoire racine de 
l'application :
```
npm install react-router-dom
```
Il existe deux types de composants de routeur :
  - BrowserRouter : Il est utilisé pour gérer l'URL dynamique.
  - HashRouter : Il est utilisé pour gérer la requête statique.
Exemple :
```
import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './about'  
import Contact from './contact'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/about">About</Link>  
        </li>  
        <li>  
          <Link to="/contact">Contact</Link>  
        </li>  
      </ul>  
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));
```

Hooks permettent aux composants fonctionnels d'avoir accès à l'état et à d'autres fonctionnalités de React. De ce fait, les composants de classe ne sont généralement plus nécessaires. On peut utiliser plusieurs Hooks :
 - useState : est la nouvelle façon de déclarer un état dans l'application React. Hook utilise le composant fonctionnel useState() pour définir et récupérer l'état.
 example : 
```
import React, { useState } from 'react';  
  
function CountApp() {  
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click here  
      </button>  
    </div>  
  );  
}  
export default CountApp;  
```
 
 - useEffect : permet d'effectuer des effets secondaires (une action) dans les composants de la fonction. Il n'utilise pas les méthodes de cycle de vie des composants qui sont disponibles dans les composants de classe. En d'autres termes, useEffect est équivalent aux méthodes de cycle de vie componentDidMount(), componentDidUpdate() et componentWillUnmount().
Les effets secondaires ont des fonctionnalités communes que la plupart des applications Web doivent exécuter, telles que :
    - Mise à jour du DOM,
    - Récupérer et consommer des données depuis une API serveur,
    - Mise en place d'un abonnement, etc.
 exemple :
 ```
 import React, { useState, useEffect } from 'react';  
  
function CounterExample() {  
  const [count, setCount] = useState(0);  
  
  useEffect(() => {  
    document.title = `You clicked ${count} times`;  
  });  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click here  
      </button>  
    </div>  
  );  
}  
export default CounterExample;  
 ```
 - useContext : est un hook qui permet de se “brancher” depuis un composant enfant qui a été wrappé par un Provider  , et donc d’accéder simplement au state partagé.
On utilise useContext en configurant un Context Provider et définissan les données que nous souhaitons stocker. Context est utilisé pour partager des données qui peuvent être considérées comme "Global" pour l'arborescence des composants React et utiliser ces données si nécessaire, telles que l'utilisateur authentifié actuel, le thème, etc.
 - useReducer : est un hook qui permettra de définir un état en l'accompagnant d'une fonction réductrice qui permettra de décrire les différentes mutations possibles.

Props signifient "Properties". Ce sont des composants en lecture seule. C'est un objet qui stocke la valeur des attributs d'une balise et fonctionne de manière similaire aux attributs HTML. Il permet de transmettre des données d'un composant à d'autres composants. Il est similaire aux arguments de fonction. Props sont passés au composant de la même manière que les arguments passés dans une fonction.


React a son propre système de gestion des événements qui est très similaire à la gestion des événements sur les éléments DOM. Le système de gestion des événements de réaction est connu sous le nom d'événements synthétiques. L'événement synthétique est un wrapper inter-navigateur de l'événement natif du navigateur.
example: 
```
function test() {  
    function handleClick(e) {  
        e.preventDefault();  
        console.log('Hello World.');  
    }  
    return (  
        <a href="#" onClick={handleClick}>  
              Click here  
        </a>  
    );  
} 
```
React Map : méthode utilisée pour parcourir et afficher une liste d'objets similaires d'un composant. Une carte n'est pas la fonctionnalité de React. Au lieu de cela, c'est la fonction JavaScript standard qui pourrait être appelée sur n'importe quel tableau. La méthode map() crée un nouveau tableau en appelant une fonction fournie sur chaque élément du tableau appelant.
Exemple :
```
import React from 'react';   
import ReactDOM from 'react-dom';   
  
function App(props) {  
  const myLists = props.myLists;  
  const listItems = myLists.map((myList) =>  
    <li>{myList}</li>  
  );  
  return (  
    <div>  
          <h2>React Map Example</h2>  
              <ul>{listItems}</ul>  
    </div>  
  );  
}  
const myLists = ['Apple', 'Orange', 'Banane', 'Avocado', 'pineapple'];   
ReactDOM.render(  
  <NameList myLists={myLists} />,  
  document.getElementById('app')  
);  
export default App;  
```

