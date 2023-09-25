import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // If using FontAwesome for icons
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';

function TechSkillsCard({ image, heading, techSkills }) {
  return (
    <Card 
   
    style={{
      margin: '1rem',
      width: '350px',
      height: '300px', // Auto height to fit content
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      boxShadow: '10px 14px 30px rgba(0, 0, 0, 0.2)',
      transition: 'border 0.3s, box-shadow 0.3s',
      overflow: 'hidden'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid #08597a';
        e.currentTarget.style.boxShadow ='100px 0px 300px rgba(8,89,122, 0.5)';
    
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.boxShadow ='10px 14px 30px rgba(0, 0, 0, 0.2)';
   
    
    }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Tech Skills"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          marginTop:'20px',
          border: '1px solid black'

        }}
      />
      <CardContent style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
        <Grid container spacing={1} style={{marginTop:'10px',display:'flex', alignItems:'center', justifyContent:'center'}}>
          {techSkills.map((tech, index) => (
            <Grid item key={index}>
              <Chip
                //icon={<FontAwesomeIcon icon={ tech.icon}  style={{color:"#08597a", fontSize:'1.2rem', marginLeft:'10px'}}/>} // Replace with your FontAwesome icon
                label={tech.name}
                variant="outlined"
                style={{ fontSize:'1rem', border:'1px solid grey' }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TechSkillsCard;
