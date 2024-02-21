// Import Next.js and MUI components
import React from "react";
import Image from "next/image";
import {
    Typography,
    Grid,
    Stack,
    useMediaQuery,
    useTheme,
    Box,
} from "@mui/material";
import styles from "./TestimonialGrid.module.scss"; // Adjust the path to your SCSS module file

type TTesimonial = { title: string; quote: string; image: string };

const TestimonialGrid = ({ testimonials }: { testimonials: TTesimonial[] }) => {
    return (
        <div className={styles.grid}>
            <Grid container>
                {/* Dynamic content rendering based on the array of sections */}
                {/* Assuming each section is an object in an array `sections` */}
                {/* Example section: { title: "Best in class materials", review: "...", image: "/path/to/image.jpg" } */}

                {/* Sections array and rendering logic would go here */}
                {/* This is an example for a single item, repeat as necessary for your sections */}
                {testimonials?.map((testimonial, index) => (
                    <Box key={index} className={styles.testimonial}>
                        {index % 2 == 0 && (
                            <Grid item md={6} xs={12} className={styles.image}>
                                <Image
                                    src="/assets/img/FlatRoofFieldBackdrop.jpg"
                                    alt="roof example work"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </Grid>
                        )}
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{ xs: { display: "none" } }}
                            className={styles.text}
                        >
                            <Stack className={styles.content}>
                                <Typography
                                    variant="h2"
                                    component="h3"
                                    className={styles.gridTitle}
                                >
                                    {testimonial?.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    className={styles.gridReview}
                                >
                                  {testimonial?.quote}
                                </Typography>
                            </Stack>
                        </Grid>

                        {index % 2 != 0 && (
                            <Grid item md={6} xs={12} className={styles.image}>
                                <Image
                                    src="/assets/img/FlatRoofFieldBackdrop.jpg"
                                    alt="roof example work"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </Grid>
                        )}
                    </Box>
                ))}
            </Grid>
        </div>
    );
};

export default TestimonialGrid;
