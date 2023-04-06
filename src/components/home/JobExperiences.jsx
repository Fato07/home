import React, { useState, useEffect } from "react"
import "../../jobExperiences.css"

const JobExperiences = () => {
  const testData = [
    {
      id: 1,
      title: "Software Engineer",
      company: { name: "ABC Company" },
      startDate: { month: 6, year: 2018 },
      endDate: { month: 5, year: 2021 },
      description: "Worked on various web development projects.",
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: { name: "XYZ Company" },
      startDate: { month: 6, year: 2021 },
      endDate: null,
      description: "Leading a team of developers.",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: { name: "ABC Company" },
      startDate: { month: 6, year: 2018 },
      endDate: { month: 5, year: 2021 },
      description: "Worked on various web development projects.",
    },
    {
      id: 4,
      title: "Senior Software Engineer",
      company: { name: "XYZ Company" },
      startDate: { month: 6, year: 2021 },
      endDate: null,
      description: "Leading a team of developers.",
    },
  ]

  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    setExperiences(testData)
  }, [])

  return (
    <div className="job-experiences jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 mb-5 text-center">Job Experiences</h1>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <div className="timeline-item" key={experience.id}>
                  <div
                    className={`timeline-dot ${index % 2 ? "right" : "left"}`}
                  ></div>
                  <div
                    className={`job-experience ${index % 2 ? "right" : "left"}`}
                  >
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
        </div>
      </div>
    </div>
  )
}

export default JobExperiences
