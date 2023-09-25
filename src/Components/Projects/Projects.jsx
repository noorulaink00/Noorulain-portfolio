import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
import ServiceCard from '../Services/ServiceCard';

import "./Projects.css";
const projectData = [
    {
      image: 'images/app.webp',
      heading: 'Journey Junkies',
      description: 'Description for Project 1',
      languages: ['Java', 'SpringBoot','JavaScript', 'React', 'Node.js', 'Material UI'],
      buttons: [
        { label: faGlobe, link: 'https://example.com/project1' },
        { label: faGithub, link: 'https://github.com/yourusername/project1' },
      ],
    },
    {
        image: 'images/app.webp',
        heading: 'Journey Junkies',
        description: 'Description for Project 1',
        languages: ['Java', 'SpringBoot','JavaScript', 'React', 'Node.js', 'Material UI'],
        buttons: [
          { label: faGlobe, link: 'https://example.com/project1' },
          { label: faGithub, link: 'https://github.com/yourusername/project1' },
        ],
      },
      {
        image: 'images/app.webp',
        heading: 'Journey Junkies',
        description: 'Description for Project 1',
        languages: ['Java', 'SpringBoot','JavaScript', 'React', 'Node.js', 'Material UI'],
        buttons: [
          { label: faGlobe, link: 'https://example.com/project1' },
          { label: faGithub, link: 'https://github.com/yourusername/project1' },
        ],
      },
      {
        image: 'images/app.webp',
        heading: 'Journey Junkies',
        description: 'Description for Project 1',
        languages: ['Java', 'SpringBoot','JavaScript', 'React', 'Node.js', 'Material UI'],
        buttons: [
          { label: faGlobe, link: 'https://example.com/project1' },
          { label: faGithub, link: 'https://github.com/yourusername/project1' },
        ],
      },
    {
      image: 'images/content.webp',
      heading: 'Project 2',
      description: 'Description for Project 2',
      languages: ['Java', 'SpringBoot','JavaScript', 'React', 'Node.js', 'Material UI'],
      buttons: [
        { label: faGlobe, link: 'https://example.com/project2' },
        { label: faGithub, link: 'https://github.com/yourusername/project2' },
      ],
    },
    // Add more project card data as needed
  ];


function Projects() {
    return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
          }}
        >
          {projectData.map((data, index) => (
            <ServiceCard
              key={index}
              image={data.image}
              heading={data.heading}
              //description={data.description}//
            
              showLanguages={true}
              languages={data.languages}
              showButtons={true} // Show buttons for project cards
              buttons={data.buttons}
            />
          ))}
        </div>
      );
    }
export default Projects;
