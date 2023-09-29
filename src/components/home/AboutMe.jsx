import React, { useState, useEffect } from "react"
import Pdf from "../../editable-stuff/resume.pdf"
import configuration from "../../editable-stuff/configurations.json"
import AOS from "aos"
import "aos/dist/aos.css"
import "../../styles/aboutme.css"
const AboutMe = () => {
  const [resumeURL] = useState(Pdf)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            <h1 className="display-4 mb-5 text-center">
              {configuration.aboutHeading}
            </h1>
            {configuration.aboutDescription
              .split("\n")
              .map((paragraph, key) => {
                return (
                  <p key={key} className="lead text-center about-text">
                    {" "}
                    {paragraph}{" "}
                  </p>
                )
              })}
            {resumeURL && (
              <div className="text-center">
                <a
                  className="btn btn-outline-dark btn-lg m-2 custom-btn"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
                <a
                  className="btn btn-outline-dark btn-lg m-2 custom-btn"
                  href={configuration.mediumBlogs}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Blogs"
                >
                  Blogs
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
