import React from "react"
import configuration from "../../editable-stuff/configurations.json"
import "../../styles/tools.css"
import Marquee from "react-fast-marquee"

const Skills = () => {
  // Combine both arrays using the spread operator
  const allTools = [
    ...configuration.frontEndTools,
    ...configuration.backEndTools,
  ]

  return (
    <div>
      <div
        id="aboutme"
        className="jumbotron jumbotron-fluid bg-transparent m-0"
      >
        <div className="container container-fluid p-5">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-4 mb-5 text-center">Skills</h1>

              <Marquee speed={30}>
                {allTools.map((tool, index) => (
                  <div key={index} className="skill">
                    <img src={tool.url} alt={tool.name}></img>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
