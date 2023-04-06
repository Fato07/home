/* eslint-disable no-script-url */
import React from "react"
import configuration from "../../editable-stuff/configurations.json"
import { Card, Image, List } from "semantic-ui-react"
import Fscrets from "../../Images/Fsecrets.png"
import WhatsApp from "../../Images/WhatsApp.png"

const Portfolio = () => {
  const array = ["JavaScript: 95.8%", "SCSS: 2.9%", "HTML: 1.3%"]
  const array2 = ["CSS: 53.2%", "JavaScript: 42.8", "%HTML: 3.8 %"]

  return (
    <div id="portfolio" className="jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5">{configuration.portfolioHeading}</h1>
        <Card.Group>
          <Card fluid={true}>
            <Image
              src={Fscrets}
              as="a"
              size="large"
              href="https://fundamentalsecrets.web.app/"
              target="_blank"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Fundamental Secrets</Card.Header>
              <Card.Description>
                <List>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>About</List.Header>
                      <List.Description>
                        A Cryptocurrency learning platform. Inbuilt PayPal and
                        Stripe CheckOut pages, notification System, comment
                        section, customer portal and more...
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>Challenges</List.Header>
                      <List.Description>
                        Due to the rapid changing enviroment of the course
                        content, managing and editing code on a regualr basis
                        was quite challenging. The notification system was also
                        quite challenging but fun to implement.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="pb-3">
                Languages:{" "}
                {array.map((language) => (
                  <p key={language} className="badge badge-light card-link">
                    {language}:{" "}
                  </p>
                ))}
              </div>
            </Card.Content>
          </Card>
          <Card fluid={true}>
            <Image
              src={WhatsApp}
              as="a"
              size="large"
              href="https://whatsapp-clone-bd456.web.app/"
              target="_blank"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>WhatsApp Chat</Card.Header>
              <Card.Description>
                <List>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>About</List.Header>
                      <List.Description>
                        A wannabe version of whats App built for fun. Main tech
                        stack: firebase and react js. A user can sign in with
                        his/her google account. create a chat room and chat with
                        other users.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>Challenges</List.Header>
                      <List.Description>
                        This project was built entirely out of boredom to
                        sharpen my firebase skills. More imporovements would be
                        made such as recording and sending voice messages,
                        uploading a story and sending Gifs
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="pb-3">
                Languages:{" "}
                {array2.map((language) => (
                  <p key={language} className="badge badge-light card-link">
                    {language}:{" "}
                  </p>
                ))}
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  )
}

export default Portfolio
