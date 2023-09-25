import React , {useState} from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function Blog({ title, description, imageUrl, mediumLink }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredButton, setIsHoveredButton] = useState(false);

  const cardStyle = {
    display: "flex",
    width: "80%",
    height:'200px',
    margin:'30px 0px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow:'none',
   
 

  
  };

  const mediaStyle = {
    width: "250px", // Adjust the width of the image as needed
    height:'200px',
    marginRight: "16px",
    borderRadius:'10px',
    borderRadius:'50px'
  };

  const contentStyle = {
    flex: 1,
    textAlign:'justify',
    lineHeight:'10px'
  };

  const titled={
    color: isHovered ? "black" : "#420d50",
    cursor:'pointer',
    marginBottom:'10px',
fontSize:'1.3rem'

  }

  const button = {
    marginTop: '16px', width:'30%', 
    background: isHoveredButton ? "black" : "#420d50",
  }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center',}} >

 
    <Card style={cardStyle}  className="cardmedia">
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
        style={mediaStyle}
        className="cardmediam"
      />
      <CardContent style={contentStyle}>
        <Typography variant="h6" component="div" style={titled}  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{color:'black'}}>
          {description}
        </Typography>
        <a href={mediumLink} target="_blank" rel="noopener noreferrer">
        <Button
              variant="contained"
              color='secondary'
              size="small"
              style={button}
              onMouseEnter={() => setIsHoveredButton(true)}
      onMouseLeave={() => setIsHoveredButton(false)}
            >
              Read More
            </Button>
            </a>
  
      </CardContent>
     

    </Card>
    </div>
  );
}

export default Blog;
