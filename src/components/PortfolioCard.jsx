import React from "react"
import { Card, Image, List } from "semantic-ui-react"

const PortfolioCard = ({
  imageSrc,
  href,
  header,
  about,
  challenges,
  languages,
}) => (
  <Card>
    <Image
      src={imageSrc}
      as="a"
      size="large"
      href={href}
      target="_blank"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>{header}</Card.Header>
      <Card.Description>
        <List>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header>About</List.Header>
              <List.Description>{about}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header>Challenges</List.Header>
              <List.Description>{challenges}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="pb-3">
        Languages:{" "}
        {languages.map((language) => (
          <p key={language} className="badge badge-light card-link">
            {language}
          </p>
        ))}
      </div>
    </Card.Content>
  </Card>
)

export default PortfolioCard
