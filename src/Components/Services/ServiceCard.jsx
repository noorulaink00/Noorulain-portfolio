import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMediumM} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
function ServiceCard ({ image, heading, description,showButtons, buttons, showLanguages, languages}) {
    return (
        
        <Card style={{ 
            margin: '1rem',
            width: '300px',
            height: '450px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            boxShadow: '10px 14px 30px rgba(0, 0, 0, 0.2)',
            transition: 'border 0.3s, box-shadow 0.3s',
            overflow: 'hidden'
          }}
          // Hover effect styles
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '1px solid #08597a';
        
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = 'none';
       
          }}>
        <CardMedia
          component="img"
          image={image}
          alt="Language Image"
          style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: '150px' }}
        />
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', textAlign: 'center', overflow: 'hidden', }}>
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {showButtons && (
          <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'row', gap: '0px' }}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant="outlined"
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{  color: '#08597a', border:'1px solid transparent'}}
              >
                <div>
                  <FontAwesomeIcon icon={button.label} size="2xl" />
                  </div>
              </Button>
            ))}
          </div>
        )}
        {showLanguages && (
          <div style={{ marginTop: '18px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            {languages.map((language, index) => (
              <Chip
                key={index}
                label={language}
                variant="outlined"
                style={{
                  margin: '4px',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  color: ' #08597a',
                }}
              />
            ))}
          </div>
        )}
      </CardContent>
      </Card>
      );
    }
    

  export default ServiceCard;