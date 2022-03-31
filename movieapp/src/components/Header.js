import React from 'react';
import { Link } from 'react-router-dom';
import toto from './Header.module.css';
const Header = () => {
  return (
    <div className={toto.header}>
        <div className={toto.container}>
            <div className={toto.innerContent}>
                <div className={toto.brand}>
                    <Link to="/">Home</Link>
                </div>

                <ul className={toto.navlinks}>
                    <li>
                        <Link to="/">Films à regarder</Link>
                    </li>

                    <li>
                        <Link to="/watched">Films déjà vu</Link>
                    </li>

                    <li>
                        <Link to="/ajouter" className={toto.btn}>+ Ajouter</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Header;