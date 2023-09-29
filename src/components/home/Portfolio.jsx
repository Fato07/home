import React from "react"
import configuration from "../../editable-stuff/configurations.json"
import Fscrets from "../../Images/Fsecrets.png"
import WhatsApp from "../../Images/WhatsApp.png"
import PortfolioCard from "../PortfolioCard"
import { Card } from "semantic-ui-react"
import Monese from "../../Images/Monese.png"
import "../../styles/portfolio.css"

const Portfolio = () => {
  const projects = [
    {
      imageSrc: Monese,
      href: "https://monese.com/",
      header: "Monese",
      about:
        "A fintech app that serves millions of customers worldwide and is available in 31 countries across the European Economic Area. I worked on the marketing Website",
      languages: [
        "Javascript: 20%",
        "Typescript: 20%",
        "SASS/CSS: 5%",
        "Next js: 20%",
        "React js: 35%",
      ],
    },
    {
      imageSrc: Fscrets,
      href: "https://fundamentalsecrets.web.app/",
      header: "Fundamental Secrets",
      about:
        "A Cryptocurrency learning platform. Inbuilt PayPal and Stripe CheckOut pages, notification System, comment section, customer portal and more...",
      challenges:
        "Due to the rapid changing environment of the course content, managing and editing code on a regular basis was quite challenging. The notification system was also quite challenging but fun to implement.",
      languages: ["JavaScript: 95.8%", "SCSS: 2.9%", "HTML: 1.3%"],
    },
    {
      imageSrc: WhatsApp,
      href: "https://whatsapp-clone-bd456.web.app/",
      header: "WhatsApp Chat",
      about:
        "A wannabe version of WhatsApp built for fun. Main tech stack: firebase and react js. A user can sign in with his/her Google account, create a chat room, and chat with other users.",
      challenges:
        "This project was built entirely out of boredom to sharpen my firebase skills. More improvements would be made such as recording and sending voice messages, uploading a story, and sending Gifs.",
      languages: ["CSS: 53.2%", "JavaScript: 42.8%", "HTML: 3.8%"],
    },
  ]

  return (
    <div id="portfolio" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5">{configuration.portfolioHeading}</h1>
        <Card.Group className="card-group">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </Card.Group>
      </div>
    </div>
  )
}

export default Portfolio
