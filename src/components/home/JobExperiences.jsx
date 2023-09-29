import React from "react"
import "../../styles/jobExperiences.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import monese from "../../Images/moneseLogo.png"
import zenown from "../../Images/zenown.png"
import exove from "../../Images/exove.png"
import kuheneNagel from "../../Images/kuheneNagel.png"
import fdmntlSecrets from "../../Images/fdmntlSecrets.png"
import ericsson from "../../Images/ericsson.png"

const JobExperiences = () => {
  const jobExperiencesData = [
    {
      id: 0,
      name: "Monese · Full-time",
      companyIcon: "monese.png",
      themeColor: "#0073E6",
      location: "Tallinn, Estonia",
      jobTitle: "Frontend Software Engineer",
      date: "Oct 2022 - Present",
      duration: "7 mos",
      description: "",
      skills: "",
      url: "https://monese.com/ee/en",
    },
    {
      id: 1,
      name: "ZenOwn · Contract",
      companyIcon: "zenown.png",
      themeColor: "#0652e6",
      location: "Remote",
      jobTitle: "Frontend Developer",
      date: "Feb 2023 - Mar 2023",
      duration: "2 mos",
      description: "",
      skills: "",
      url: "https://www.zenown.com/",
    },
    {
      id: 2,
      name: "Exove · Full-time",
      companyIcon: "exove.png",
      themeColor: "black",
      location: "Tallinn, Estonia",
      jobTitle: "Developer",
      date: "Sep 2021 - Oct 2022",
      duration: "1 yr 2 mos",
      description: "",
      skills: "",
      url: "https://www.exove.com/",
    },
    {
      id: 3,
      name: "Kuehne+Nagel · Internship",
      companyIcon: "kuheneNagel.png",
      themeColor: "#003369",
      location: "Tallinn, Estonia",
      jobTitle: "Frontend Developer",
      date: "Jul 2021 - Aug 2021",
      duration: "2 mos",
      description: "",
      skills: "",
      url: "https://home.kuehne-nagel.com/",
    },
    {
      id: 4,
      name: "The Fundamental Secrets · Full-time",
      companyIcon: "fdmntlSecrets.png",
      themeColor: "black",
      location: "Remote",
      jobTitle: "Full-stack Developer",
      date: "Feb 2021 - May 2021",
      duration: "4 mos",
      description: "",
      skills: "",
      url: "https://www.thefundamentalsecrets.com/",
    },
    {
      id: 5,
      name: "Ericsson · Internship",
      companyIcon: "ericsson.png",
      themeColor: "#0743ba",
      location: "Tallinn, Estonia",
      jobTitle: "Test Development Engineer Intern",
      date: "Jun 2020 - Aug 2020",
      duration: "3 mos",
      description: "",
      skills: "",
      url: "https://www.ericsson.com/",
    },
  ]

  const mapCompanyIcons = (jobExperiences) => {
    const images = {
      "monese.png": monese,
      "zenown.png": zenown,
      "exove.png": exove,
      "kuheneNagel.png": kuheneNagel,
      "fdmntlSecrets.png": fdmntlSecrets,
      "ericsson.png": ericsson,
    }

    return jobExperiences.map((job) => {
      return {
        ...job,
        companyIcon: images[job.companyIcon],
      }
    })
  }

  const jobExperiencesWithIcons = mapCompanyIcons(jobExperiencesData)

  return (
    <div className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 mb-5 text-center">
              Companies I have worked with
            </h1>
            <VerticalTimeline lineColor="black">
              {jobExperiencesWithIcons.map((experience) => (
                <VerticalTimelineElement
                  key={experience.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: experience.themeColor,
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  dateClassName="date-color"
                  iconStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                    padding: "0",
                    border: "none",
                  }}
                  icon={
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={experience.companyIcon}
                        alt={experience.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  }
                >
                  <h3 className="vertical-timeline-element-title">
                    {experience.jobTitle}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {experience.name}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    {experience.location}
                  </h4>
                  <p>
                    {/* Creative Direction, User Experience, Visual Design, Project Management, Team Leading */}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobExperiences
