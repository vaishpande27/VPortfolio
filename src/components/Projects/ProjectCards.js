import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiChevronDown, BiChevronUp } from "react-icons/bi";

function ProjectCards(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  // Truncate description to first 100 characters
  const truncateDescription = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="project-card-view">
      <div className="card-img-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body className="card-body-custom">
        <Card.Title className="card-title-custom">{props.title}</Card.Title>
        <Card.Text className="purple technology-text">
          <strong>Technology:</strong> {props.technologyUsed}
        </Card.Text>
        <Card.Text className="card-description">
          {showFullDescription 
            ? props.description 
            : truncateDescription(props.description)
          }
        </Card.Text>
        
        {props.description.length > 100 && (
          <Button 
            variant="link" 
            className="view-more-btn"
            onClick={toggleDescription}
          >
            {showFullDescription ? (
              <>
                <BiChevronUp /> View Less
              </>
            ) : (
              <>
                <BiChevronDown /> View More
              </>
            )}
          </Button>
        )}
        
        <div className="card-footer-custom">
          <Button 
            variant="primary" 
            href={props.link} 
            target="_blank"
            className="download-button"
          >
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;