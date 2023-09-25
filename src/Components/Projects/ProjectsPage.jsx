import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from '@mui/material/Button';


function ProjectsPage({projects, heading}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="projects">
         <div className="service-heading">
  <h2 className='text'>{heading}</h2>
  <div className="line"></div>
</div>
      <div className='service-heading'>
        <Button variant="contained" style={{background:"#08597a", margin:'0px 10px'}} onClick={() => handleCategoryChange('All')}>All</Button>
        <Button variant="contained" style={{background:"#32043d", margin:'0px 10px'}} onClick={() => handleCategoryChange('Frontend')}>Frontend</Button>
        <Button variant="contained" style={{background:"#32043d", margin:'0px 10px'}}onClick={() => handleCategoryChange('Backend')}>Backend</Button>
        <Button variant="contained" style={{background:"#32043d", margin:'0px 10px'}} onClick={() => handleCategoryChange('FullStack')}>Ecommerce</Button>
      </div>
      <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
            marginBottom:'100px'
          }}
        >
        {projects.map((project, index) => (
          selectedCategory === 'All' || project.type === selectedCategory ? (
            <ProjectCard key={index} {...project} />
          ) : null
        ))}
      </div>
      </div>

  );
}

export default ProjectsPage;
