import React from "react";
import Tilt from 'react-parallax-tilt'; 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects ,otherLinks} from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { FaDownload } from "react-icons/fa"; // Import the download icon from react-icons library
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}  whileHover={{ cursor: 'pointer' }}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border-white border-2'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = "/Curriculum Vitae_Chan Cheuk Him.pdf";
    link.download = "Curriculum Vitae_Chan Cheuk Him.pdf";
    link.click();
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Some Works I’ve Built</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects demonstrate my expertise with practical examples of some of my work. Each project is briefly described with
          links to code repositories and live demos in it.  They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          // <></>
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <br></br>
      <br></br>
      <div className='mt-5 flex justify-center'>
      <Stack direction="row" spacing={2}>
        
      <Button variant="outlined" onClick={()=>window.open( otherLinks.find(link => link.name === "myGitHubRepo").link, "_blank")}>
        See All
      </Button>
      <Button variant="outlined" color = "success" onClick={handleDownloadCV}>
        <FaDownload className='mr-2' /> Download my Resume.PDF
        </Button>
     
    </Stack>

      
      </div>
    </>
  )
}

  

export default SectionWrapper(Works, "projects");