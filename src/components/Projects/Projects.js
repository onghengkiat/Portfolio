import React, { useEffect } from 'react';

import { 
    AiFillGithub,
    AiOutlineLink,
} from 'react-icons/ai'

import './Projects.css'
import featureProjectsData from '../../data/featuredProjects.json'

export default function Projects({ setActive }) {

    useEffect( () => {
        setActive(2);
    }, [setActive]);

    return(
        <div className="pageWrapper" id="projectsPageWrapper">
            <div className="projects">
                <div className="projectsHeader">
                    <h1>My Projects</h1>
                </div>
                {featureProjectsData.map((project, index) => 
                    <div className={`project ${index % 2 === 0 ? "projectRightDirection" : "projectLeftDirection"}`}>
                        <div className="projectImageContainer">
                            <img src={project.imagePath} className="projectImage"/>
                        </div>
                        <div className="projectContent">
                            <div className="projectName">
                                <div>
                                {project.name}
                                </div>
                                <a href={project.githubUrl} title="Read the codes" target="_blank"><AiFillGithub/></a>
                                <a href={project.websiteUrl} title="Visit the website" target="_blank"><AiOutlineLink/></a>
                            </div>
                            <div className="projectDescription">
                                {project.description}
                            </div>
                            <ul className="projectSkills">
                                {
                                    project.skills.map((skill, _) => 
                                        <li>{skill}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className="projectCards">
                <div className="projectCardsHeader">
                    <h1>Other Projects</h1>
                </div>
                <div className="projectCard">
                    <div className="projectCardName">
                        Project Card
                    </div>
                    <div className="projectCardDescription">
                        Description
                    </div>
                </div>
            </div>
        </div>
    );
}