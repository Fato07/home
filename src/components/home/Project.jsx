import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import configuration from "../../editable-stuff/configurations.json"

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([])

  const handleRequest = useCallback((e) => {
    axios
      .get(
        configuration.gitHubLink +
          configuration.gitHubUsername +
          configuration.gitHubQuerry
      )
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setProjectsArray(
          response.data.slice(0, configuration.projectsLength)
        )
      })
      .catch((error) => {
        // handle error
        return console.error(error.message)
      })
      .finally(() => {
        // always executed
      })
  }, [])

  useEffect(() => {
    handleRequest()
  }, [handleRequest])

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">{configuration.projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Project
