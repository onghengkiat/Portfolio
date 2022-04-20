import React, { useEffect, useState } from 'react';
import { 
    HiCalendar,
} from 'react-icons/hi'

import {
    CgOrganisation
} from 'react-icons/cg'

import './Experiences.css'
import data from '../../data/experiences.json'

// TODO: Add some contents below the My Working Experiences

export default function Experiences({ setActive }) {
    useEffect( () => {
        setActive(1);
    }, [setActive]);

    return(
        <div className="pageWrapper" id="experiencesPageWrapper">
            <header id="experiencesPageHeader">
                <h1>My Working Experiences</h1>
                <p></p>
            </header>

            <ul className="timeline">
                { 
                    data.map((item, index) => 
                        <li className="timelineItem" key={`experience${index}`}>
                            <div className={index % 2 === 0 ? "directionRight" : "directionLeft"}>
                                <div className="flagWrapper">
                                    <span className="circle"></span>
                                    <div className="flag">{item.designation}</div>
                                </div>
                                <div className="description">
                                    <div className="descriptionTitle">
                                        
                                        <div className="descriptionTitleOrganization">
                                            <CgOrganisation />
                                            {item.organization}
                                        </div>

                                        
                                        <div className="descriptionTitleDate">
                                            <HiCalendar />
                                            {item.date}
                                        </div>
                                    </div>
                                    <ul className="descriptionContents">
                                        {
                                            item.descriptions.map((description, index_) => <li key={`description${index}`}>{description}</li>)
                                        }
                                    </ul>
                                    <ul className="skills">
                                        {
                                            item.skills.map((skill, _) => <li key={skill}>{skill}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}