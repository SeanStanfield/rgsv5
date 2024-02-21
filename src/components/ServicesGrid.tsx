// Import Next.js and MUI components
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import styles from './ServicesGrid.module.scss'; // Assume we've created an SCSS module

export type Tservice = {title: string, overview: string, slug: string, introduction: string, image: string}

const ServicesGrid = ({ services }: {services: Tservice[]}) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container spacing={3} sx={{ pt: 8, pb: 8, px: { xs: 3, md: 4 } }}>
          {services?.map((service, index) => (
            <Grid item md={4} xs={12} sm={6} key={index}>
              <Link href={`/services/${service?.slug}`} passHref>
                <Card sx={{ cursor: 'pointer' }} className={styles.card}>
                  <CardMedia
                    component='img'
                    className={styles.image}
                    image={service?.image}
                    alt={service?.title}
                  />
                  <CardContent className={styles.content}>
                    <Typography variant='h4' className={styles.title}>{service?.title}</Typography>
                    <Typography variant='body1' className={styles.overview}>{service?.overview}</Typography>
                    <Typography variant='body1' className={styles.introduction}>{service?.introduction}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ServicesGrid;