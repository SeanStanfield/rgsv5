// pages/YourComponentPage.js or components/YourComponent.js
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './ListPageHero.module.scss'; // Adjust the path to your SCSS module file
import Image from 'next/image';

const ListPageHero = ({ title, description, image }: {title: string, description: string, image: string}) => {
  return (
    <Box className={styles.background} sx={{background: `linear-gradient(to top right, #26354A 25%, #155AA6) 40%`}}>
      <Grid container justifyContent="center" alignItems="center" className={styles.heroWrapper}>
        <Grid item md={5} className={styles.heroText}>
          <Box className={styles.heroContent}>
            <Typography className={styles.pageTitle} variant="h1">
                {title}
            </Typography>
            <Typography className={styles.pageDescription} variant="body1">
              {description}
            </Typography>
          </Box>
        </Grid>

        <Grid item md={7} className={styles.heroImage}>
          {/* Next.js Image component for optimized images */}
          {image == 'null' ? <img className={styles.van} src="https://res.cloudinary.com/ddnkaqqhe/image/upload/v1681678191/van_full_e1b837836f.png" alt="old van" /> : <Image src={image} alt="van of RGS roofing" layout="fill" objectFit="cover" />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListPageHero;
