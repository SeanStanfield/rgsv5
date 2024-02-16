import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./StatsBox.module.scss"; // Import the CSS module

const StatsBox = () => {
  return (
    <div className={styles.statsBox}>
      <Grid container>
        <Grid item className={styles.statsItem} md={4} xs={12}>
          <Typography variant='body1' className={styles.upperText}>We Guarantee</Typography>
          <Typography variant='h1' component='p' className={styles.bigNumber}>20</Typography>
          <Typography variant='body1' className={styles.lowerText}>Years on all our services</Typography>
        </Grid>
        <Grid item className={styles.statsItem} md={4} xs={12}>
          <Typography variant='body1' className={styles.upperText}>Check out our</Typography>
          <Typography variant='h1' component='p' className={styles.bigNumber}>4.8</Typography>
          <Typography variant='body1' className={styles.lowerText}>Star rating</Typography>
        </Grid>
        <Grid item className={styles.statsItem} md={4} xs={12}>
          <Typography variant='body1' className={styles.upperText}>We are available</Typography>
          <Typography variant='h1' component='p' className={styles.bigNumber}>24/7</Typography>
          <Typography variant='body1' className={styles.lowerText}>Give us a call anytime</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default StatsBox;
