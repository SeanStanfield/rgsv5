import Image from "next/image";
import WhiteTriangle from "@/static/whiteTriangle.svg"
import styles from "./page.module.scss";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import Slider from "@/components/Slider";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
    <Box className={styles.heroBackground}>
      <Container>
        <Grid container alignItems='center' className={styles.heroWrapper}>
          <Grid item md={8} className={styles.heroText}>
            <Box className={styles.heroContent}>
              <Typography className={styles.pageTitle} sx={{pb: 3}} variant='h1'>
                27 years of roofing experience
              </Typography>
              <Typography className={styles.pageDescription} variant='body1'>
                Subtitle
              </Typography>

              <Stack direction='row' spacing={4} sx={{paddingTop: 3}}>
                <Button className={styles.primaryButton} variant='contained' color='primary'
                        component='a' href='contact-us'>Get in touch</Button>
                <Button className={styles.secondaryButton} variant='outlined' color='secondary'
                        component='a' href='tel:07920865826'>Call now</Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Image src={WhiteTriangle} className={styles.whiteTriangle} alt='white triangle'/>
    </Box>

    <Stack className={styles.whatWeDo} justifyContent='center' alignItems='center'>
      <Typography variant='h2' className={styles.whatWeDoTitle}>What We Do</Typography>
      <Typography variant='body1' className={styles.whatWeDoDescription}>
        Every year, thousands of homeowners with flat roofs complain of cracks and leakage. Most felt or asphalt flat roofs usually have a very short life span due to Britain&apos;s unpredictable and harsh weather. Our E.P.D.M roofs, we offer a permanent solution to your roofing needs.
      </Typography>
      <Box sx={{mb: 12}}></Box>
    </Stack>

    <Slider items={[{body: 'body', title: 'Cost Effffective', icon: "", image: ''}, {body: 'body2', title: 'Fully trained', icon: "", image: ''}]}/>
  
    <Reviews/>
  </main>

  );
}
