import React from 'react';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import styles from './SocialProof.module.scss'; // Import the SCSS module

const SocialProof = ({ images }: {images?: string[]}) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <Stack alignItems='flex-start' justifyContent='center' sx={{ height: '100%' }}>
              <Typography variant='h2'>Quality Brands you can trust</Typography>
              <Typography variant='body1' className={styles.body}>
                We pride ourselves on the quality and of our craftmanship and professionalism, but don’t take it from us, with a 4.8 star average rating and 16 5 star reviews, our results speak for themselves.
              </Typography>
              <Button variant='contained' component='a' href='tel:07920865826'>Call now</Button>
            </Stack>
          </Grid>

          <Grid item md={6} xs={12}>
            <Stack className={styles.socialProofImages}>
              {/* {images?.data?.map((image, index) => (
                <img src={image?.attributes?.url} alt={image?.attributes?.name} key={index} />
              ))} */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SocialProof;
