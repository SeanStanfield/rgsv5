import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss"; // Import the SCSS module
import CtaBox from "@/components/CtaBox";
import {
    Button,
    Card,
    Grid,
    IconButton,
    Modal,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
// import { Helmet } from "react-helmet";
import Link from "next/link"; // Use Next.js Link
import { useRouter } from "next/router"; // Use Next.js useRouter
import { Close } from "@mui/icons-material";
import ContactForm from "@/components/ContactForm";

const Contact = () => {

    return (
        <>
            {/* <Helmet> */}
            {/* Helmet content remains the same */}
            {/* </Helmet> */}
            <Modal open={false}>
                <Paper
                    sx={{
                        maxWidth: "650px",
                        m: "auto",
                        mt: "30vh",
                        p: 3,
                        position: "relative",
                    }}
                >
                    <IconButton
                        sx={{ position: "absolute", right: 0, top: 0, m: 1 }}
                    >
                        <Close />
                    </IconButton>
                    <Typography sx={{ pb: 1 }} variant="h2" className="">
                        Thank you
                    </Typography>
                    <Typography variant="body1" className="">
                        Thank you for your enquiry, we will be in touch as soon
                        as we can.
                    </Typography>
                    <Button
                        sx={{ mt: 4 }}
                        variant="contained"
                        component="a"
                        href="/"
                    >
                        Back to Home
                    </Button>
                </Paper>
            </Modal>
            <Grid container className={styles.hero}>
                <Grid item className={styles.heroText} xs={12} md={6}>
                    <Stack className={styles.heroTextStack}>
                        <Typography
                            variant="h1"
                            className={styles.heroTextTitle}
                        >
                            Get in Touch
                        </Typography>
                        <Typography
                            variant="body1"
                            className={styles.heroTextBody}
                        >
                            If you&apos;re experiencing any roofing issues or have
                            any questions regarding our services, please don&apos;t
                            hesitate to fill out the form below and send us a
                            message. Our team of experts is always ready to
                            assist you and provide the best possible solutions
                            to your roofing problems.
                        </Typography>
                        <Typography
                            variant="h4"
                            component={'a'}
                            href="tel: 01708 702 216"
                            className={styles.heroTextCall}
                        >
                            Call us: 01708 702 216
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} lg={5} sx={{ ml: {xl : -8, sm : 0 }}}>
                    <Card className={styles.card}>
                        <Typography variant="h3" className={styles.cardTitle}>
                            How can we help You?
                        </Typography>
                        <ContactForm/>
                    </Card>
                </Grid>
            </Grid>

            <Grid
                container
                className={styles.container}
                direction={{md : "column-reverse", sm : "row"}}
            >
                <Grid item className={styles.containerText} xs={12} md={6}>
                    <Stack className={styles.containerTextStack} spacing={2}>
                        <Typography
                            variant="h2"
                            className={styles.containerTextStackTitle}
                        >
                            Find us
                        </Typography>
                        <Typography
                            variant="body1"
                            className={styles.containerTextStackIntro}
                        >
                            We have very flexible working hours, give us a call
                            7:00 - 5:00 Mon-Sun to arrange your free
                            consultation.
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={styles.containerTextStackSubtitle}
                        >
                            Our Address
                        </Typography>
                        <Typography
                            variant="body1"
                            className={styles.containerTextStackIntro}
                        >
                            93 Billet Ln, Hornchurch RM11 1XJ
                        </Typography>
                        <Button
                            component="a"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            href="https://www.google.com/maps/place/RGS+Roofing+Services/@51.5724546,0.1917669,13.7z/data=!4m20!1m13!4m12!1m4!2m2!1d-0.1071371!2d51.5036229!4e1!1m6!1m2!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!2srgs+roofing!2m2!1d0.2184819!2d51.5663466!3m5!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!8m2!3d51.5663466!4d0.2184819!16s%2Fg%2F1td2t4nw"
                            variant="contained"
                            className={styles.containerTextStackButton}
                        >
                            Open in Google Maps
                        </Button>
                    </Stack>
                </Grid>

                <Grid item className={styles.containerImage} xs={12} md={6}>
                    <img
                        src="/assets/img/roof-drone-high.jpeg"
                        className={styles.containerImageSrc}
                        alt="drone shot of roof"
                    />
                </Grid>
            </Grid>
            <CtaBox/>
        </>
    );
};

export default Contact;
