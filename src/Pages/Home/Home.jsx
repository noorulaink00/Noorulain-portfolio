import React, { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import "./Home.css";
import TechSkillsCard from "../../Components/Services/TechSkillsCard";
import Navbar from "../../Components/Header/Navbar";
import LanguageCardsPage from "../../Components/Services/LanguageCardsPage";
import Projects from "../../Components/Projects/Projects";
import ProjectsPage from "../../Components/Projects/ProjectsPage";
import { TechKnow } from "../../Components/TechIKnow/TechKnow";
import ContactForm from "../../Components/Contact Form/ContactForm";
import Footer from "../../Components/Footer/Footer";
import Blog from "../../Components/Blog/Blog";
import main from "../../assets/mainl.png"
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {projectdata, opensource} from "../../data/data"
const Home = () => {
  const logo = "<NoorulAin/>";
  const texts = ["Developer",'Open Source Contributor',"Writer" ];
  const [textIndex, setTextIndex] = useState(0);
  const socialIcons = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/noor-ul-ain-670096190/' },
    { icon: faGithub, link: 'https://github.com/noorulaink00' },
    { icon: faMediumM, link: 'https://medium.com/@noorulaink00' },
    { icon: faEnvelope, link: 'mailto:noorulaink00@gmail.com' },
  ];
  useEffect(() => {
    const interval = 3700; // 4 seconds
    let timeout;
  
    const updateText = () => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      timeout = setTimeout(updateText, interval);
    };

    timeout = setTimeout(updateText, interval);

    return () => clearTimeout(timeout);
  }, []);

  const currentText = texts[textIndex];

  const handleDownloadClick = () => {
    const pdfFileUrl = 'public/Noorulain.pdf';

    const link = document.createElement('a');
    link.href = pdfFileUrl;
    link.download = 'Noorulain-Resume.pdf'; 
    link.style.display = 'none';
  

    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  };
  

  return (
    <>
      <Navbar />
      <div className="main" id="home">
        <div className="container">
          <span className="texts">Hi Devs!</span>
          <h1>I am Noor Ul Ain</h1>
          <div className="slider">
            <span className="text">
              I'm a <span className="text second-text">{currentText}</span>{" "}
            </span>
          </div>
          <div className="btn">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#420d50",
                padding: " 10px 40px",
                marginRight: "20px",
              }}
              href="#projects"
            >
              See my Work
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#420d50", padding: " 10px 40px" }}
              onClick={handleDownloadClick}
            >
              Download Resume
            </Button>
          </div>

         
              <Grid item>
                {socialIcons.map((socialIcon, index) => (
                  <IconButton
                    key={index}
                    variant="contain"
                    style={{ padding: '5px 10px',color: "#420d50" }}
                    sx={{
                      my: 1,
                    }}
                    href={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='socialicon'
                  >
                    <div>
                      <FontAwesomeIcon icon={socialIcon.icon} size="lg" />
                    </div>
                  </IconButton>
                ))}
              </Grid>
         
        </div>

        <div className="img">
          <img src={main} alt="" />
        </div>
      </div>

      <TechKnow/>
   

     

      <ProjectsPage projects={projectdata} heading="Projects"/>
      <ProjectsPage projects={opensource} heading="OpenSource Contribution"/>
      {/*  
            <LanguageCardsPage />
      
      <div className="service-heading">
        <h2 className="text">Projects</h2>
        <div className="line"></div>
      </div>
      <Projects />*/}

<div className="service-heading" id="blog">
        <h2 className="text">Blog</h2>
        <div className="line"></div>
      </div>
<Blog
  title="Crafting Engaging User Experiences: The Power of Responsive Web Design in 2023"
  description="You open any website, and it lacks the visual appeal or doesn’t properly adjust its elements on your phone, it’s highly likely that you won’t have a positive impression. The design shortcomings can lead to a frustrating user experience, affecting your overall perception of the site. In contrast, a responsive website that seamlessly adapts to different devices and provides an intuitive interface is more likely to leave a favorable impression and receive a better review."
  imageUrl="https://miro.medium.com/v2/resize:fit:828/0*xUvk_CMIN6jZcXix"
  mediumLink="https://medium.com/@noorulaink00/crafting-engaging-user-experiences-the-power-of-responsive-web-design-in-2023-63e1309ef91b"
/>
<Blog
  title="The Art of Code Refactoring: Strategies for Clean and Maintainable Code"
  description="In the world of software development, code refactoring is an essential practice that often takes a backseat to the excitement of building new features or solving complex problems. However, its significance cannot be overstated, as it plays a crucial role in maintaining a healthy and sustainable codebase over time."
  imageUrl="https://miro.medium.com/v2/resize:fit:828/0*DMoeZ0PN1b9_PiUv"
  mediumLink="https://medium.com/@noorulaink00/the-art-of-code-refactoring-strategies-for-clean-and-maintainable-code-9eac8afa58b6/"
/>
<div className="service-heading">
<Button
              variant="contained"
              color='secondary'
              size="small"
              style={{backgroundColor:"rgb(8, 89, 122)", padding:"10px 30px"}}
      
              //style={{backgroundColor:"#420d50", padding:"10px 30px"}}
       
            >
             Visit Medium Profile
            </Button>
</div>

      <ContactForm/>
      <Footer/>
    </>
  );
};

export default Home;
