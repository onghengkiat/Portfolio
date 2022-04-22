import React, { useEffect, useState } from 'react';
import './Home.css'

import {
    ImCalendar,
    ImBook,
    ImLocation2,
} from 'react-icons/im'

import educationsData from '../../data/educations.json'
import skillsData from '../../data/skills.json'

// TODO: Search for a better image as the background image
// TODO: Add contact info
// TODO: Add academic background
// TODO: Download resume

const INITIAL_NUMBER_OF_SKILLS_TO_SHOW = 6;
const NUMBER_OF_LOAD_MORE_SKILLS = 6;
const NUMBER_OF_SKILLS = skillsData.length;

export default function Home({ setActive }) {
    const [skillsDataShown, setSkillsDataShown] = useState([]);
    const [numberOfSkillsShown, setNumberOfSkillsShown] = useState(INITIAL_NUMBER_OF_SKILLS_TO_SHOW);

    useEffect( () => {
        setActive(0);
        setSkillsDataShown(skillsData.slice(0, numberOfSkillsShown));
    }, [numberOfSkillsShown, setActive]);

    const viewMoreOrViewLessSkills = () => {
        // check if the view less button is clicked, the number of projects shown is less than initial number of projects shown
        const returnToInitialState = (numberOfSkillsShown - NUMBER_OF_LOAD_MORE_SKILLS) < INITIAL_NUMBER_OF_SKILLS_TO_SHOW

        if (numberOfSkillsShown < NUMBER_OF_SKILLS) { 
            // There are more projects to be shown, view more button is clicked
            setNumberOfSkillsShown(numberOfSkillsShown + NUMBER_OF_LOAD_MORE_SKILLS);
        } else if (returnToInitialState) {
            // All projects are shown, view less button is clicked
            // If the view less button is clicked, the number of projects shown is less than initial number of projects shown
            setNumberOfSkillsShown(INITIAL_NUMBER_OF_SKILLS_TO_SHOW)
        } else {
            // All projects are shown, view less button is clicked
            setNumberOfSkillsShown(numberOfSkillsShown - NUMBER_OF_LOAD_MORE_SKILLS);
        }
    }

    return(
        <div id="homePageWrapper" className="pageWrapper">
            <div className="introPicture">
                <div className="introText">
                    <h5>Hello! I am</h5>
                    <h1>HENG KIAT</h1>
                </div>
            </div>
            <div className="educationBlock">
                <div className="educationHeader">
                    <h1>My Educational Background</h1>
                </div>
                <ul className="educations">
                    {educationsData.map((education, _) =>
                        <li className="education">
                            <div className="educationImageContainer">
                                <img className="educationImage" src={education.imageUrl}></img>
                            </div>
                            <div className="educationContent">
                                <div className="educationInstitute">
                                    {education.institute}
                                </div>
                                <div className="educationTitle">
                                    <ImBook />  {education.title}
                                </div>
                                <div className="educationDate">
                                    <ImCalendar /> {education.date}
                                </div>
                                <div className="educationLocation">
                                    <ImLocation2 /> {education.location}
                                </div>
                                <div className="educationDescription">
                                    {education.description}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className="skillsBlock">
                <div className="skillsHeader">
                    <h1>My Skills</h1>
                </div>
                <ul className="skills">
                    {skillsDataShown.map((skill, _) => 
                        <li className="skill">
                            <div className="skillPictureContainer">
                                <img className="skillPicture" src={skill.imageUrl}></img>
                            </div>
                            <div className="skillContent">
                                <h3 className="skillName">
                                    {skill.name}
                                </h3>
                                <div className="skillDescription">
                                    {skill.description}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                <div className="skillsButtonBlock">
                    <button className="viewMoreSkillButton" onClick={viewMoreOrViewLessSkills}>
                        {numberOfSkillsShown >= NUMBER_OF_SKILLS ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
        </div>
    );
}