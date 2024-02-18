'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import styles from './slider.module.scss'; // Assuming you have a Slider.module.css

const Slider = ({children}) => {
  return (
    <Box className={styles.sliderWrapper}>
      <Carousel autoPlay infiniteLoop interval={8000} showStatus={false}
        emulateTouch preventMovementUntilSwipeScrollTolerance swipeScrollTolerance={50}>
        
        {/* Slider Item 1 */}
        <div>test</div>
        <Box className={styles.slider}>
          <Container>
            <Grid container spacing={4} className={styles.sliderGrid}>
              {/* Text Content for Slider Item */}
              <Grid item md={6} className={styles.sliderText}>
                <Stack justifyContent='center' className={styles.sliderTextContent}>
                  <Stack direction='row' alignItems='flex-start'>
                    {/* <img src='/assets/svg/costEffectiveYellow.svg' alt='Cost Effective'
                      className={styles.titleIcon} /> */}
                    <Typography variant='h3' className={styles.title}>Cost Effective</Typography>
                  </Stack>
                  {/* Additional text and list */}
                </Stack>
              </Grid>
              {/* Image for Slider Item */}
              <Grid item md={6} className={styles.sliderImage}>
                {/* <img src='/assets/img/DroneFlatRoof.jpeg' alt='RGS E.P.D.M roofing'/> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
        

        {/* Repeat for other slider items */}
        
      </Carousel>
    </Box>
  );
};

export default Slider;
