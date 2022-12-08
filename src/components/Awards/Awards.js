import React, { useEffect } from "react";

import { GrOrganization, GrSchedules, GrAchievement } from "react-icons/gr";

import "./Awards.css";
import data from "../../data/awards.json";

export default function Awards({ setActive }) {
  useEffect(() => {
    setActive(3);
  }, [setActive]);

  return (
    <div className="pageWrapper" id="awardsPageWrapper">
      <div className="awardsHeader">
        <h1>My Awards</h1>
      </div>
      <ul className="awards">
        {data.map((award, index) => (
          <li className="award" key={`award-${index}`}>
            <div className="awardImageContainer">
              <img
                src={award.imageUrl}
                className="awardImage"
                alt={award.award}
              />
            </div>
            <div className="awardContent">
              <div className="awardTags">
                <div className="awardTag awardOrganizer">
                  <GrOrganization />
                  {award.organizer}
                </div>

                <div className="awardTag awardDate">
                  <GrSchedules />
                  {award.date}
                </div>

                <div className="awardTag awardAward">
                  <GrAchievement />
                  {award.award}
                </div>
              </div>
              <h4 className="awardName">{award.name}</h4>
              <div className="awardDescription">{award.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
