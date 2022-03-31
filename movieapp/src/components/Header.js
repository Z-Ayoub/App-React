import React from 'react';
// importer le lien de react-route-dom qui nous permettra de nous déplacer et de créer des liens de navigation qui fonctionnent correctement
import { Link } from 'react-router-dom';
import toto from './Header.module.css';
const Header = () => {
  return (
    <div className={toto.header}>
        <div className={toto.container}>
            <div className={toto.innerContent}>
                <div className={toto.brand}>
                {/*créer un lien et cela nous amènera essentiellement à la page d'accueil*/}
                    <Link to="/">Home</Link>
                </div>

                <ul className={toto.navlinks}>
                    <li>
                        {/*créer un lien et cela nous amènera essentiellement à la page Films à regarder */}
                        <Link to="/">Films à regarder</Link>
                    </li>

                    <li>
                        {/*créer un lien et cela nous amènera essentiellement à la page Films déjà vu */}
                        <Link to="/watched">Films déjà vu</Link>
                    </li>

                    <li>
                        {/*créer un lien et cela nous amènera essentiellement à la page Ajouter (pour ajouter des films à regarder ou bien déjà vu) */}
                        <Link to="/add" className={toto.btn}>+ Ajouter</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Header;