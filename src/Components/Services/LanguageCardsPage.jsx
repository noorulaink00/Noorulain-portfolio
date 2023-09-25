import React from 'react';
import ServiceCard from './ServiceCard';

function LanguageCardsPage() {
  // Define data for each card
  const cardData = [
    {
      image: 'images/web.webp',
      heading: 'Frontend Development',
      description: 'Description for Card 1',
      languages: ['HTML', 'CSS','JavaScript', 'ReactJS', 'Tailwind CSS','Material UI','Bootstrap', 'Firebase', 'Vite', 'Figma', 'Canva'],
    },
    
    {
        image: 'images/app.webp',
        heading: 'Application Development',
        description: 'Description for Card 2.',
        languages: ['Java', 'SpringBoot','JavaScript', 'React', 'Node.js', 'Material UI'],
      },
      {
        image: 'images/contentw.webp',
        heading: 'Content Writing',
        description: 'Description for Card 2.',
        languages: ['SEO', 'Blog Writing'],
      },
     
      
    // Add more card data as needed
  ];

  return (
    <>
     <div className="service-heading">
        <h2 className="text">Services</h2>
        <div className="line"></div>
      </div>
   
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        marginBottom:'100px'
      }}
    >
      {cardData.map((data, index) => (
        <ServiceCard
          key={index}
          image={data.image}
          heading={data.heading}
          showLanguages={true}  // Show languages for language cards
          languages={data.languages}
          showButtons={false}
         
         
         /* description={data.description}*/
          
        />
      ))}
    </div>
    </>
  );
}

export default LanguageCardsPage;
