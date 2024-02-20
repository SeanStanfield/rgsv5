'use client'
import React, { SyntheticEvent, useState } from 'react';
import { Typography, Accordion, AccordionDetails, AccordionSummary, Grid, Container, Box } from '@mui/material';
import { Add as AddIcon, Remove } from '@mui/icons-material';
import styles from './Faqs.module.scss'; // Import the SCSS module
import Image from 'next/image';
import FAQImage from '../static/roof-drone-high.jpeg'


type Tfaqs = {question: string, answer: string}[];

const Faqs = ({faqs, title}: {title?: string, faqs: Tfaqs}) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel: any) => (event: SyntheticEvent, isExpanded:  boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const hardcodedFaqs = [
    {
      question: "Is the installation of the membrane weather dependent?",
      answer: "Yes. Although it can be fitted in the rain, the minimum temperature for the application of the adhesive is +5°C and maximum humidity is 80%. If the temperature is likely to drop below freezing during the 48 hours after application, you should use Bonding Adhesive."
    },
    {
      question: "When should Lead be replaced?",
      answer: "Lead should be replaced when it shows signs of significant wear or damage, such as cracks or tears. Regular inspections can help determine if replacement is necessary."
    },
    {
      question: "How often should my Roof be inspected?",
      answer: "It's recommended to have your roof inspected at least once a year, or after any major weather events that could cause damage."
    }
  ];

  return (
    <Box className={styles.wrapper}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={8} sx={{ display: 'grid', placeItems: 'center' }}>
            <Box sx={{ maxWidth: 700, minWidth: {xs: 280, sm: 400}, position: 'relative', px: {xs: 2, sm:12}, ml: 1, mb: 6 }}>
              <Typography variant='h2' sx={{ color: 'common.white', margin: theme => theme.spacing(4, 0) }}>
                {title ? title : 'Frequently asked questions'}
              </Typography>

              {hardcodedFaqs?.map(({ question, answer }, i) => (
                <Accordion expanded={expanded === `question-${i}`} key={i} onChange={handleChange(`question-${i}`)}>
                  <AccordionSummary expandIcon={expanded === `question-${i}` ? <Remove /> : <AddIcon />} aria-controls={`question-${i}-content`} id={`question-${i}-header`}>
                    <Typography><b>{question}</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
          <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Image src={FAQImage} alt='' style={{objectFit: 'cover'}} className={styles.faqImageSrc} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faqs;
