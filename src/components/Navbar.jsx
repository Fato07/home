import React, { useState, useEffect } from 'react'
import Pdf from '../editable-stuff/resume.pdf'
import reference from '../editable-stuff/Huawei_Recommendation.pdf'
import { FirstName } from '../editable-stuff/configurations.json'

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const istop = window.scrollY < 200
      if (istop !== isTop) {
        setIsTop(istop)
      }
    })
  }, [isTop])

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? 'bg-transparent' : 'bg-gradient'
      } `}
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL + '/#home'}>
        {`<${FirstName} />`}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + '/#aboutme'}
            >
              <b>About</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b>Resume</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + '/#projects'}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + '/#portfolio'}
            >
              Portfolio
            </a>
          </li>
         
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={reference}
              target="_blank"
              rel="noreferrer noopener"
            >
              Reference
            </a>
          </li>
         
        </ul>
        <span >
          <a
        
            className="btn btn-dark btn-lg bgstyleButton"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/fathin"
            role="button"
            aria-label="Buy Me Coffee"
          >
            Buy Me Coffee <span role="img"  aria-label="Emoji">☕😁 </span>
          </a>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
