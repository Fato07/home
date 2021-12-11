import React, { useState } from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import {
  aboutHeading,
  aboutDescription,
  mediumBlogs
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {

  const [resumeURL] = useState(Pdf);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            {aboutDescription.split("\n").map((paragraph, key) => {
              return <p className="lead text-center">{paragraph}</p>
            })
            }
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
                <span>{"    "}</span>
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={mediumBlogs}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Blogs
                </a>
              </p>
            )}
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
