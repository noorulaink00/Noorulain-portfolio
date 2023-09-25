import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import {
  faLinkedin,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@mui/material/IconButton';
function ProjectCard({ image, name, websiteLink, githubLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "400px",
        height: "300px",
        position: "relative",
        margin: "20px",
        boxShadow:"rgba(0, 0, 0, 0.2) 10px 14px 30px"
      }}

      
    >
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
        style={{ objectFit: "fill"}}
      />
      {hovered ? (
        <CardContent
          style={{
            height:'30px',
            position: "absolute",
            display:'flex',
            justifyContent:'space-around',
            bottom: "0",
            left: "0",
            right: "0",
            background: "rgba(255, 255, 255, 1)",
    
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <IconButton
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            style={{ color: "#420d50", border: "1px solid transparent", }}
          >
            <FontAwesomeIcon icon={faGlobe} size="md" />
          </IconButton>
          <IconButton
            href={ githubLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            style={{ color: "#420d50", border: "1px solid transparent" }}
          >
            <FontAwesomeIcon icon={faGithub} size="md" />
          </IconButton>
        </CardContent>
      ) : null}
    </Card>
  );
}

export default ProjectCard;
