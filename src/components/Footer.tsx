import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  return(
    <div className={styles.footer}>
      <Container className={styles.footerContent}>
        <span className={styles.footerContentCopyright}>
          &copy; RGS Roofing Services 2023
        </span>
        <ul className={styles.footerContentLinks}>
          <li className={styles.footerContentLinksLink}>
            <Typography component={'a'} href='https://www.facebook.com/rgsroofingservices'>Facebook</Typography>
          </li>
          <li id='footerTel' className={styles.footerContentLinksLink}>
            <Typography variant="body1" component={'a'} href='tel:01708 702 216'>01708 702 216</Typography>
          </li>
          <li className={styles.footerContentLinksLink}>
            <Typography component={'a'} href='mailto:rgsroofingservices@gmail.com'>rgsroofingservices@gmail.com</Typography>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;
