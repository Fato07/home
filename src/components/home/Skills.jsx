import React from "react"
import configuration from "../../editable-stuff/configurations.json"
import ToolsCard from "./ToolsCard"
import "../../tools.css"

const Skills = () => {
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

              <div class="tools-wrap">
                {configuration.frontEndTools.map((frontendTool) => (
                  <ToolsCard props={frontendTool} />
                ))}
              </div>

              <h2></h2>
              <h2></h2>

              <div class="tools-wrap">
                {configuration.backEndTools.map((backEndTool) => (
                  <ToolsCard props={backEndTool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
