import React from 'react';
import sNav from './StyleNav.module.scss'


export const Nav = () => {

    return (
        <nav className={sNav.menu}>
            <ul className={sNav.list}>
                <li className={sNav.item}><a className={sNav.link}
                                             href="src/components/header/nav/Nav#">Home</a></li>
                <li className={sNav.item}><a className={sNav.link}
                                             href="src/components/header/nav/Nav#">Skills</a></li>
                <li className={sNav.item}><a className={sNav.link}
                                             href="src/components/header/nav/Nav#">Works</a></li>
                <li className={sNav.item}><a className={sNav.link}
                                             href="src/components/header/nav/Nav#">Contact</a></li>
            </ul>
        </nav>
    );
};


