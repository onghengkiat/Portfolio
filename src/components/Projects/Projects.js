import React, { useEffect, useState } from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import "./Projects.css";
import featuredProjectsData from "../../data/featuredProjects.json";
import otherProjectsData from "../../data/otherProjects.json";

const INITIAL_NUMBER_OF_OTHER_PROJECT_TO_SHOW = 6;
const NUMBER_OF_LOAD_MORE_PROJECTS = 6;
const NUMBER_OF_OTHER_PROJECT = otherProjectsData.length;

export default function Projects({ setActive }) {
  const [otherProjectsDataShown, setOtherProjectsDataShown] = useState([]);
  const [numberOfOtherProjectShown, setNumberOfOtherProjectShown] = useState(
    INITIAL_NUMBER_OF_OTHER_PROJECT_TO_SHOW
  );

  useEffect(() => {
    setActive(2);
    setOtherProjectsDataShown(
      otherProjectsData.slice(0, numberOfOtherProjectShown)
    );
  }, [numberOfOtherProjectShown, setActive]);

  const viewMoreOrViewLessOtherProject = () => {
    // check if the view less button is clicked, the number of projects shown is less than initial number of projects shown
    const returnToInitialState =
      numberOfOtherProjectShown - NUMBER_OF_LOAD_MORE_PROJECTS <
      INITIAL_NUMBER_OF_OTHER_PROJECT_TO_SHOW;

    if (numberOfOtherProjectShown < NUMBER_OF_OTHER_PROJECT) {
      // There are more projects to be shown, view more button is clicked
      setNumberOfOtherProjectShown(
        numberOfOtherProjectShown + NUMBER_OF_LOAD_MORE_PROJECTS
      );
    } else if (returnToInitialState) {
      // All projects are shown, view less button is clicked
      // If the view less button is clicked, the number of projects shown is less than initial number of projects shown
      setNumberOfOtherProjectShown(INITIAL_NUMBER_OF_OTHER_PROJECT_TO_SHOW);
    } else {
      // All projects are shown, view less button is clicked
      setNumberOfOtherProjectShown(
        numberOfOtherProjectShown - NUMBER_OF_LOAD_MORE_PROJECTS
      );
    }
  };

  return (
    <div className="pageWrapper" id="projectsPageWrapper">
      <div className="projects">
        <div className="projectsHeader">
          <h1>My Projects</h1>
        </div>
        {featuredProjectsData.map((project, index) => (
          <div
            className={`project ${
              index % 2 === 0 ? "projectRightDirection" : "projectLeftDirection"
            }`}
          >
            <div className="projectImageContainer">
              <img src={project.imagePath} className="projectImage" />
            </div>
            <div className="projectContent">
              <div className="projectName">
                <div>{project.name}</div>
                <a
                  href={project.githubUrl}
                  title="Read the codes"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    title="Visit the website"
                    target="_blank"
                  >
                    <AiOutlineLink />
                  </a>
                ) : null}
              </div>
              <div className="projectDescription">{project.description}</div>
              <ul className="projectSkills">
                {project.skills.map((skill, _) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="projectCardsHeader">
        <h1>My Other Projects</h1>
      </div>
      <ul className="projectCards">
        {otherProjectsDataShown.map((projectCard, index) => (
          <li className="projectCard">
            <h3 className="projectCardName">
              {projectCard.name}
              <a
                href={projectCard.githubUrl}
                title="Read the codes"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              {projectCard.websiteUrl ? (
                <a
                  href={projectCard.websiteUrl}
                  title="Visit the website"
                  target="_blank"
                >
                  <AiOutlineLink />
                </a>
              ) : null}
            </h3>
            <div className="projectCardDescription">
              {projectCard.description}

              <ul className="projectCardSkills">
                {projectCard.skills.map((skill, _) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className="otherProjectButtonBlock">
        <button
          className="viewMoreProjectButton"
          onClick={viewMoreOrViewLessOtherProject}
        >
          {numberOfOtherProjectShown >= NUMBER_OF_OTHER_PROJECT
            ? "View Less"
            : "View More"}
        </button>
      </div>
    </div>
  );
}
