import React, { useState, useEffect } from 'react'
import Typist from 'react-typist'
import configuration from '../../editable-stuff/configurations.json'

const MainBody = () => {
  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [hoverstatus, setHoverstatus] = useState(
    new Array(configuration.icons.length).fill('socialicons')
  )

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus]

    if (data.event === 'enter') {
      newhoverStatus[data.icon.id] = 'socialiconshover'
      return setHoverstatus(newhoverStatus)
    } else if (data.event === 'leave') {
      newhoverStatus[data.icon.id] = 'socialicons'
      return setHoverstatus(newhoverStatus)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <Typist className="lead" cursor={{ show: false }}>
            <h1 className="display-1">
              Hello, I'm <span style={{ color: 'black' }}>{configuration.FirstName + ' ' + configuration.MiddleName + ' ' + configuration.LastName}</span>
            </h1>
            <span>{configuration.devDesc}</span>
          </Typist>
          <div>
            <div className="p-5">
              {configuration.icons.map((icon) => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split('-')[1]}`}
                >
                  <i
                    className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]
                      }`}
                    onMouseOver={() => toggleHover({ icon, event: 'enter' })}
                    onMouseOut={() => toggleHover({ icon, event: 'leave' })}
                  />
                </a>
              ))}
            </div>
            <a
              href="https://tryhackme.com/p/Candidate14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://tryhackme-badges.s3.amazonaws.com/Candidate14.png"
                alt="TryHackMe"
              />
            </a>
          </div>

          <a
            style={{ marginTop: '4em' }}
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainBody
