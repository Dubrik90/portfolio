import React, {useState} from 'react';
import sHeader from './StyleHeader.module.scss'
import {Spiral as Hamburger} from 'hamburger-react'
import {Nav} from './Nav/Nav';

export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={sHeader.header}>
            <div className={sHeader.__container}>
                {isOpen &&
                    <Nav/>
                }
                <Hamburger color={isOpen? "black": 'white'} toggled={isOpen} toggle={setOpen}/>
            </div>
        </div>
    );
};

