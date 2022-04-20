import React, { useEffect } from 'react';
import './Home.css'

// TODO: Search for a better image as the background image
// TODO: Redesign the texts after getting the better image
// TODO: Add contact info
// TODO: Add academic background
// TODO: Add languages, skills and technologies
// TODO: Download resume

export default function Home({ setActive }) {

    useEffect( () => {
        setActive(0);
    }, [setActive]);

    return(
        <div className="pageWrapper">
            <div id="helloBlock">
                <div className="rightBottom">
                    <div id="helloText" className="introText">Hello! I am</div>
                    <div id="myName" className="introText">Heng Kiat</div>
                </div>
            </div>
        </div>
    );
}