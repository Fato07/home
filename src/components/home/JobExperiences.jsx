// JobExperiences.js
import React, { useState, useEffect } from "react"
import { getJobExperiences } from "./linkedInService"
import "./JobExperiences.css"

const JobExperiences = ({ accessToken }) => {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    async function fetchData() {
      const jobExperiences = await getJobExperiences(accessToken)
      setExperiences(jobExperiences)
    }

    fetchData()
  }, [accessToken])

  return (
    <div className="job-experiences">
      <h2>Job Experiences</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={experience.id}>
            <div
              className={`timeline-dot ${index % 2 ? "right" : "left"}`}
            ></div>
            <div className={`job-experience ${index % 2 ? "right" : "left"}`}>
              <h3>{experience.title}</h3>
              <p>{experience.company.name}</p>
              <p>
                {experience.startDate.month}/{experience.startDate.year} -{" "}
                {experience.endDate
                  ? `${experience.endDate.month}/${experience.endDate.year}`
                  : "Present"}
              </p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobExperiences
