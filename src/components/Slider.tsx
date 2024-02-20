'use client'
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import styles from './slider.module.scss'; // Assuming you have a Slider.module.css

 type TSliderItem = {title: string, body: string, icon: string, image: string}
const Slider = ({items}: {items: TSliderItem[]}) => {
  return (
    <Box className={styles.sliderWrapper}>
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={8000} showStatus={false}
        emulateTouch preventMovementUntilSwipeScrollTolerance swipeScrollTolerance={50}>
        
        {/* Slider Item 1 */}
        {/* <div>test</div> */}
        {items && items.map((item, index) =>
         <Box className={styles.slider} key={index}>
          <Container>
            <Grid container spacing={4} className={styles.sliderGrid}>
              <Grid item md={6} className={styles.sliderText}>
                <Stack justifyContent='center' className={styles.sliderTextContent}>
                  <Stack direction='row' alignItems='flex-start'>
                    <img src={item.icon} alt='Cost Effective'
                      className={styles.titleIcon} />
                    <Typography variant='h3' className={styles.title}>{item.title}</Typography>
                    <Typography variant='body1' className={styles.body}>{item.body}</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={6} className={styles.sliderImage}>
                <img src={item.image ?? null} alt='RGS E.P.D.M roofing'/>
               </Grid>
            </Grid>
          </Container>
        </Box> 
        )}
        
      </Carousel>
    </Box>
  );
};

export default Slider;
