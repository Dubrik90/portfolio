import React from 'react';
import sSkill from './Skill.module.scss'

export const Skill = () => {
    return (
        <div className={sSkill.card}>
            <div className={sSkill.image}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                    alt="react"/>
            </div>
            <p className={sSkill.title}>React</p>
            <div className={sSkill.bar}>
                <div className={sSkill.ability}>
                    <p className={sSkill.name}>React</p>
                    <p className={sSkill.procent}>90%</p>
                </div>
                <div className={sSkill.blackFill}>
                    <div className={sSkill.whiteFill}></div>
                </div>

            </div>
            <p className={sSkill.text}>React is an open-source JavaScript library for developing user interfaces. React
                is developed and supported by Facebook, Instagram, and a community of of individual developers and
                corporations. React can be used to develop single-page and mobile applications.</p>
        </div>
    );
};

