import React from 'react';
import sAbout from '../About/About.module.scss';
import ava from '../img/ava.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import sJob from "../RemoteJob/RemoteJob.module.scss";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons/faArrowDown";

export const About = () => {
    return (
        <div className={sAbout.about}>
            <div className={sAbout.__container}>
                <div className={sAbout.aboutAs}>
                    <div className={sAbout.imageIbg}>
                        <img src={ava} alt="#"/>
                    </div>
                    <div className={sAbout.content}>
                        <div className={sAbout.contentBlock}>
                            <h1 className={sAbout.title}>
                                ALIAKSEI DUBROUSKI
                            </h1>
                            <p className={sAbout.text}>
                                FRONT-END DEVELOPER (REACT DEVELOPER)
                            </p>
                            <p className={sAbout.about}>
                                Hi, I’m Aliaksei Dubrouski and I'm an experienced Front-end developer.
                            </p>
                        </div>
                        <div className={sAbout.btnLink}>
                            <a href="#">Download CV
                                <FontAwesomeIcon className={sAbout.icon} icon={faArrowDown}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

