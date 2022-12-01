import React from 'react';
import sJob from '../RemoteJob/RemoteJob.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons/faArrowDown";

export const RemoteJob = () => {
    return (
        <div className={sJob.remoteJob}>
            <div className={sJob.__container}>
                <h2 className={sJob.title}> Considering remote work</h2>
                <div className={sJob.btn}>
                    <div className={sJob.button}>
                        <a href="https://github.com/Dubrik90">Open github
                            <FontAwesomeIcon className={sJob.icon} icon={faArrowDown}/>

                    </a> <span className={sJob.btnBlock}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

