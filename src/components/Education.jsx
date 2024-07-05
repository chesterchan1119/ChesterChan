import React from 'react'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "../moreStyles/Education.css"
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { HKBU, UAM } from "../assets"

const Education = () => {
  return (
    <>
    <p className={`${styles.sectionSubText} `}>Where I studied</p>
    <h2 className={`${styles.sectionHeadText}`}>Educations</h2>

    <div className="educationCards"> 
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 630,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="0.8" sx={{ width: 90, bgcolor: 'transparent'}}>
        <img
          src={HKBU}
          srcSet={HKBU}
          loading="lazy"
          alt=""
          style={{"backgroundColor": "transparent", "width" : "100%"}}
        />
      </AspectRatio>
      <CardContent sx={{ pointerEvents: 'none' }}>
        <Typography level="title-lg" id="card-description">
          Bachelor of Science in Computer Science
        </Typography>
        <Typography level="title-md" id="card-description" sx={{ fontWeight: 'normal' }} >
        Hong Kong Baptist University
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            2020/09 - 2024/05
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
        President’s Honor Roll (20/21 Semester 1, 23/24 Semester 2),
        
        </Chip>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
        Dean’s List (21/22 Semester 2, 23/24 Semester 1)
        </Chip>
      </CardContent>
    </Card>
    <br></br>
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 630,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1.08" sx={{ width: 90 }}>
        <img
          src={UAM}
          srcSet={UAM}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent sx={{ pointerEvents: 'none' }}>
        <Typography level="title-lg" id="card-description">
        Computer Engineering (Student Exchange Program)
        </Typography>
        <Typography level="title-md" id="card-description" sx={{ fontWeight: 'normal' }} >
        Autonomous University of Madrid
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            2022/09 - 2023/01
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
         High Perfomance Computing Course 
        
        </Chip>
       
      </CardContent>
    </Card>

    </div>


    </>
  )
}
// 2nd param is the navId 
export default SectionWrapper(Education,"educations")