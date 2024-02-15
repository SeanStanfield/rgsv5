import React from "react";
import {Button, Container, Stack, Typography, Box} from "@mui/material";
import styles from "./CtaBox.module.scss"

const CtaBox = () => {
	return (
		<Box className={styles.bg}>
			<Container className={styles.wrapper}>
				<Typography variant='h2' component='h3' className={styles.ctaTitle}>Get your free quote</Typography>
				<Typography variant='body1' className={styles.ctaBody}>Got a roofing problem that needs fixing?
					Get in touch for your free quote today. Send us a message or give us a call on 07920 865826.
					We offer our services to residential, commercial and industrial clients.</Typography>

				<Stack direction='row' spacing={4} className={styles.ctaButtons}>
					<Button variant='contained' className={styles.ctaButton} component='a' href='tel:07920865826'>Call now</Button>
					<Button variant='outlined' className={styles.ctaButton} component='a' href='contact-us'>Get in Touch</Button>
				</Stack>

			</Container>
		</Box>
	)
}

export default CtaBox;