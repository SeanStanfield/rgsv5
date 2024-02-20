'use client'
import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { ElfsightWidget } from "react-elfsight-widget";

const Reviews = () => {
    return (
        <Container className="reviews">
            <Stack justifyContent={'center'} alignItems={'center'} sx={{textAlign: 'center', pt: 8}}>
            <Typography variant="h2">What people say about us</Typography>
            <Typography variant="body1">We have outstanding Google reviews</Typography>
            <div className="reviews-wrapper">
                <ElfsightWidget widgetId="6bf45176-27b6-4c31-b433-22862deef9d8" />
            </div>
            </Stack>
        </Container>
    );
};
export default Reviews;