import React, { useEffect, useState } from "react";
import "./Home.css";

import {
  ImCalendar,
  ImBook,
  ImLocation2,
  ImGithub,
  ImLinkedin,
  ImMail4,
  ImWhatsapp,
} from "react-icons/im";

import educationsData from "../../data/educations.json";
import skillsData from "../../data/skills.json";

// TODO: Search for a better image as the background image
// TODO: Download resume

const INITIAL_NUMBER_OF_SKILLS_TO_SHOW = 6;
const NUMBER_OF_LOAD_MORE_SKILLS = 6;
const NUMBER_OF_SKILLS = skillsData.length;

export default function Home({ setActive }) {
  const [skillsDataShown, setSkillsDataShown] = useState([]);
  const [numberOfSkillsShown, setNumberOfSkillsShown] = useState(
    INITIAL_NUMBER_OF_SKILLS_TO_SHOW
  );

  useEffect(() => {
    setActive(0);
    setSkillsDataShown(skillsData.slice(0, numberOfSkillsShown));
  }, [numberOfSkillsShown, setActive]);

  const viewMoreOrViewLessSkills = () => {
    if (numberOfSkillsShown < NUMBER_OF_SKILLS) {
      // There are more projects to be shown, view more button is clicked
      setNumberOfSkillsShown(numberOfSkillsShown + NUMBER_OF_LOAD_MORE_SKILLS);
    }
  };

  return (
    <div id="homePageWrapper" className="pageWrapper">
      <div className="introPicture">
        <div className="introText">
          <h5>Hello! I am</h5>
          <h1>HENG KIAT</h1>
          <div className="contactInfo">
            <a
              href="https://github.com/onghengkiat"
              target="_blank"
              title="Visit my Github"
            >
              <ImGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/heng-kiat-ong-838a27185"
              target="_blank"
              title="Visit my LinkedIn"
            >
              <ImLinkedin />
            </a>
            <a
              href="mailto:onghengkiat105@gmail.com"
              target="_top"
              title="Email me at onghengkiat105@gmail.com"
            >
              <ImMail4 />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=601111505490"
              target="_blank"
              title="WhatsApp me at +6011-11505490"
            >
              <ImWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="educationBlock">
        <div className="educationHeader">
          <h1>My Educational Background</h1>
        </div>
        <ul className="educations">
          {educationsData.map((education, _) => (
            <li className="education">
              <div className="educationImageContainer">
                <img
                  className="educationImage"
                  src={education.imageUrl}
                  alt={education.title}
                ></img>
              </div>
              <div className="educationContent">
                <div className="educationInstitute">{education.institute}</div>
                <div className="educationTitle">
                  <ImBook /> {education.title}
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
          ))}
        </ul>
      </div>
      <div className="skillsBlock">
        <div className="skillsHeader">
          <h1>My Skills</h1>
        </div>
        <ul className="skills">
          {skillsDataShown.map((skill, _) => (
            <li className="skill">
              <div className="skillPictureContainer">
                <img
                  className="skillPicture"
                  src={skill.imageUrl}
                  alt={skill.name}
                ></img>
              </div>
              <div className="skillContent">
                <h3 className="skillName">{skill.name}</h3>
                <div className="skillDescription">{skill.description}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="skillsButtonBlock">
          <button
            className="viewMoreSkillButton"
            onClick={viewMoreOrViewLessSkills}
          >
            {numberOfSkillsShown >= NUMBER_OF_SKILLS ? "End" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
}
