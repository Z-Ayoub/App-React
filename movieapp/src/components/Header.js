import React from 'react';
import { Link } from 'react-router-dom';
import toto from './Header.module.css';
const Header = () => {
  return (
    <Header>
        <div className={toto.container}>
            <div className={toto.innerContent}>
                <div className={toto.brand}>
                    <Link to="/">WatchList</Link>
                </div>

                <ul className={toto.navlinks}>
                    <li>
                        <Link to="/">Watch List</Link>
                    </li>

                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>

                    <li>
                        <Link to="/ajouter" className={toto.btn}>+ Ajouter</Link>
                    </li>
                </ul>
            </div>
        </div>
    </Header>
  );
}
export default Header;
