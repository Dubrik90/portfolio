import React from 'react';
import StyleFooter from './SFooter.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobile, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';


export const Footer = () => {
    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.__container}>
                <h3 className={StyleFooter.title}>ALIAKSEI DUBROUSKI</h3>
                <div className={StyleFooter.information}>

                    <div className={StyleFooter.block}>
                        <a href="tel:+375292050369" className={StyleFooter.link}> <FontAwesomeIcon
                            className={StyleFooter.icon} icon={faMobile}/></a>
                    </div>

                    <div className={StyleFooter.block}>
                        <a href="https://surl.li/djvkl" className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faLocationDot}/></a>
                    </div>

                    <div className={StyleFooter.block}>
                        <a href="https://www.linkedin.com/in/alexey-dubrousky-b10245233/" className={StyleFooter.link}>
                            <FontAwesomeIcon className={StyleFooter.icon} icon={faLinkedin}/></a>
                    </div>

                    <div className={StyleFooter.iconsBlock}>
                        <a href="https://t.me/dubrik90" className={StyleFooter.informationIcons}>
                            <FontAwesomeIcon className={StyleFooter.block__icon} icon={faTelegram}/></a>
                    </div>
                    <div className={StyleFooter.iconsBlock}>
                        <a href="https://github.com/Dubrik90" className={StyleFooter.informationIcons}>
                            <FontAwesomeIcon className={StyleFooter.block__icon} icon={faGithub}/></a>
                    </div>
                    <div className={StyleFooter.iconsBlock}>
                        <a href="https://www.codewars.com/users/AliaxeiDubrouski"
                           className={StyleFooter.informationIcons}>
                            <FontAwesomeIcon className={StyleFooter.block__icon} icon={faFileCode}/></a>
                    </div>

                </div>
                <p className={StyleFooter.text}>© 2022 All rights reserved.</p>
            </div>
        </div>
    );
};